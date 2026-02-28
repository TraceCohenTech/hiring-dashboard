import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { formatCurrency } from '../utils/calculations';
import { sectorColors } from '../utils/chartTheme';
import type { EfficiencyMetric } from '../types';
import SectionHeader from './SectionHeader';

interface EfficiencyMetricsProps {
  data: EfficiencyMetric[];
}

export default function EfficiencyMetrics({ data }: EfficiencyMetricsProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const byRevPerEmp = [...data]
    .sort((a, b) => b.revenuePerEmployee - a.revenuePerEmployee)
    .slice(0, 10);

  const byJobsPerBillion = [...data]
    .sort((a, b) => b.jobsPerBillionRevenue - a.jobsPerBillionRevenue)
    .slice(0, 10);

  const maxRevPerEmp = byRevPerEmp[0]?.revenuePerEmployee ?? 1;
  const maxJobsPerBillion = byJobsPerBillion[0]?.jobsPerBillionRevenue ?? 1;

  return (
    <div ref={ref}>
      <SectionHeader
        title="Efficiency vs Volume"
        subtitle="Who generates more per head vs who employs more per dollar"
        icon={<Scale size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Revenue per Employee */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Revenue per Employee
            </h3>
            <div className="space-y-1.5">
              {byRevPerEmp.map((d, i) => {
                const width = Math.max((d.revenuePerEmployee / maxRevPerEmp) * 100, 4);
                const color = sectorColors[d.sector] ?? '#64748b';
                return (
                  <div key={d.company}>
                    <div className="flex items-center gap-2 text-xs mb-0.5">
                      <span className="text-slate-800 font-medium w-28 truncate">{d.company}</span>
                      <span className="ml-auto text-slate-600 font-semibold tabular-nums">
                        {formatCurrency(d.revenuePerEmployee)}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${width}%` } : {}}
                        transition={{ delay: 0.2 + i * 0.03, duration: 0.7, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Jobs per $1B Revenue */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Jobs per $1B Revenue
            </h3>
            <div className="space-y-1.5">
              {byJobsPerBillion.map((d, i) => {
                const width = Math.max((d.jobsPerBillionRevenue / maxJobsPerBillion) * 100, 4);
                const color = sectorColors[d.sector] ?? '#64748b';
                return (
                  <div key={d.company}>
                    <div className="flex items-center gap-2 text-xs mb-0.5">
                      <span className="text-slate-800 font-medium w-28 truncate">{d.company}</span>
                      <span className="ml-auto text-slate-600 font-semibold tabular-nums">
                        {d.jobsPerBillionRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${width}%` } : {}}
                        transition={{ delay: 0.2 + i * 0.03, duration: 0.7, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="chart-insight">
          High-efficiency companies like <strong>NVIDIA</strong> generate massive revenue per head, while volume employers like <strong>Amazon</strong> and <strong>UnitedHealth</strong> sustain far more jobs per dollar of revenue
        </div>
      </motion.div>
    </div>
  );
}
