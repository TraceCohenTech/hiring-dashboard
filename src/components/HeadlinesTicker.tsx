import { Quote, BarChart3, Newspaper } from 'lucide-react';
import type { Headline } from '../types';

interface HeadlinesTickerProps {
  headlines: Headline[];
}

const typeConfig = {
  quote: { icon: Quote, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  stat: { icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
  headline: { icon: Newspaper, color: 'text-violet-600', bg: 'bg-violet-50' },
};

export default function HeadlinesTicker({ headlines }: HeadlinesTickerProps) {
  const doubled = [...headlines, ...headlines];

  return (
    <div className="glass rounded-xl overflow-hidden transition-shadow duration-300">
      <div className="overflow-hidden">
        <div className="ticker-track">
          {doubled.map((h, i) => {
            const cfg = typeConfig[h.type];
            const Icon = cfg.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 shrink-0 border-r border-slate-100"
              >
                <div className={`flex items-center justify-center w-7 h-7 rounded-lg ${cfg.bg} shrink-0`}>
                  <Icon size={14} className={cfg.color} />
                </div>
                <span className="text-sm text-slate-700 whitespace-nowrap font-medium">
                  {h.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
