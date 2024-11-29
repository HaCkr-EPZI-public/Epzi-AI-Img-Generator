import { WallpaperConfig, GeneratedWallpaper } from '../types/wallpaper';
import { buildPrompt } from './promptBuilder';

export async function generateWallpaper(config: WallpaperConfig): Promise<GeneratedWallpaper> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const fullPrompt = buildPrompt(config);
  const dimensions = config.resolution.split('x');
  
  return {
    id: generateId(),
    url: `https://source.unsplash.com/${dimensions[0]}x${dimensions[1]}/?${encodeURIComponent(fullPrompt)}`,
    prompt: config.prompt,
    createdAt: new Date().toISOString(),
    config
  };
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}