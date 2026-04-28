import React from 'react';
import { miniGames, investigationRoom } from '../data/day5Games';

const Dashboard = ({ onStartGame, onStartInvestigation, onEnterCommandCenter, stats }) => {
  return (
    <div className="max-w-6xl mx-auto animate__animated animate__fadeIn">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase italic">
          Day 5 <span className="text-brand-orange">Location & Visa Lab</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Welcome to Day 5 Training. Master the art of multi-source verification and fraud detection.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass p-6 text-center border-b-2 border-brand-orange">
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Lifetime XP</p>
          <p className="text-3xl font-black text-white">{stats.totalXP || 0}</p>
        </div>
        <div className="glass p-6 text-center border-b-2 border-brand-blue">
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Current Rank</p>
          <p className="text-2xl font-black text-white uppercase">{stats.rank || 'Integrity Cadet'}</p>
        </div>
        <div className="glass p-6 text-center border-b-2 border-green-500">
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Integrity Score</p>
          <p className="text-3xl font-black text-white">{stats.accuracy || 100}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Day 5 Mini-Games Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-gamepad text-brand-orange text-xl"></i>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Skill Drills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {miniGames.map((game) => (
              <button
                key={game.id}
                onClick={() => onStartGame(game)}
                className="group relative text-left overflow-hidden rounded-xl border border-white/10 hover:border-brand-orange/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-brand-orange/10 transition-colors"></div>
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-lg shadow-black/20`} style={{ backgroundColor: game.color }}>
                      <i className={`fas ${game.icon} text-white`}></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter bg-white/10 px-2 py-1 rounded text-gray-300">
                      {game.scenarios.length} Cases
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{game.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{game.description}</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-brand-orange uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Initialize Simulation <i className="fas fa-chevron-right ml-1"></i>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Event Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-building-shield text-brand-blue text-xl"></i>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">The Investigation Room</h2>
          </div>
          <button
            onClick={() => onStartInvestigation(investigationRoom)}
            className="w-full group relative overflow-hidden rounded-2xl border-2 border-brand-blue/30 hover:border-brand-blue transition-all duration-500 bg-black/40 p-8 text-left h-full flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-brand-blue text-black text-[10px] font-black uppercase rounded-full">High Stakes</span>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-3xl text-black shadow-[0_0_30px_rgba(0,212,255,0.3)] mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-user-secret"></i>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Full Audit Simulation</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Apply your skills to 5 high-complexity personas. Cross-reference Resume, Portal, and Internal System data to prevent critical integrity breaches.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-500 border-t border-white/5 pt-6">
                <span>Difficulty</span>
                <span className="text-brand-blue">Expert</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                <span>Reward</span>
                <span className="text-yellow-500">Elite Badge</span>
              </div>
              <div className="bg-brand-blue text-black font-black text-center py-3 rounded-lg mt-4 group-hover:bg-white transition-colors uppercase tracking-tighter">
                Enter Lab <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Final Screening Section */}
      <div className="mt-12 text-center p-8 glass border-2 border-dashed border-brand-orange/30 rounded-2xl animate__animated animate__pulse animate__infinite animate__slow">
        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Ready for Final Certification?</h3>
        <button
          onClick={onEnterCommandCenter}
          className="group relative overflow-hidden px-10 py-4 bg-brand-orange text-black font-black uppercase tracking-tighter rounded-xl shadow-[0_0_40px_rgba(255,153,0,0.3)] hover:scale-105 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-3">
            Launch Final Screening Simulation
            <i className="fas fa-rocket group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
