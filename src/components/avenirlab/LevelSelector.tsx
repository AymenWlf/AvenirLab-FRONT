import React from 'react';
import { GraduationCap } from 'lucide-react';
import { AvenirLabLevel } from '../../types/avenirlab';
import { levels } from '../../data/avenirlab/levels';

interface LevelSelectorProps {
  currentLevel: AvenirLabLevel;
  onChange: (level: AvenirLabLevel) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ currentLevel, onChange }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-4 shadow-lg mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Badge DEV MODE */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            MODE DEV
          </div>
          <GraduationCap className="w-6 h-6" />
        </div>

        {/* Selector */}
        <div className="flex-1 w-full sm:w-auto">
          <label htmlFor="level-selector" className="block text-sm font-medium mb-1">
            Sélectionner le niveau scolaire :
          </label>
          <select
            id="level-selector"
            value={currentLevel}
            onChange={(e) => onChange(e.target.value as AvenirLabLevel)}
            className="w-full sm:w-auto bg-white text-gray-900 rounded-lg px-4 py-2 font-semibold border-2 border-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          >
            {levels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.shortName} - {level.name}
              </option>
            ))}
          </select>
        </div>

        {/* Info niveau actuel */}
        <div className="flex-1 text-sm">
          <p className="font-medium">
            {levels.find((l) => l.id === currentLevel)?.displayName}
          </p>
          <p className="text-white/80 text-xs">
            {levels.find((l) => l.id === currentLevel)?.pedagogicalGoal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;
