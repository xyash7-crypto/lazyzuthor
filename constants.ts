
import type { PenColor, PenSize } from '@/types';

export const PEN_SIZES: PenSize[] = [
  { id: 'small', value: 2, label: 'S' },
  { id: 'medium', value: 5, label: 'M' },
  { id: 'large', value: 10, label: 'L' },
];

export const PEN_COLORS: PenColor[] = [
  { id: 'black', value: '#1a202c', label: 'Black' }, // a dark charcoal
  { id: 'blue', value: '#2b6cb0', label: 'Dark Blue' },
  { id: 'yellow', value: '#f6e05e', label: 'Highlight' },
];

export const MIN_SCROLL_SPEED = 0;
export const MAX_SCROLL_SPEED = 5;
export const DEFAULT_SCROLL_SPEED = 1;

export const DRAWING_FIXED_X_PERCENT = 0.3; // Draw at 30% from the left of the viewport
export const DOT_GRID_SPACING = 30;
export const DOT_GRID_RADIUS = 1;
