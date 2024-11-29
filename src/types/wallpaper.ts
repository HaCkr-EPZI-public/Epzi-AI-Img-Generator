export interface WallpaperConfig {
  prompt: string;
  style: string;
  color: string;
  resolution: string;
  aspectRatio: string;
  mood: string;
  lighting: string;
  subject: string;
}

export interface GeneratedWallpaper {
  id: string;
  url: string;
  prompt: string;
  createdAt: string;
  config: WallpaperConfig;
}

export interface StyleOption {
  value: string;
  label: string;
  description: string;
}