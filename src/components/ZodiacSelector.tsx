
import { useState } from 'react';
import { zodiacSigns } from '../data/zodiacData';
import { ZodiacSign } from '../types/astrology';

interface ZodiacSelectorProps {
  onSelect: (sign: ZodiacSign) => void;
  selectedSign?: ZodiacSign;
}

const ZodiacSelector = ({ onSelect, selectedSign }: ZodiacSelectorProps) => {
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Alege-ți zodia
      </h2>
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.name}
            onClick={() => onSelect(sign)}
            onMouseEnter={() => setHoveredSign(sign.name)}
            onMouseLeave={() => setHoveredSign(null)}
            className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedSign?.name === sign.name
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{sign.emoji}</div>
              <div className="text-lg font-semibold text-gray-800">{sign.symbol}</div>
              <div className="text-sm font-medium text-gray-600">{sign.name}</div>
              <div className="text-xs text-gray-500 mt-1">{sign.dates}</div>
            </div>
            
            {hoveredSign === sign.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10">
                Element: {sign.element}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
              </div>
            )}
          </button>
        ))}
      </div>
      
      {selectedSign && (
        <div className="mt-6 p-4 bg-purple-50 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-2">
            {selectedSign.name} - Trăsături principale:
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedSign.traits.map((trait, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ZodiacSelector;
