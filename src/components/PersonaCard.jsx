import React from 'react';

const PersonaCard = ({ persona, compact = false }) => {
  if (!persona) return null;

  return (
    <div className={`persona-card ${compact ? 'p-3' : 'p-6'} glass mb-4 border-l-4`} style={{ borderLeftColor: persona.color }}>
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
          style={{ backgroundColor: persona.color }}
        >
          {persona.initials}
        </div>
        <div>
          <h3 className="font-bold text-lg text-white leading-tight">{persona.name}</h3>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: persona.color }}>
            {persona.tag} • {persona.region}
          </p>
        </div>
      </div>
      {!compact && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Target Role:</span>
            <span className="text-white font-medium">{persona.role}</span>
          </div>
          <p className="text-sm text-gray-300 italic bg-black/20 p-2 rounded border border-white/5">
            "{persona.context}"
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonaCard;
