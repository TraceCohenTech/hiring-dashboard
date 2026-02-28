import type { CompanyFinancials } from '../types';

// Revenue data for major companies on the dashboard
// Sources: Bullfincher.io, MacroTrends, public filings (TTM or FY2025)
// revenuePerEmployee is pre-computed: revenueMillions * 1_000_000 / employeeCount

export const financialsData: CompanyFinancials[] = [
  // Big Tech
  { company: 'NVIDIA', sector: 'Big Tech', revenueMillions: 130497, employeeCount: 42000, revenuePerEmployee: 3107071 },
  { company: 'Netflix', sector: 'Big Tech', revenueMillions: 38280, employeeCount: 16000, revenuePerEmployee: 2392500 },
  { company: 'Apple', sector: 'Big Tech', revenueMillions: 391035, employeeCount: 166000, revenuePerEmployee: 2355030 },
  { company: 'Meta', sector: 'Big Tech', revenueMillions: 164710, employeeCount: 78800, revenuePerEmployee: 2090228 },
  { company: 'Alphabet', sector: 'Big Tech', revenueMillions: 350018, employeeCount: 190000, revenuePerEmployee: 1842200 },
  { company: 'Uber', sector: 'Big Tech', revenueMillions: 43953, employeeCount: 34000, revenuePerEmployee: 1292735 },
  { company: 'Microsoft', sector: 'Big Tech', revenueMillions: 254190, employeeCount: 228000, revenuePerEmployee: 1114868 },
  { company: 'Oracle', sector: 'Big Tech', revenueMillions: 56070, employeeCount: 162000, revenuePerEmployee: 346111 },
  { company: 'Salesforce', sector: 'Big Tech', revenueMillions: 37884, employeeCount: 76453, revenuePerEmployee: 495512 },
  { company: 'ByteDance', sector: 'Big Tech', revenueMillions: 120000, employeeCount: 120000, revenuePerEmployee: 1000000 },
  { company: 'PDD Holdings', sector: 'Big Tech', revenueMillions: 53400, employeeCount: 23465, revenuePerEmployee: 2275143 },
  { company: 'Amazon', sector: 'Big Tech', revenueMillions: 637997, employeeCount: 1570000, revenuePerEmployee: 406367 },
  { company: 'DoorDash', sector: 'Big Tech', revenueMillions: 10700, employeeCount: 23700, revenuePerEmployee: 451477 },
  { company: 'Roblox', sector: 'Big Tech', revenueMillions: 3600, employeeCount: 3065, revenuePerEmployee: 1174551 },

  // Semiconductors
  { company: 'Broadcom', sector: 'Semiconductors', revenueMillions: 51574, employeeCount: 24000, revenuePerEmployee: 2148917 },
  { company: 'TSMC', sector: 'Semiconductors', revenueMillions: 89297, employeeCount: 83800, revenuePerEmployee: 1065597 },
  { company: 'Micron', sector: 'Semiconductors', revenueMillions: 29100, employeeCount: 53000, revenuePerEmployee: 549057 },
  { company: 'AMD', sector: 'Semiconductors', revenueMillions: 25785, employeeCount: 31000, revenuePerEmployee: 831452 },
  { company: 'Marvell', sector: 'Semiconductors', revenueMillions: 5510, employeeCount: 7042, revenuePerEmployee: 782449 },

  // Cybersecurity
  { company: 'Palo Alto Networks', sector: 'Cybersecurity', revenueMillions: 8155, employeeCount: 16000, revenuePerEmployee: 509688 },
  { company: 'Cloudflare', sector: 'Cybersecurity', revenueMillions: 1870, employeeCount: 4263, revenuePerEmployee: 438704 },
  { company: 'CrowdStrike', sector: 'Cybersecurity', revenueMillions: 3954, employeeCount: 10118, revenuePerEmployee: 390789 },
  { company: 'Zscaler', sector: 'Cybersecurity', revenueMillions: 2300, employeeCount: 8200, revenuePerEmployee: 280488 },

  // Defense Tech
  { company: 'SpaceX', sector: 'Defense Tech', revenueMillions: 15000, employeeCount: 17800, revenuePerEmployee: 842697 },
  { company: 'Palantir', sector: 'Defense Tech', revenueMillions: 2870, employeeCount: 4414, revenuePerEmployee: 650204 },
  { company: 'RTX (Raytheon)', sector: 'Defense Tech', revenueMillions: 79250, employeeCount: 186000, revenuePerEmployee: 426075 },
  { company: 'Northrop Grumman', sector: 'Defense Tech', revenueMillions: 39300, employeeCount: 101000, revenuePerEmployee: 389109 },
  { company: 'General Dynamics', sector: 'Defense Tech', revenueMillions: 42270, employeeCount: 117000, revenuePerEmployee: 361282 },
  { company: 'Booz Allen Hamilton', sector: 'Defense Tech', revenueMillions: 10700, employeeCount: 35800, revenuePerEmployee: 298883 },
  { company: 'Anduril', sector: 'Defense Tech', revenueMillions: 1000, employeeCount: 6200, revenuePerEmployee: 161290 },

  // SaaS/Enterprise
  { company: 'Stripe', sector: 'SaaS/Enterprise', revenueMillions: 18600, employeeCount: 10000, revenuePerEmployee: 1860000 },
  { company: 'Datadog', sector: 'SaaS/Enterprise', revenueMillions: 2680, employeeCount: 8100, revenuePerEmployee: 330864 },
  { company: 'ServiceNow', sector: 'SaaS/Enterprise', revenueMillions: 10984, employeeCount: 24400, revenuePerEmployee: 450164 },
  { company: 'Snowflake', sector: 'SaaS/Enterprise', revenueMillions: 3400, employeeCount: 6500, revenuePerEmployee: 523077 },
  { company: 'Atlassian', sector: 'SaaS/Enterprise', revenueMillions: 4600, employeeCount: 13813, revenuePerEmployee: 333044 },
  { company: 'HubSpot', sector: 'SaaS/Enterprise', revenueMillions: 2600, employeeCount: 8246, revenuePerEmployee: 315304 },

  // Healthcare
  { company: 'UnitedHealth Group', sector: 'Healthcare', revenueMillions: 400278, employeeCount: 400000, revenuePerEmployee: 1000695 },
  { company: 'Eli Lilly', sector: 'Healthcare', revenueMillions: 45040, employeeCount: 50000, revenuePerEmployee: 900800 },
  { company: 'Abbott Laboratories', sector: 'Healthcare', revenueMillions: 42300, employeeCount: 114000, revenuePerEmployee: 371053 },

  // AI-Native
  { company: 'OpenAI', sector: 'AI-Native', revenueMillions: 5000, employeeCount: 7216, revenuePerEmployee: 692750 },
  { company: 'Anthropic', sector: 'AI-Native', revenueMillions: 2000, employeeCount: 4074, revenuePerEmployee: 490918 },
  { company: 'Databricks', sector: 'AI-Native', revenueMillions: 2400, employeeCount: 10000, revenuePerEmployee: 240000 },
  { company: 'Midjourney', sector: 'AI-Native', revenueMillions: 500, employeeCount: 170, revenuePerEmployee: 2941176 },
  { company: 'Cursor', sector: 'AI-Native', revenueMillions: 1000, employeeCount: 300, revenuePerEmployee: 3333333 },

  // Consulting
  { company: 'Accenture', sector: 'Consulting', revenueMillions: 64900, employeeCount: 779000, revenuePerEmployee: 83312 },

  // Other
  { company: 'Costco', sector: 'Other', revenueMillions: 254200, employeeCount: 341000, revenuePerEmployee: 745161 },
];
