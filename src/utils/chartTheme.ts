export const colors = {
  primary: '#059669',       // emerald-600 — growth bars, hero
  primaryLight: '#10b981',  // emerald-500
  primaryBg: '#ecfdf5',     // emerald-50
  primaryBorder: '#a7f3d0', // emerald-200
  ai: '#2563eb',            // blue-600 — AI companies
  aiBg: '#eff6ff',          // blue-50
  defense: '#7c3aed',       // violet-600 — defense tech
  defenseBg: '#f5f3ff',     // violet-50
  cyber: '#0891b2',         // cyan-600
  healthcare: '#dc2626',    // red-600
  semis: '#ea580c',         // orange-600
  infra: '#ca8a04',         // yellow-600
  saas: '#4f46e5',          // indigo-600
  other: '#64748b',         // slate-500
  text: '#1e293b',          // slate-800
  textSecondary: '#64748b', // slate-500
  textMuted: '#94a3b8',     // slate-400
  border: '#e2e8f0',        // slate-200
  bg: '#f5f5f7',
  cardBg: '#ffffff',
  up: '#059669',            // emerald-600 — growth = good
  down: '#e11d48',          // rose-600 — decline = bad
};

export const sectorColors: Record<string, string> = {
  'AI-Native': colors.ai,
  'Big Tech': colors.primaryLight,
  'Defense Tech': colors.defense,
  'Cybersecurity': colors.cyber,
  'Healthcare': colors.healthcare,
  'Semiconductors': colors.semis,
  'Infrastructure': colors.infra,
  'SaaS/Enterprise': colors.saas,
  'Fintech': '#059669',         // emerald-600
  'Robotics': '#9333ea',        // purple-600
  'Energy': '#16a34a',          // green-600
  'Consulting': '#0d9488',      // teal-600
  'Other': colors.other,
};

export const chartConfig = {
  tooltip: {
    contentStyle: {
      background: '#ffffff',
      border: 'none',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
      padding: '12px 16px',
      fontSize: '13px',
    },
    labelStyle: {
      color: colors.text,
      fontWeight: 600,
      marginBottom: '4px',
    },
  },
  grid: {
    strokeDasharray: '3 3',
    stroke: '#e2e8f0',
  },
  axis: {
    tick: { fill: colors.textSecondary, fontSize: 12 },
    axisLine: false,
    tickLine: false,
  },
};
