import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Layers } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { chartConfig } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import type { SectorData } from '../types';
import SectionHeader from './SectionHeader';

interface SectorChartProps {
  data: SectorData[];
}

export default function SectorChart({ data }: SectorChartProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

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
            <Bar dataKey="totalAdded" radius={[0, 6, 6, 0]} animationDuration={1500}>
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
    </div>
  );
}
