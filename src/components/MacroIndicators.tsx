import { motion } from 'framer-motion';
import {
  ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Globe, TrendingUp, TrendingDown, Briefcase, Users, Activity, RefreshCw } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { chartConfig } from '../utils/chartTheme';
import SectionHeader from './SectionHeader';
import type { FredDataPoint } from '../services/fred';

interface MacroIndicatorsProps {
  data: FredDataPoint[];
  loading: boolean;
  error: boolean;
  onRetry: () => void;
}

export default function MacroIndicators({ data, loading, error, onRetry }: MacroIndicatorsProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  if (loading) return <LoadingSkeleton />;
  if (error || data.length === 0) {
    return (
      <div ref={ref}>
        <SectionHeader
          title="Macro Context"
          subtitle="Federal Reserve Economic Data (FRED)"
          icon={<Globe size={18} />}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-xl p-8 mt-4 text-center"
        >
          <p className="text-slate-500 text-sm mb-3">Unable to load macro data</p>
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
          >
            <RefreshCw size={14} />
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  const latest = data[data.length - 1];
  const oneYearAgo = data.length >= 13 ? data[data.length - 13] : data[0];

  const kpis = [
    {
      label: 'Job Openings',
      value: `${(latest.jobOpenings / 1000).toFixed(1)}M`,
      change: latest.jobOpenings - oneYearAgo.jobOpenings,
      changeLabel: `${((latest.jobOpenings - oneYearAgo.jobOpenings) / oneYearAgo.jobOpenings * 100).toFixed(1)}% YoY`,
      icon: Briefcase,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      label: 'Nonfarm Payrolls',
      value: `${(latest.nonfarmPayrolls / 1000).toFixed(1)}M`,
      change: latest.nonfarmPayrolls - oneYearAgo.nonfarmPayrolls,
      changeLabel: `${((latest.nonfarmPayrolls - oneYearAgo.nonfarmPayrolls) / oneYearAgo.nonfarmPayrolls * 100).toFixed(1)}% YoY`,
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Labor Force Participation',
      value: `${latest.laborForceParticipation.toFixed(1)}%`,
      change: latest.laborForceParticipation - oneYearAgo.laborForceParticipation,
      changeLabel: `${(latest.laborForceParticipation - oneYearAgo.laborForceParticipation) >= 0 ? '+' : ''}${(latest.laborForceParticipation - oneYearAgo.laborForceParticipation).toFixed(2)}pp YoY`,
      icon: Activity,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
  ];

  // Format chart data — show every 3rd label to avoid crowding
  const chartData = data.map((d, i) => ({
    ...d,
    displayDate: i % 3 === 0 ? formatDate(d.date) : '',
    fullDate: formatDate(d.date),
  }));

  return (
    <div ref={ref}>
      <SectionHeader
        title="Macro Context"
        subtitle="Federal Reserve Economic Data (FRED)"
        icon={<Globe size={18} />}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          const isPositive = kpi.change >= 0;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {kpi.label}
                </span>
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${kpi.bg}`}>
                  <Icon size={16} className={kpi.color} />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 tabular-nums">
                {kpi.value}
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                {isPositive ? (
                  <TrendingUp size={14} className="text-emerald-600" />
                ) : (
                  <TrendingDown size={14} className="text-rose-600" />
                )}
                <span className={`text-xs font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {kpi.changeLabel}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass rounded-xl p-6 mt-4"
      >
        <div className="flex items-center gap-6 mb-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span>Job Openings (thousands)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span>Labor Force Participation (%)</span>
          </div>
        </div>

        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="jobOpeningsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid {...chartConfig.grid} vertical={false} />
              <XAxis
                dataKey="date"
                {...chartConfig.axis}
                tickFormatter={(v: string) => formatDate(v)}
                interval={Math.max(Math.floor(chartData.length / 8), 1)}
              />
              <YAxis
                yAxisId="left"
                {...chartConfig.axis}
                tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}M`}
                label={{
                  value: 'Job Openings',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: '#64748b', fontSize: 11 },
                  offset: 10,
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                {...chartConfig.axis}
                domain={['dataMin - 0.5', 'dataMax + 0.5']}
                tickFormatter={(v: number) => `${v}%`}
                label={{
                  value: 'Participation Rate',
                  angle: 90,
                  position: 'insideRight',
                  style: { fill: '#64748b', fontSize: 11 },
                  offset: 10,
                }}
              />
              <Tooltip
                {...chartConfig.tooltip}
                labelFormatter={(label: string) => formatDate(label)}
                formatter={((value: number, name: string) => {
                  if (name === 'jobOpenings') return [`${(value / 1000).toFixed(2)}M`, 'Job Openings'];
                  if (name === 'laborForceParticipation') return [`${value.toFixed(1)}%`, 'Labor Force Participation'];
                  return [value, name];
                }) as never}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="jobOpenings"
                stroke="none"
                fill="url(#jobOpeningsFill)"
                animationDuration={1200}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="jobOpenings"
                stroke="#059669"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ fill: '#059669', r: 5, strokeWidth: 2, stroke: '#fff' }}
                animationDuration={1500}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="laborForceParticipation"
                stroke="#2563eb"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ fill: '#2563eb', r: 5, strokeWidth: 2, stroke: '#fff' }}
                animationDuration={1500}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-insight">
          Job openings and labor force participation reflect the broader macro hiring environment.
          Data sourced monthly from the Federal Reserve (FRED).
        </div>
      </motion.div>
    </div>
  );
}

function formatDate(ym: string): string {
  const [year, month] = ym.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[parseInt(month, 10) - 1]} '${year.slice(2)}`;
}

function LoadingSkeleton() {
  return (
    <div>
      <SectionHeader
        title="Macro Context"
        subtitle="Federal Reserve Economic Data (FRED)"
        icon={<Globe size={18} />}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[0, 1, 2].map(i => (
          <div key={i} className="glass rounded-xl p-5 animate-pulse">
            <div className="flex items-center justify-between mb-3">
              <div className="h-3 w-24 bg-slate-200 rounded" />
              <div className="w-8 h-8 bg-slate-100 rounded-lg" />
            </div>
            <div className="h-8 w-20 bg-slate-200 rounded mt-2" />
            <div className="h-3 w-16 bg-slate-100 rounded mt-3" />
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-6 mt-4 animate-pulse">
        <div className="h-[340px] bg-slate-100 rounded-lg" />
      </div>
    </div>
  );
}
