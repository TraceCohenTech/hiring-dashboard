import type { Headline } from '../types';

export const headlines: Headline[] = [
  // CEO Quotes
  { text: '"Talent density beats talent mass." — Dario Amodei, Anthropic', source: 'Anthropic', type: 'quote' },
  { text: '"We\'re going to be hiring thousands of people." — Palmer Luckey, Anduril', source: 'Anduril', type: 'quote' },
  { text: '"We will grow headcount with a lot more leverage." — Satya Nadella, Microsoft', source: 'Microsoft', type: 'quote' },
  { text: '"Our unprecedented commitment to domestic manufacturing." — David Ricks, Eli Lilly', source: 'Eli Lilly', type: 'quote' },
  { text: '"The world is now awakened to the agentic AI inflection." — Jensen Huang, NVIDIA', source: 'NVIDIA', type: 'quote' },
  { text: '"I\'ll 10X revenue in a crazy efficient revolution." — Alex Karp, Palantir', source: 'Palantir', type: 'quote' },
  { text: '"If AI makes our engineers 25% more efficient, I\'d want to hire more." — Dara Khosrowshahi, Uber', source: 'Uber', type: 'quote' },
  { text: '"We\'re not hiring fewer people. We\'re hiring AI-forward people." — Lisa Su, AMD', source: 'AMD', type: 'quote' },
  { text: '"Microsoft needs humans more than ever in the AI boom." — Satya Nadella, Microsoft', source: 'Microsoft', type: 'quote' },
  { text: '"We\'re still expecting to increase headcount to 10,000." — Patrick Collison, Stripe', source: 'Stripe', type: 'quote' },

  // Stats
  { text: 'AI/ML job postings up 163% YoY in 2025', source: 'Indeed', type: 'stat' },
  { text: 'Healthcare added 693K jobs in 2025', source: 'BLS', type: 'stat' },
  { text: '$425B global VC funding in 2025 — 3rd highest year ever', source: 'Crunchbase', type: 'stat' },
  { text: 'Workers with AI skills earn 56% higher wages', source: 'PwC', type: 'stat' },
  { text: 'Cybersecurity has 4.8M unfilled positions globally', source: 'ISC2', type: 'stat' },
  { text: '61% of tech leaders plan to increase headcount in H1 2026', source: 'Robert Half', type: 'stat' },
  { text: 'Defense tech VC hit $49.1B in 2025 — nearly 2x prior year', source: 'Bloomberg', type: 'stat' },
  { text: 'Clean energy jobs grew 3x faster than the rest of the US workforce', source: 'DOE', type: 'stat' },

  // Headlines
  { text: 'Anthropic grew 26x from 192 to ~5,000 employees; hit $30B annualized revenue', source: 'SaaStr / Anthropic', type: 'headline' },
  { text: 'NVIDIA generates $4.1M revenue per employee', source: 'NVIDIA', type: 'headline' },
  { text: 'Eli Lilly invests $27B in US manufacturing, adding 3,000+ jobs', source: 'Eli Lilly', type: 'headline' },
  { text: 'Anduril doubled revenue to $1B, building 5M sqft weapons factory', source: 'Anduril', type: 'headline' },
  { text: 'TSMC investing $165B in US fabs, creating 6,000+ direct jobs', source: 'TSMC', type: 'headline' },
  { text: 'Apple commits $500B to US investment over 4 years with 20K new jobs', source: 'Apple', type: 'headline' },
  { text: 'SoftBank pledges $100B US investment, promising 100,000 jobs', source: 'SoftBank', type: 'headline' },
  { text: 'CHIPS Act drives 500,000 jobs across 28 states', source: 'NIST', type: 'headline' },

  // Week of Apr 28 – May 4, 2026
  { text: '"65% of Snap\'s code is now AI-generated — teams can accomplish more with fewer people." — Evan Spiegel, Snap CEO', source: 'TechCrunch', type: 'quote' },
  { text: 'OpenAI plans to nearly double headcount to 8,000 by end of 2026 amid $24B+ annualized revenue', source: 'Financial Times', type: 'headline' },
  { text: 'Meta + Microsoft announce 17,000+ job cuts in same week; both cite AI investments requiring efficiency gains', source: 'CNBC', type: 'headline' },
  { text: '113,000+ tech workers laid off in 2026 through early May; ~50% AI-attributed — fastest pace since 2023', source: 'layoffs.fyi', type: 'stat' },
  { text: 'AI company headcount growing 92% YoY vs. broad Big Tech cutting at largest firms', source: 'LinkedIn Labor Market Report', type: 'stat' },

  // Week of May 5–11, 2026
  { text: '"This isn\'t a cost-cutting exercise — it\'s about defining how a world-class company operates in the agentic AI era." — Matthew Prince, Cloudflare CEO', source: 'TechCrunch', type: 'quote' },
  { text: '"We\'re building AI-native pods — even one-person teams directing fleets of agents that cover engineering, design, and PM." — Brian Armstrong, Coinbase CEO', source: 'Fortune', type: 'quote' },
  { text: '"PayPal is becoming a technology company again — we are aggressively adopting AI." — Alex Chriss, PayPal CEO', source: 'TechCrunch', type: 'quote' },
  { text: '"Over half of our code is now written by AI." — Dennis Woodside, Freshworks CEO', source: 'Storyboard18', type: 'quote' },
  { text: 'Cloudflare cut 1,100 jobs (20%) despite record $639.8M Q1 revenue — first layoff in company\'s 16-year history', source: 'CNBC', type: 'headline' },
  { text: 'Coinbase, Freshworks & PayPal announced ~5,960 combined job cuts in first week of May 2026', source: 'TechRadar', type: 'headline' },
  { text: 'Accenture surpasses 85,000 AI professionals, reaching 786K total — exceeded its own 80K target ahead of schedule', source: 'Infotechlead', type: 'headline' },
  { text: '38,000+ US tech workers laid off in first 10 days of May 2026', source: 'layoffs.fyi', type: 'stat' },

  // Week of May 11–18, 2026
  { text: '"While we are reducing roles, we are investing in AI capabilities that will drive the next phase of growth." — Chuck Robbins, Cisco CEO', source: 'TechCrunch', type: 'quote' },
  { text: 'Cisco cuts 4,000 jobs (5%) on same day as record $15.8B quarterly revenue — third major restructuring in two years driven by AI pivot', source: 'TechCrunch', type: 'headline' },
  { text: 'LinkedIn cuts 875 jobs (5%) despite record $5B+ quarterly revenue — one of few major 2026 tech layoffs NOT attributed to AI', source: 'GeekWire', type: 'headline' },
  { text: 'Waymo expands to 1,400+ square miles across 11 US cities — backed by $16B raise at $126B valuation and $350M+ ARR', source: 'Electrek', type: 'headline' },
  { text: 'True Anomaly raises $650M Series D at $2.2B valuation; plans to double headcount to 500+ for Pentagon Golden Dome program', source: 'Bloomberg', type: 'headline' },
  { text: 'John Ternus named Apple CEO successor (Sept 1, 2026); Tim Cook becomes executive chairman after 15 years at helm', source: 'Apple Newsroom', type: 'headline' },
  { text: '136,000+ tech workers laid off in 2026 through mid-May — 321 events averaging 1,004 job losses per day', source: 'TrueUp', type: 'stat' },
  { text: 'Big Tech ($725B combined 2026 capex) directing spending almost entirely into compute, not payroll', source: '247wallst / Bloomberg', type: 'stat' },

  // Week of May 18–25, 2026
  { text: '"We are architecting an organization that operates with greater velocity — reallocating capital to AI partnerships with Anthropic and OpenAI." — Sasan Goodarzi, Intuit CEO', source: 'TechCrunch', type: 'quote' },
  { text: 'Intuit signs multi-year AI deals with Anthropic and OpenAI the same day it cuts 3,000 jobs (17%)', source: 'HCA Magazine', type: 'headline' },
  { text: 'Meta executed 8,000 layoffs on May 20 — largest single-day tech job cut event of 2026; also cancelled 6,000 open roles and redirected 7,000 workers into AI pods', source: 'The Next Web', type: 'headline' },
  { text: 'Standard Chartered to eliminate 7,800 support roles by 2030 as AI replaces HR, risk, and compliance functions', source: 'CNBC', type: 'headline' },
  { text: 'Sierra raises $950M at $15.8B valuation — Bret Taylor\'s enterprise AI agent company counts 40%+ of Fortune 50 as customers', source: 'TechCrunch', type: 'headline' },
  { text: 'Anthropic poaches Microsoft Azure AI President Eric Boyd as head of infrastructure to scale Claude\'s rapidly growing model capacity', source: 'Bloomberg', type: 'headline' },
  { text: '134,600+ tech workers laid off across 212 events in 2026 as of May 24 — nearly 1,000 per day', source: 'TrueUp', type: 'stat' },
  { text: 'AI Engineer ranks #1 fastest-growing US job title for the 3rd consecutive year — postings up 143% YoY', source: 'LinkedIn Jobs on the Rise', type: 'stat' },
  { text: '59% of firms with strategic AI integration reported growth in entry-level hiring in 2026 — AI-enabled companies growing headcount, not cutting it', source: 'CBS News', type: 'stat' },

  // Week of May 26 – June 1, 2026
  { text: '"The companies that win in the AI era will have focus, urgency, and the discipline to continuously shift investment toward long-term value creation." — Chuck Robbins, Cisco CEO', source: 'TheStreet', type: 'quote' },
  { text: '"Today we are restructuring Rapyd to align with a fundamental shift: Rapyd is now a company operated by AI." — Arik Shtilman, Rapyd CEO', source: 'Ctech', type: 'quote' },
  { text: '"This is not a reactive measure — it is a deliberate evolution to reduce complexity, raise the performance bar, and build a leaner SentinelOne." — Tomer Weingarten, SentinelOne CEO', source: 'CNBC', type: 'quote' },
  { text: '"We are evolving Webflow for the agentic web — AI tools have fundamentally transformed how websites are built." — Linda Tong, Webflow CEO', source: 'TechCrunch', type: 'quote' },
  { text: 'Israeli "Black Thursday" (May 28): Wix, Amdocs, SentinelOne, and Rapyd all announce major cuts on same day', source: 'Times of Israel / Ctech', type: 'headline' },
  { text: 'Webflow cuts ~20% of workforce (May 27, 2026) — employees locked out of laptops at 7am without warning; company restructuring for "agentic web" era', source: 'SF Chronicle / IBTimes', type: 'headline' },
  { text: 'Intuit cuts 3,000 (17%) and signs multi-year Anthropic + OpenAI deals to embed AI in TurboTax and QuickBooks', source: 'TechCrunch', type: 'headline' },
  { text: '148,000+ tech workers laid off in 2026 through May 31 — 354 events at 981 people per day', source: 'TrueUp', type: 'stat' },
];
