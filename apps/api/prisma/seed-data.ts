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
    moderationLevel: 'ELEVATED',
  },
  {
    slug: 'politics',
    name: 'Politics',
    icon: '🏛️',
    moderationLevel: 'STRICT',
  },
  {
    slug: 'news',
    name: 'News',
    icon: '📰',
    moderationLevel: 'ELEVATED',
  },
  {
    slug: 'health',
    name: 'Health',
    icon: '🩺',
    moderationLevel: 'STRICT',
  },
  {
    slug: 'creators',
    name: 'Creators',
    icon: '👑',
    children: [
      { slug: 'youtubers', name: 'YouTubers', icon: '▶️' },
      { slug: 'tiktokers', name: 'TikTokers', icon: '🎵' },
      { slug: 'instagram-stars', name: 'Instagram Stars', icon: '📸' },
      { slug: 'streamers', name: 'Streamers', icon: '🎥' },
      { slug: 'podcasters', name: 'Podcasters', icon: '🎙️' },
    ],
  },
  {
    slug: 'cars',
    name: 'Cars',
    icon: '🚗',
    children: [
      { slug: 'electric-cars', name: 'Electric Cars', icon: '🔋' },
      { slug: 'supercars', name: 'Supercars', icon: '🏁' },
    ],
  },
  {
    slug: 'fashion',
    name: 'Fashion',
    icon: '👗',
    children: [
      { slug: 'sneakers', name: 'Sneakers', icon: '👟' },
      { slug: 'fashion-brands', name: 'Fashion Brands', icon: '🛍️' },
    ],
  },
  {
    slug: 'business',
    name: 'Business',
    icon: '💼',
    children: [
      { slug: 'companies', name: 'Companies', icon: '🏢' },
      { slug: 'ceos', name: 'CEOs & Founders', icon: '🧑‍💼' },
    ],
  },
  {
    slug: 'science',
    name: 'Science',
    icon: '🔬',
    children: [{ slug: 'space', name: 'Space', icon: '🚀' }],
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
  // more cities
  { slug: 'dubai', name: 'Dubai', type: 'city' },
  { slug: 'singapore', name: 'Singapore', type: 'city' },
  { slug: 'seoul', name: 'Seoul', type: 'city' },
  { slug: 'sydney', name: 'Sydney', type: 'city' },
  { slug: 'cape-town', name: 'Cape Town', type: 'city' },
  { slug: 'reykjavik', name: 'Reykjavík', type: 'city' },
  // youtubers
  { slug: 'mrbeast', name: 'MrBeast', type: 'youtuber' },
  { slug: 'pewdiepie', name: 'PewDiePie', type: 'youtuber' },
  { slug: 'kai-cenat', name: 'Kai Cenat', type: 'youtuber' },
  { slug: 'ishowspeed', name: 'IShowSpeed', type: 'youtuber' },
  { slug: 'markiplier', name: 'Markiplier', type: 'youtuber' },
  { slug: 'mrballen', name: 'MrBallen', type: 'youtuber' },
  { slug: 'emma-chamberlain', name: 'Emma Chamberlain', type: 'youtuber' },
  // tiktokers
  { slug: 'khaby-lame', name: 'Khaby Lame', type: 'tiktoker' },
  { slug: 'charli-damelio', name: "Charli D'Amelio", type: 'tiktoker' },
  { slug: 'bella-poarch', name: 'Bella Poarch', type: 'tiktoker' },
  { slug: 'addison-rae', name: 'Addison Rae', type: 'tiktoker' },
  { slug: 'zach-king', name: 'Zach King', type: 'tiktoker' },
  // instagram stars
  { slug: 'kylie-jenner', name: 'Kylie Jenner', type: 'instagram-star' },
  { slug: 'selena-gomez', name: 'Selena Gomez', type: 'instagram-star' },
  { slug: 'zendaya', name: 'Zendaya', type: 'instagram-star' },
  { slug: 'dwayne-johnson', name: 'Dwayne Johnson', type: 'instagram-star' },
  { slug: 'ariana-grande', name: 'Ariana Grande', type: 'instagram-star' },
  // streamers
  { slug: 'xqc', name: 'xQc', type: 'streamer' },
  { slug: 'ninja', name: 'Ninja', type: 'streamer' },
  { slug: 'pokimane', name: 'Pokimane', type: 'streamer' },
  { slug: 'caseoh', name: 'CaseOh', type: 'streamer' },
  { slug: 'ludwig', name: 'Ludwig', type: 'streamer' },
  // podcasters
  { slug: 'joe-rogan', name: 'Joe Rogan', type: 'podcaster' },
  { slug: 'alex-cooper', name: 'Alex Cooper', type: 'podcaster' },
  { slug: 'theo-von', name: 'Theo Von', type: 'podcaster' },
  { slug: 'lex-fridman', name: 'Lex Fridman', type: 'podcaster' },
  // cars
  { slug: 'tesla-model-3', name: 'Tesla Model 3', type: 'car' },
  { slug: 'porsche-911', name: 'Porsche 911', type: 'car' },
  { slug: 'toyota-corolla', name: 'Toyota Corolla', type: 'car' },
  { slug: 'ford-f150', name: 'Ford F-150', type: 'car' },
  { slug: 'bmw-m3', name: 'BMW M3', type: 'car' },
  { slug: 'rivian-r1t', name: 'Rivian R1T', type: 'car' },
  { slug: 'bugatti-chiron', name: 'Bugatti Chiron', type: 'car' },
  { slug: 'ferrari-sf90', name: 'Ferrari SF90', type: 'car' },
  // sneakers
  { slug: 'air-jordan-1', name: 'Air Jordan 1', type: 'sneaker' },
  { slug: 'nike-air-force-1', name: 'Nike Air Force 1', type: 'sneaker' },
  { slug: 'adidas-yeezy-350', name: 'Adidas Yeezy Boost 350', type: 'sneaker' },
  { slug: 'new-balance-550', name: 'New Balance 550', type: 'sneaker' },
  { slug: 'nike-dunk-low', name: 'Nike Dunk Low', type: 'sneaker' },
  // football players
  { slug: 'messi', name: 'Lionel Messi', type: 'footballer' },
  { slug: 'ronaldo', name: 'Cristiano Ronaldo', type: 'footballer' },
  { slug: 'mbappe', name: 'Kylian Mbappé', type: 'footballer' },
  { slug: 'haaland', name: 'Erling Haaland', type: 'footballer' },
  { slug: 'bellingham', name: 'Jude Bellingham', type: 'footballer' },
  { slug: 'vinicius-jr', name: 'Vinícius Júnior', type: 'footballer' },
  // companies
  { slug: 'apple-inc', name: 'Apple', type: 'company' },
  { slug: 'nvidia', name: 'Nvidia', type: 'company' },
  { slug: 'tesla-inc', name: 'Tesla', type: 'company' },
  { slug: 'amazon', name: 'Amazon', type: 'company' },
  { slug: 'openai', name: 'OpenAI', type: 'company' },
  { slug: 'anthropic', name: 'Anthropic', type: 'company' },
  // ceos / founders
  { slug: 'elon-musk', name: 'Elon Musk', type: 'ceo' },
  { slug: 'tim-cook', name: 'Tim Cook', type: 'ceo' },
  { slug: 'sam-altman', name: 'Sam Altman', type: 'ceo' },
  { slug: 'jensen-huang', name: 'Jensen Huang', type: 'ceo' },
  // space
  { slug: 'spacex', name: 'SpaceX', type: 'space-org' },
  { slug: 'nasa', name: 'NASA', type: 'space-org' },
  { slug: 'blue-origin', name: 'Blue Origin', type: 'space-org' },
  // music artists
  { slug: 'taylor-swift', name: 'Taylor Swift', type: 'artist' },
  { slug: 'drake', name: 'Drake', type: 'artist' },
  { slug: 'billie-eilish', name: 'Billie Eilish', type: 'artist' },
  { slug: 'the-weeknd', name: 'The Weeknd', type: 'artist' },
  { slug: 'bad-bunny', name: 'Bad Bunny', type: 'artist' },
  // games
  { slug: 'fortnite', name: 'Fortnite', type: 'game' },
  { slug: 'minecraft', name: 'Minecraft', type: 'game' },
  { slug: 'league-of-legends', name: 'League of Legends', type: 'game' },
  { slug: 'valorant', name: 'Valorant', type: 'game' },
  { slug: 'gta-vi', name: 'GTA VI', type: 'game' },
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

  // ── Creators & social media ──
  {
    slug: 'best-youtubers-2026',
    title: 'Best YouTubers 2026',
    description: 'The creators the community actually watches.',
    categorySlug: 'youtubers',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'mrbeast', upRate: 0.88, volume: 41200 },
      { entitySlug: 'kai-cenat', upRate: 0.79, volume: 22100 },
      { entitySlug: 'ishowspeed', upRate: 0.76, volume: 26800 },
      { entitySlug: 'markiplier', upRate: 0.83, volume: 14300 },
      { entitySlug: 'pewdiepie', upRate: 0.81, volume: 19700 },
      { entitySlug: 'mrballen', upRate: 0.85, volume: 12600 },
      { entitySlug: 'emma-chamberlain', upRate: 0.74, volume: 9800 },
    ],
  },
  {
    slug: 'best-tiktokers-2026',
    title: 'Best TikTokers 2026',
    description: 'Who owns the algorithm right now?',
    categorySlug: 'tiktokers',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'khaby-lame', upRate: 0.86, volume: 28400 },
      { entitySlug: 'zach-king', upRate: 0.82, volume: 15100 },
      { entitySlug: 'bella-poarch', upRate: 0.7, volume: 13200 },
      { entitySlug: 'charli-damelio', upRate: 0.63, volume: 17600 },
      { entitySlug: 'addison-rae', upRate: 0.6, volume: 11400 },
    ],
  },
  {
    slug: 'best-instagram-stars-2026',
    title: 'Best Instagram Stars 2026',
    description: 'Whose feed is worth the follow?',
    categorySlug: 'instagram-stars',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'zendaya', upRate: 0.85, volume: 16200 },
      { entitySlug: 'dwayne-johnson', upRate: 0.82, volume: 19800 },
      { entitySlug: 'selena-gomez', upRate: 0.78, volume: 14700 },
      { entitySlug: 'ariana-grande', upRate: 0.75, volume: 13100 },
      { entitySlug: 'kylie-jenner', upRate: 0.58, volume: 21300 },
    ],
  },
  {
    slug: 'best-twitch-streamers-2026',
    title: 'Best Twitch Streamers 2026',
    description: 'Who is must-watch live right now?',
    categorySlug: 'streamers',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'caseoh', upRate: 0.81, volume: 9700 },
      { entitySlug: 'pokimane', upRate: 0.77, volume: 10800 },
      { entitySlug: 'ludwig', upRate: 0.79, volume: 8400 },
      { entitySlug: 'ninja', upRate: 0.68, volume: 12600 },
      { entitySlug: 'xqc', upRate: 0.65, volume: 15900 },
    ],
  },
  {
    slug: 'best-podcasts-2026',
    title: 'Best Podcasts 2026',
    description: 'What is actually worth two hours of your commute?',
    categorySlug: 'podcasters',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'lex-fridman', upRate: 0.84, volume: 7600 },
      { entitySlug: 'theo-von', upRate: 0.8, volume: 8900 },
      { entitySlug: 'alex-cooper', upRate: 0.74, volume: 9400 },
      { entitySlug: 'joe-rogan', upRate: 0.66, volume: 18200 },
    ],
  },

  // ── Cars ──
  {
    slug: 'best-cars-2026',
    title: 'Best Cars 2026',
    description: "The community's dream garage.",
    categorySlug: 'cars',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'porsche-911', upRate: 0.89, volume: 8700 },
      { entitySlug: 'bmw-m3', upRate: 0.82, volume: 6600 },
      { entitySlug: 'tesla-model-3', upRate: 0.76, volume: 11200 },
      { entitySlug: 'toyota-corolla', upRate: 0.79, volume: 5400 },
      { entitySlug: 'ford-f150', upRate: 0.71, volume: 6100 },
    ],
  },
  {
    slug: 'best-supercars-2026',
    title: 'Best Supercars 2026',
    description: 'Pure poster-on-the-wall material.',
    categorySlug: 'supercars',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'bugatti-chiron', upRate: 0.91, volume: 5200 },
      { entitySlug: 'ferrari-sf90', upRate: 0.88, volume: 4900 },
      { entitySlug: 'rivian-r1t', upRate: 0.73, volume: 3100 },
    ],
  },

  // ── Fashion ──
  {
    slug: 'best-sneakers-2026',
    title: 'Best Sneakers 2026',
    description: 'What is actually worth the line outside the store?',
    categorySlug: 'sneakers',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'air-jordan-1', upRate: 0.87, volume: 9200 },
      { entitySlug: 'nike-dunk-low', upRate: 0.81, volume: 7100 },
      { entitySlug: 'new-balance-550', upRate: 0.78, volume: 5600 },
      { entitySlug: 'nike-air-force-1', upRate: 0.75, volume: 8300 },
      { entitySlug: 'adidas-yeezy-350', upRate: 0.6, volume: 6900 },
    ],
  },

  // ── Sports: players ──
  {
    slug: 'best-football-players-2026',
    title: 'Best Football Players 2026',
    description: 'The debate that never ends, settled by votes.',
    categorySlug: 'football',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'messi', upRate: 0.86, volume: 34200 },
      { entitySlug: 'mbappe', upRate: 0.81, volume: 26100 },
      { entitySlug: 'haaland', upRate: 0.8, volume: 22700 },
      { entitySlug: 'ronaldo', upRate: 0.79, volume: 33800 },
      { entitySlug: 'bellingham', upRate: 0.78, volume: 14900 },
      { entitySlug: 'vinicius-jr', upRate: 0.75, volume: 12300 },
    ],
  },

  // ── Business ──
  {
    slug: 'best-tech-companies-2026',
    title: 'Best Tech Companies 2026',
    description: 'Who is actually shipping things people want?',
    categorySlug: 'companies',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'nvidia', upRate: 0.84, volume: 9700 },
      { entitySlug: 'apple-inc', upRate: 0.78, volume: 14200 },
      { entitySlug: 'openai', upRate: 0.75, volume: 11800 },
      { entitySlug: 'anthropic', upRate: 0.81, volume: 6400 },
      { entitySlug: 'tesla-inc', upRate: 0.63, volume: 13100 },
      { entitySlug: 'amazon', upRate: 0.66, volume: 8900 },
    ],
  },
  {
    slug: 'most-respected-ceos-2026',
    title: 'Most Respected CEOs 2026',
    description: 'Leadership, as judged by the community.',
    categorySlug: 'ceos',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'jensen-huang', upRate: 0.83, volume: 6200 },
      { entitySlug: 'sam-altman', upRate: 0.68, volume: 9100 },
      { entitySlug: 'tim-cook', upRate: 0.72, volume: 7400 },
      { entitySlug: 'elon-musk', upRate: 0.54, volume: 24800 },
    ],
  },

  // ── Science / space ──
  {
    slug: 'best-space-companies-2026',
    title: 'Best Space Companies 2026',
    description: 'Who is winning the new space race?',
    categorySlug: 'space',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'spacex', upRate: 0.85, volume: 11200 },
      { entitySlug: 'nasa', upRate: 0.82, volume: 9800 },
      { entitySlug: 'blue-origin', upRate: 0.6, volume: 4100 },
    ],
  },

  // ── Music & gaming ──
  {
    slug: 'best-music-artists-2026',
    title: 'Best Music Artists 2026',
    description: 'Whose music actually holds up on repeat?',
    categorySlug: 'music',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'taylor-swift', upRate: 0.82, volume: 28400 },
      { entitySlug: 'billie-eilish', upRate: 0.8, volume: 17200 },
      { entitySlug: 'the-weeknd', upRate: 0.79, volume: 15600 },
      { entitySlug: 'bad-bunny', upRate: 0.77, volume: 14100 },
      { entitySlug: 'drake', upRate: 0.65, volume: 22900 },
    ],
  },
  {
    slug: 'best-video-games-2026',
    title: 'Best Video Games 2026',
    description: 'What is actually worth your time this year?',
    categorySlug: 'gaming',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'minecraft', upRate: 0.88, volume: 19700 },
      { entitySlug: 'gta-vi', upRate: 0.84, volume: 26300 },
      { entitySlug: 'valorant', upRate: 0.76, volume: 14800 },
      { entitySlug: 'fortnite', upRate: 0.68, volume: 21100 },
      { entitySlug: 'league-of-legends', upRate: 0.64, volume: 18400 },
    ],
  },

  // ── Travel: more cities ──
  {
    slug: 'best-cities-worldwide-2026',
    title: 'Best Cities Worldwide 2026',
    description: 'Beyond Europe — the global community verdict.',
    categorySlug: 'cities',
    type: 'LEADERBOARD',
    items: [
      { entitySlug: 'singapore', upRate: 0.87, volume: 7900 },
      { entitySlug: 'tokyo', upRate: 0.89, volume: 12400 },
      { entitySlug: 'dubai', upRate: 0.79, volume: 9100 },
      { entitySlug: 'sydney', upRate: 0.83, volume: 6600 },
      { entitySlug: 'reykjavik', upRate: 0.85, volume: 3200 },
      { entitySlug: 'cape-town', upRate: 0.81, volume: 4100 },
      { entitySlug: 'new-york', upRate: 0.74, volume: 15800 },
    ],
  },

  // ── More binary opinion topics ──
  {
    slug: 'is-mrbeast-still-the-goat',
    title: 'Is MrBeast still the GOAT of YouTube?',
    description: 'The eternal creator debate, this week’s edition.',
    categorySlug: 'youtubers',
    type: 'BINARY',
    items: [{ label: 'Still the GOAT', upRate: 0.71, volume: 38900 }],
  },
  {
    slug: 'should-tiktok-be-banned',
    title: 'Should TikTok be banned in your country?',
    description: 'A recurring policy debate. Community opinion only — not legal advice.',
    categorySlug: 'politics',
    type: 'BINARY',
    items: [{ label: 'Yes, ban it', upRate: 0.41, volume: 71200 }],
  },
  {
    slug: 'is-the-new-gta-worth-the-hype',
    title: 'Is the new GTA worth the hype?',
    description: 'It finally has a release date. First reactions.',
    categorySlug: 'gaming',
    type: 'BINARY',
    items: [{ label: 'Worth the hype', upRate: 0.78, volume: 54300 }],
  },
  {
    slug: 'would-you-buy-a-fully-electric-car',
    title: 'Would you buy a fully electric car today?',
    description: 'Range, charging, price — where does the community land?',
    categorySlug: 'electric-cars',
    type: 'BINARY',
    items: [{ label: 'Yes, I would', upRate: 0.56, volume: 33700 }],
  },
];
