import type { HiringEntry } from '../types';

export const companies: HiringEntry[] = [
  // ============================================================
  // AI-Native (30 companies)
  // ============================================================
  { company: 'OpenAI', sector: 'AI-Native', previousCount: 770, currentCount: 7216, netAdded: 6446, growthPercent: 837, aiRelated: true, description: 'ChatGPT maker; plans to nearly double headcount to 8,000 by end of 2026' },
  { company: 'Anthropic', sector: 'AI-Native', previousCount: 192, currentCount: 4074, netAdded: 3882, growthPercent: 2022, aiRelated: true, description: 'Claude AI creator grew 21x in two years' },
  { company: 'Databricks', sector: 'AI-Native', previousCount: 1300, currentCount: 10000, netAdded: 8700, growthPercent: 669, aiRelated: true, description: 'Data + AI platform unicorn scaling rapidly' },
  { company: 'Scale AI', sector: 'AI-Native', previousCount: 1500, currentCount: 4000, netAdded: 2500, growthPercent: 167, aiRelated: true, description: 'AI data labeling/RLHF platform; critical supplier to frontier AI labs' },
  { company: 'Perplexity', sector: 'AI-Native', previousCount: 50, currentCount: 1549, netAdded: 1499, growthPercent: 2998, aiRelated: true, description: 'AI search engine with explosive headcount growth' },
  { company: 'CoreWeave', sector: 'AI-Native', previousCount: 200, currentCount: 1500, netAdded: 1300, growthPercent: 650, aiRelated: true, description: 'GPU cloud provider powering AI workloads' },
  { company: 'Turing', sector: 'AI-Native', previousCount: 1500, currentCount: 2800, netAdded: 1300, growthPercent: 87, aiRelated: true, description: 'AI-powered developer platform; 3M+ engineers in network' },
  { company: 'Mistral AI', sector: 'AI-Native', previousCount: 35, currentCount: 783, netAdded: 748, growthPercent: 2137, aiRelated: true, description: 'French AI lab building open-weight models' },
  { company: 'Figure AI', sector: 'AI-Native', previousCount: 80, currentCount: 850, netAdded: 770, growthPercent: 963, aiRelated: true, description: 'Humanoid robotics powered by AI' },
  { company: 'Glean', sector: 'AI-Native', previousCount: 200, currentCount: 900, netAdded: 700, growthPercent: 350, aiRelated: true, description: 'Enterprise AI search and knowledge platform' },
  { company: 'xAI', sector: 'AI-Native', previousCount: 50, currentCount: 650, netAdded: 600, growthPercent: 1200, aiRelated: true, description: 'Elon Musk AI venture building Grok' },
  { company: 'HeyGen', sector: 'AI-Native', previousCount: 80, currentCount: 500, netAdded: 420, growthPercent: 525, aiRelated: true, description: 'AI video avatar platform; $60M ARR; viral growth' },
  { company: 'ElevenLabs', sector: 'AI-Native', previousCount: 200, currentCount: 690, netAdded: 490, growthPercent: 245, aiRelated: true, description: 'AI voice/audio synthesis; expanding into dubbing and audio AI' },
  { company: 'Abridge', sector: 'AI-Native', previousCount: 31, currentCount: 488, netAdded: 457, growthPercent: 1474, aiRelated: true, description: 'AI medical documentation transforming healthcare' },
  { company: 'Cohere', sector: 'AI-Native', previousCount: 400, currentCount: 843, netAdded: 443, growthPercent: 111, aiRelated: true, description: 'Enterprise LLM provider; raised $500M in 2024' },
  { company: 'DeepL', sector: 'AI-Native', previousCount: 500, currentCount: 900, netAdded: 400, growthPercent: 80, aiRelated: true, description: 'AI translation platform rivaling Google Translate; European AI leader' },
  { company: 'Cerebras', sector: 'AI-Native', previousCount: 370, currentCount: 784, netAdded: 414, growthPercent: 112, aiRelated: true, description: 'Wafer-scale AI chip maker competing with NVIDIA' },
  { company: 'Hugging Face', sector: 'AI-Native', previousCount: 280, currentCount: 665, netAdded: 385, growthPercent: 138, aiRelated: true, description: 'Open-source AI model hub hosting 500K+ models' },
  { company: 'Groq', sector: 'AI-Native', previousCount: 100, currentCount: 450, netAdded: 350, growthPercent: 350, aiRelated: true, description: 'LPU inference chip maker for lightning-fast AI' },
  { company: 'Harvey AI', sector: 'AI-Native', previousCount: 40, currentCount: 350, netAdded: 310, growthPercent: 775, aiRelated: true, description: 'AI-powered legal assistant for law firms' },
  { company: 'Cursor', sector: 'AI-Native', previousCount: 40, currentCount: 300, netAdded: 260, growthPercent: 650, aiRelated: true, description: 'AI code editor; fastest-growing SaaS ever; $1B+ ARR' },
  { company: 'Clay', sector: 'AI-Native', previousCount: 80, currentCount: 300, netAdded: 220, growthPercent: 275, aiRelated: true, description: 'AI sales data enrichment; waterfall approach; $50M+ ARR' },
  { company: 'Lovable', sector: 'AI-Native', previousCount: 30, currentCount: 200, netAdded: 170, growthPercent: 567, aiRelated: true, description: 'AI full-stack app builder; fastest European startup to $20M ARR' },
  { company: 'Together AI', sector: 'AI-Native', previousCount: 150, currentCount: 313, netAdded: 163, growthPercent: 109, aiRelated: true, description: 'Open-source AI inference/training platform' },
  { company: 'Writer', sector: 'AI-Native', previousCount: 250, currentCount: 400, netAdded: 150, growthPercent: 60, aiRelated: true, description: 'Enterprise generative AI platform; full-stack LLM' },
  { company: 'Runway', sector: 'AI-Native', previousCount: 230, currentCount: 380, netAdded: 150, growthPercent: 65, aiRelated: true, description: 'AI video generation (Gen-3); $4B+ valuation' },
  { company: 'Physical Intelligence', sector: 'AI-Native', previousCount: 20, currentCount: 150, netAdded: 130, growthPercent: 650, aiRelated: true, description: 'General-purpose robot foundation models; $2.4B valuation' },
  { company: 'Midjourney', sector: 'AI-Native', previousCount: 80, currentCount: 170, netAdded: 90, growthPercent: 113, aiRelated: true, description: 'AI image generation; bootstrapped to $500M+ revenue' },
  { company: 'Replit', sector: 'AI-Native', previousCount: 250, currentCount: 335, netAdded: 85, growthPercent: 34, aiRelated: true, description: 'AI-powered coding platform; Replit Agent' },
  { company: 'SambaNova', sector: 'AI-Native', previousCount: 350, currentCount: 417, netAdded: 67, growthPercent: 19, aiRelated: true, description: 'Enterprise AI chip and platform for specialized hardware' },

  // ============================================================
  // Big Tech (20 companies)
  // ============================================================
  { company: 'Amazon', sector: 'Big Tech', previousCount: 1550000, currentCount: 1570000, netAdded: 20000, growthPercent: 1, aiRelated: true, description: 'World\'s largest tech employer continues adding' },
  { company: 'NVIDIA', sector: 'Big Tech', previousCount: 29600, currentCount: 42000, netAdded: 12400, growthPercent: 42, aiRelated: true, description: 'GPU giant generating $3.1M revenue per employee' },
  { company: 'ByteDance', sector: 'Big Tech', previousCount: 110000, currentCount: 120000, netAdded: 10000, growthPercent: 9, aiRelated: true, description: 'TikTok parent; 1,800+ open US AI roles despite regulatory pressure' },
  { company: 'Microsoft', sector: 'Big Tech', previousCount: 221000, currentCount: 228000, netAdded: 7000, growthPercent: 3, aiRelated: true, description: 'First-ever voluntary retirement buyout offered to 7% of US staff; Copilot AI pivot' },
  { company: 'Alphabet', sector: 'Big Tech', previousCount: 183000, currentCount: 190000, netAdded: 7000, growthPercent: 4, aiRelated: true, description: 'Google parent company still growing headcount' },
  { company: 'PDD Holdings', sector: 'Big Tech', previousCount: 17400, currentCount: 23465, netAdded: 6065, growthPercent: 35, aiRelated: false, description: 'Temu/Pinduoduo parent; massive global e-commerce expansion' },
  { company: 'Meta', sector: 'Big Tech', previousCount: 78800, currentCount: 70800, netAdded: -8000, growthPercent: -10, aiRelated: true, description: 'Cutting 8,000 jobs (10%) to fund $115–135B AI spending; May 20 execution date' },
  { company: 'DoorDash', sector: 'Big Tech', previousCount: 19300, currentCount: 23700, netAdded: 4400, growthPercent: 23, aiRelated: false, description: 'Food/grocery delivery expanding into all local commerce' },
  { company: 'Salesforce', sector: 'Big Tech', previousCount: 72682, currentCount: 76453, netAdded: 3771, growthPercent: 5, aiRelated: true, description: 'Agentforce AI platform; post-layoff recovery with AI hiring' },
  { company: 'Shopify', sector: 'Big Tech', previousCount: 8300, currentCount: 11600, netAdded: 3300, growthPercent: 40, aiRelated: true, description: 'E-commerce platform; AI-powered Sidekick; $8.9B revenue' },
  { company: 'Oracle', sector: 'Big Tech', previousCount: 159000, currentCount: 162000, netAdded: 3000, growthPercent: 2, aiRelated: true, description: 'Massive AI infrastructure buildout; OCI growth for AI workloads' },
  { company: 'Netflix', sector: 'Big Tech', previousCount: 13000, currentCount: 16000, netAdded: 3000, growthPercent: 23, aiRelated: false, description: 'Streaming giant growing through content expansion' },
  { company: 'Uber', sector: 'Big Tech', previousCount: 31000, currentCount: 34000, netAdded: 3000, growthPercent: 10, aiRelated: true, description: 'CEO: "If AI makes engineers 25% more efficient, I want to hire more"' },
  { company: 'AppLovin', sector: 'Big Tech', previousCount: 2100, currentCount: 4200, netAdded: 2100, growthPercent: 100, aiRelated: true, description: 'AI-powered mobile ads; AXON engine; $4.7B revenue; stock up 700%' },
  { company: 'Apple', sector: 'Big Tech', previousCount: 164000, currentCount: 166000, netAdded: 2000, growthPercent: 1, aiRelated: true, description: '$500B US investment commitment with 20K new jobs' },
  { company: 'Spotify', sector: 'Big Tech', previousCount: 8000, currentCount: 9500, netAdded: 1500, growthPercent: 19, aiRelated: true, description: 'Music streaming; AI DJ; podcast growth; 640M+ users' },
  { company: 'Roblox', sector: 'Big Tech', previousCount: 1600, currentCount: 3065, netAdded: 1465, growthPercent: 92, aiRelated: true, description: 'Gaming platform nearly doubled workforce' },
  { company: 'Instacart', sector: 'Big Tech', previousCount: 2800, currentCount: 3500, netAdded: 700, growthPercent: 25, aiRelated: true, description: 'Grocery delivery platform; AI-powered shopping; post-IPO growth' },
  { company: 'Pinterest', sector: 'Big Tech', previousCount: 3900, currentCount: 4400, netAdded: 500, growthPercent: 13, aiRelated: true, description: 'Visual discovery; AI-powered shopping; $3.6B revenue' },
  { company: 'Snap', sector: 'Big Tech', previousCount: 5800, currentCount: 4800, netAdded: -1000, growthPercent: -17, aiRelated: true, description: 'Cut 16% of workforce; AI generates 65%+ of new code; $500M annualized savings' },

  // ============================================================
  // Defense Tech (12 companies)
  // ============================================================
  { company: 'SpaceX', sector: 'Defense Tech', previousCount: 12000, currentCount: 17800, netAdded: 5800, growthPercent: 48, aiRelated: true, description: 'Starlink and Starship driving massive hiring' },
  { company: 'Northrop Grumman', sector: 'Defense Tech', previousCount: 95000, currentCount: 101000, netAdded: 6000, growthPercent: 6, aiRelated: true, description: 'B-21 bomber, autonomous systems, space defense' },
  { company: 'General Dynamics', sector: 'Defense Tech', previousCount: 112000, currentCount: 117000, netAdded: 5000, growthPercent: 4, aiRelated: false, description: 'Combat systems, Gulfstream jets, IT services' },
  { company: 'Anduril', sector: 'Defense Tech', previousCount: 2400, currentCount: 6200, netAdded: 3800, growthPercent: 158, aiRelated: true, description: 'Building 5M sqft weapons factory, doubled revenue to $1B' },
  { company: 'L3Harris', sector: 'Defense Tech', previousCount: 50000, currentCount: 53000, netAdded: 3000, growthPercent: 6, aiRelated: true, description: 'Defense electronics, space, communication systems; AI sensing' },
  { company: 'Booz Allen Hamilton', sector: 'Defense Tech', previousCount: 34200, currentCount: 35800, netAdded: 1600, growthPercent: 5, aiRelated: true, description: 'Defense/intel consulting; growing AI analytics for DoD' },
  { company: 'Leidos', sector: 'Defense Tech', previousCount: 47000, currentCount: 48000, netAdded: 1000, growthPercent: 2, aiRelated: true, description: 'Defense IT services; digital modernization' },
  { company: 'RTX (Raytheon)', sector: 'Defense Tech', previousCount: 185000, currentCount: 186000, netAdded: 1000, growthPercent: 1, aiRelated: false, description: 'Missiles, radar, engines; AI in sensor systems' },
  { company: 'Rocket Lab', sector: 'Defense Tech', previousCount: 1800, currentCount: 2800, netAdded: 1000, growthPercent: 56, aiRelated: false, description: 'Small launch vehicles; Neutron rocket; space systems; DoD contracts' },
  { company: 'Shield AI', sector: 'Defense Tech', previousCount: 290, currentCount: 1200, netAdded: 910, growthPercent: 314, aiRelated: true, description: 'Autonomous drone maker with Hivemind AI pilot' },
  { company: 'Palantir', sector: 'Defense Tech', previousCount: 3892, currentCount: 4414, netAdded: 522, growthPercent: 13, aiRelated: true, description: 'AI defense platform expanding government contracts' },
  { company: 'Skydio', sector: 'Defense Tech', previousCount: 500, currentCount: 874, netAdded: 374, growthPercent: 75, aiRelated: true, description: 'Autonomous US-made drones; AI-powered flight; DoD contracts' },

  // ============================================================
  // Cybersecurity (10 companies)
  // ============================================================
  { company: 'Wiz', sector: 'Cybersecurity', previousCount: 900, currentCount: 3100, netAdded: 2200, growthPercent: 244, aiRelated: true, description: 'Cloud security; fastest to $100M ARR; Google acquisition target' },
  { company: 'CrowdStrike', sector: 'Cybersecurity', previousCount: 7925, currentCount: 10118, netAdded: 2193, growthPercent: 28, aiRelated: true, description: 'Endpoint security leader scaling AI-native platform' },
  { company: 'Zscaler', sector: 'Cybersecurity', previousCount: 6900, currentCount: 8200, netAdded: 1300, growthPercent: 19, aiRelated: true, description: 'Zero-trust cloud security scaling headcount' },
  { company: 'Cloudflare', sector: 'Cybersecurity', previousCount: 3217, currentCount: 4263, netAdded: 1046, growthPercent: 33, aiRelated: true, description: 'Internet infrastructure and security platform' },
  { company: 'Palo Alto Networks', sector: 'Cybersecurity', previousCount: 15200, currentCount: 16000, netAdded: 800, growthPercent: 5, aiRelated: true, description: 'Enterprise security giant in steady growth mode' },
  { company: 'Abnormal Security', sector: 'Cybersecurity', previousCount: 800, currentCount: 1350, netAdded: 550, growthPercent: 69, aiRelated: true, description: 'AI-native email security; behavioral AI threat detection' },
  { company: 'SentinelOne', sector: 'Cybersecurity', previousCount: 2300, currentCount: 2800, netAdded: 500, growthPercent: 22, aiRelated: true, description: 'AI-powered autonomous endpoint security' },
  { company: 'Arctic Wolf', sector: 'Cybersecurity', previousCount: 1100, currentCount: 1437, netAdded: 337, growthPercent: 31, aiRelated: true, description: 'Managed detection and response; security operations cloud' },
  { company: 'Tanium', sector: 'Cybersecurity', previousCount: 2000, currentCount: 2294, netAdded: 294, growthPercent: 15, aiRelated: true, description: 'Endpoint management/security; real-time visibility; $700M revenue' },
  { company: 'Snyk', sector: 'Cybersecurity', previousCount: 1028, currentCount: 1220, netAdded: 192, growthPercent: 19, aiRelated: true, description: 'Developer security platform; code/container scanning' },

  // ============================================================
  // Healthcare / Biotech (8 companies)
  // ============================================================
  { company: 'HCA Healthcare', sector: 'Healthcare', previousCount: 294000, currentCount: 316000, netAdded: 22000, growthPercent: 7, aiRelated: false, description: 'Largest US hospital system steadily adding staff' },
  { company: 'UnitedHealth Group', sector: 'Healthcare', previousCount: 380000, currentCount: 400000, netAdded: 20000, growthPercent: 5, aiRelated: false, description: 'Healthcare services giant growing workforce' },
  { company: 'Eli Lilly', sector: 'Healthcare', previousCount: 39000, currentCount: 50000, netAdded: 11000, growthPercent: 28, aiRelated: false, description: '$27B US manufacturing investment; GLP-1 drug boom' },
  { company: 'Hims & Hers', sector: 'Healthcare', previousCount: 1700, currentCount: 3200, netAdded: 1500, growthPercent: 88, aiRelated: true, description: 'Telehealth platform; GLP-1 weight loss; $2.2B revenue; stock up 200%' },
  { company: 'Abbott Laboratories', sector: 'Healthcare', previousCount: 113000, currentCount: 114000, netAdded: 1000, growthPercent: 1, aiRelated: false, description: 'Medical devices, diagnostics, nutrition; steady demand' },
  { company: 'Veeva Systems', sector: 'Healthcare', previousCount: 6400, currentCount: 7200, netAdded: 800, growthPercent: 13, aiRelated: true, description: 'Life sciences cloud; CRM for pharma; AI-powered clinical trials' },
  { company: 'Tempus AI', sector: 'Healthcare', previousCount: 2300, currentCount: 2828, netAdded: 528, growthPercent: 23, aiRelated: true, description: 'AI for precision medicine; genomic sequencing and analytics' },
  { company: 'Moderna', sector: 'Healthcare', previousCount: 5600, currentCount: 5800, netAdded: 200, growthPercent: 4, aiRelated: true, description: 'mRNA therapeutics; AI-driven drug discovery pipeline' },

  // ============================================================
  // Semiconductors (7 companies)
  // ============================================================
  { company: 'Micron', sector: 'Semiconductors', previousCount: 43000, currentCount: 53000, netAdded: 10000, growthPercent: 23, aiRelated: true, description: 'HBM memory for AI; critical supplier to AI data centers; CHIPS Act' },
  { company: 'TSMC', sector: 'Semiconductors', previousCount: 76000, currentCount: 83800, netAdded: 7800, growthPercent: 10, aiRelated: true, description: 'Investing $165B in US fabs, creating 6,000+ direct jobs' },
  { company: 'AMD', sector: 'Semiconductors', previousCount: 26000, currentCount: 31000, netAdded: 5000, growthPercent: 19, aiRelated: true, description: 'CEO Lisa Su: "We\'re hiring different people — AI forward"' },
  { company: 'Broadcom', sector: 'Semiconductors', previousCount: 20000, currentCount: 24000, netAdded: 4000, growthPercent: 20, aiRelated: true, description: 'Custom AI chip demand driving semiconductor growth' },
  { company: 'Arm Holdings', sector: 'Semiconductors', previousCount: 5700, currentCount: 7200, netAdded: 1500, growthPercent: 26, aiRelated: true, description: 'Chip design IP powering 99% of smartphones; AI edge compute' },
  { company: 'Marvell', sector: 'Semiconductors', previousCount: 6577, currentCount: 7042, netAdded: 465, growthPercent: 7, aiRelated: true, description: 'Custom AI chips; data center semiconductor solutions' },
  { company: 'Tenstorrent', sector: 'Semiconductors', previousCount: 300, currentCount: 700, netAdded: 400, growthPercent: 133, aiRelated: true, description: 'AI chip startup led by Jim Keller; RISC-V architecture' },

  // ============================================================
  // Infrastructure / Data Centers (4 companies)
  // ============================================================
  { company: 'Vertiv', sector: 'Infrastructure', previousCount: 27000, currentCount: 34000, netAdded: 7000, growthPercent: 26, aiRelated: true, description: 'Data center power/cooling; critical AI infrastructure enabler' },
  { company: 'Equinix', sector: 'Infrastructure', previousCount: 12800, currentCount: 14500, netAdded: 1700, growthPercent: 13, aiRelated: true, description: 'Global data center REIT expanding for AI workloads' },
  { company: 'Arista Networks', sector: 'Infrastructure', previousCount: 3800, currentCount: 4600, netAdded: 800, growthPercent: 21, aiRelated: true, description: 'Cloud networking for AI data centers' },
  { company: 'Digital Realty', sector: 'Infrastructure', previousCount: 3664, currentCount: 3936, netAdded: 272, growthPercent: 7, aiRelated: true, description: 'Data center REIT; AI-driven demand; colocation services' },

  // ============================================================
  // SaaS / Enterprise (22 companies)
  // ============================================================
  { company: 'Rippling', sector: 'SaaS/Enterprise', previousCount: 2800, currentCount: 6772, netAdded: 3972, growthPercent: 142, aiRelated: true, description: 'HR/IT/finance platform; AI-powered workforce management; $570M ARR' },
  { company: 'Datadog', sector: 'SaaS/Enterprise', previousCount: 5200, currentCount: 8100, netAdded: 2900, growthPercent: 56, aiRelated: true, description: 'Cloud monitoring/observability; AI-powered analytics' },
  { company: 'ServiceNow', sector: 'SaaS/Enterprise', previousCount: 22000, currentCount: 24400, netAdded: 2400, growthPercent: 11, aiRelated: true, description: 'Enterprise workflow platform with AI agents' },
  { company: 'Deel', sector: 'SaaS/Enterprise', previousCount: 2500, currentCount: 4500, netAdded: 2000, growthPercent: 80, aiRelated: true, description: 'Global HR/payroll for remote teams; $700M+ ARR; 35K+ customers' },
  { company: 'Stripe', sector: 'SaaS/Enterprise', previousCount: 8000, currentCount: 10000, netAdded: 2000, growthPercent: 25, aiRelated: false, description: 'Payments giant hiring to 10K despite tech slowdown' },
  { company: 'Atlassian', sector: 'SaaS/Enterprise', previousCount: 12157, currentCount: 13813, netAdded: 1656, growthPercent: 14, aiRelated: true, description: 'Jira, Confluence; AI assistant Rovo; enterprise growth' },
  { company: 'Toast', sector: 'SaaS/Enterprise', previousCount: 4500, currentCount: 5800, netAdded: 1300, growthPercent: 29, aiRelated: true, description: 'Restaurant tech platform; AI ordering; 120K+ locations' },
  { company: 'Samsara', sector: 'SaaS/Enterprise', previousCount: 2000, currentCount: 3100, netAdded: 1100, growthPercent: 55, aiRelated: true, description: 'IoT fleet management; AI dash cams; $1B+ ARR' },
  { company: 'Snowflake', sector: 'SaaS/Enterprise', previousCount: 5800, currentCount: 6500, netAdded: 700, growthPercent: 12, aiRelated: true, description: 'Cloud data warehouse with AI/ML integration' },
  { company: 'Figma', sector: 'SaaS/Enterprise', previousCount: 1300, currentCount: 1916, netAdded: 616, growthPercent: 47, aiRelated: true, description: 'Design collaboration; AI features; rapid enterprise growth' },
  { company: 'HubSpot', sector: 'SaaS/Enterprise', previousCount: 7663, currentCount: 8246, netAdded: 583, growthPercent: 8, aiRelated: true, description: 'CRM/marketing platform; AI features (Breeze); SMB leader' },
  { company: 'MongoDB', sector: 'SaaS/Enterprise', previousCount: 4600, currentCount: 5060, netAdded: 460, growthPercent: 10, aiRelated: true, description: 'Database company powering AI application data' },
  { company: 'Canva', sector: 'SaaS/Enterprise', previousCount: 4500, currentCount: 4950, netAdded: 450, growthPercent: 10, aiRelated: true, description: 'Design platform integrating generative AI' },
  { company: 'Whatnot', sector: 'SaaS/Enterprise', previousCount: 400, currentCount: 800, netAdded: 400, growthPercent: 100, aiRelated: false, description: 'Live shopping marketplace; fastest-growing e-commerce startup' },
  { company: 'Notion', sector: 'SaaS/Enterprise', previousCount: 800, currentCount: 1200, netAdded: 400, growthPercent: 50, aiRelated: true, description: 'Productivity/wiki platform; Notion AI; enterprise expansion' },
  { company: 'Vanta', sector: 'SaaS/Enterprise', previousCount: 400, currentCount: 750, netAdded: 350, growthPercent: 88, aiRelated: true, description: 'AI-powered security compliance automation; SOC 2, ISO, HIPAA' },
  { company: 'Elastic', sector: 'SaaS/Enterprise', previousCount: 3187, currentCount: 3537, netAdded: 350, growthPercent: 11, aiRelated: true, description: 'Search/observability; AI-powered search; vector DB for AI' },
  { company: 'Confluent', sector: 'SaaS/Enterprise', previousCount: 2745, currentCount: 3060, netAdded: 315, growthPercent: 11, aiRelated: true, description: 'Data streaming platform (Kafka); AI data pipelines' },
  { company: 'Duolingo', sector: 'SaaS/Enterprise', previousCount: 700, currentCount: 1000, netAdded: 300, growthPercent: 43, aiRelated: true, description: 'Language learning app; AI-powered lessons; 100M+ monthly users' },
  { company: 'Retool', sector: 'SaaS/Enterprise', previousCount: 400, currentCount: 650, netAdded: 250, growthPercent: 63, aiRelated: true, description: 'Internal tool builder; AI-powered app generation' },
  { company: 'Vercel', sector: 'SaaS/Enterprise', previousCount: 600, currentCount: 823, netAdded: 223, growthPercent: 37, aiRelated: true, description: 'Frontend cloud platform (Next.js); AI SDK; v0 AI product' },

  // ============================================================
  // Fintech (6 companies)
  // ============================================================
  { company: 'Block (Square)', sector: 'Fintech', previousCount: 12000, currentCount: 14000, netAdded: 2000, growthPercent: 17, aiRelated: true, description: 'Square + Cash App; Bitcoin; AI-powered seller tools' },
  { company: 'Coinbase', sector: 'Fintech', previousCount: 3486, currentCount: 4700, netAdded: 1214, growthPercent: 35, aiRelated: true, description: 'Crypto exchange; post-crypto-winter recovery; regulatory wins' },
  { company: 'Chime', sector: 'Fintech', previousCount: 1465, currentCount: 2347, netAdded: 882, growthPercent: 60, aiRelated: false, description: 'Largest US neobank by users; IPO preparation' },
  { company: 'Ramp', sector: 'Fintech', previousCount: 730, currentCount: 1200, netAdded: 470, growthPercent: 64, aiRelated: true, description: 'AI-powered corporate cards/expense management; $13B valuation' },
  { company: 'Mercury', sector: 'Fintech', previousCount: 500, currentCount: 850, netAdded: 350, growthPercent: 70, aiRelated: true, description: 'Banking for startups; AI-powered financial tools; $500M+ deposits' },
  { company: 'Plaid', sector: 'Fintech', previousCount: 950, currentCount: 1100, netAdded: 150, growthPercent: 16, aiRelated: false, description: 'Financial data API connecting banks to fintech apps' },

  // ============================================================
  // Robotics / Autonomy (7 companies)
  // ============================================================
  { company: 'Zipline', sector: 'Robotics', previousCount: 1500, currentCount: 2800, netAdded: 1300, growthPercent: 87, aiRelated: true, description: 'Autonomous drone delivery; 1B+ deliveries; expanding globally' },
  { company: 'Waymo', sector: 'Robotics', previousCount: 1200, currentCount: 2500, netAdded: 1300, growthPercent: 108, aiRelated: true, description: 'Autonomous ride-hailing; expanded to 5+ US cities' },
  { company: 'WeRide', sector: 'Robotics', previousCount: 800, currentCount: 1300, netAdded: 500, growthPercent: 63, aiRelated: true, description: 'Autonomous driving; first NASDAQ IPO for Chinese robotaxi company' },
  { company: 'Applied Intuition', sector: 'Robotics', previousCount: 800, currentCount: 1273, netAdded: 473, growthPercent: 59, aiRelated: true, description: 'Autonomous vehicle simulation/infra; $6B valuation' },
  { company: 'Boston Dynamics', sector: 'Robotics', previousCount: 1000, currentCount: 1423, netAdded: 423, growthPercent: 42, aiRelated: true, description: 'Spot, Atlas, Stretch robots; warehouse automation' },
  { company: '1X Technologies', sector: 'Robotics', previousCount: 100, currentCount: 350, netAdded: 250, growthPercent: 250, aiRelated: true, description: 'Humanoid robots for homes; NEO Beta; backed by OpenAI' },
  { company: 'IonQ', sector: 'Robotics', previousCount: 324, currentCount: 407, netAdded: 83, growthPercent: 26, aiRelated: true, description: 'Trapped-ion quantum computing; government and enterprise contracts' },

  // ============================================================
  // Energy / Climate (4 companies)
  // ============================================================
  { company: 'NextEra Energy', sector: 'Energy', previousCount: 15000, currentCount: 16500, netAdded: 1500, growthPercent: 10, aiRelated: false, description: 'World\'s largest renewable energy producer; wind + solar giant' },
  { company: 'First Solar', sector: 'Energy', previousCount: 6700, currentCount: 8100, netAdded: 1400, growthPercent: 21, aiRelated: false, description: 'US solar panel manufacturer; new Alabama factory; IRA beneficiary' },
  { company: 'Vistra Energy', sector: 'Energy', previousCount: 6300, currentCount: 7500, netAdded: 1200, growthPercent: 19, aiRelated: true, description: 'Power generation for AI data centers; stock up 300%; nuclear restarts' },
  { company: 'Crusoe Energy', sector: 'Energy', previousCount: 200, currentCount: 600, netAdded: 400, growthPercent: 200, aiRelated: true, description: 'AI-optimized data centers powered by stranded natural gas' },

  // ============================================================
  // Consulting (1 company)
  // ============================================================
  { company: 'Accenture', sector: 'Consulting', previousCount: 733000, currentCount: 779000, netAdded: 46000, growthPercent: 6, aiRelated: true, description: 'Doubling AI workforce to 80K specialists; $3B AI investment' },

  // ============================================================
  // Other Notable (10 companies)
  // ============================================================
  { company: 'Costco', sector: 'Other', previousCount: 316000, currentCount: 341000, netAdded: 25000, growthPercent: 8, aiRelated: false, description: 'No-layoffs culture with industry-leading 8% turnover' },
  { company: 'Chipotle', sector: 'Other', previousCount: 105000, currentCount: 120000, netAdded: 15000, growthPercent: 14, aiRelated: false, description: 'Fast-casual chain; 3,600+ locations; continuous expansion' },
  { company: 'Sprouts Farmers Market', sector: 'Other', previousCount: 31000, currentCount: 35000, netAdded: 4000, growthPercent: 13, aiRelated: false, description: 'Specialty grocery; 440+ stores; health-conscious growth' },
  { company: 'Dutch Bros', sector: 'Other', previousCount: 11000, currentCount: 14000, netAdded: 3000, growthPercent: 27, aiRelated: false, description: 'Drive-thru coffee chain; 900+ locations; fastest-growing coffee brand' },
  { company: 'Carvana', sector: 'Other', previousCount: 5600, currentCount: 8500, netAdded: 2900, growthPercent: 52, aiRelated: true, description: 'Online used car platform; turnaround story; AI pricing algorithms' },
  { company: 'CAVA', sector: 'Other', previousCount: 8400, currentCount: 10300, netAdded: 1900, growthPercent: 23, aiRelated: false, description: 'Mediterranean fast-casual chain hit $1B revenue' },
  { company: 'On Holdings', sector: 'Other', previousCount: 2700, currentCount: 3800, netAdded: 1100, growthPercent: 41, aiRelated: false, description: 'Swiss athletic shoes; fastest-growing sportswear brand; $2.5B revenue' },
  { company: 'GrubMarket', sector: 'Other', previousCount: 1800, currentCount: 3000, netAdded: 1200, growthPercent: 67, aiRelated: true, description: 'AI-powered food supply chain; $2.5B+ revenue; profitable unicorn' },
  { company: 'Reddit', sector: 'Other', previousCount: 1800, currentCount: 2000, netAdded: 200, growthPercent: 11, aiRelated: true, description: 'Post-IPO growth with AI-powered features' },
];

export const sectors = [...new Set(companies.map(c => c.sector))];
