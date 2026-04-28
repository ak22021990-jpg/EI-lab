import React, { useState, useEffect } from 'react';
import PersonaCard from './PersonaCard';
import { riskTags } from '../data/riskTags';

const AuditGame = ({ scenario, onComplete, onCancel }) => {
  const [activeTab, setActiveTab] = useState('resume');
  const [tokensUsed, setTokensUsed] = useState([]);
  const [selectedRisks, setSelectedRisks] = useState([]);
  const [decision, setDecision] = useState(null);
  const [justification, setJustification] = useState('');
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per complex case

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const useToken = (token) => {
    if (tokensUsed.length < scenario.evidenceTokens && !tokensUsed.find(t => t.id === token.id)) {
      setTokensUsed([...tokensUsed, token]);
    }
  };

  const toggleRisk = (riskId) => {
    if (selectedRisks.includes(riskId)) {
      setSelectedRisks(selectedRisks.filter(id => id !== riskId));
    } else {
      setSelectedRisks([...selectedRisks, riskId]);
    }
  };

  const handleSubmit = () => {
    onComplete({
      scenarioId: scenario.id,
      userDecision: decision,
      userRisks: selectedRisks,
      justification,
      tokensUsed: tokensUsed.length,
      timeBonus: Math.floor(timeLeft / 10)
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 animate__animated animate__fadeIn">
      
      {/* Left Column: Context & Evidence */}
      <div className="lg:col-span-3 space-y-6">
        <PersonaCard persona={scenario.persona} compact={true} />
        
        {/* Evidence Locker */}
        <div className="glass p-5 border-t-2 border-brand-blue">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-widest">Evidence Locker</h3>
            <span className="text-[10px] bg-brand-blue/20 text-brand-blue px-2 py-0.5 rounded-full font-bold">
              {tokensUsed.length}/{scenario.evidenceTokens} Used
            </span>
          </div>
          
          <div className="space-y-3">
            {scenario.evidence.map((item) => {
              const isUsed = tokensUsed.find(t => t.id === item.id);
              return (
                <button
                  key={item.id}
                  disabled={isUsed || tokensUsed.length >= scenario.evidenceTokens}
                  onClick={() => useToken(item)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                    isUsed 
                    ? 'bg-brand-blue/10 border-brand-blue/40 opacity-100 scale-95' 
                    : 'bg-white/5 border-white/10 hover:border-brand-blue/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`fas ${isUsed ? 'fa-unlock' : 'fa-lock'} text-[10px]`}></i>
                    <span className="text-[10px] font-black uppercase tracking-tight">{item.label}</span>
                  </div>
                  {isUsed && (
                    <p className="text-xs text-gray-300 leading-snug animate__animated animate__fadeIn">
                      {item.content}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timer */}
        <div className="glass p-4 text-center">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Audit Time Remaining</p>
          <p className={`text-2xl font-black ${timeLeft < 30 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </p>
        </div>
      </div>

      {/* Middle Column: Data Verification (The 3 Panels) */}
      <div className="lg:col-span-6 flex flex-col h-[700px]">
        <div className="glass flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/10 bg-black/20">
            {['resume', 'portal', 'system'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                  ? 'text-brand-orange border-b-2 border-brand-orange bg-white/5' 
                  : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab === 'system' && <i className="fas fa-microchip mr-2"></i>}
                {tab}
              </button>
            ))}
          </div>

          {/* Panel Content */}
          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] whitespace-nowrap">
                  {activeTab} verification data
                </h4>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>

              {scenario.visibleData[activeTab].map((line, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-6 h-6 rounded bg-black/40 flex items-center justify-center text-[10px] font-mono text-gray-500">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{line}</p>
                </div>
              ))}

              {activeTab === 'system' && (
                <div className="mt-12 p-6 rounded-2xl border-2 border-dashed border-white/10 bg-brand-blue/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-black">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h5 className="font-bold text-brand-blue uppercase tracking-tight">System Integrity Check</h5>
                  </div>
                  <p className="text-xs text-brand-blue/70 italic">
                    Cross-referencing global databases... No additional external matches found for this session.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Decision Engine */}
      <div className="lg:col-span-3 space-y-6">
        {/* Risk Tagging */}
        <div className="glass p-5">
          <h3 className="text-xs font-black text-brand-orange uppercase tracking-widest mb-4">Tag Risk Factors</h3>
          <div className="flex flex-wrap gap-2">
            {riskTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => toggleRisk(tag.id)}
                className={`px-3 py-2 rounded-lg text-[10px] font-bold uppercase transition-all flex items-center gap-2 border ${
                  selectedRisks.includes(tag.id)
                  ? 'bg-brand-orange text-black border-brand-orange shadow-[0_0_15px_rgba(255,153,0,0.4)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-brand-orange/40'
                }`}
              >
                <i className={`fas ${tag.icon}`}></i>
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Justification */}
        <div className="glass p-5">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Audit Justification</h3>
          <textarea
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            placeholder="Explain your decision based on evidence..."
            className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue transition-colors resize-none"
          ></textarea>
        </div>

        {/* Final Decision */}
        <div className="glass p-5 space-y-3">
          <h3 className="text-xs font-black text-white uppercase tracking-widest mb-1 text-center">Final Decision</h3>
          <div className="grid grid-cols-1 gap-2">
            {['proceed', 'escalate', 'reject'].map((opt) => (
              <button
                key={opt}
                onClick={() => setDecision(opt)}
                className={`py-3 rounded-xl text-xs font-black uppercase tracking-tighter transition-all border-2 ${
                  decision === opt 
                  ? opt === 'proceed' ? 'bg-green-500 border-green-500 text-black' : 
                    opt === 'escalate' ? 'bg-brand-blue border-brand-blue text-black' : 
                    'bg-red-500 border-red-500 text-black'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          
          <button
            disabled={!decision || justification.length < 10}
            onClick={handleSubmit}
            className={`w-full py-4 mt-2 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
              decision && justification.length >= 10
              ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95'
              : 'bg-white/5 text-gray-700 cursor-not-allowed'
            }`}
          >
            Submit Audit <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </div>

        <button 
          onClick={onCancel}
          className="w-full text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors"
        >
          Abort Mission
        </button>
      </div>
    </div>
  );
};

export default AuditGame;
