import React, { useState } from 'react';
import { Settings, Palette, Layout, Sparkles, Sun, Image } from 'lucide-react';
import { WallpaperConfig } from '../types/wallpaper';
import SelectOption from './SelectOption';
import PromptInput from './PromptInput';
import {
  styleOptions,
  colorSchemes,
  resolutions,
  aspectRatios,
  moods,
  lighting,
  subjects
} from '../constants/wallpaperOptions';

interface WallpaperFormProps {
  onGenerate: (config: WallpaperConfig) => void;
  isLoading: boolean;
}

export default function WallpaperForm({ onGenerate, isLoading }: WallpaperFormProps) {
  const [config, setConfig] = useState<WallpaperConfig>({
    prompt: '',
    style: 'realistic',
    color: 'vibrant',
    resolution: '1920x1080',
    aspectRatio: '16:9',
    mood: 'peaceful',
    lighting: 'natural',
    subject: 'nature'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(config);
  };

  const updateConfig = (key: keyof WallpaperConfig) => (value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-4xl">
      <PromptInput
        value={config.prompt}
        onChange={updateConfig('prompt')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SelectOption
          label="Style"
          value={config.style}
          options={styleOptions}
          onChange={updateConfig('style')}
          icon={<Settings size={20} />}
        />

        <SelectOption
          label="Color Scheme"
          value={config.color}
          options={colorSchemes}
          onChange={updateConfig('color')}
          icon={<Palette size={20} />}
        />

        <SelectOption
          label="Resolution"
          value={config.resolution}
          options={resolutions}
          onChange={updateConfig('resolution')}
          icon={<Layout size={20} />}
        />

        <SelectOption
          label="Aspect Ratio"
          value={config.aspectRatio}
          options={aspectRatios}
          onChange={updateConfig('aspectRatio')}
          icon={<Layout size={20} />}
        />

        <SelectOption
          label="Mood"
          value={config.mood}
          options={moods}
          onChange={updateConfig('mood')}
          icon={<Sparkles size={20} />}
        />

        <SelectOption
          label="Lighting"
          value={config.lighting}
          options={lighting}
          onChange={updateConfig('lighting')}
          icon={<Sun size={20} />}
        />

        <SelectOption
          label="Subject"
          value={config.subject}
          options={subjects}
          onChange={updateConfig('subject')}
          icon={<Image size={20} />}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg
                 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
      >
        {isLoading ? 'Generating...' : 'Generate Wallpaper'}
      </button>
    </form>
  );
}