import { motion } from 'framer-motion';
import { TrendingUp, Building2, Layers } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

interface HeaderProps {
  totalJobsAdded: number;
  companiesCount: number;
  sectorsCount: number;
}

export default function Header({ totalJobsAdded, companiesCount, sectorsCount }: HeaderProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const count = useCountUp({ end: totalJobsAdded, duration: 2500, enabled: inView });

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-8 md:p-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium tracking-wide uppercase">
            <TrendingUp size={13} />
            Hiring Boom Tracker
          </div>
        </div>

        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-5xl md:text-7xl font-bold tracking-tight tabular-nums">
            {count.toLocaleString()}+
          </span>
        </div>

        <p className="text-xl md:text-2xl font-medium text-emerald-100 mb-6">
          jobs created across high-growth companies
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
            <Building2 size={15} className="text-emerald-300" />
            <span className="font-semibold">{companiesCount}</span>
            <span className="text-emerald-200">companies growing</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
            <Layers size={15} className="text-emerald-300" />
            <span className="font-semibold">{sectorsCount}</span>
            <span className="text-emerald-200">sectors tracked</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
