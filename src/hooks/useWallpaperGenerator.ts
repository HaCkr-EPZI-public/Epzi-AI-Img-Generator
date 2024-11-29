import { useState } from 'react';
import { WallpaperConfig, GeneratedWallpaper } from '../types/wallpaper';
import { generateWallpaper } from '../utils/wallpaperService';
import { toast } from 'react-hot-toast';

export function useWallpaperGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [wallpapers, setWallpapers] = useState<GeneratedWallpaper[]>([]);

  const generateNewWallpaper = async (config: WallpaperConfig) => {
    try {
      setIsLoading(true);
      const newWallpaper = await generateWallpaper(config);
      setWallpapers(prev => [newWallpaper, ...prev]);
      toast.success('Wallpaper generated successfully!');
    } catch (error) {
      toast.error('Failed to generate wallpaper. Please try again.');
      console.error('Wallpaper generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    wallpapers,
    generateNewWallpaper,
  };
}