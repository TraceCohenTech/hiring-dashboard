import { motion } from 'framer-motion';
import { ArrowLeftRight, TrendingUp, TrendingDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { calcGrowthVsLayoffs } from '../utils/calculations';
import SectionHeader from './SectionHeader';

export default function GrowthVsLayoffs() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const data = calcGrowthVsLayoffs();

  return (
    <div ref={ref}>
      <SectionHeader
        title="Growth vs Layoffs"
        subtitle="Companies that bounced back stronger after 2023 layoff headlines"
        icon={<ArrowLeftRight size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl overflow-hidden mt-4 transition-shadow duration-300"
      >
        {/* Header */}
        <div className="grid grid-cols-[1fr_5.5rem_5rem_5rem] md:grid-cols-[1fr_6rem_5.5rem_5.5rem_1fr] gap-x-4 px-5 py-3 border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <span>Company</span>
          <span className="text-right">2023 Cuts</span>
          <span className="text-right">Net Change</span>
          <span className="text-right">Now</span>
          <span className="hidden md:block">Verdict</span>
        </div>

        {data.map((row, i) => (
          <motion.div
            key={row.company}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            className="grid grid-cols-[1fr_5.5rem_5rem_5rem] md:grid-cols-[1fr_6rem_5.5rem_5.5rem_1fr] gap-x-4 px-5 py-4 border-b border-slate-50 hover:bg-slate-50/60 transition-colors items-center"
          >
            <span className="font-semibold text-sm text-slate-900">{row.company}</span>

            <div className="flex items-center justify-end gap-1">
              <TrendingDown size={12} className="text-rose-500" />
              <span className="text-sm font-semibold text-rose-600 tabular-nums">
                -{row.layoffs2023.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-end gap-1">
              <TrendingUp size={12} className="text-emerald-500" />
              <span className="text-sm font-bold text-emerald-600 tabular-nums">
                {row.netGrowth}
              </span>
            </div>

            <span className="text-sm text-slate-600 text-right font-medium tabular-nums">
              {row.currentCount}
            </span>

            <span className="hidden md:block text-xs text-slate-500">
              {row.verdict}
            </span>
          </motion.div>
        ))}

        <div className="px-5 py-4">
          <div className="chart-insight">
            <strong>The narrative matters:</strong> Every major tech company that made layoff headlines in 2023 has since grown past their pre-layoff headcount. The cuts were restructuring, not decline.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
