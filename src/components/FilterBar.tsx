import { Search, Filter } from 'lucide-react';
import type { FilterState } from '../types';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  sectors: string[];
}

export default function FilterBar({ filters, onFilterChange, sectors }: FilterBarProps) {
  return (
    <div className="glass rounded-xl p-4 flex flex-col sm:flex-row gap-3 transition-shadow duration-300">
      <div className="relative flex-1">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search companies..."
          value={filters.search}
          onChange={e => onFilterChange({ ...filters, search: e.target.value })}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
        />
      </div>
      <div className="relative">
        <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <select
          value={filters.sector}
          onChange={e => onFilterChange({ ...filters, sector: e.target.value })}
          className="pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 appearance-none cursor-pointer focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
        >
          <option value="">All Sectors</option>
          {sectors.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
