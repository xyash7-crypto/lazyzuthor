
import React from 'react';
import Link from 'next/link';
import type { PenColor, PenSize } from '@/types';
import { PEN_COLORS, PEN_SIZES, MIN_SCROLL_SPEED, MAX_SCROLL_SPEED } from '@/constants';

interface ControlPanelProps {
  penSize: number;
  setPenSize: (size: number) => void;
  penColor: string;
  setPenColor: (color: string) => void;
  scrollSpeed: number;
  setScrollSpeed: (speed: number) => void;
  onExport: () => void;
  isExporting: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  penSize,
  setPenSize,
  penColor,
  setPenColor,
  scrollSpeed,
  setScrollSpeed,
  onExport,
  isExporting,
}) => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-gray-800 text-white rounded-lg shadow-2xl p-4 flex items-center space-x-6">
      {/* Back to Dashboard */}
      <Link
        href="/dashboard"
        className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors shrink-0"
        title="Back to Dashboard"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Dashboard
      </Link>

      <div className="h-12 border-l border-gray-600"></div>

      {/* Pen Size */}
      <div className="flex flex-col items-center">
        <label className="text-xs font-semibold mb-2 text-gray-400">SIZE</label>
        <div className="flex items-center space-x-2 bg-gray-700 p-1 rounded-md">
          {PEN_SIZES.map((size: PenSize) => (
            <button
              key={size.id}
              onClick={() => setPenSize(size.value)}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-200 ${
                penSize === size.value ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              title={`${size.label} (${size.value}px)`}
            >
              <div
                className="bg-white rounded-full"
                style={{ width: `${size.value + 2}px`, height: `${size.value + 2}px` }}
              ></div>
            </button>
          ))}
        </div>
      </div>

      {/* Pen Color */}
      <div className="flex flex-col items-center">
        <label className="text-xs font-semibold mb-2 text-gray-400">COLOR</label>
        <div className="flex items-center space-x-2 bg-gray-700 p-1 rounded-md">
          {PEN_COLORS.map((color: PenColor) => (
            <button
              key={color.id}
              onClick={() => setPenColor(color.value)}
              className={`w-8 h-8 rounded-full transition-transform duration-200 transform hover:scale-110 ${
                penColor === color.value ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-blue-500' : ''
              }`}
              style={{ backgroundColor: color.value }}
              title={color.label}
            ></button>
          ))}
        </div>
      </div>

      {/* Scroll Speed */}
      <div className="flex flex-col items-center">
        <label htmlFor="scroll-speed" className="text-xs font-semibold mb-2 text-gray-400">SPEED</label>
        <div className="flex items-center space-x-2">
            <input
            id="scroll-speed"
            type="range"
            min={MIN_SCROLL_SPEED}
            max={MAX_SCROLL_SPEED}
            step="0.1"
            value={scrollSpeed}
            onChange={(e) => setScrollSpeed(parseFloat(e.target.value))}
            className="w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-sm font-mono w-10 text-center">{scrollSpeed.toFixed(1)}</span>
        </div>
      </div>

      <div className="h-12 border-l border-gray-600"></div>

      {/* Export Button */}
      <div className="flex flex-col items-center">
        <button
          onClick={onExport}
          disabled={isExporting}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
        >
          {isExporting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Exporting...
            </>
          ) : (
            'Export as PNG'
          )}
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
