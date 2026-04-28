// Scoring engine for Experience & Application Integrity Lab

/**
 * Calculate score for a mini-game answer
 */
export function scoreMiniGameAnswer(isCorrect, streak) {
  const basePoints = isCorrect ? 10 : 0;
  const streakBonus = isCorrect && streak >= 2 ? Math.min(streak, 5) : 0;
  return { points: basePoints + streakBonus, streakBonus };
}

/**
 * Calculate score for an audit scenario
 */
export function scoreAuditScenario({
  userDecision,
  correctDecision,
  userRisks,
  correctRisks,
  justification,
  strongKeywords,
}) {
  let points = 0;
  let riskImpact = 0;
  const breakdown = [];

  // Decision scoring
  if (userDecision === correctDecision) {
    points += 10;
    breakdown.push({ label: 'Correct decision', points: 10 });
  } else {
    // Wrong decision penalties
    if (correctDecision === 'proceed' && userDecision === 'reject') {
      points -= 8;
      riskImpact += 15;
      breakdown.push({ label: 'Wrong rejection (False Positive)', points: -8 });
    } else if (correctDecision === 'proceed' && userDecision === 'escalate') {
      points -= 5;
      riskImpact += 10;
      breakdown.push({ label: 'Unnecessary escalation', points: -5 });
    } else if (correctDecision === 'escalate' && userDecision === 'proceed') {
      points -= 15;
      riskImpact += 40;
      breakdown.push({ label: 'Wrong approval (Missed Issue)', points: -15 });
    } else if (correctDecision === 'escalate' && userDecision === 'reject') {
      points -= 10;
      riskImpact += 20;
      breakdown.push({ label: 'Premature rejection', points: -10 });
    } else if (correctDecision === 'reject' && userDecision === 'proceed') {
      points -= 20;
      riskImpact += 50;
      breakdown.push({ label: 'Critical Failure: Approved Fraud/Ineligible', points: -20 });
    } else if (correctDecision === 'reject' && userDecision === 'escalate') {
      points -= 5;
      riskImpact += 10;
      breakdown.push({ label: 'Unnecessary escalation (Clear Reject)', points: -5 });
    }
  }

  // Risk tag scoring
  const userRiskSet = new Set(userRisks);
  const correctRiskSet = new Set(correctRisks);

  // Correct tags
  for (const tag of correctRisks) {
    if (userRiskSet.has(tag)) {
      // Give extra points for location and visa risks on Day 5
      const extra = (tag === 'location' || tag === 'visa') ? 2 : 0;
      const pts = 5 + extra;
      points += pts;
      breakdown.push({ label: `Identified risk: ${tag}`, points: pts });
    } else {
      points -= 5;
      riskImpact += 25;
      breakdown.push({ label: `Missed risk: ${tag}`, points: -5 });
    }
  }

  // Wrong tags
  for (const tag of userRisks) {
    if (!correctRiskSet.has(tag)) {
      points -= 3;
      breakdown.push({ label: `Incorrectly tagged: ${tag}`, points: -3 });
    }
  }

  // Justification scoring
  const justLower = (justification || '').toLowerCase();
  const keywordMatches = strongKeywords.filter(kw => justLower.includes(kw.toLowerCase()));
  if (keywordMatches.length >= 2) {
    points += 10;
    breakdown.push({ label: 'Expert justification', points: 10 });
  } else if (keywordMatches.length === 1) {
    points += 5;
    breakdown.push({ label: 'Partial justification', points: 5 });
  }

  return { points, riskImpact, breakdown, keywordMatches };
}

/**
 * Determine Rank based on points
 */
export function getRank(points) {
  if (points >= 150) return { title: 'Elite Guardian', color: '#ef4444', icon: 'fa-crown' };
  if (points >= 100) return { title: 'Senior Investigator', color: '#a855f7', icon: 'fa-user-shield' };
  if (points >= 50) return { title: 'Junior Auditor', color: '#00d4ff', icon: 'fa-user-check' };
  return { title: 'Integrity Cadet', color: '#22c55e', icon: 'fa-user' };
}

/**
 * Get risk meter level and color
 */
export function getRiskLevel(riskValue) {
  if (riskValue <= 30) return { level: 'Stable', color: '#22c55e', emoji: '🟢' };
  if (riskValue <= 70) return { level: 'Compromised', color: '#f59e0b', emoji: '🟡' };
  return { level: 'Critical Breach', color: '#ef4444', emoji: '🔴' };
}

/**
 * Get risk behavior type
 */
export function getRiskBehavior(results) {
  const totalRisk = results.reduce((sum, r) => sum + r.riskImpact, 0);
  const totalPoints = results.reduce((sum, r) => sum + r.points, 0);

  if (totalRisk > 100) {
    return { 
      type: 'Permissive', 
      icon: 'fa-door-open', 
      color: '#ef4444', 
      detail: 'You missed critical integrity red flags. High risk of bad hires.' 
    };
  }
  if (totalPoints < 50 && totalRisk < 50) {
    return { 
      type: 'Indecisive', 
      icon: 'fa-circle-pause', 
      color: '#f59e0b', 
      detail: 'You are hesitant to make final calls, leading to audit backlogs.' 
    };
  }
  return { 
    type: 'Unerring', 
    icon: 'fa-crosshairs', 
    color: '#22c55e', 
    detail: 'Pinpoint accuracy in detecting fraud while maintaining flow.' 
  };
}
