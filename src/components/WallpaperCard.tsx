import React from 'react';
import { Download } from 'lucide-react';
import { GeneratedWallpaper } from '../types/wallpaper';

interface WallpaperCardProps {
  wallpaper: GeneratedWallpaper;
  onDownload: () => void;
}

export default function WallpaperCard({ wallpaper, onDownload }: WallpaperCardProps) {
  return (
    <div className="group relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={wallpaper.url}
        alt={wallpaper.prompt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-sm mb-2 line-clamp-2">{wallpaper.prompt}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              <Download size={16} />
              Download
            </button>
            <span className="text-xs opacity-75">
              {wallpaper.config.resolution} • {wallpaper.config.style}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}