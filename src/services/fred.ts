const CACHE_KEY = 'fred_macro_data';

export interface FredDataPoint {
  date: string; // YYYY-MM
  jobOpenings: number;
  nonfarmPayrolls: number;
  laborForceParticipation: number;
}

interface FredObservation {
  date: string;
  value: string;
}

interface FredResponse {
  observations: FredObservation[];
}

async function fetchSeries(seriesId: string): Promise<Map<string, number>> {
  const res = await fetch(`/api/fred?series_id=${encodeURIComponent(seriesId)}`);
  if (!res.ok) throw new Error(`FRED API error for ${seriesId}: ${res.status}`);

  const data: FredResponse = await res.json();
  const map = new Map<string, number>();

  for (const obs of data.observations) {
    if (obs.value === '.') continue; // FRED uses '.' for missing values
    const ym = obs.date.slice(0, 7); // YYYY-MM
    map.set(ym, parseFloat(obs.value));
  }

  return map;
}

export async function fetchFredData(): Promise<FredDataPoint[]> {
  // Check sessionStorage cache
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached) as FredDataPoint[];
    }
  } catch {
    // sessionStorage may be unavailable — continue
  }

  try {
    const [jobOpenings, nonfarmPayrolls, laborForce] = await Promise.all([
      fetchSeries('JTSJOL'),
      fetchSeries('PAYEMS'),
      fetchSeries('CIVPART'),
    ]);

    // Collect all unique dates
    const allDates = new Set<string>();
    jobOpenings.forEach((_, k) => allDates.add(k));
    nonfarmPayrolls.forEach((_, k) => allDates.add(k));
    laborForce.forEach((_, k) => allDates.add(k));

    // Merge by date — only include dates where all 3 series have data
    const merged: FredDataPoint[] = [];
    const sortedDates = Array.from(allDates).sort();

    for (const date of sortedDates) {
      const jo = jobOpenings.get(date);
      const nfp = nonfarmPayrolls.get(date);
      const lfp = laborForce.get(date);

      if (jo !== undefined && nfp !== undefined && lfp !== undefined) {
        merged.push({
          date,
          jobOpenings: jo,
          nonfarmPayrolls: nfp,
          laborForceParticipation: lfp,
        });
      }
    }

    // Cache results
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(merged));
    } catch {
      // Storage full or unavailable — ignore
    }

    return merged;
  } catch (err) {
    console.error('Failed to fetch FRED data:', err);
    return [];
  }
}
