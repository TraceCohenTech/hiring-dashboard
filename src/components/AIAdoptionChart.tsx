import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { sectorColors, colors } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import SectionHeader from './SectionHeader';
import type { HiringEntry } from '../types';

interface Props {
  data: HiringEntry[];
}

interface SectorAdoption {
  sector: string;
  aiJobs: number;
  nonAiJobs: number;
  totalJobs: number;
  aiPercent: number;
  aiCompanies: number;
  totalCompanies: number;
}

export default function AIAdoptionChart({ data }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const adoptionData: SectorAdoption[] = useMemo(() => {
    const map = new Map<string, { aiJobs: number; nonAiJobs: number; aiCompanies: number; totalCompanies: number }>();
    for (const c of data) {
      const entry = map.get(c.sector) || { aiJobs: 0, nonAiJobs: 0, aiCompanies: 0, totalCompanies: 0 };
      if (c.aiRelated) {
        entry.aiJobs += c.netAdded;
        entry.aiCompanies += 1;
      } else {
        entry.nonAiJobs += c.netAdded;
      }
      entry.totalCompanies += 1;
      map.set(c.sector, entry);
    }
    return Array.from(map.entries())
      .map(([sector, v]) => ({
        sector,
        aiJobs: v.aiJobs,
        nonAiJobs: v.nonAiJobs,
        totalJobs: v.aiJobs + v.nonAiJobs,
        aiPercent: v.aiJobs + v.nonAiJobs > 0 ? Math.round((v.aiJobs / (v.aiJobs + v.nonAiJobs)) * 100) : 0,
        aiCompanies: v.aiCompanies,
        totalCompanies: v.totalCompanies,
      }))
      .sort((a, b) => b.aiPercent - a.aiPercent);
  }, [data]);

  const totalAI = adoptionData.reduce((s, d) => s + d.aiJobs, 0);
  const totalAll = adoptionData.reduce((s, d) => s + d.totalJobs, 0);
  const overallAIPercent = totalAll > 0 ? Math.round((totalAI / totalAll) * 100) : 0;

  return (
    <div ref={ref}>
      <SectionHeader
        title="AI Penetration by Sector"
        subtitle="What share of new hiring is AI-related?"
        icon={<Cpu size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4"
      >
        {/* Overall stat */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
          <div className="text-3xl font-bold" style={{ color: colors.ai }}>{overallAIPercent}%</div>
          <div className="text-sm text-slate-600">
            of all new jobs added ({formatNumber(totalAI)} of {formatNumber(totalAll)}) are AI-related
          </div>
        </div>

        <div className="space-y-3">
          {adoptionData.map((item, i) => (
            <motion.div
              key={item.sector}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.04 * i }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: sectorColors[item.sector] || '#64748b' }}
                  />
                  <span className="text-sm font-medium text-slate-800">{item.sector}</span>
                  <span className="text-xs text-slate-400">
                    {item.aiCompanies}/{item.totalCompanies} companies
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">+{formatNumber(item.totalJobs)} jobs</span>
                  <span className="text-sm font-bold" style={{ color: item.aiPercent >= 80 ? colors.ai : colors.text }}>
                    {item.aiPercent}%
                  </span>
                </div>
              </div>
              {/* Stacked bar */}
              <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.aiPercent}%` } : {}}
                  transition={{ duration: 1.0, delay: 0.06 * i }}
                  className="h-full rounded-l-full"
                  style={{ background: `linear-gradient(90deg, ${colors.ai}99, ${colors.ai})` }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${100 - item.aiPercent}%` } : {}}
                  transition={{ duration: 1.0, delay: 0.06 * i + 0.2 }}
                  className="h-full"
                  style={{ background: '#e2e8f0' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-3 h-3 rounded-sm" style={{ background: colors.ai }} />
            AI-related hiring
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-3 h-3 rounded-sm bg-slate-200" />
            Non-AI hiring
          </div>
        </div>

        <div className="chart-insight mt-4">
          <strong>The AI premium:</strong> Sectors like AI-Native, Cybersecurity, and Semiconductors are nearly 100% AI-driven hiring. Even traditionally non-tech sectors show significant AI adoption — the AI hiring wave extends far beyond pure AI companies.
        </div>
      </motion.div>
    </div>
  );
}
