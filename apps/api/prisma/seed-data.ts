/** Static seed content for Rankly. Kept separate from seed.ts logic. */

export interface CategorySeed {
  slug: string;
  name: string;
  icon?: string;
  paidSupportEnabled?: boolean;
  moderationLevel?: 'STANDARD' | 'ELEVATED' | 'STRICT';
  children?: CategorySeed[];
}

export const CATEGORIES: CategorySeed[] = [
  {
    slug: 'ai',
    name: 'AI',
    icon: '🤖',
    children: [
      { slug: 'ai-assistants', name: 'AI Assistants', icon: '💬' },
      { slug: 'ai-image', name: 'AI Image Generators', icon: '🎨' },
      { slug: 'ai-coding', name: 'AI Coding Tools', icon: '⌨️' },
      { slug: 'ai-models', name: 'AI Models', icon: '🧠' },
    ],
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: '💻',
    children: [
      { slug: 'smartphones', name: 'Smartphones', icon: '📱' },
      { slug: 'laptops', name: 'Laptops', icon: '💻' },
      { slug: 'apps', name: 'Apps', icon: '📲' },
      { slug: 'browsers', name: 'Browsers', icon: '🌐' },
    ],
  },
  {
    slug: 'travel',
    name: 'Travel',
    icon: '✈️',
    children: [
      { slug: 'cities', name: 'Cities', icon: '🏙️' },
      { slug: 'countries', name: 'Countries', icon: '🌍' },
      { slug: 'beaches', name: 'Beaches', icon: '🏖️' },
    ],
  },
  {
    slug: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    children: [
      { slug: 'movies', name: 'Movies', icon: '🎞️' },
      { slug: 'tv', name: 'TV & Streaming', icon: '📺' },
      { slug: 'music', name: 'Music', icon: '🎵' },
      { slug: 'gaming', name: 'Gaming', icon: '🎮' },
    ],
  },
  {
    slug: 'sports',
    name: 'Sports',
    icon: '⚽',
    children: [
      { slug: 'football', name: 'Football', icon: '⚽' },
      { slug: 'basketball', name: 'Basketball', icon: '🏀' },
      { slug: 'f1', name: 'Formula 1', icon: '🏎️' },
    ],
  },
  {
    slug: 'food',
    name: 'Food',
    icon: '🍽️',
    children: [
      { slug: 'restaurants', name: 'Restaurants', icon: '🍴' },
      { slug: 'dishes', name: 'Dishes', icon: '🍕' },
    ],
  },
  {
    slug: 'crypto',
    name: 'Crypto',
    icon: '₿',
    paidSupportEnabled: false,
    moderationLevel: 'ELEVATED',
    children: [
      { slug: 'coins', name: 'Coins', icon: '🪙' },
      { slug: 'exchanges', name: 'Exchanges', icon: '💱' },
    ],
  },
  {
    slug: 'finance',
    name: 'Finance',
    icon: '📈',
    paidSupportEnabled: false,
    moderationLevel: 'ELEVATED',
  },
  {
    slug: 'politics',
    name: 'Politics',
    icon: '🏛️',
    paidSupportEnabled: false,
    moderationLevel: 'STRICT',
  },
  {
    slug: 'news',
    name: 'News',
    icon: '📰',
    paidSupportEnabled: false,
    moderationLevel: 'ELEVATED',
  },
  {
    slug: 'health',
    name: 'Health',
    icon: '🩺',
    paidSupportEnabled: false,
    moderationLevel: 'STRICT',
  },
];

export interface EntitySeed {
  slug: string;
  name: string;
  type: string;
  description?: string;
}

export const ENTITIES: EntitySeed[] = [
  // cities
  { slug: 'london', name: 'London', type: 'city' },
  { slug: 'paris', name: 'Paris', type: 'city' },
  { slug: 'barcelona', name: 'Barcelona', type: 'city' },
  { slug: 'berlin', name: 'Berlin', type: 'city' },
  { slug: 'amsterdam', name: 'Amsterdam', type: 'city' },
  { slug: 'rome', name: 'Rome', type: 'city' },
  { slug: 'lisbon', name: 'Lisbon', type: 'city' },
  { slug: 'vienna', name: 'Vienna', type: 'city' },
  { slug: 'tokyo', name: 'Tokyo', type: 'city' },
  { slug: 'new-york', name: 'New York', type: 'city' },
  // countries
  { slug: 'germany', name: 'Germany', type: 'country' },
  { slug: 'france', name: 'France', type: 'country' },
  { slug: 'japan', name: 'Japan', type: 'country' },
  { slug: 'switzerland', name: 'Switzerland', type: 'country' },
  { slug: 'canada', name: 'Canada', type: 'country' },
  { slug: 'spain', name: 'Spain', type: 'country' },
  { slug: 'netherlands', name: 'Netherlands', type: 'country' },
  { slug: 'australia', name: 'Australia', type: 'country' },
  // ai tools
  { slug: 'chatgpt', name: 'ChatGPT', type: 'ai-tool' },
  { slug: 'claude', name: 'Claude', type: 'ai-tool' },
  { slug: 'gemini', name: 'Gemini', type: 'ai-tool' },
  { slug: 'perplexity', name: 'Perplexity', type: 'ai-tool' },
  { slug: 'grok', name: 'Grok', type: 'ai-tool' },
  { slug: 'midjourney', name: 'Midjourney', type: 'ai-tool' },
  { slug: 'dall-e', name: 'DALL·E', type: 'ai-tool' },
  { slug: 'stable-diffusion', name: 'Stable Diffusion', type: 'ai-tool' },
  { slug: 'flux', name: 'Flux', type: 'ai-tool' },
  { slug: 'cursor', name: 'Cursor', type: 'ai-tool' },
  { slug: 'github-copilot', name: 'GitHub Copilot', type: 'ai-tool' },
  { slug: 'claude-code', name: 'Claude Code', type: 'ai-tool' },
  // phones
  { slug: 'iphone-17-pro', name: 'iPhone 17 Pro', type: 'smartphone' },
  { slug: 'samsung-galaxy-s26', name: 'Samsung Galaxy S26', type: 'smartphone' },
  { slug: 'google-pixel-10', name: 'Google Pixel 10', type: 'smartphone' },
  { slug: 'nothing-phone-3', name: 'Nothing Phone (3)', type: 'smartphone' },
  // movies
  { slug: 'the-godfather', name: 'The Godfather', type: 'movie' },
  { slug: 'inception', name: 'Inception', type: 'movie' },
  { slug: 'parasite', name: 'Parasite', type: 'movie' },
  { slug: 'interstellar', name: 'Interstellar', type: 'movie' },
  { slug: 'pulp-fiction', name: 'Pulp Fiction', type: 'movie' },
  { slug: 'spirited-away', name: 'Spirited Away', type: 'movie' },
  // coins
  { slug: 'bitcoin', name: 'Bitcoin', type: 'coin' },
  { slug: 'ethereum', name: 'Ethereum', type: 'coin' },
  { slug: 'solana', name: 'Solana', type: 'coin' },
];

export interface RankingSeed {
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  type: 'LEADERBOARD' | 'BINARY';
  /** entity slug -> target community up-rate (0..1) used to simulate votes */
  items: { entitySlug?: string; label?: string; upRate: number; volume: number }[];
}

export const RANKINGS: RankingSeed[] = [
  {
    slug: 'best-cities-in-europe',
    title: 'Best Cities in Europe',
    description: 'Which European city does the community rate highest to live in and visit?',
    categorySlug: 'cities',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'london', upRate: 0.82, volume: 4200 },
      { entitySlug: 'paris', upRate: 0.79, volume: 4600 },
      { entitySlug: 'barcelona', upRate: 0.85, volume: 3800 },
      { entitySlug: 'berlin', upRate: 0.76, volume: 3100 },
      { entitySlug: 'amsterdam', upRate: 0.83, volume: 2900 },
      { entitySlug: 'rome', upRate: 0.74, volume: 2600 },
      { entitySlug: 'lisbon', upRate: 0.88, volume: 2100 },
      { entitySlug: 'vienna', upRate: 0.8, volume: 1500 },
    ],
  },
  {
    slug: 'best-countries-to-live-in',
    title: 'Best Countries to Live In',
    description: 'The community verdict on quality of life around the world.',
    categorySlug: 'countries',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'switzerland', upRate: 0.9, volume: 5200 },
      { entitySlug: 'japan', upRate: 0.84, volume: 6100 },
      { entitySlug: 'canada', upRate: 0.8, volume: 4800 },
      { entitySlug: 'germany', upRate: 0.77, volume: 5600 },
      { entitySlug: 'netherlands', upRate: 0.85, volume: 3400 },
      { entitySlug: 'australia', upRate: 0.82, volume: 3900 },
      { entitySlug: 'france', upRate: 0.72, volume: 4300 },
      { entitySlug: 'spain', upRate: 0.83, volume: 3700 },
    ],
  },
  {
    slug: 'best-ai-assistants-2026',
    title: 'Best AI Assistants 2026',
    description: 'The AI assistant the community trusts most this year.',
    categorySlug: 'ai-assistants',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'chatgpt', upRate: 0.81, volume: 12800 },
      { entitySlug: 'claude', upRate: 0.86, volume: 11200 },
      { entitySlug: 'gemini', upRate: 0.73, volume: 9400 },
      { entitySlug: 'perplexity', upRate: 0.79, volume: 6100 },
      { entitySlug: 'grok', upRate: 0.62, volume: 5300 },
    ],
  },
  {
    slug: 'best-ai-image-generators',
    title: 'Best AI Image Generators',
    description: 'Which model makes the images people actually want?',
    categorySlug: 'ai-image',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'midjourney', upRate: 0.84, volume: 7600 },
      { entitySlug: 'flux', upRate: 0.8, volume: 4200 },
      { entitySlug: 'dall-e', upRate: 0.7, volume: 5100 },
      { entitySlug: 'stable-diffusion', upRate: 0.75, volume: 4800 },
    ],
  },
  {
    slug: 'best-ai-coding-tools',
    title: 'Best AI Coding Tools',
    description: 'What developers reach for when they let AI write code.',
    categorySlug: 'ai-coding',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'claude-code', upRate: 0.87, volume: 5200 },
      { entitySlug: 'cursor', upRate: 0.83, volume: 6800 },
      { entitySlug: 'github-copilot', upRate: 0.74, volume: 7400 },
    ],
  },
  {
    slug: 'best-smartphones-2026',
    title: 'Best Smartphones 2026',
    description: 'The phone the community would actually buy right now.',
    categorySlug: 'smartphones',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'iphone-17-pro', upRate: 0.78, volume: 9100 },
      { entitySlug: 'samsung-galaxy-s26', upRate: 0.76, volume: 7700 },
      { entitySlug: 'google-pixel-10', upRate: 0.82, volume: 5400 },
      { entitySlug: 'nothing-phone-3', upRate: 0.71, volume: 2300 },
    ],
  },
  {
    slug: 'best-movies-of-all-time',
    title: 'Best Movies of All Time',
    description: 'The community canon. Vote your favourites up.',
    categorySlug: 'movies',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'the-godfather', upRate: 0.9, volume: 15200 },
      { entitySlug: 'parasite', upRate: 0.87, volume: 9800 },
      { entitySlug: 'interstellar', upRate: 0.85, volume: 13400 },
      { entitySlug: 'inception', upRate: 0.84, volume: 14100 },
      { entitySlug: 'pulp-fiction', upRate: 0.83, volume: 11600 },
      { entitySlug: 'spirited-away', upRate: 0.88, volume: 8700 },
    ],
  },
  {
    slug: 'best-crypto-for-the-next-decade',
    title: 'Best Crypto for the Next Decade',
    description: 'Community sentiment only — this is not investment advice.',
    categorySlug: 'coins',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'bitcoin', upRate: 0.72, volume: 8800 },
      { entitySlug: 'ethereum', upRate: 0.68, volume: 7200 },
      { entitySlug: 'solana', upRate: 0.6, volume: 5600 },
    ],
  },
  // ── Binary opinion topics ──
  {
    slug: 'is-the-new-ai-feature-actually-better',
    title: 'Is the new AI feature actually better?',
    description:
      'A major assistant shipped a new reasoning mode this week. Does it actually help?',
    categorySlug: 'ai',
    type: 'BINARY',
    items: [{ label: 'Yes, it is better', upRate: 0.67, volume: 82400 }],
  },
  {
    slug: 'do-you-like-apples-new-product',
    title: "Do you like Apple's new product?",
    description: 'Apple unveiled a new device. First community reaction.',
    categorySlug: 'technology',
    type: 'BINARY',
    items: [{ label: 'I like it', upRate: 0.58, volume: 46200 }],
  },
  {
    slug: 'was-this-the-goal-of-the-season',
    title: 'Was this the goal of the season?',
    description: 'A stunning strike this weekend. Best goal of the season so far?',
    categorySlug: 'football',
    type: 'BINARY',
    items: [{ label: 'Goal of the season', upRate: 0.74, volume: 31900 }],
  },
  {
    slug: 'should-remote-work-be-the-default',
    title: 'Should remote work be the default?',
    description: 'The community opinion on whether companies should default to remote.',
    categorySlug: 'technology',
    type: 'BINARY',
    items: [{ label: 'Yes, remote by default', upRate: 0.63, volume: 58700 }],
  },
];
