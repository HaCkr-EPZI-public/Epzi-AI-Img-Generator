import React from 'react';
import { StyleOption } from '../types/wallpaper';

interface SelectOptionProps {
  label: string;
  value: string;
  options: StyleOption[];
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

export default function SelectOption({ label, value, options, onChange, icon }: SelectOptionProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
        {icon}
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} title={option.description}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}