import React from 'react';
import { Download } from 'lucide-react';
import { GeneratedWallpaper } from '../types/wallpaper';
import Skeleton from 'react-loading-skeleton';
import { downloadWallpaper } from '../utils/downloadHelper';
import WallpaperCard from './WallpaperCard';

interface WallpaperGalleryProps {
  wallpapers: GeneratedWallpaper[];
  isLoading: boolean;
}

export default function WallpaperGallery({ wallpapers, isLoading }: WallpaperGalleryProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
            <Skeleton height="100%" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
      {wallpapers.map((wallpaper) => (
        <WallpaperCard
          key={wallpaper.id}
          wallpaper={wallpaper}
          onDownload={() => downloadWallpaper(wallpaper.url, wallpaper.prompt)}
        />
      ))}
    </div>
  );
}