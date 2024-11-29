import React from 'react';
import { Type } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PromptInput({ value, onChange }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
        <Type size={20} />
        Describe your wallpaper
      </label>
      <div className="space-y-2">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="E.g., A serene mountain landscape at sunset with cherry blossoms"
          rows={3}
          required
        />
        <p className="text-sm text-gray-500">
          Tip: Be specific about what you want to see in your wallpaper. Include details about the scene,
          mood, and any specific elements you'd like to include.
        </p>
      </div>
    </div>
  );
}