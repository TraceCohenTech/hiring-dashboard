import type { HiringEntry } from '../types';

export const companies: HiringEntry[] = [
  // AI-Native
  { company: 'OpenAI', sector: 'AI-Native', previousCount: 770, currentCount: 7216, netAdded: 6446, growthPercent: 837, aiRelated: true, description: 'ChatGPT maker scaling from research lab to AI platform' },
  { company: 'Anthropic', sector: 'AI-Native', previousCount: 192, currentCount: 4074, netAdded: 3882, growthPercent: 2022, aiRelated: true, description: 'Claude AI creator grew 21x in two years' },
  { company: 'Perplexity', sector: 'AI-Native', previousCount: 50, currentCount: 1549, netAdded: 1499, growthPercent: 2998, aiRelated: true, description: 'AI search engine with explosive headcount growth' },
  { company: 'Mistral AI', sector: 'AI-Native', previousCount: 35, currentCount: 783, netAdded: 748, growthPercent: 2137, aiRelated: true, description: 'French AI lab building open-weight models' },
  { company: 'xAI', sector: 'AI-Native', previousCount: 50, currentCount: 650, netAdded: 600, growthPercent: 1200, aiRelated: true, description: 'Elon Musk AI venture building Grok' },
  { company: 'Databricks', sector: 'AI-Native', previousCount: 1300, currentCount: 10000, netAdded: 8700, growthPercent: 669, aiRelated: true, description: 'Data + AI platform unicorn scaling rapidly' },
  { company: 'CoreWeave', sector: 'AI-Native', previousCount: 200, currentCount: 1500, netAdded: 1300, growthPercent: 650, aiRelated: true, description: 'GPU cloud provider powering AI workloads' },
  { company: 'Groq', sector: 'AI-Native', previousCount: 100, currentCount: 450, netAdded: 350, growthPercent: 350, aiRelated: true, description: 'LPU inference chip maker for lightning-fast AI' },
  { company: 'Harvey AI', sector: 'AI-Native', previousCount: 40, currentCount: 350, netAdded: 310, growthPercent: 775, aiRelated: true, description: 'AI-powered legal assistant for law firms' },
  { company: 'Glean', sector: 'AI-Native', previousCount: 200, currentCount: 900, netAdded: 700, growthPercent: 350, aiRelated: true, description: 'Enterprise AI search and knowledge platform' },
  { company: 'Abridge', sector: 'AI-Native', previousCount: 31, currentCount: 488, netAdded: 457, growthPercent: 1474, aiRelated: true, description: 'AI medical documentation transforming healthcare' },
  { company: 'Figure AI', sector: 'AI-Native', previousCount: 80, currentCount: 850, netAdded: 770, growthPercent: 963, aiRelated: true, description: 'Humanoid robotics powered by AI' },

  // Big Tech Net-Positive
  { company: 'NVIDIA', sector: 'Big Tech', previousCount: 29600, currentCount: 42000, netAdded: 12400, growthPercent: 42, aiRelated: true, description: 'GPU giant generating $3.1M revenue per employee' },
  { company: 'Meta', sector: 'Big Tech', previousCount: 74000, currentCount: 78800, netAdded: 4800, growthPercent: 6, aiRelated: true, description: 'Net-positive despite 2023 layoff headlines' },
  { company: 'Alphabet', sector: 'Big Tech', previousCount: 183000, currentCount: 190000, netAdded: 7000, growthPercent: 4, aiRelated: true, description: 'Google parent company still growing headcount' },
  { company: 'Amazon', sector: 'Big Tech', previousCount: 1550000, currentCount: 1570000, netAdded: 20000, growthPercent: 1, aiRelated: true, description: 'World\'s largest tech employer continues adding' },
  { company: 'Netflix', sector: 'Big Tech', previousCount: 13000, currentCount: 16000, netAdded: 3000, growthPercent: 23, aiRelated: false, description: 'Streaming giant growing through content expansion' },
  { company: 'Apple', sector: 'Big Tech', previousCount: 164000, currentCount: 166000, netAdded: 2000, growthPercent: 1, aiRelated: true, description: '$500B US investment commitment with 20K new jobs' },
  { company: 'Uber', sector: 'Big Tech', previousCount: 31000, currentCount: 34000, netAdded: 3000, growthPercent: 10, aiRelated: true, description: 'CEO: "If AI makes engineers 25% more efficient, I want to hire more"' },
  { company: 'Roblox', sector: 'Big Tech', previousCount: 1600, currentCount: 3065, netAdded: 1465, growthPercent: 92, aiRelated: true, description: 'Gaming platform nearly doubled workforce' },

  // Defense Tech
  { company: 'Anduril', sector: 'Defense Tech', previousCount: 2400, currentCount: 6200, netAdded: 3800, growthPercent: 158, aiRelated: true, description: 'Building 5M sqft weapons factory, doubled revenue to $1B' },
  { company: 'SpaceX', sector: 'Defense Tech', previousCount: 12000, currentCount: 17800, netAdded: 5800, growthPercent: 48, aiRelated: true, description: 'Starlink and Starship driving massive hiring' },
  { company: 'Palantir', sector: 'Defense Tech', previousCount: 3892, currentCount: 4414, netAdded: 522, growthPercent: 13, aiRelated: true, description: 'AI defense platform expanding government contracts' },
  { company: 'Shield AI', sector: 'Defense Tech', previousCount: 290, currentCount: 1200, netAdded: 910, growthPercent: 314, aiRelated: true, description: 'Autonomous drone maker with Hivemind AI pilot' },

  // Cybersecurity
  { company: 'CrowdStrike', sector: 'Cybersecurity', previousCount: 7925, currentCount: 10118, netAdded: 2193, growthPercent: 28, aiRelated: true, description: 'Endpoint security leader scaling AI-native platform' },
  { company: 'Palo Alto Networks', sector: 'Cybersecurity', previousCount: 15200, currentCount: 16000, netAdded: 800, growthPercent: 5, aiRelated: true, description: 'Enterprise security giant in steady growth mode' },
  { company: 'Zscaler', sector: 'Cybersecurity', previousCount: 6900, currentCount: 8200, netAdded: 1300, growthPercent: 19, aiRelated: true, description: 'Zero-trust cloud security scaling headcount' },
  { company: 'Cloudflare', sector: 'Cybersecurity', previousCount: 3217, currentCount: 4263, netAdded: 1046, growthPercent: 33, aiRelated: true, description: 'Internet infrastructure and security platform' },

  // Healthcare
  { company: 'Eli Lilly', sector: 'Healthcare', previousCount: 39000, currentCount: 50000, netAdded: 11000, growthPercent: 28, aiRelated: false, description: '$27B US manufacturing investment, 3,000+ permanent jobs' },
  { company: 'HCA Healthcare', sector: 'Healthcare', previousCount: 294000, currentCount: 316000, netAdded: 22000, growthPercent: 7, aiRelated: false, description: 'Largest US hospital system steadily adding staff' },
  { company: 'UnitedHealth Group', sector: 'Healthcare', previousCount: 380000, currentCount: 400000, netAdded: 20000, growthPercent: 5, aiRelated: false, description: 'Healthcare services giant growing workforce' },

  // Semiconductors
  { company: 'TSMC', sector: 'Semiconductors', previousCount: 76000, currentCount: 83800, netAdded: 7800, growthPercent: 10, aiRelated: true, description: 'Investing $165B in US fabs, creating 6,000+ direct jobs' },
  { company: 'AMD', sector: 'Semiconductors', previousCount: 26000, currentCount: 31000, netAdded: 5000, growthPercent: 19, aiRelated: true, description: 'CEO Lisa Su: "We\'re hiring different people — AI forward"' },
  { company: 'Broadcom', sector: 'Semiconductors', previousCount: 20000, currentCount: 24000, netAdded: 4000, growthPercent: 20, aiRelated: true, description: 'Custom AI chip demand driving semiconductor growth' },

  // Infrastructure
  { company: 'Vertiv', sector: 'Infrastructure', previousCount: 24000, currentCount: 27500, netAdded: 3500, growthPercent: 15, aiRelated: true, description: 'Data center cooling and power infrastructure' },
  { company: 'Equinix', sector: 'Infrastructure', previousCount: 12800, currentCount: 14500, netAdded: 1700, growthPercent: 13, aiRelated: true, description: 'Global data center REIT expanding for AI workloads' },
  { company: 'Arista Networks', sector: 'Infrastructure', previousCount: 3800, currentCount: 4600, netAdded: 800, growthPercent: 21, aiRelated: true, description: 'Cloud networking for AI data centers' },

  // SaaS/Enterprise
  { company: 'ServiceNow', sector: 'SaaS/Enterprise', previousCount: 22000, currentCount: 24400, netAdded: 2400, growthPercent: 11, aiRelated: true, description: 'Enterprise workflow platform with AI agents' },
  { company: 'Canva', sector: 'SaaS/Enterprise', previousCount: 4500, currentCount: 4950, netAdded: 450, growthPercent: 10, aiRelated: true, description: 'Design platform integrating generative AI' },
  { company: 'MongoDB', sector: 'SaaS/Enterprise', previousCount: 4600, currentCount: 5060, netAdded: 460, growthPercent: 10, aiRelated: true, description: 'Database company powering AI application data' },
  { company: 'Snowflake', sector: 'SaaS/Enterprise', previousCount: 5800, currentCount: 6500, netAdded: 700, growthPercent: 12, aiRelated: true, description: 'Cloud data warehouse with AI/ML integration' },
  { company: 'Stripe', sector: 'SaaS/Enterprise', previousCount: 8000, currentCount: 10000, netAdded: 2000, growthPercent: 25, aiRelated: false, description: 'Payments giant hiring to 10K despite tech slowdown' },

  // Other Notable
  { company: 'CAVA', sector: 'Other', previousCount: 8400, currentCount: 10300, netAdded: 1900, growthPercent: 23, aiRelated: false, description: 'Mediterranean fast-casual chain hit $1B revenue' },
  { company: 'Costco', sector: 'Other', previousCount: 316000, currentCount: 341000, netAdded: 25000, growthPercent: 8, aiRelated: false, description: 'No-layoffs culture with industry-leading 8% turnover' },
  { company: 'Reddit', sector: 'Other', previousCount: 1800, currentCount: 2000, netAdded: 200, growthPercent: 11, aiRelated: true, description: 'Post-IPO growth with AI-powered features' },
];

export const sectors = [...new Set(companies.map(c => c.sector))];
