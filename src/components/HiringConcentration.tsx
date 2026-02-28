import { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { colors } from '../utils/chartTheme';
import { formatNumber } from '../utils/calculations';
import SectionHeader from './SectionHeader';
import type { HiringEntry } from '../types';

interface Props {
  data: HiringEntry[];
}

interface ParetoPoint {
  rank: number;
  company: string;
  netAdded: number;
  cumulative: number;
  cumulativePercent: number;
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: ParetoPoint }> }) {
  if (!active || !payload?.[0]) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white rounded-xl shadow-lg border-0 px-4 py-3 text-sm">
      <p className="font-bold text-slate-900">#{d.rank} {d.company}</p>
      <p className="text-slate-600">+{formatNumber(d.netAdded)} jobs</p>
      <p className="text-slate-600">
        Top {d.rank} = <strong className="text-emerald-600">{d.cumulativePercent}%</strong> of all hiring
      </p>
    </div>
  );
}

export default function HiringConcentration({ data }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const { paretoData, stats } = useMemo(() => {
    const sorted = [...data].sort((a, b) => b.netAdded - a.netAdded);
    const total = sorted.reduce((s, c) => s + c.netAdded, 0);
    const points: ParetoPoint[] = [];
    let cumulative = 0;

    for (let i = 0; i < sorted.length; i++) {
      cumulative += sorted[i].netAdded;
      points.push({
        rank: i + 1,
        company: sorted[i].company,
        netAdded: sorted[i].netAdded,
        cumulative,
        cumulativePercent: Math.round((cumulative / total) * 100),
      });
    }

    // Find key thresholds
    const top10 = points[9]?.cumulativePercent ?? 0;
    const top20 = points[19]?.cumulativePercent ?? 0;
    const halfIdx = points.findIndex(p => p.cumulativePercent >= 50);
    const ninetyIdx = points.findIndex(p => p.cumulativePercent >= 90);

    return {
      paretoData: points,
      stats: {
        total,
        totalCompanies: sorted.length,
        top10percent: top10,
        top20percent: top20,
        halfwayCompanies: halfIdx + 1,
        ninetyCompanies: ninetyIdx + 1,
        topCompany: sorted[0],
        topCompanyPercent: Math.round((sorted[0].netAdded / total) * 100),
      },
    };
  }, [data]);

  return (
    <div ref={ref}>
      <SectionHeader
        title="The Power Law"
        subtitle="How concentrated is tech hiring?"
        icon={<BarChart3 size={18} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-xl p-6 mt-4"
      >
        {/* Key stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Top 10 companies', value: `${stats.top10percent}%`, sub: 'of all jobs added' },
            { label: 'Top 20 companies', value: `${stats.top20percent}%`, sub: 'of all jobs added' },
            { label: '50% threshold', value: `${stats.halfwayCompanies}`, sub: 'companies for half' },
            { label: '#1 contributor', value: stats.topCompany?.company ?? '', sub: `${stats.topCompanyPercent}% alone` },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="text-center p-3 rounded-xl bg-slate-50"
            >
              <div className="text-xl font-bold text-emerald-600">{s.value}</div>
              <div className="text-xs font-medium text-slate-700 mt-1">{s.label}</div>
              <div className="text-xs text-slate-400">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Pareto curve */}
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={paretoData} margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
            <defs>
              <linearGradient id="paretoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.primary} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.primary} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="rank"
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              label={{ value: 'Companies (ranked by jobs added) →', position: 'insideBottom', offset: -10, fill: '#94a3b8', fontSize: 12 }}
            />
            <YAxis
              dataKey="cumulativePercent"
              domain={[0, 100]}
              tickFormatter={(v: number) => `${v}%`}
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <ReferenceLine y={50} stroke="#e2e8f0" strokeDasharray="4 4" />
            <ReferenceLine y={90} stroke="#e2e8f0" strokeDasharray="4 4" />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeDasharray: '4 4' }} />
            <Area
              type="monotone"
              dataKey="cumulativePercent"
              stroke={colors.primary}
              strokeWidth={2.5}
              fill="url(#paretoGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="chart-insight mt-4">
          <strong>The power law at work:</strong> Just {stats.halfwayCompanies} companies account for 50% of all jobs added. The top 10 alone cover {stats.top10percent}%. Hiring in tech follows a classic power-law distribution — a small number of companies drive the overwhelming majority of job creation.
        </div>
      </motion.div>
    </div>
  );
}
