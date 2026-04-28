// Day 5: Location, Visa & Final Screening Game Data
import { getPersona } from './personas';

/**
 * Mini-games for Day 5 focusing on Location, Visa, and Final Certification.
 */
export const miniGames = [
  {
    id: 'global-compliance-rush',
    title: 'Global Compliance Rush',
    icon: 'fa-globe',
    description: 'Quick-check international standards and identify cross-border policy mismatches.',
    badge: 'Compliance Officer',
    color: '#FF9900',
    scenarios: [
      {
        id: 'gcr-1',
        persona: getPersona('priya-nair'),
        difficulty: 'medium',
        visibleData: {
          resume: ['Target Role: Operations Manager - London', 'Current Location: Mumbai, India'],
          portal: ['Work Auth: Needs Sponsorship', 'Notice Period: 2 months'],
          system: ['Policy: London roles require pre-existing UK Right to Work for this grade.']
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Grade Policy', content: 'Operations Manager grade does not support relocation sponsorship for this location.' },
          { id: 'e2', label: 'Auth Conflict', content: 'Candidate requires sponsorship which is explicitly restricted by system policy.' }
        ],
        correctRisks: ['location', 'visa'],
        correctDecision: 'reject',
        strongJustificationKeywords: ['sponsorship policy', 'right to work', 'grade restriction']
      }
    ]
  },
  {
    id: 'location-signal-detective',
    title: 'Location Signal Detective',
    icon: 'fa-satellite-dish',
    description: 'Triangulate location data from IP signals, resumes, and system preferences.',
    badge: 'Geography Guru',
    color: '#00d4ff',
    scenarios: [
      {
        id: 'lsd-1',
        persona: getPersona('rahul-sharma'),
        difficulty: 'medium',
        visibleData: {
          resume: ['Preferred Location: Singapore', 'Current Home: Delhi'],
          portal: ['IP Access: Bangalore', 'Mobile: +65 (Singapore Number)'],
          system: ['System Flag: Multiple IP logins from high-risk VPN exit nodes detected.']
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'IP Trace', content: 'Login signals from Bangalore conflict with Singapore residency claims.' },
          { id: 'e2', label: 'VPN Flag', content: 'Candidate is masking their true location using a commercial VPN service.' }
        ],
        correctRisks: ['location', 'mismatch'],
        correctDecision: 'escalate',
        strongJustificationKeywords: ['VPN usage', 'IP mismatch', 'location masking']
      }
    ]
  },
  {
    id: 'visa-logic-lab',
    title: 'Visa Logic Lab',
    icon: 'fa-passport',
    description: 'Verify visa types, expiry dates, and work authorization eligibility.',
    badge: 'Visa Specialist',
    color: '#a855f7',
    scenarios: [
      {
        id: 'vll-1',
        persona: getPersona('jason-miller'),
        difficulty: 'hard',
        visibleData: {
          resume: ['Visa Type: H1-B (Transferrable)', 'Expiring: June 2026'],
          portal: ['Current Employer: TechCorp', 'Start Date Preference: Immediate'],
          system: ['Policy: H1-B transfers must be initiated 6 months prior to expiry.']
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Timeline Check', content: 'Transfer window is open and valid for the 6-month buffer.' },
          { id: 'e2', label: 'Employer Verification', content: 'TechCorp is a registered H1-B sponsor, making transfer feasible.' }
        ],
        correctRisks: [],
        correctDecision: 'proceed',
        strongJustificationKeywords: ['transfer valid', 'timeline compliance', 'eligible visa']
      }
    ]
  },
  {
    id: 'final-eligibility-lock',
    title: 'Final Eligibility Lock',
    icon: 'fa-user-lock',
    description: 'The final gatekeeper challenge. Make the ultimate Proceed/Reject call.',
    badge: 'Gatekeeper',
    color: '#22c55e',
    scenarios: [
      {
        id: 'fel-1',
        persona: getPersona('daniel-brooks'),
        difficulty: 'expert',
        visibleData: {
          resume: ['Former Role: L4 Area Manager', 'Exit Reason: Personal'],
          portal: ['Rehire Eligibility: Yes', 'Last Day: Oct 2024'],
          system: ['System Alert: "Do Not Rehire" flag found in legacy database under same SSN.']
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Legacy Data', content: 'The legacy "Do Not Rehire" flag was due to a payroll error, since corrected.' },
          { id: 'e2', label: 'HR Note', content: 'Confirmed rehire eligibility after manual review by Regional HR.' }
        ],
        correctRisks: ['rehire'],
        correctDecision: 'proceed',
        strongJustificationKeywords: ['payroll error corrected', 'HR confirmed', 'legacy flag invalid']
      }
    ]
  },
  {
    id: 'audit-justification-builder',
    title: 'Audit Justification Builder',
    icon: 'fa-file-signature',
    description: 'Master the art of writing legally defensible and audit-ready justifications.',
    badge: 'Master Scribe',
    color: '#f59e0b',
    scenarios: [
      {
        id: 'ajb-1',
        persona: getPersona('ahmed-khan'),
        difficulty: 'medium',
        visibleData: {
          resume: ['Degree: BS Computer Science', 'University: Dubai Tech'],
          portal: ['Degree Status: Completed', 'Graduation: 2022'],
          system: ['Internal Check: Dubai Tech degree not recognized by local accreditation board.']
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Accreditation', content: 'Dubai Tech is a non-accredited "degree mill" frequently flagged by auditors.' },
          { id: 'e2', label: 'Fraud History', content: 'Multiple candidates from this institution have been rejected for invalid credentials.' }
        ],
        correctRisks: ['mismatch', 'status'],
        correctDecision: 'reject',
        strongJustificationKeywords: ['non-accredited', 'degree mill', 'invalid credentials']
      }
    ]
  }
];

/**
 * Investigation Room: 5 high-complexity personas for the Final Screening Simulation.
 */
export const investigationRoom = [
  {
    id: 'inv-1',
    title: 'The Cross-Border Conundrum',
    alert: 'Location & Visa Conflict',
    difficulty: 'expert',
    persona: getPersona('michael-johnson'),
    visibleData: {
      resume: ['Current Location: Berlin', 'Passport: USA', 'Visa: Tier-1 (USA)'],
      portal: ['Desired Location: Berlin', 'EU Work Auth: "No" (Marked in error)'],
      system: ['Policy: Berlin office requires EU Citizenship or Valid Blue Card for this role.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'Visa Mismatch', content: 'Tier-1 (USA) does not grant EU work rights.' },
      { id: 'e2', label: 'Passport Check', content: 'US Passport holder requires a Blue Card for Germany, which is currently not held.' },
      { id: 'e3', label: 'Blue Card Eligibility', content: 'Candidate salary threshold meets Blue Card requirements, but sponsorship is not offered.' }
    ],
    correctRisks: ['location', 'visa'],
    correctDecision: 'reject',
    strongJustificationKeywords: ['EU work permit required', 'visa incompatibility', 'sponsorship not offered']
  },
  {
    id: 'inv-2',
    title: 'The Ghost Employee',
    alert: 'Identity & Experience Fraud',
    difficulty: 'expert',
    persona: getPersona('emily-chen'),
    visibleData: {
      resume: ['Current Role: Sr. PM at Amazon (Seattle)', 'Start: 2021'],
      portal: ['Current Role: Sr. PM at Microsoft (Seattle)', 'Start: 2021'],
      system: ['Internal Check: Emily Chen is not currently in the Amazon Active Directory.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'Directory Check', content: 'No active PM record for this name in Seattle hub.' },
      { id: 'e2', label: 'Linked-In Trace', content: 'Candidate is actively posting as a Microsoft employee as of yesterday.' },
      { id: 'e3', label: 'Tax ID Check', content: 'Social Security number linked to active payroll at Microsoft, not Amazon.' }
    ],
    correctRisks: ['experience', 'mismatch', 'duplicate'],
    correctDecision: 'reject',
    strongJustificationKeywords: ['falsified employment', 'active directory mismatch', 'identity conflict']
  },
  {
    id: 'inv-3',
    title: 'The Multi-Identity Loop',
    alert: 'Duplicate System Entries',
    difficulty: 'expert',
    persona: getPersona('ahmed-khan'),
    visibleData: {
      resume: ['Name: Ahmed Khan', 'Email: a.khan@mail.com', 'Role: SDE II'],
      portal: ['Name: Ahmed K.', 'Email: ahmed.tech@provider.com', 'Role: SDE II'],
      system: ['System Flag: Two accounts sharing the same residential address and phone number.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'Address Match', content: 'Both profiles share: 123 Crescent St, Dubai. 100% match.' },
      { id: 'e2', label: 'Phone Verification', content: 'SMS verification sent to profile A was acknowledged by user B.' },
      { id: 'e3', label: 'Application History', content: 'Profile A was rejected for "Behavioral mismatch" 3 weeks ago.' }
    ],
    correctRisks: ['duplicate', 'mismatch'],
    correctDecision: 'reject',
    strongJustificationKeywords: ['duplicate profile', 'circumventing rejection', 'address match']
  },
  {
    id: 'inv-4',
    title: 'The Visa Expiry Tightrope',
    alert: 'Work Authorization Critical',
    difficulty: 'expert',
    persona: getPersona('ankit-verma'),
    visibleData: {
      resume: ['Visa: OPT (F1)', 'Expiry: May 2026'],
      portal: ['STEM Extension: Applied', 'Current Status: Pending'],
      system: ['Policy: We only hire OPT candidates if STEM extension is already approved.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'I-20 Review', content: 'I-20 confirms OPT status but STEM extension receipt is missing.' },
      { id: 'e2', label: 'E-Verify Check', content: 'Candidate is currently in "Pending" status with no active extension approval.' },
      { id: 'e3', label: 'Timeline Risk', content: 'If rejected by USCIS, candidate must exit the country in 60 days.' }
    ],
    correctRisks: ['visa', 'status'],
    correctDecision: 'escalate',
    strongJustificationKeywords: ['STEM extension pending', 'policy violation', 'visa status risk']
  },
  {
    id: 'inv-5',
    title: 'The Seniority Mirage',
    alert: 'Title Inflation Detected',
    difficulty: 'expert',
    persona: getPersona('jason-miller'),
    visibleData: {
      resume: ['Title: VP of Logistics (Global)', 'Team Size: 500+'],
      portal: ['Title: Sr. Manager', 'Team Size: 12'],
      system: ['External Audit: Jason Miller was a "Logistics Lead" at his previous firm.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'External Verif', content: 'Previous employer confirms title was "Lead", not "VP".' },
      { id: 'e2', label: 'Reference Check', content: 'Manager states Jason was a solid performer but never held executive rank.' },
      { id: 'e3', label: 'Scope Check', content: 'Company total headcount is 450, making a "Team of 500" impossible.' }
    ],
    correctRisks: ['experience', 'mismatch', 'managerial'],
    correctDecision: 'reject',
    strongJustificationKeywords: ['title inflation', 'falsified team size', 'rank mismatch']
  }
];
