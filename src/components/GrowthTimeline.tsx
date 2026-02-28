import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { colors, chartConfig } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import type { GrowthTimelinePoint } from '../types';
import SectionHeader from './SectionHeader';

interface GrowthTimelineProps {
  data: GrowthTimelinePoint[];
}

export default function GrowthTimeline({ data }: GrowthTimelineProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const display = data.slice(0, 15);

  return (
    <div ref={ref}>
      <SectionHeader
        title="The Growth Story"
        subtitle="Cumulative jobs added by top contributing companies"
        icon={<TrendingUp size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4 transition-shadow duration-300"
      >
        <ResponsiveContainer width="100%" height={340}>
          <AreaChart data={display} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colors.primary} stopOpacity={0.3} />
                <stop offset="100%" stopColor={colors.primary} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid {...chartConfig.grid} />
            <XAxis
              dataKey="label"
              {...chartConfig.axis}
              interval={0}
              angle={-35}
              textAnchor="end"
              height={70}
              tick={{ fill: colors.textSecondary, fontSize: 11 }}
            />
            <YAxis
              {...chartConfig.axis}
              tickFormatter={v => formatNumber(v as number)}
            />
            <Tooltip
              {...chartConfig.tooltip}
              formatter={(value: number | undefined) => [`+${formatNumber(value ?? 0)} total`, 'Cumulative Jobs']}
            />
            <Area
              type="monotone"
              dataKey="cumulative"
              stroke={colors.primary}
              strokeWidth={2.5}
              fill="url(#growthGrad)"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="chart-insight">
          <strong>Key insight:</strong> The top 15 companies alone account for the vast majority of job creation, with AI-native startups and big tech leading the charge.
        </div>
      </motion.div>
    </div>
  );
}
