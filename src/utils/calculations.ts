import type { HiringEntry, SectorData, GrowthTimelinePoint } from '../types';
import { sectorColors } from './chartTheme';

export function calcKPIs(data: HiringEntry[]) {
  const totalJobsAdded = data.reduce((sum, c) => sum + c.netAdded, 0);
  const companiesGrowing = data.length;
  const avgGrowthRate = data.reduce((sum, c) => sum + c.growthPercent, 0) / data.length;
  const aiDrivenCount = data.filter(c => c.aiRelated).length;

  const sorted = [...data].sort((a, b) => b.growthPercent - a.growthPercent);
  const fastestGrower = sorted[0];

  const sortedByNet = [...data].sort((a, b) => b.netAdded - a.netAdded);
  const largestAdder = sortedByNet[0];

  return {
    totalJobsAdded,
    companiesGrowing,
    avgGrowthRate: Math.round(avgGrowthRate),
    aiDrivenCount,
    fastestGrower,
    largestAdder,
  };
}

export function calcSectorData(data: HiringEntry[]): SectorData[] {
  const map = new Map<string, { totalAdded: number; companies: number }>();

  for (const c of data) {
    const existing = map.get(c.sector) || { totalAdded: 0, companies: 0 };
    existing.totalAdded += c.netAdded;
    existing.companies += 1;
    map.set(c.sector, existing);
  }

  return Array.from(map.entries())
    .map(([sector, val]) => ({
      sector,
      totalAdded: val.totalAdded,
      companies: val.companies,
      color: sectorColors[sector] || '#64748b',
    }))
    .sort((a, b) => b.totalAdded - a.totalAdded);
}

export function calcTopGrowers(data: HiringEntry[], limit = 20): HiringEntry[] {
  return [...data].sort((a, b) => b.netAdded - a.netAdded).slice(0, limit);
}

export function calcAIBoom(data: HiringEntry[]) {
  return data
    .filter(c => c.sector === 'AI-Native')
    .map(c => ({
      company: c.company,
      multiple: +(c.currentCount / c.previousCount).toFixed(1),
      netAdded: c.netAdded,
      from: c.previousCount,
      to: c.currentCount,
    }))
    .sort((a, b) => b.multiple - a.multiple);
}

export function calcGrowthTimeline(data: HiringEntry[]): GrowthTimelinePoint[] {
  const sorted = [...data].sort((a, b) => b.netAdded - a.netAdded);
  const points: GrowthTimelinePoint[] = [];
  let cumulative = 0;

  for (const c of sorted) {
    cumulative += c.netAdded;
    points.push({ label: c.company, cumulative });
  }

  return points;
}

export function calcGrowthVsLayoffs(): Array<{
  company: string;
  layoffs2023: number;
  netGrowth: string;
  currentCount: string;
  verdict: string;
}> {
  return [
    { company: 'Meta', layoffs2023: 21000, netGrowth: '+4,800', currentCount: '78.8K', verdict: 'Net positive — surpassed pre-layoff levels' },
    { company: 'Alphabet', layoffs2023: 12000, netGrowth: '+7,000', currentCount: '190K', verdict: 'Net positive — higher than pre-layoff peak' },
    { company: 'Amazon', layoffs2023: 27000, netGrowth: '+20,000', currentCount: '1.57M', verdict: 'Net positive — resumed steady hiring' },
    { company: 'Microsoft', layoffs2023: 10000, netGrowth: '+2,000', currentCount: '230K', verdict: 'Net positive — rebuilt with AI-first roles' },
    { company: 'Netflix', layoffs2023: 450, netGrowth: '+3,000', currentCount: '16K', verdict: 'Net positive — rapid growth post-correction' },
  ];
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K`;
  return num.toLocaleString();
}
