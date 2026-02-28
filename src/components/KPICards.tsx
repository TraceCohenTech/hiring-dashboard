import { motion } from 'framer-motion';
import { Users, Building2, TrendingUp, Brain, Zap, Plus } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { formatNumber } from '../utils/calculations';
import type { HiringEntry } from '../types';

interface KPICardsProps {
  totalJobsAdded: number;
  companiesGrowing: number;
  avgGrowthRate: number;
  aiDrivenCount: number;
  fastestGrower: HiringEntry;
  largestAdder: HiringEntry;
}

export default function KPICards({
  totalJobsAdded,
  companiesGrowing,
  avgGrowthRate,
  aiDrivenCount,
  fastestGrower,
  largestAdder,
}: KPICardsProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const primaryCards = [
    {
      label: 'Total Jobs Added',
      value: totalJobsAdded,
      format: formatNumber,
      prefix: '+',
      icon: Users,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      label: 'Companies Growing',
      value: companiesGrowing,
      format: (n: number) => n.toString(),
      prefix: '',
      icon: Building2,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Avg Growth Rate',
      value: avgGrowthRate,
      format: (n: number) => `${n}%`,
      prefix: '',
      icon: TrendingUp,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
    },
    {
      label: 'AI-Driven Growth',
      value: aiDrivenCount,
      format: (n: number) => n.toString(),
      prefix: '',
      suffix: ` of ${companiesGrowing}`,
      icon: Brain,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
  ];

  return (
    <div ref={ref} className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {primaryCards.map((card, i) => (
          <PrimaryCard key={card.label} card={card} inView={inView} delay={i * 0.08} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SecondaryCard
          icon={Zap}
          label="Fastest Grower"
          value={`${fastestGrower.company}`}
          detail={`${fastestGrower.growthPercent.toLocaleString()}% growth (${formatNumber(fastestGrower.previousCount)} → ${formatNumber(fastestGrower.currentCount)})`}
          color="text-amber-600"
          bg="bg-amber-50"
          inView={inView}
          delay={0.4}
        />
        <SecondaryCard
          icon={Plus}
          label="Largest Adder"
          value={`${largestAdder.company}`}
          detail={`+${formatNumber(largestAdder.netAdded)} jobs (now ${formatNumber(largestAdder.currentCount)})`}
          color="text-emerald-600"
          bg="bg-emerald-50"
          inView={inView}
          delay={0.48}
        />
      </div>
    </div>
  );
}

function PrimaryCard({
  card,
  inView,
  delay,
}: {
  card: {
    label: string;
    value: number;
    format: (n: number) => string;
    prefix: string;
    suffix?: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
    bg: string;
  };
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp({ end: card.value, duration: 2000, delay: delay * 1000, enabled: inView });
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-5 transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {card.label}
        </span>
        <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${card.bg}`}>
          <Icon size={16} className={card.color} />
        </div>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-slate-900 tabular-nums">
        {card.prefix}{card.format(count)}{card.suffix || ''}
      </div>
    </motion.div>
  );
}

function SecondaryCard({
  icon: Icon,
  label,
  value,
  detail,
  color,
  bg,
  inView,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  detail: string;
  color: string;
  bg: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-5 flex items-center gap-4 transition-shadow duration-300"
    >
      <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${bg} shrink-0`}>
        <Icon size={20} className={color} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{label}</p>
        <p className="text-lg font-bold text-slate-900 truncate">{value}</p>
        <p className="text-xs text-slate-500 truncate">{detail}</p>
      </div>
    </motion.div>
  );
}
