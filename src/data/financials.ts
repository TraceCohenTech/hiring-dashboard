import type { CompanyFinancials } from '../types';

// Revenue data for ~23 major tech companies
// Sources: Bullfincher.io, MacroTrends, public filings (TTM or FY2025)
// revenuePerEmployee is pre-computed: revenueMillions * 1_000_000 / employeeCount

export const financialsData: CompanyFinancials[] = [
  // Big Tech
  { company: 'NVIDIA', sector: 'Big Tech', revenueMillions: 130497, employeeCount: 42000, revenuePerEmployee: 3107071 },
  { company: 'Apple', sector: 'Big Tech', revenueMillions: 391035, employeeCount: 166000, revenuePerEmployee: 2355030 },
  { company: 'Meta', sector: 'Big Tech', revenueMillions: 164710, employeeCount: 78800, revenuePerEmployee: 2090228 },
  { company: 'Alphabet', sector: 'Big Tech', revenueMillions: 350018, employeeCount: 190000, revenuePerEmployee: 1842200 },
  { company: 'Netflix', sector: 'Big Tech', revenueMillions: 38280, employeeCount: 16000, revenuePerEmployee: 2392500 },
  { company: 'Microsoft', sector: 'Big Tech', revenueMillions: 254190, employeeCount: 230000, revenuePerEmployee: 1105174 },
  { company: 'Amazon', sector: 'Big Tech', revenueMillions: 637997, employeeCount: 1570000, revenuePerEmployee: 406367 },
  { company: 'Uber', sector: 'Big Tech', revenueMillions: 43953, employeeCount: 34000, revenuePerEmployee: 1292735 },

  // Semiconductors
  { company: 'Broadcom', sector: 'Semiconductors', revenueMillions: 51574, employeeCount: 24000, revenuePerEmployee: 2148917 },
  { company: 'TSMC', sector: 'Semiconductors', revenueMillions: 89297, employeeCount: 83800, revenuePerEmployee: 1065597 },
  { company: 'AMD', sector: 'Semiconductors', revenueMillions: 25785, employeeCount: 31000, revenuePerEmployee: 831452 },

  // Cybersecurity
  { company: 'Palo Alto Networks', sector: 'Cybersecurity', revenueMillions: 8155, employeeCount: 16000, revenuePerEmployee: 509688 },
  { company: 'CrowdStrike', sector: 'Cybersecurity', revenueMillions: 3954, employeeCount: 10118, revenuePerEmployee: 390789 },
  { company: 'Zscaler', sector: 'Cybersecurity', revenueMillions: 2300, employeeCount: 8200, revenuePerEmployee: 280488 },
  { company: 'Cloudflare', sector: 'Cybersecurity', revenueMillions: 1870, employeeCount: 4263, revenuePerEmployee: 438704 },

  // Defense Tech
  { company: 'Anduril', sector: 'Defense Tech', revenueMillions: 1000, employeeCount: 6200, revenuePerEmployee: 161290 },
  { company: 'SpaceX', sector: 'Defense Tech', revenueMillions: 15000, employeeCount: 17800, revenuePerEmployee: 842697 },
  { company: 'Palantir', sector: 'Defense Tech', revenueMillions: 2870, employeeCount: 4414, revenuePerEmployee: 650204 },

  // SaaS/Enterprise
  { company: 'ServiceNow', sector: 'SaaS/Enterprise', revenueMillions: 10984, employeeCount: 24400, revenuePerEmployee: 450164 },
  { company: 'Snowflake', sector: 'SaaS/Enterprise', revenueMillions: 3400, employeeCount: 6500, revenuePerEmployee: 523077 },
  { company: 'Stripe', sector: 'SaaS/Enterprise', revenueMillions: 18600, employeeCount: 10000, revenuePerEmployee: 1860000 },

  // Healthcare
  { company: 'Eli Lilly', sector: 'Healthcare', revenueMillions: 45040, employeeCount: 50000, revenuePerEmployee: 900800 },
  { company: 'UnitedHealth Group', sector: 'Healthcare', revenueMillions: 400278, employeeCount: 400000, revenuePerEmployee: 1000695 },

  // AI-Native
  { company: 'OpenAI', sector: 'AI-Native', revenueMillions: 5000, employeeCount: 7216, revenuePerEmployee: 692750 },
  { company: 'Anthropic', sector: 'AI-Native', revenueMillions: 2000, employeeCount: 4074, revenuePerEmployee: 490918 },
  { company: 'Databricks', sector: 'AI-Native', revenueMillions: 2400, employeeCount: 10000, revenuePerEmployee: 240000 },
];
