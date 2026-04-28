import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import CommandCenter from './components/CommandCenter';
import AuditGame from './components/AuditGame';
import Results from './components/Results';
import { scoreAuditScenario, getRank } from './utils/scoring';
import confetti from 'canvas-confetti';

const App = () => {
  const [screen, setScreen] = useState('LOADING');
  const [currentGame, setCurrentGame] = useState(null);
  const [results, setResults] = useState([]);
  const [stats, setStats] = useState({
    totalXP: 0,
    rank: 'Integrity Cadet',
    accuracy: 100
  });

  // System Initialization Simulation
  useEffect(() => {
    setTimeout(() => {
      setScreen('DASHBOARD');
    }, 2500);
  }, []);

  const handleStartMiniGame = (game) => {
    setCurrentGame({
      type: 'MINI_GAME',
      scenarios: game.scenarios,
      currentIndex: 0,
      results: []
    });
    setScreen('PLAYING');
  };

  const handleStartInvestigation = (scenarios) => {
    setCurrentGame({
      type: 'INVESTIGATION',
      scenarios: scenarios,
      currentIndex: 0,
      results: []
    });
    setScreen('PLAYING');
  };

  const handleScenarioComplete = (userSubmission) => {
    const scenario = currentGame.scenarios[currentGame.currentIndex];
    
    // Score the scenario
    const scoreResult = scoreAuditScenario({
      userDecision: userSubmission.userDecision,
      correctDecision: scenario.correctDecision,
      userRisks: userSubmission.userRisks,
      correctRisks: scenario.correctRisks,
      justification: userSubmission.justification,
      strongKeywords: scenario.strongJustificationKeywords
    });

    const updatedResults = [...currentGame.results, { ...scoreResult, scenarioId: scenario.id, userDecision: userSubmission.userDecision }];
    
    if (currentGame.currentIndex < currentGame.scenarios.length - 1) {
      setCurrentGame({
        ...currentGame,
        currentIndex: currentGame.currentIndex + 1,
        results: updatedResults
      });
    } else {
      // Finished all scenarios in this session
      finishGame(updatedResults);
    }
  };

  const finishGame = (finalResults) => {
    const sessionPoints = finalResults.reduce((sum, r) => sum + r.points, 0);
    const newTotalXP = stats.totalXP + sessionPoints;
    const newRank = getRank(newTotalXP).title;
    
    setStats({
      ...stats,
      totalXP: newTotalXP,
      rank: newRank
    });

    setResults(finalResults);
    setScreen('RESULTS');

    if (sessionPoints > 0) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9900', '#00d4ff', '#ffffff']
      });
    }
  };

  const handleRestart = () => {
    setScreen('DASHBOARD');
    setResults([]);
    setCurrentGame(null);
  };

  const handleEnterCommandCenter = () => {
    setScreen('COMMAND_CENTER');
  };
  if (screen === 'LOADING') {
    return (
      <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-8">
        <div className="w-24 h-24 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-8"></div>
        <div className="text-center">
          <h2 className="text-brand-orange font-black text-2xl uppercase tracking-[0.5em] mb-2 animate-pulse">Initializing System</h2>
          <p className="text-gray-500 font-mono text-xs">Loading Integrity Databases... 0x44F2E</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-navy text-white p-4 md:p-8">
      {/* Top Navigation */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-12 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-black shadow-lg shadow-brand-orange/20">
            <i className="fas fa-shield-halved text-xl"></i>
          </div>
          <div>
            <h1 className="font-black text-lg tracking-tighter uppercase italic leading-none">AMZ <span className="text-brand-orange">Integrity</span></h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Screening Ops Trainer</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Operator Status</p>
            <p className="text-xs font-bold text-brand-blue uppercase">{stats.rank}</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-brand-orange p-1">
            <div className="w-full h-full bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange font-black text-xs">
              AV
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto">
        {screen === 'DASHBOARD' && (
          <Dashboard 
            onStartGame={handleStartMiniGame} 
            onStartInvestigation={handleStartInvestigation}
            onEnterCommandCenter={handleEnterCommandCenter}
            stats={stats}
          />
        )}

        {screen === 'PLAYING' && currentGame && (
          <AuditGame 
            scenario={currentGame.scenarios[currentGame.currentIndex]} 
            onComplete={handleScenarioComplete}
            onCancel={handleRestart}
          />
        )}

          {screen === 'RESULTS' && (
            <Results 
              results={results} 
              onRestart={handleRestart} 
            />
          )}

          {screen === 'COMMAND_CENTER' && (
            <CommandCenter onStart={handleStartInvestigation} />
          )}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
        <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 Amazon Screening Operations • Confidential Training Module</p>
        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-brand-orange transition-colors">Documentation</a>
          <a href="#" className="hover:text-brand-orange transition-colors">System Status</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
