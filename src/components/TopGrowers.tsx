import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Brain, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { sectorColors } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import CompanyDetailPanel from './CompanyDetailPanel';
import type { HiringEntry, CompanyFinancials, CompanyHistory } from '../types';
import SectionHeader from './SectionHeader';

interface TopGrowersProps {
  data: HiringEntry[];
  financials?: CompanyFinancials[];
  histories?: CompanyHistory[];
}

export default function TopGrowers({ data, financials, histories }: TopGrowersProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const maxNet = Math.max(...data.map(c => c.netAdded));

  const hasDetails = financials || histories;

  return (
    <div ref={ref}>
      <SectionHeader
        title="Top Growers"
        subtitle={`Top ${data.length} companies by net jobs added${hasDetails ? ' — click a row for details' : ''}`}
        icon={<Trophy size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl overflow-hidden mt-4 transition-shadow duration-300"
      >
        {/* Table header */}
        <div className="grid grid-cols-[2rem_1fr_6rem_5.5rem_5.5rem] md:grid-cols-[2rem_1fr_1fr_6rem_5.5rem_5.5rem] gap-x-3 px-5 py-3 border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <span>#</span>
          <span>Company</span>
          <span className="hidden md:block">Growth Bar</span>
          <span className="text-right">Net Added</span>
          <span className="text-right">Growth</span>
          <span className="text-right">Current</span>
        </div>

        {/* Rows */}
        {data.map((company, i) => {
          const barWidth = (company.netAdded / maxNet) * 100;
          const sectorColor = sectorColors[company.sector] || '#64748b';
          const isExpanded = expandedIdx === i;
          const companyFinancials = financials?.find(f => f.company === company.company);
          const companyHistory = histories?.find(h => h.company === company.company);

          return (
            <div key={company.company}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className={`grid grid-cols-[2rem_1fr_6rem_5.5rem_5.5rem] md:grid-cols-[2rem_1fr_1fr_6rem_5.5rem_5.5rem] gap-x-3 px-5 py-3 border-b border-slate-50 transition-colors items-center ${
                  hasDetails ? 'cursor-pointer' : ''
                } ${isExpanded ? 'bg-slate-50/80' : 'hover:bg-slate-50/60'}`}
                onClick={() => hasDetails && setExpandedIdx(isExpanded ? null : i)}
              >
                {/* Rank */}
                <span className="text-xs font-bold text-slate-300 tabular-nums">
                  {i + 1}
                </span>

                {/* Company + badges */}
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-semibold text-sm text-slate-900 truncate">
                    {company.company}
                  </span>
                  <span
                    className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: sectorColor }}
                  >
                    {company.sector.split('/')[0]}
                  </span>
                  {company.aiRelated && (
                    <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold uppercase">
                      <Brain size={10} />
                      AI
                    </span>
                  )}
                  {hasDetails && (
                    <ChevronDown
                      size={14}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>

                {/* Growth bar */}
                <div className="hidden md:block">
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${barWidth}%` } : {}}
                      transition={{ duration: 1, delay: 0.1 * i }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${sectorColor}88, ${sectorColor})`,
                      }}
                    />
                  </div>
                </div>

                {/* Net added */}
                <div className="text-right">
                  <span className="text-sm font-bold text-emerald-600">
                    +{formatNumber(company.netAdded)}
                  </span>
                </div>

                {/* Growth % */}
                <div className="flex items-center justify-end gap-0.5">
                  <ArrowUpRight size={12} className="text-emerald-500" />
                  <span className="text-sm font-semibold text-slate-700 tabular-nums">
                    {company.growthPercent > 999
                      ? `${(company.growthPercent / 100).toFixed(0)}x`
                      : `${company.growthPercent}%`}
                  </span>
                </div>

                {/* Current count */}
                <span className="text-sm text-slate-500 text-right tabular-nums">
                  {formatNumber(company.currentCount)}
                </span>
              </motion.div>

              <AnimatePresence>
                {isExpanded && (
                  <CompanyDetailPanel
                    company={company.company}
                    financials={companyFinancials}
                    history={companyHistory}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
