import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { formatCurrency } from '../utils/calculations';
import { sectorColors } from '../utils/chartTheme';
import type { CompanyFinancials } from '../types';
import SectionHeader from './SectionHeader';

interface RevenuePerEmployeeProps {
  data: CompanyFinancials[];
}

export default function RevenuePerEmployee({ data }: RevenuePerEmployeeProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const maxVal = data.length > 0 ? data[0].revenuePerEmployee : 1;

  const nvidia = data.find(d => d.company === 'NVIDIA');
  const amazon = data.find(d => d.company === 'Amazon');
  const multiplier = nvidia && amazon && amazon.revenuePerEmployee > 0
    ? Math.round(nvidia.revenuePerEmployee / amazon.revenuePerEmployee)
    : null;

  return (
    <div ref={ref}>
      <SectionHeader
        title="Revenue per Employee"
        subtitle="How much revenue each employee generates annually"
        icon={<DollarSign size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4"
      >
        <div className="space-y-2">
          {data.map((d, i) => {
            const width = Math.max((d.revenuePerEmployee / maxVal) * 100, 3);
            const color = sectorColors[d.sector] ?? '#64748b';
            const isNvidia = d.company === 'NVIDIA';

            return (
              <motion.div
                key={d.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.04 }}
                className={`group py-1.5 px-2 rounded-lg transition-colors ${isNvidia ? 'bg-emerald-50/60' : 'hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-2 text-xs mb-0.5">
                  <span className="text-slate-400 font-bold tabular-nums w-5 text-right">#{i + 1}</span>
                  <span className={`font-semibold w-32 truncate ${isNvidia ? 'text-emerald-700' : 'text-slate-800'}`}>{d.company}</span>
                  <span
                    className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: color }}
                  >
                    {d.sector.split('/')[0]}
                  </span>
                  <span className="ml-auto text-slate-700 font-semibold tabular-nums">
                    {formatCurrency(d.revenuePerEmployee)}
                  </span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${width}%` } : {}}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {multiplier && (
          <div className="chart-insight">
            <strong>NVIDIA</strong> generates {formatCurrency(nvidia!.revenuePerEmployee)} per employee — {multiplier}x Amazon's {formatCurrency(amazon!.revenuePerEmployee)}
          </div>
        )}
      </motion.div>
    </div>
  );
}
