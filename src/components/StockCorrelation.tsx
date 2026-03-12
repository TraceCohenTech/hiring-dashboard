import { motion } from 'framer-motion';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis,
  Cell,
} from 'recharts';
import { TrendingUp, TrendingDown, BarChart3, Award, RefreshCw, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { chartConfig } from '../utils/chartTheme';
import SectionHeader from './SectionHeader';
import type { StockCorrelationEntry } from '../services/finnhub';

interface StockCorrelationProps {
  data: StockCorrelationEntry[];
  loading: boolean;
  error: boolean;
  onRetry: () => void;
}

export default function StockCorrelation({ data, loading, error, onRetry }: StockCorrelationProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  if (loading) return <LoadingSkeleton />;
  if (error || data.length === 0) {
    return (
      <div ref={ref}>
        <SectionHeader
          title="Hiring & Stock Performance"
          subtitle="How markets reward companies that invest in talent"
          icon={<TrendingUp size={18} />}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-xl p-8 mt-4 text-center"
        >
          <p className="text-slate-500 text-sm mb-3">Unable to load stock data</p>
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

  // KPI calculations
  const avgStockReturn = data.reduce((sum, d) => sum + d.ytdStockChange, 0) / data.length;
  const gainers = data.filter(d => d.ytdStockChange > 0).length;
  const correlationLabel = gainers >= data.length * 0.6 ? 'Positive' : gainers <= data.length * 0.4 ? 'Negative' : 'Neutral';
  const correlationColor = correlationLabel === 'Positive' ? 'text-emerald-600' : correlationLabel === 'Negative' ? 'text-rose-600' : 'text-slate-600';

  // Best combo: highest sum of normalized hiring growth + stock change
  const maxGrowth = Math.max(...data.map(d => d.growthPercent));
  const maxStock = Math.max(...data.map(d => d.ytdStockChange));
  const topPerformer = data.reduce((best, d) => {
    const score = (d.growthPercent / (maxGrowth || 1)) + (d.ytdStockChange / (maxStock || 1));
    const bestScore = (best.growthPercent / (maxGrowth || 1)) + (best.ytdStockChange / (maxStock || 1));
    return score > bestScore ? d : best;
  }, data[0]);

  const kpis = [
    {
      label: 'Avg Stock Return',
      value: `${avgStockReturn >= 0 ? '+' : ''}${avgStockReturn.toFixed(1)}%`,
      sublabel: 'YTD among top hirers',
      icon: TrendingUp,
      color: avgStockReturn >= 0 ? 'text-emerald-600' : 'text-rose-600',
      bg: avgStockReturn >= 0 ? 'bg-emerald-50' : 'bg-rose-50',
    },
    {
      label: 'Hiring-Stock Correlation',
      value: correlationLabel,
      sublabel: `${gainers} of ${data.length} are stock gainers`,
      icon: BarChart3,
      color: correlationColor,
      bg: correlationLabel === 'Positive' ? 'bg-emerald-50' : correlationLabel === 'Negative' ? 'bg-rose-50' : 'bg-slate-50',
    },
    {
      label: 'Top Performer',
      value: topPerformer.companyName,
      sublabel: `+${topPerformer.ytdStockChange.toFixed(1)}% stock, +${topPerformer.growthPercent}% hiring`,
      icon: Award,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  // Scatter data
  const scatterData = data.map(d => ({
    x: d.growthPercent,
    y: d.ytdStockChange,
    z: d.netAdded,
    name: d.companyName,
    symbol: d.symbol,
  }));

  return (
    <div ref={ref}>
      <SectionHeader
        title="Hiring & Stock Performance"
        subtitle="How markets reward companies that invest in talent"
        icon={<TrendingUp size={18} />}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
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
              <div className={`text-2xl md:text-3xl font-bold text-slate-900 tabular-nums`}>
                {kpi.value}
              </div>
              <p className="text-xs text-slate-500 mt-2">{kpi.sublabel}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Scatter Plot */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass rounded-xl p-6 mt-4"
      >
        <div className="flex items-center gap-6 mb-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span>Stock gainers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <span>Stock decliners</span>
          </div>
          <span className="text-slate-400">Dot size = jobs added</span>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
              <CartesianGrid {...chartConfig.grid} />
              <XAxis
                type="number"
                dataKey="x"
                name="Hiring Growth"
                {...chartConfig.axis}
                label={{
                  value: 'Hiring Growth %',
                  position: 'insideBottom',
                  offset: -10,
                  style: { fill: '#64748b', fontSize: 12 },
                }}
                tickFormatter={(v: number) => `${v}%`}
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Stock Change"
                {...chartConfig.axis}
                label={{
                  value: 'YTD Stock Change %',
                  angle: -90,
                  position: 'insideLeft',
                  offset: 10,
                  style: { fill: '#64748b', fontSize: 12 },
                }}
                tickFormatter={(v: number) => `${v}%`}
              />
              <ZAxis type="number" dataKey="z" range={[80, 600]} />
              <Tooltip
                content={({ payload }) => {
                  if (!payload || payload.length === 0) return null;
                  const d = payload[0].payload;
                  return (
                    <div className="bg-white rounded-xl shadow-lg border-0 p-3 text-sm">
                      <p className="font-semibold text-slate-900">{d.name} ({d.symbol})</p>
                      <p className="text-slate-600">Hiring Growth: <span className="font-medium">{d.x}%</span></p>
                      <p className="text-slate-600">Stock YTD: <span className={`font-medium ${d.y >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{d.y >= 0 ? '+' : ''}{d.y}%</span></p>
                      <p className="text-slate-600">Jobs Added: <span className="font-medium">{d.z.toLocaleString()}</span></p>
                    </div>
                  );
                }}
              />
              <Scatter data={scatterData} animationDuration={1200}>
                {scatterData.map((entry, i) => (
                  <Cell
                    key={`cell-${i}`}
                    fill={entry.y >= 0 ? '#059669' : '#e11d48'}
                    fillOpacity={0.7}
                    stroke={entry.y >= 0 ? '#059669' : '#e11d48'}
                    strokeWidth={1}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-insight">
          Each dot represents a top-hiring public company. Positive correlation between aggressive
          hiring and stock performance supports the narrative that talent investment drives market returns.
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass rounded-xl mt-4 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Company</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Ticker</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Jobs Added</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Hiring Growth</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">YTD Stock</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, i) => (
                <motion.tr
                  key={entry.symbol}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
                  className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-slate-900">{entry.companyName}</td>
                  <td className="px-5 py-3 text-slate-500 font-mono text-xs">{entry.symbol}</td>
                  <td className="px-5 py-3 text-right tabular-nums text-slate-700">
                    {entry.netAdded.toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums text-slate-700">
                    +{entry.growthPercent}%
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums">
                    <span className={`inline-flex items-center gap-1 font-medium ${entry.ytdStockChange >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {entry.ytdStockChange >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {entry.ytdStockChange >= 0 ? '+' : ''}{entry.ytdStockChange}%
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div>
      <SectionHeader
        title="Hiring & Stock Performance"
        subtitle="How markets reward companies that invest in talent"
        icon={<TrendingUp size={18} />}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[0, 1, 2].map(i => (
          <div key={i} className="glass rounded-xl p-5 animate-pulse">
            <div className="flex items-center justify-between mb-3">
              <div className="h-3 w-24 bg-slate-200 rounded" />
              <div className="w-8 h-8 bg-slate-100 rounded-lg" />
            </div>
            <div className="h-8 w-20 bg-slate-200 rounded mt-2" />
            <div className="h-3 w-32 bg-slate-100 rounded mt-3" />
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-6 mt-4 animate-pulse">
        <div className="h-[400px] bg-slate-100 rounded-lg" />
      </div>
      <div className="glass rounded-xl p-4 mt-4 animate-pulse">
        <div className="space-y-3">
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className="h-10 bg-slate-100 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
