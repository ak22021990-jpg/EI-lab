// CommandCenter.jsx – Final Screening Simulation entry point
import React from 'react';
import { investigationRoom } from '../data/day5Games';

/**
 * CommandCenter component acts as the high-intensity hub for the Day 5 final audit simulation.
 * It uses a more dramatic UI to signal the "Expert" level of the upcoming task.
 */
const CommandCenter = ({ onStart }) => {
  const handleClick = () => {
    onStart(investigationRoom);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 animate__animated animate__zoomIn">
      <div className="relative p-12 glass overflow-hidden rounded-3xl border-2 border-brand-orange/20 shadow-[0_0_100px_rgba(255,153,0,0.1)]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
        
        {/* Tech Borders */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-orange/40 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-brand-orange/40 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-brand-orange/40 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-orange/40 rounded-br-lg"></div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-pulse">
            <i className="fas fa-shield-halved"></i>
            Final Certification Active
          </div>

          <h2 className="text-6xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
            Screening <br />
            <span className="text-brand-orange">Command Center</span>
          </h2>
          
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm leading-relaxed font-medium">
            You are about to enter the final high-complexity audit simulation. 
            Cross-reference <span className="text-white font-bold">Location</span>, 
            <span className="text-white font-bold"> Visa</span>, and 
            <span className="text-white font-bold"> Identity</span> signals across 
            5 expert-level cases. Total accuracy is required for Elite Guardian certification.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                <i className="fas fa-users"></i>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Target Cases</p>
                <p className="text-sm font-black text-white">5 Personas</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Complexity</p>
                <p className="text-sm font-black text-white uppercase">Expert Level</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-yellow-500">
                <i className="fas fa-crown"></i>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Award Potential</p>
                <p className="text-sm font-black text-white">Elite Badge</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="group relative overflow-hidden px-16 py-5 bg-brand-orange text-black font-black uppercase tracking-tighter rounded-2xl shadow-[0_0_50px_rgba(255,153,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-4 text-lg">
              Initiate Simulation
              <i className="fas fa-terminal group-hover:translate-x-1 transition-transform"></i>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          
          <p className="mt-8 text-[10px] text-gray-600 font-bold uppercase tracking-[0.5em]">
            Authorized Personnel Only • Secure Session
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
