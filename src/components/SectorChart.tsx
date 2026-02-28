import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Layers, ArrowLeft } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { chartConfig, sectorColors } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import type { SectorData, HiringEntry } from '../types';
import SectionHeader from './SectionHeader';

interface SectorChartProps {
  data: SectorData[];
  companies?: HiringEntry[];
}

interface CompanySectorData {
  company: string;
  netAdded: number;
  color: string;
}

export default function SectorChart({ data, companies }: SectorChartProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [drillSector, setDrillSector] = useState<string | null>(null);

  const drillData: CompanySectorData[] = (() => {
    if (!drillSector || !companies) return [];
    return companies
      .filter(c => c.sector === drillSector)
      .sort((a, b) => b.netAdded - a.netAdded)
      .slice(0, 12)
      .map(c => ({
        company: c.company,
        netAdded: c.netAdded,
        color: sectorColors[c.sector] ?? '#64748b',
      }));
  })();

  const handleBarClick = (_: unknown, index: number) => {
    if (companies && data[index]) {
      setDrillSector(data[index].sector);
    }
  };

  return (
    <div ref={ref}>
      <SectionHeader
        title="Where the Jobs Are"
        subtitle="Net jobs added by sector"
        icon={<Layers size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4 transition-shadow duration-300"
      >
        <AnimatePresence mode="wait">
          {drillSector && drillData.length > 0 ? (
            <motion.div
              key="drill"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={() => setDrillSector(null)}
                  className="flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
                >
                  <ArrowLeft size={14} />
                  All Sectors
                </button>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{drillSector}</h3>
              <p className="text-sm text-slate-500 mb-4">Companies driving growth in this sector</p>

              <ResponsiveContainer width="100%" height={380}>
                <BarChart
                  data={drillData}
                  layout="vertical"
                  margin={{ top: 4, right: 12, left: 4, bottom: 4 }}
                >
                  <CartesianGrid {...chartConfig.grid} horizontal={false} />
                  <XAxis
                    type="number"
                    {...chartConfig.axis}
                    tickFormatter={v => formatNumber(v as number)}
                  />
                  <YAxis
                    type="category"
                    dataKey="company"
                    {...chartConfig.axis}
                    width={120}
                    tick={{ fill: '#334155', fontSize: 13, fontWeight: 500 }}
                  />
                  <Tooltip
                    {...chartConfig.tooltip}
                    formatter={(value: number | undefined) => [
                      `+${formatNumber(value ?? 0)} jobs`,
                      'Net Added'
                    ]}
                  />
                  <Bar dataKey="netAdded" radius={[0, 6, 6, 0]} animationDuration={800}>
                    {drillData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} fillOpacity={1 - (i / drillData.length) * 0.5} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          ) : (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
            >
              {companies && (
                <p className="text-xs text-slate-400 mb-3">Click a bar to drill down into companies</p>
              )}
              <ResponsiveContainer width="100%" height={380}>
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{ top: 4, right: 12, left: 4, bottom: 4 }}
                >
                  <CartesianGrid {...chartConfig.grid} horizontal={false} />
                  <XAxis
                    type="number"
                    {...chartConfig.axis}
                    tickFormatter={v => formatNumber(v as number)}
                  />
                  <YAxis
                    type="category"
                    dataKey="sector"
                    {...chartConfig.axis}
                    width={120}
                    tick={{ fill: '#334155', fontSize: 13, fontWeight: 500 }}
                  />
                  <Tooltip
                    {...chartConfig.tooltip}
                    formatter={(value: number | undefined) => [
                      `+${formatNumber(value ?? 0)} jobs`,
                      'Growth'
                    ]}
                  />
                  <Bar
                    dataKey="totalAdded"
                    radius={[0, 6, 6, 0]}
                    animationDuration={1500}
                    cursor={companies ? 'pointer' : undefined}
                    onClick={handleBarClick}
                  >
                    {data.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div className="chart-insight">
                <strong>Key insight:</strong> Healthcare and Big Tech lead in absolute job numbers, while AI-Native and Defense Tech show the highest growth rates.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
