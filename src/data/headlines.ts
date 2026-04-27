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

  // CEO Quotes (new Apr 2026)
  { text: '"AI is generating over 65% of our new code, allowing us to function with smaller, more focused teams." — Evan Spiegel, Snap', source: 'TechCrunch', type: 'quote' },

  // Stats
  { text: '155+ tech layoff events in 2026, impacting over 100,000 workers — 864 jobs lost per day', source: 'TrueUp', type: 'stat' },
  { text: 'AI/ML job postings up 163% YoY in 2025', source: 'Indeed', type: 'stat' },
  { text: 'Healthcare added 693K jobs in 2025', source: 'BLS', type: 'stat' },
  { text: '$425B global VC funding in 2025 — 3rd highest year ever', source: 'Crunchbase', type: 'stat' },
  { text: 'Workers with AI skills earn 56% higher wages', source: 'PwC', type: 'stat' },
  { text: 'Cybersecurity has 4.8M unfilled positions globally', source: 'ISC2', type: 'stat' },
  { text: '61% of tech leaders plan to increase headcount in H1 2026', source: 'Robert Half', type: 'stat' },
  { text: 'Defense tech VC hit $49.1B in 2025 — nearly 2x prior year', source: 'Bloomberg', type: 'stat' },
  { text: 'Clean energy jobs grew 3x faster than the rest of the US workforce', source: 'DOE', type: 'stat' },

  // Headlines
  { text: 'OpenAI plans to nearly double headcount to 8,000 by end of 2026 targeting enterprise growth', source: 'FT / Fortune', type: 'headline' },
  { text: 'Meta announces 8,000 job cuts (10%) to fund $115–135B in AI capital spending for 2026', source: 'CNBC', type: 'headline' },
  { text: 'Snap cuts 16% of workforce after AI generates 65%+ of new code, reducing need for engineers', source: 'TechCrunch', type: 'headline' },
  { text: 'Microsoft launches first-ever voluntary retirement buyout — 7% of US workforce eligible', source: 'TechCrunch', type: 'headline' },
  { text: 'Anthropic grew 21x from 192 to 4,074 employees', source: 'Anthropic', type: 'headline' },
  { text: 'NVIDIA generates $4.1M revenue per employee', source: 'NVIDIA', type: 'headline' },
  { text: 'Eli Lilly invests $27B in US manufacturing, adding 3,000+ jobs', source: 'Eli Lilly', type: 'headline' },
  { text: 'Anduril doubled revenue to $1B, building 5M sqft weapons factory', source: 'Anduril', type: 'headline' },
  { text: 'TSMC investing $165B in US fabs, creating 6,000+ direct jobs', source: 'TSMC', type: 'headline' },
  { text: 'Apple commits $500B to US investment over 4 years with 20K new jobs', source: 'Apple', type: 'headline' },
  { text: 'SoftBank pledges $100B US investment, promising 100,000 jobs', source: 'SoftBank', type: 'headline' },
  { text: 'CHIPS Act drives 500,000 jobs across 28 states', source: 'NIST', type: 'headline' },
];
