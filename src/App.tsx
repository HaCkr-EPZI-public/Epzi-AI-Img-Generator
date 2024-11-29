import React from 'react';
import { Toaster } from 'react-hot-toast';
import WallpaperForm from './components/WallpaperForm';
import WallpaperGallery from './components/WallpaperGallery';
import { Sparkles } from 'lucide-react';
import { useWallpaperGenerator } from './hooks/useWallpaperGenerator';

function App() {
  const { isLoading, wallpapers, generateNewWallpaper } = useWallpaperGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles size={40} className="text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Epzi AI Image Generator
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create stunning, unique images powered by AI. Simply describe what you want to see,
            customize your preferences, and let our AI bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <WallpaperForm onGenerate={generateNewWallpaper} isLoading={isLoading} />
          
          {wallpapers.length > 0 && (
            <div className="w-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Generated Images</h2>
              <WallpaperGallery wallpapers={wallpapers} isLoading={isLoading} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;