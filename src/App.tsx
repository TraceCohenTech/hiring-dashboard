import { useState, useEffect, useMemo, useCallback } from 'react';
import { companies, sectors } from './data/companies';
import { headlines } from './data/headlines';
import { financialsData } from './data/financials';
import { historicalHeadcountData } from './data/historicalHeadcount';
import { calcKPIs, calcSectorData, calcTopGrowers, calcAIBoom, calcRevenuePerEmployee, calcEfficiencyMetrics } from './utils/calculations';
import type { FilterState } from './types';
import { fetchFredData } from './services/fred';
import type { FredDataPoint } from './services/fred';
import { fetchHiringStockCorrelation } from './services/finnhub';
import type { StockCorrelationEntry } from './services/finnhub';
import Header from './components/Header';
import HeadlinesTicker from './components/HeadlinesTicker';
import KPICards from './components/KPICards';
import FilterBar from './components/FilterBar';
import MacroIndicators from './components/MacroIndicators';
import AIBoomInsights from './components/AIBoomInsights';
import HiringScatter from './components/HiringScatter';
import AIAdoptionChart from './components/AIAdoptionChart';
import RevenuePerEmployee from './components/RevenuePerEmployee';
import EfficiencyMetrics from './components/EfficiencyMetrics';
import SectorChart from './components/SectorChart';
import HiringConcentration from './components/HiringConcentration';
import HistoricalHeadcount from './components/HistoricalHeadcount';
import TopGrowers from './components/TopGrowers';
import GrowthVsLayoffs from './components/GrowthVsLayoffs';
import StockCorrelation from './components/StockCorrelation';

// Pre-compute financial metrics (static data)
const revenueRanked = calcRevenuePerEmployee(financialsData, 20);

export default function App() {
  const [filters, setFilters] = useState<FilterState>({ search: '', sector: '' });
  const [fredData, setFredData] = useState<FredDataPoint[]>([]);
  const [fredLoading, setFredLoading] = useState(true);
  const [fredError, setFredError] = useState(false);
  const [stockData, setStockData] = useState<StockCorrelationEntry[]>([]);
  const [stockLoading, setStockLoading] = useState(true);
  const [stockError, setStockError] = useState(false);

  const loadFredData = useCallback(async () => {
    setFredLoading(true);
    setFredError(false);
    const data = await fetchFredData();
    if (data.length === 0) {
      setFredError(true);
    } else {
      setFredData(data);
    }
    setFredLoading(false);
  }, []);

  const loadStockData = useCallback(async () => {
    setStockLoading(true);
    setStockError(false);
    try {
      const data = await fetchHiringStockCorrelation(
        companies.map(c => ({ company: c.company, netAdded: c.netAdded, growthPercent: c.growthPercent }))
      );
      if (data.length === 0) {
        setStockError(true);
      } else {
        setStockData(data);
      }
    } catch {
      setStockError(true);
    }
    setStockLoading(false);
  }, []);

  useEffect(() => {
    loadFredData();
    loadStockData();
  }, [loadFredData, loadStockData]);

  const filtered = useMemo(() => {
    return companies.filter(c => {
      const matchSearch = !filters.search ||
        c.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        c.sector.toLowerCase().includes(filters.search.toLowerCase());
      const matchSector = !filters.sector || c.sector === filters.sector;
      return matchSearch && matchSector;
    });
  }, [filters]);

  const kpis = useMemo(() => calcKPIs(filtered), [filtered]);
  const sectorData = useMemo(() => calcSectorData(filtered), [filtered]);
  const topGrowers = useMemo(() => calcTopGrowers(filtered, 20), [filtered]);
  const aiBoom = useMemo(() => calcAIBoom(companies), []);
  const allKpis = useMemo(() => calcKPIs(companies), []);
  const efficiencyMetrics = useMemo(() => calcEfficiencyMetrics(financialsData, filtered), [filtered]);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Hero */}
        <Header
          totalJobsAdded={allKpis.totalJobsAdded}
          companiesCount={companies.length}
          sectorsCount={sectors.length}
        />

        {/* Ticker */}
        <HeadlinesTicker headlines={headlines} />

        {/* KPIs */}
        <KPICards
          totalJobsAdded={kpis.totalJobsAdded}
          companiesGrowing={kpis.companiesGrowing}
          avgGrowthRate={kpis.avgGrowthRate}
          aiDrivenCount={kpis.aiDrivenCount}
          fastestGrower={kpis.fastestGrower}
          largestAdder={kpis.largestAdder}
        />

        {/* Filters */}
        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          sectors={sectors}
        />

        {/* Macro Context — FRED economic indicators */}
        <MacroIndicators
          data={fredData}
          loading={fredLoading}
          error={fredError}
          onRetry={loadFredData}
        />

        {/* Hiring & Stock Performance — Finnhub correlation */}
        <StockCorrelation
          data={stockData}
          loading={stockLoading}
          error={stockError}
          onRetry={loadStockData}
        />

        {/* Historical Headcount — multi-year trends */}
        <HistoricalHeadcount data={historicalHeadcountData} />

        {/* The Hiring Map — scatter/bubble chart */}
        <HiringScatter data={filtered} />

        {/* AI Boom — startup growth multiples */}
        <AIBoomInsights data={aiBoom} />

        {/* Top Growers — expandable rows */}
        <TopGrowers data={topGrowers} financials={financialsData} histories={historicalHeadcountData} />

        {/* Revenue Efficiency */}
        <RevenuePerEmployee data={revenueRanked} />

        {/* AI Penetration by Sector — stacked adoption bars */}
        <AIAdoptionChart data={filtered} />

        <EfficiencyMetrics data={efficiencyMetrics} />

        {/* The Power Law — hiring concentration curve */}
        <HiringConcentration data={filtered} />

        {/* Sector Chart — with drill-down */}
        <SectorChart data={sectorData} companies={filtered} />

        {/* Growth vs Layoffs — recovery narrative */}
        <GrowthVsLayoffs />

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-200">
          <p className="text-sm text-slate-400">
            Built by <a href="https://x.com/Trace_Cohen" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Trace Cohen</a>
          </p>
          <p className="text-xs text-slate-300 mt-1">
            Data sourced from public reports, SEC filings, and verified news
          </p>
          <p className="text-xs text-slate-300 mt-2">
            <a href="https://x.com/Trace_Cohen" target="_blank" rel="noopener noreferrer" className="hover:text-slate-500 transition-colors">@Trace_Cohen</a>
            <span className="mx-2">·</span>
            <a href="mailto:t@nyvp.com" className="hover:text-slate-500 transition-colors">t@nyvp.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
