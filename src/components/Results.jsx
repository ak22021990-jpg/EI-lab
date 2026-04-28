import React from 'react';
import { getRank, getRiskLevel, getRiskBehavior } from '../utils/scoring';

const Results = ({ results, onRestart }) => {
  const totalPoints = results.reduce((sum, r) => sum + r.points, 0);
  const totalRisk = results.reduce((sum, r) => sum + r.riskImpact, 0);
  const avgPoints = Math.round(totalPoints / results.length);
  const rank = getRank(totalPoints);
  const riskStatus = getRiskLevel(totalRisk);
  const behavior = getRiskBehavior(results);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto animate__animated animate__zoomIn">
      <div className="glass overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-blue p-12 text-center relative">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10">
            <h1 className="text-6xl font-black text-black mb-2 uppercase italic tracking-tighter">Mission <span className="text-white">Complete</span></h1>
            <p className="text-black font-bold uppercase tracking-widest opacity-80">Audit Simulation Performance Report</p>
          </div>
        </div>

        <div className="p-10 bg-black/40">
          {/* Main Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Final Rank</p>
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/10 group-hover:border-brand-orange transition-colors">
                <i className={`fas ${rank.icon} text-3xl`} style={{ color: rank.color }}></i>
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">{rank.title}</h2>
            </div>

            <div className="text-center group">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Total XP</p>
              <div className="text-6xl font-black text-brand-orange mb-1 group-hover:scale-110 transition-transform">
                {totalPoints}
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Points Earned</p>
            </div>

            <div className="text-center group">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Integrity Status</p>
              <div className="text-4xl mb-4">{riskStatus.emoji}</div>
              <h2 className="text-2xl font-black uppercase tracking-tight" style={{ color: riskStatus.color }}>{riskStatus.level}</h2>
            </div>
          </div>

          {/* Behavior Profile */}
          <div className="glass bg-white/5 border border-white/10 p-8 rounded-2xl mb-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl" style={{ backgroundColor: `${behavior.color}20`, color: behavior.color }}>
                <i className={`fas ${behavior.icon}`}></i>
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-1">Behavior Profile</h3>
                <h4 className="text-3xl font-black text-white uppercase mb-2">{behavior.type}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">{behavior.detail}</p>
              </div>
            </div>
          </div>

          {/* Scenario Breakdown */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <i className="fas fa-list-check text-brand-blue"></i> Scenario Breakdown
            </h3>
            {results.map((res, idx) => (
              <div key={idx} className="glass p-5 flex items-center justify-between border-l-4 border-brand-blue">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center font-black text-brand-blue border border-white/10">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">Case ID: {res.scenarioId}</p>
                    <p className="text-[10px] text-gray-500 uppercase">Decision: <span className="text-brand-blue">{res.userDecision}</span></p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-xl font-black ${res.points >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {res.points >= 0 ? '+' : ''}{res.points}
                  </p>
                  <div className="flex gap-1 justify-end">
                    {res.keywordMatches.map((kw, kidx) => (
                      <span key={kidx} className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 pt-8 border-t border-white/5">
            <button
              onClick={onRestart}
              className="flex-1 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
            >
              Back to Dashboard
            </button>
            <button
              className="flex-1 py-5 bg-brand-blue text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-[1.02] active:scale-95 transition-all"
            >
              Export Dossier <i className="fas fa-download ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
