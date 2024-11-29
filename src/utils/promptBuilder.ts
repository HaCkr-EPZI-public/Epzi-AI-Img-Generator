import { WallpaperConfig } from '../types/wallpaper';

export function buildPrompt(config: WallpaperConfig): string {
  const components = [
    config.prompt,
    `${config.subject} scene`,
    `${config.mood} atmosphere`,
    `${config.lighting} lighting`,
    `${config.style} style`,
    `${config.color} colors`
  ];

  return components
    .filter(Boolean)
    .join(', ')
    .toLowerCase();
}