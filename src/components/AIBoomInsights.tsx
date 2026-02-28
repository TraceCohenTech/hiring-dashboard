import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { colors } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import SectionHeader from './SectionHeader';

interface AIBoomData {
  company: string;
  multiple: number;
  netAdded: number;
  from: number;
  to: number;
}

interface AIBoomInsightsProps {
  data: AIBoomData[];
}

export default function AIBoomInsights({ data }: AIBoomInsightsProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const maxMultiple = Math.max(...data.map(d => d.multiple));

  return (
    <div ref={ref}>
      <SectionHeader
        title="The AI Boom"
        subtitle="AI startup headcount growth multiples"
        icon={<Sparkles size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4 transition-shadow duration-300"
      >
        <div className="space-y-4">
          {data.slice(0, 8).map((item, i) => {
            const barWidth = (item.multiple / maxMultiple) * 100;
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 * i }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">{item.company}</span>
                    <span className="text-xs text-slate-400">
                      {formatNumber(item.from)} → {formatNumber(item.to)}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold" style={{ color: colors.ai }}>
                      {item.multiple}x
                    </span>
                  </div>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${barWidth}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.08 * i }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${colors.ai}66, ${colors.ai})`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="chart-insight mt-6">
          <strong>Key insight:</strong> AI startups are growing at 10-30x rates, with Perplexity, Anthropic, and Mistral leading the pack. This hiring velocity is unprecedented in tech history.
        </div>
      </motion.div>
    </div>
  );
}
