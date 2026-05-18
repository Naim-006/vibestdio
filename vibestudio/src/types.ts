export type FontOption = {
  id: string;
  name: string;
  family: string;
  category: 'sans' | 'serif' | 'mono' | 'display';
  importUrl?: string;
};

export type Palette = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
};

export type ThemeState = {
  palette: Palette;
  font: FontOption;
  borderRadius: number;
  spacing: 'compact' | 'balanced' | 'spacious';
  vibe: 'minimal' | 'playful' | 'premium' | 'brutal';
};

export const FONTS: FontOption[] = [
  { id: 'inter', name: 'Inter', family: '"Inter", sans-serif', category: 'sans' },
  { id: 'dm-sans', name: 'DM Sans', family: '"DM Sans", sans-serif', category: 'sans', importUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' },
  { id: 'playfair', name: 'Playfair Display', family: '"Playfair Display", serif', category: 'serif', importUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap' },
  { id: 'space-grotesk', name: 'Space Grotesk', family: '"Space Grotesk", sans-serif', category: 'display', importUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap' },
  { id: 'jet-brains', name: 'JetBrains Mono', family: '"JetBrains Mono", monospace', category: 'mono', importUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap' },
  { id: 'outfit', name: 'Outfit', family: '"Outfit", sans-serif', category: 'display', importUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap' },
];

export const PALETTES: Palette[] = [
  {
    id: 'neon-noir',
    name: 'Neon Noir',
    primary: '#00FF94',
    secondary: '#7000FF',
    accent: '#FF00E5',
    background: '#0B0B0C',
    surface: '#18181B',
    text: '#FFFFFF',
    muted: '#71717A',
  },
  {
    id: 'desert-minimal',
    name: 'Desert Minimal',
    primary: '#D4A373',
    secondary: '#A3B18A',
    accent: '#E9EDC6',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1A1A1A',
    muted: '#A1A1AA',
  },
  {
    id: 'royal-ascent',
    name: 'Royal Ascent',
    primary: '#8B5CF6',
    secondary: '#EC4899',
    accent: '#F59E0B',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    muted: '#94A3B8',
  },
  {
    id: 'slate-pro',
    name: 'Slate Pro',
    primary: '#0F172A',
    secondary: '#334155',
    accent: '#64748B',
    background: '#F8FAFC',
    surface: '#FFFFFF',
    text: '#0F172A',
    muted: '#94A3B8',
  },
  {
    id: 'titanium',
    name: 'Titanium',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#0f172a',
    muted: '#94a3b8',
  },
  {
    id: 'sakura',
    name: 'Sakura',
    primary: '#ec4899',
    secondary: '#f472b6',
    accent: '#fb7185',
    background: '#fff1f2',
    surface: '#ffffff',
    text: '#881337',
    muted: '#fbafc7',
  },
  {
    id: 'nordic',
    name: 'Nordic',
    primary: '#3b82f6',
    secondary: '#60a5fa',
    accent: '#93c5fd',
    background: '#f0f9ff',
    surface: '#ffffff',
    text: '#0c4a6e',
    muted: '#7dd3fc',
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    primary: '#18181b',
    secondary: '#3f3f46',
    accent: '#71717a',
    background: '#ffffff',
    surface: '#fafafa',
    text: '#09090b',
    muted: '#d4d4d8',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    primary: '#f97316',
    secondary: '#fb923c',
    accent: '#fdba74',
    background: '#fffaf5',
    surface: '#ffffff',
    text: '#7c2d12',
    muted: '#ffedd5',
  }
];
