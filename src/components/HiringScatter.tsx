import { useState, useMemo } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { sectorColors } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import SectionHeader from './SectionHeader';
import type { HiringEntry } from '../types';

interface Props {
  data: HiringEntry[];
}

interface ScatterPoint {
  x: number;
  y: number;
  z: number;
  company: string;
  sector: string;
  netAdded: number;
  growthPercent: number;
}

const GROWTH_CAP = 500;

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: ScatterPoint }> }) {
  if (!active || !payload?.[0]) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white rounded-xl shadow-lg border-0 px-4 py-3 text-sm">
      <p className="font-bold text-slate-900">{d.company}</p>
      <p className="text-xs text-slate-500 mb-2">{d.sector}</p>
      <div className="space-y-1 text-slate-700">
        <p>Employees: <strong>{formatNumber(d.x)}</strong></p>
        <p>Growth: <strong>{d.growthPercent.toLocaleString()}%</strong></p>
        <p>Jobs added: <strong>+{formatNumber(d.netAdded)}</strong></p>
      </div>
    </div>
  );
}

export default function HiringScatter({ data }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const scatterData: ScatterPoint[] = useMemo(() =>
    data.map(d => ({
      x: d.currentCount,
      y: Math.min(d.growthPercent, GROWTH_CAP),
      z: Math.max(d.netAdded, 50),
      company: d.company,
      sector: d.sector,
      netAdded: d.netAdded,
      growthPercent: d.growthPercent,
    })),
    [data]
  );

  const outliers = data.filter(d => d.growthPercent > GROWTH_CAP);
  const uniqueSectors = useMemo(() => [...new Set(data.map(d => d.sector))], [data]);

  return (
    <div ref={ref}>
      <SectionHeader
        title="The Hiring Map"
        subtitle="Company size vs growth rate — bigger bubbles = more jobs added"
        icon={<Crosshair size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4"
      >
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-4">
          {uniqueSectors.map(sector => (
            <button
              key={sector}
              onMouseEnter={() => setHoveredSector(sector)}
              onMouseLeave={() => setHoveredSector(null)}
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: sectorColors[sector] || '#64748b' }}
              />
              {sector}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={420}>
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
            <XAxis
              dataKey="x"
              type="number"
              scale="log"
              domain={[100, 2000000]}
              tickFormatter={(v: number) => formatNumber(v)}
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              name="Employees"
              label={{ value: 'Current Headcount →', position: 'insideBottom', offset: -10, fill: '#94a3b8', fontSize: 12 }}
            />
            <YAxis
              dataKey="y"
              type="number"
              domain={[0, GROWTH_CAP]}
              tickFormatter={(v: number) => `${v}%`}
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              name="Growth %"
              label={{ value: 'Growth Rate →', angle: -90, position: 'insideLeft', offset: 10, fill: '#94a3b8', fontSize: 12 }}
            />
            <ZAxis dataKey="z" range={[30, 500]} name="Jobs Added" />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Scatter data={scatterData} fillOpacity={0.75}>
              {scatterData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={sectorColors[entry.sector] || '#64748b'}
                  fillOpacity={
                    hoveredSector === null ? 0.7
                    : hoveredSector === entry.sector ? 0.9
                    : 0.15
                  }
                  stroke={hoveredSector === entry.sector ? sectorColors[entry.sector] : 'transparent'}
                  strokeWidth={2}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>

        {outliers.length > 0 && (
          <p className="text-xs text-slate-400 mt-2 text-center">
            * {outliers.length} companies with {'>'}500% growth capped on chart: {outliers.slice(0, 5).map(o => `${o.company} (${o.growthPercent.toLocaleString()}%)`).join(', ')}
          </p>
        )}

        <div className="chart-insight mt-4">
          <strong>Reading the map:</strong> Top-right = rocketships (large & fast-growing). Bottom-right = stable giants. Top-left = tiny startups exploding. The AI-Native cluster (blue) dominates the upper-left quadrant — small teams, astronomical growth.
        </div>
      </motion.div>
    </div>
  );
}
