import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { History } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { formatNumber } from '../utils/calculations';
import { chartConfig, sectorColors } from '../utils/chartTheme';
import type { CompanyHistory } from '../types';
import SectionHeader from './SectionHeader';

interface HistoricalHeadcountProps {
  data: CompanyHistory[];
}

const INSIGHTS: Record<string, string> = {
  'NVIDIA': 'NVIDIA quadrupled headcount from 10K to 42K in under a decade — fueled by the AI boom',
  'Meta': 'Meta surged to 86K in 2022, shed 22% in "Year of Efficiency," then rebounded to 79K',
  'Alphabet': 'Google nearly tripled from 72K to 190K, briefly dipped post-2022, then resumed growth',
  'Amazon': 'Amazon\'s pandemic hiring spree peaked at 1.6M — then came corrections before stabilizing',
  'Anthropic': 'Anthropic grew 81x in 4 years — from 50 employees to 4,074 as AI safety scaled up',
  'OpenAI': 'OpenAI expanded 36x since 2020, from 200 to 7,216 as ChatGPT transformed the company',
  'SpaceX': 'SpaceX more than doubled from 7K to 18K as Starlink and Starship drove hiring',
  'Anduril': 'Anduril scaled 31x from 200 to 6,200 — the fastest-growing defense tech company',
  'Microsoft': 'Microsoft doubled from 114K to 230K over a decade, with a pause after 2022 layoffs',
  'CrowdStrike': 'CrowdStrike tripled headcount from 3,400 to 10,100 in five years of rapid expansion',
  'Databricks': 'Databricks grew 5.6x from 1,800 to 10,000 as the data+AI platform market exploded',
  'Palantir': 'Palantir grew steadily from 2,400 to 4,400 — disciplined growth for a defense AI company',
  'Eli Lilly': 'Eli Lilly added 17K jobs since 2019, fueled by GLP-1 drug manufacturing buildout',
  'Broadcom': 'Broadcom held flat at 20K for years, then added 4K post-VMware acquisition',
  'Stripe': 'Stripe cut 14% in 2022, then rebounded — now at 10K and growing again',
};

export default function HistoricalHeadcount({ data }: HistoricalHeadcountProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [selectedCompany, setSelectedCompany] = useState(data[0]?.company ?? '');

  const selected = data.find(d => d.company === selectedCompany);
  if (!selected) return null;

  const chartData = selected.headcount.map(h => ({
    year: h.year.toString(),
    count: h.count,
    yoy: h.yoyChangePercent ?? 0,
  }));

  const color = sectorColors[selected.sector] ?? '#059669';
  const insight = INSIGHTS[selected.company] ?? `${selected.company} headcount trend over time`;

  return (
    <div ref={ref}>
      <SectionHeader
        title="Historical Headcount"
        subtitle="Multi-year employee trends with YoY growth"
        icon={<History size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4"
      >
        {/* Company selector tabs */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {data.map(d => (
            <button
              key={d.company}
              onClick={() => setSelectedCompany(d.company)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                selectedCompany === d.company
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {d.company}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCompany}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chart */}
            <div className="h-[340px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid {...chartConfig.grid} vertical={false} />
                  <XAxis
                    dataKey="year"
                    {...chartConfig.axis}
                  />
                  <YAxis
                    yAxisId="count"
                    {...chartConfig.axis}
                    tickFormatter={(v: number) => formatNumber(v)}
                  />
                  <YAxis
                    yAxisId="yoy"
                    orientation="right"
                    {...chartConfig.axis}
                    tickFormatter={(v: number) => `${v}%`}
                  />
                  <Tooltip
                    {...chartConfig.tooltip}
                    formatter={((value: number | undefined, name: string | undefined) => {
                      const v = value ?? 0;
                      if (name === 'count') return [v.toLocaleString(), 'Employees'];
                      return [`${v}%`, 'YoY Change'];
                    }) as never}
                  />
                  <Bar
                    yAxisId="count"
                    dataKey="count"
                    fill={color}
                    fillOpacity={0.8}
                    radius={[4, 4, 0, 0]}
                    animationDuration={1200}
                  />
                  <Line
                    yAxisId="yoy"
                    dataKey="yoy"
                    stroke="#f59e0b"
                    strokeWidth={2.5}
                    dot={{ fill: '#f59e0b', r: 4, strokeWidth: 2, stroke: '#fff' }}
                    animationDuration={1500}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Data table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3 text-slate-500 font-medium">Year</th>
                    <th className="text-right py-2 px-3 text-slate-500 font-medium">Headcount</th>
                    <th className="text-right py-2 px-3 text-slate-500 font-medium">YoY %</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.headcount.map(h => (
                    <tr key={h.year} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-1.5 px-3 text-slate-800 font-medium tabular-nums">{h.year}</td>
                      <td className="py-1.5 px-3 text-right text-slate-700 tabular-nums">{h.count.toLocaleString()}</td>
                      <td className="py-1.5 px-3 text-right tabular-nums">
                        {h.yoyChangePercent !== undefined ? (
                          <span className={h.yoyChangePercent >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
                            {h.yoyChangePercent >= 0 ? '+' : ''}{h.yoyChangePercent}%
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="chart-insight">{insight}</div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
