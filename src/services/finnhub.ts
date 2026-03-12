import { companyTickers } from '../data/tickers';

const CACHE_KEY = 'stock_correlation_v2';

export interface StockCorrelationEntry {
  symbol: string;
  companyName: string;
  netAdded: number;
  growthPercent: number;
  ytdStockChange: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchYTDChange(symbol: string): Promise<number | null> {
  const now = Math.floor(Date.now() / 1000);
  const oneYearAgo = now - 365 * 24 * 60 * 60;

  try {
    const res = await fetch(`/api/finnhub?symbol=${encodeURIComponent(symbol)}&from=${oneYearAgo}&to=${now}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (!data.timestamps || !data.closes || data.closes.length < 2) return null;

    const firstClose = data.closes[0];
    const lastClose = data.closes[data.closes.length - 1];
    if (!firstClose || !lastClose) return null;

    return ((lastClose - firstClose) / firstClose) * 100;
  } catch {
    return null;
  }
}

export async function fetchHiringStockCorrelation(
  companies: { company: string; netAdded: number; growthPercent: number }[]
): Promise<StockCorrelationEntry[]> {
  // Check cache
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached) as StockCorrelationEntry[];
    }
  } catch { /* continue */ }

  const withTickers = companies
    .filter(c => companyTickers[c.company])
    .sort((a, b) => b.netAdded - a.netAdded)
    .slice(0, 15);

  const results: StockCorrelationEntry[] = [];

  for (const company of withTickers) {
    const symbol = companyTickers[company.company];
    const change = await fetchYTDChange(symbol);

    if (change !== null) {
      results.push({
        symbol,
        companyName: company.company,
        netAdded: company.netAdded,
        growthPercent: company.growthPercent,
        ytdStockChange: Math.round(change * 10) / 10,
      });
    }

    await sleep(300);
  }

  results.sort((a, b) => b.ytdStockChange - a.ytdStockChange);

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(results));
  } catch { /* ignore */ }

  return results;
}
