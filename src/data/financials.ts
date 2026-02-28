import type { CompanyFinancials } from '../types';

// Revenue data for major companies on the dashboard
// Sources: Bullfincher.io, MacroTrends, public filings (TTM or FY2025)
// revenuePerEmployee is pre-computed: revenueMillions * 1_000_000 / employeeCount

export const financialsData: CompanyFinancials[] = [
  // Big Tech
  { company: 'NVIDIA', sector: 'Big Tech', revenueMillions: 130497, employeeCount: 42000, revenuePerEmployee: 3107071 },
  { company: 'Netflix', sector: 'Big Tech', revenueMillions: 38280, employeeCount: 16000, revenuePerEmployee: 2392500 },
  { company: 'Apple', sector: 'Big Tech', revenueMillions: 391035, employeeCount: 166000, revenuePerEmployee: 2355030 },
  { company: 'PDD Holdings', sector: 'Big Tech', revenueMillions: 53400, employeeCount: 23465, revenuePerEmployee: 2275143 },
  { company: 'Meta', sector: 'Big Tech', revenueMillions: 164710, employeeCount: 78800, revenuePerEmployee: 2090228 },
  { company: 'Alphabet', sector: 'Big Tech', revenueMillions: 350018, employeeCount: 190000, revenuePerEmployee: 1842200 },
  { company: 'Uber', sector: 'Big Tech', revenueMillions: 43953, employeeCount: 34000, revenuePerEmployee: 1292735 },
  { company: 'Roblox', sector: 'Big Tech', revenueMillions: 3600, employeeCount: 3065, revenuePerEmployee: 1174551 },
  { company: 'AppLovin', sector: 'Big Tech', revenueMillions: 4700, employeeCount: 4200, revenuePerEmployee: 1119048 },
  { company: 'Microsoft', sector: 'Big Tech', revenueMillions: 254190, employeeCount: 228000, revenuePerEmployee: 1114868 },
  { company: 'ByteDance', sector: 'Big Tech', revenueMillions: 120000, employeeCount: 120000, revenuePerEmployee: 1000000 },
  { company: 'Instacart', sector: 'Big Tech', revenueMillions: 3100, employeeCount: 3500, revenuePerEmployee: 885714 },
  { company: 'Pinterest', sector: 'Big Tech', revenueMillions: 3600, employeeCount: 4400, revenuePerEmployee: 818182 },
  { company: 'Shopify', sector: 'Big Tech', revenueMillions: 8900, employeeCount: 11600, revenuePerEmployee: 767241 },
  { company: 'Snap', sector: 'Big Tech', revenueMillions: 5400, employeeCount: 5800, revenuePerEmployee: 931034 },
  { company: 'Spotify', sector: 'Big Tech', revenueMillions: 16500, employeeCount: 9500, revenuePerEmployee: 1736842 },
  { company: 'Salesforce', sector: 'Big Tech', revenueMillions: 37884, employeeCount: 76453, revenuePerEmployee: 495512 },
  { company: 'DoorDash', sector: 'Big Tech', revenueMillions: 10700, employeeCount: 23700, revenuePerEmployee: 451477 },
  { company: 'Amazon', sector: 'Big Tech', revenueMillions: 637997, employeeCount: 1570000, revenuePerEmployee: 406367 },
  { company: 'Oracle', sector: 'Big Tech', revenueMillions: 56070, employeeCount: 162000, revenuePerEmployee: 346111 },

  // Semiconductors
  { company: 'Broadcom', sector: 'Semiconductors', revenueMillions: 51574, employeeCount: 24000, revenuePerEmployee: 2148917 },
  { company: 'TSMC', sector: 'Semiconductors', revenueMillions: 89297, employeeCount: 83800, revenuePerEmployee: 1065597 },
  { company: 'AMD', sector: 'Semiconductors', revenueMillions: 25785, employeeCount: 31000, revenuePerEmployee: 831452 },
  { company: 'Marvell', sector: 'Semiconductors', revenueMillions: 5510, employeeCount: 7042, revenuePerEmployee: 782449 },
  { company: 'Micron', sector: 'Semiconductors', revenueMillions: 29100, employeeCount: 53000, revenuePerEmployee: 549057 },
  { company: 'Arm Holdings', sector: 'Semiconductors', revenueMillions: 3400, employeeCount: 7200, revenuePerEmployee: 472222 },

  // Cybersecurity
  { company: 'Palo Alto Networks', sector: 'Cybersecurity', revenueMillions: 8155, employeeCount: 16000, revenuePerEmployee: 509688 },
  { company: 'Cloudflare', sector: 'Cybersecurity', revenueMillions: 1870, employeeCount: 4263, revenuePerEmployee: 438704 },
  { company: 'CrowdStrike', sector: 'Cybersecurity', revenueMillions: 3954, employeeCount: 10118, revenuePerEmployee: 390789 },
  { company: 'Zscaler', sector: 'Cybersecurity', revenueMillions: 2300, employeeCount: 8200, revenuePerEmployee: 280488 },
  { company: 'SentinelOne', sector: 'Cybersecurity', revenueMillions: 700, employeeCount: 2800, revenuePerEmployee: 250000 },

  // Defense Tech
  { company: 'SpaceX', sector: 'Defense Tech', revenueMillions: 15000, employeeCount: 17800, revenuePerEmployee: 842697 },
  { company: 'Palantir', sector: 'Defense Tech', revenueMillions: 2870, employeeCount: 4414, revenuePerEmployee: 650204 },
  { company: 'RTX (Raytheon)', sector: 'Defense Tech', revenueMillions: 79250, employeeCount: 186000, revenuePerEmployee: 426075 },
  { company: 'Northrop Grumman', sector: 'Defense Tech', revenueMillions: 39300, employeeCount: 101000, revenuePerEmployee: 389109 },
  { company: 'L3Harris', sector: 'Defense Tech', revenueMillions: 20700, employeeCount: 53000, revenuePerEmployee: 390566 },
  { company: 'General Dynamics', sector: 'Defense Tech', revenueMillions: 42270, employeeCount: 117000, revenuePerEmployee: 361282 },
  { company: 'Booz Allen Hamilton', sector: 'Defense Tech', revenueMillions: 10700, employeeCount: 35800, revenuePerEmployee: 298883 },
  { company: 'Anduril', sector: 'Defense Tech', revenueMillions: 1000, employeeCount: 6200, revenuePerEmployee: 161290 },
  { company: 'Rocket Lab', sector: 'Defense Tech', revenueMillions: 436, employeeCount: 2800, revenuePerEmployee: 155714 },

  // SaaS/Enterprise
  { company: 'Stripe', sector: 'SaaS/Enterprise', revenueMillions: 18600, employeeCount: 10000, revenuePerEmployee: 1860000 },
  { company: 'Duolingo', sector: 'SaaS/Enterprise', revenueMillions: 750, employeeCount: 1000, revenuePerEmployee: 750000 },
  { company: 'Snowflake', sector: 'SaaS/Enterprise', revenueMillions: 3400, employeeCount: 6500, revenuePerEmployee: 523077 },
  { company: 'ServiceNow', sector: 'SaaS/Enterprise', revenueMillions: 10984, employeeCount: 24400, revenuePerEmployee: 450164 },
  { company: 'Toast', sector: 'SaaS/Enterprise', revenueMillions: 4300, employeeCount: 5800, revenuePerEmployee: 741379 },
  { company: 'Atlassian', sector: 'SaaS/Enterprise', revenueMillions: 4600, employeeCount: 13813, revenuePerEmployee: 333044 },
  { company: 'Datadog', sector: 'SaaS/Enterprise', revenueMillions: 2680, employeeCount: 8100, revenuePerEmployee: 330864 },
  { company: 'Samsara', sector: 'SaaS/Enterprise', revenueMillions: 1000, employeeCount: 3100, revenuePerEmployee: 322581 },
  { company: 'HubSpot', sector: 'SaaS/Enterprise', revenueMillions: 2600, employeeCount: 8246, revenuePerEmployee: 315304 },

  // Healthcare
  { company: 'UnitedHealth Group', sector: 'Healthcare', revenueMillions: 400278, employeeCount: 400000, revenuePerEmployee: 1000695 },
  { company: 'Eli Lilly', sector: 'Healthcare', revenueMillions: 45040, employeeCount: 50000, revenuePerEmployee: 900800 },
  { company: 'Hims & Hers', sector: 'Healthcare', revenueMillions: 2200, employeeCount: 3200, revenuePerEmployee: 687500 },
  { company: 'Abbott Laboratories', sector: 'Healthcare', revenueMillions: 42300, employeeCount: 114000, revenuePerEmployee: 371053 },
  { company: 'Veeva Systems', sector: 'Healthcare', revenueMillions: 2500, employeeCount: 7200, revenuePerEmployee: 347222 },

  // AI-Native
  { company: 'Cursor', sector: 'AI-Native', revenueMillions: 1000, employeeCount: 300, revenuePerEmployee: 3333333 },
  { company: 'Midjourney', sector: 'AI-Native', revenueMillions: 500, employeeCount: 170, revenuePerEmployee: 2941176 },
  { company: 'OpenAI', sector: 'AI-Native', revenueMillions: 5000, employeeCount: 7216, revenuePerEmployee: 692750 },
  { company: 'Anthropic', sector: 'AI-Native', revenueMillions: 2000, employeeCount: 4074, revenuePerEmployee: 490918 },
  { company: 'Databricks', sector: 'AI-Native', revenueMillions: 2400, employeeCount: 10000, revenuePerEmployee: 240000 },

  // Fintech
  { company: 'Coinbase', sector: 'Fintech', revenueMillions: 6600, employeeCount: 4700, revenuePerEmployee: 1404255 },
  { company: 'Block (Square)', sector: 'Fintech', revenueMillions: 24100, employeeCount: 14000, revenuePerEmployee: 1721429 },

  // Energy
  { company: 'Vistra Energy', sector: 'Energy', revenueMillions: 17300, employeeCount: 7500, revenuePerEmployee: 2306667 },
  { company: 'NextEra Energy', sector: 'Energy', revenueMillions: 24500, employeeCount: 16500, revenuePerEmployee: 1484848 },

  // Other
  { company: 'BYD', sector: 'Other', revenueMillions: 107000, employeeCount: 700000, revenuePerEmployee: 152857 },
  { company: 'Costco', sector: 'Other', revenueMillions: 254200, employeeCount: 341000, revenuePerEmployee: 745161 },
  { company: 'Chipotle', sector: 'Other', revenueMillions: 11300, employeeCount: 120000, revenuePerEmployee: 94167 },
  { company: 'Carvana', sector: 'Other', revenueMillions: 15300, employeeCount: 8500, revenuePerEmployee: 1800000 },
  { company: 'On Holdings', sector: 'Other', revenueMillions: 2500, employeeCount: 3800, revenuePerEmployee: 657895 },
  { company: 'Dutch Bros', sector: 'Other', revenueMillions: 1100, employeeCount: 14000, revenuePerEmployee: 78571 },
  { company: 'Sprouts Farmers Market', sector: 'Other', revenueMillions: 7400, employeeCount: 35000, revenuePerEmployee: 211429 },

  // Consulting
  { company: 'Accenture', sector: 'Consulting', revenueMillions: 64900, employeeCount: 779000, revenuePerEmployee: 83312 },
];
