import { companyTickers } from '../data/tickers';

const CACHE_KEY = 'finnhub_stock_data';

export interface StockCorrelationEntry {
  symbol: string;
  companyName: string;
  netAdded: number;
  growthPercent: number;
  ytdStockChange: number;
  dailyPrices: { date: string; close: number }[];
}

interface FinnhubCandle {
  s: string; // status: "ok" or "no_data"
  c: number[]; // close prices
  h: number[]; // high
  l: number[]; // low
  o: number[]; // open
  v: number[]; // volume
  t: number[]; // timestamps (unix)
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchCandles(symbol: string): Promise<FinnhubCandle | null> {
  const now = Math.floor(Date.now() / 1000);
  const oneYearAgo = now - 365 * 24 * 60 * 60;

  try {
    const res = await fetch(
      `/api/finnhub?symbol=${encodeURIComponent(symbol)}&from=${oneYearAgo}&to=${now}&resolution=D`
    );
    if (!res.ok) return null;
    const data: FinnhubCandle = await res.json();
    if (data.s !== 'ok' || !data.c || data.c.length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

export async function fetchHiringStockCorrelation(
  companies: { company: string; netAdded: number; growthPercent: number }[]
): Promise<StockCorrelationEntry[]> {
  // Check sessionStorage cache
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached) as StockCorrelationEntry[];
    }
  } catch {
    // continue
  }

  // Filter to companies with known tickers, take top 15 by netAdded
  const withTickers = companies
    .filter(c => companyTickers[c.company])
    .sort((a, b) => b.netAdded - a.netAdded)
    .slice(0, 15);

  const results: StockCorrelationEntry[] = [];

  for (const company of withTickers) {
    const symbol = companyTickers[company.company];
    const candles = await fetchCandles(symbol);

    if (candles && candles.c.length > 1) {
      const firstClose = candles.c[0];
      const lastClose = candles.c[candles.c.length - 1];
      const ytdStockChange = ((lastClose - firstClose) / firstClose) * 100;

      const dailyPrices = candles.t.map((ts, i) => ({
        date: new Date(ts * 1000).toISOString().slice(0, 10),
        close: candles.c[i],
      }));

      results.push({
        symbol,
        companyName: company.company,
        netAdded: company.netAdded,
        growthPercent: company.growthPercent,
        ytdStockChange: Math.round(ytdStockChange * 10) / 10,
        dailyPrices,
      });
    }

    // Rate limit: 200ms between requests
    await sleep(200);
  }

  results.sort((a, b) => b.ytdStockChange - a.ytdStockChange);

  // Cache results
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(results));
  } catch {
    // Storage full or unavailable
  }

  return results;
}
