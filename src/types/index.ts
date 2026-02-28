export interface HiringEntry {
  company: string;
  sector: string;
  previousCount: number;
  currentCount: number;
  netAdded: number;
  growthPercent: number;
  aiRelated: boolean;
  description?: string;
}

export interface Headline {
  text: string;
  source: string;
  type: 'quote' | 'stat' | 'headline';
}

export interface SectorData {
  sector: string;
  totalAdded: number;
  companies: number;
  color: string;
}

export interface FilterState {
  search: string;
  sector: string;
}

export interface GrowthTimelinePoint {
  label: string;
  cumulative: number;
}
