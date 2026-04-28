import { getPersona } from './personas';

export const miniGames = [
  {
    id: 'duplicate-detective',
    title: 'Duplicate Detective',
    icon: 'fa-clone',
    description: 'Identify duplicate candidate accounts across multiple system entries.',
    badge: 'Account Auditor',
    color: '#FF9900',
    scenarios: [
      {
        id: 'dd-1',
        persona: getPersona('rahul-sharma'),
        difficulty: 'medium',
        visibleData: {
          resume: ['Email: r.sharma123@gmail.com', 'Phone: +91 98765 43210', 'Experience: 2 years at TechCorp'],
          portal: ['Email: rahul.s@outlook.com', 'Phone: +91 98765 43210', 'Applied: Oct 2023'],
          system: ['System Match: Found account with same phone number', 'Previous Account ID: RS-9982', 'Status: Rejected in Jan 2023'],
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Identity Check', content: 'Phone number +91 98765 43210 is verified as unique to this candidate.' },
          { id: 'e2', label: 'Previous App', content: 'Account RS-9982 was rejected due to failed technical assessment.' },
        ],
        correctRisks: ['duplicate'],
        correctDecision: 'escalate',
        strongJustificationKeywords: ['same phone', 'duplicate account', 'multiple emails', 'previously rejected'],
      },
      {
        id: 'dd-2',
        persona: getPersona('michael-johnson'),
        difficulty: 'hard',
        visibleData: {
          resume: ['Name: Mike Johnson', 'Email: m.johnson@email.com', 'Address: 123 Baker St, London'],
          portal: ['Name: Michael Johnson', 'Email: johnson.m@work.com', 'Address: 123 Baker St, London'],
          system: ['Match Score: 85% (Address Match)', 'Related ID: MJ-001 (Active)'],
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Address Verification', content: 'Confirmed both applications originate from the same residential address.' },
          { id: 'e2', label: 'IP Track', content: 'Both portal logins originated from the same IP address within 24 hours.' },
        ],
        correctRisks: ['duplicate'],
        correctDecision: 'escalate',
        strongJustificationKeywords: ['same address', 'IP match', 'duplicate', 'identity overlap'],
      }
    ]
  },
  {
    id: 'tenure-tracer',
    title: 'Tenure Tracer',
    icon: 'fa-timeline',
    description: 'Validate employment timelines and detect tenure inflation.',
    badge: 'Timeline Expert',
    color: '#00d4ff',
    scenarios: [
      {
        id: 'tt-1',
        persona: getPersona('jason-miller'),
        difficulty: 'medium',
        visibleData: {
          resume: ['Logistics Lead: Jan 2018 - Present (5+ years)', 'Manager: 2015 - 2017'],
          portal: ['Current Role: Jan 2021 - Present', 'Previous: 2018 - 2020'],
          system: ['Internal DB: Last verified at LogisticsPlus in 2020 as individual contributor.'],
        },
        evidenceTokens: 3,
        evidence: [
          { id: 'e1', label: 'Portal History', content: 'Candidate updated current role start date 3 times in the last 48 hours.' },
          { id: 'e2', label: 'Reference Check', content: 'LogisticsPlus confirms Jason left in Dec 2020. No current employment on record.' },
          { id: 'e3', label: 'Social Audit', content: 'LinkedIn profile shows employment ended in 2020, followed by a gap.' },
        ],
        correctRisks: ['experience', 'timeline'],
        correctDecision: 'reject',
        strongJustificationKeywords: ['tenure inflation', 'date mismatch', 'not currently employed', 'resume says present', 'reference check'],
      }
    ]
  },
  {
    id: 'skill-synchronizer',
    title: 'Skill Synchronizer',
    icon: 'fa-code-compare',
    description: 'Match claimed skills with project details and evidence.',
    badge: 'Skill Auditor',
    color: '#a855f7',
    scenarios: [
      {
        id: 'ss-1',
        persona: getPersona('priya-nair'),
        difficulty: 'medium',
        visibleData: {
          resume: ['Skills: Python, AWS, Data Visualization', 'Projects: Developed "EduTech Tracker"'],
          portal: ['Skills: Python (Expert), AWS (Advanced)'],
          system: ['Self-Assessment Score: 95/100'],
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Project Deep Dive', content: '"EduTech Tracker" was built using No-Code tools (Wix/Zapier). No Python/AWS used.' },
          { id: 'e2', label: 'Course Certificate', content: 'Candidate completed "Python for Beginners" only 2 weeks ago.' },
        ],
        correctRisks: ['experience'],
        correctDecision: 'escalate',
        strongJustificationKeywords: ['skill inflation', 'no-code', 'beginner python', 'misrepresented expert level'],
      }
    ]
  },
  {
    id: 'integrity-inspector',
    title: 'Integrity Inspector',
    icon: 'fa-shield-halved',
    description: 'Detect forged documents and data inconsistencies.',
    badge: 'Integrity Officer',
    color: '#ef4444',
    scenarios: [
      {
        id: 'ii-1',
        persona: getPersona('ahmed-khan'),
        difficulty: 'hard',
        visibleData: {
          resume: ['Previous Company: Global Logistics (Dubai)', 'Role: Coordinator'],
          portal: ['Employer: Global Logistics', 'Role: Coordinator'],
          system: ['Document Check: Relieving letter submitted as PDF.'],
        },
        evidenceTokens: 3,
        evidence: [
          { id: 'e1', label: 'Metadata Check', content: 'PDF metadata shows the document was modified yesterday using "Online PDF Editor".' },
          { id: 'e2', label: 'Font Analysis', content: 'Company logo uses "Arial" but text uses "Calibri (Italic)". Standard letters use "Helvetica".' },
          { id: 'e3', label: 'Direct Verification', content: 'Global Logistics HR states they never issued a letter with serial #GL-2023-X.' },
        ],
        correctRisks: ['mismatch', 'status'],
        correctDecision: 'reject',
        strongJustificationKeywords: ['forged letter', 'modified metadata', 'font inconsistency', 'failed verification', 'tampered'],
      }
    ]
  },
  {
    id: 'experience-validator',
    title: 'Experience Validator',
    icon: 'fa-user-check',
    description: 'Cross-reference multiple data sources to validate experience.',
    badge: 'Validation Hero',
    color: '#22c55e',
    scenarios: [
      {
        id: 'ev-1',
        persona: getPersona('emily-chen'),
        difficulty: 'hard',
        visibleData: {
          resume: ['Company A: 2021-2023 (Full-time)', 'Company B: 2022-2023 (Full-time)'],
          portal: ['Primary: Company A', 'Secondary: Freelance'],
          system: ['Tax Records: Dual contributions detected from two distinct employers in 2022.'],
        },
        evidenceTokens: 2,
        evidence: [
          { id: 'e1', label: 'Contract Audit', content: 'Company A contract strictly prohibits secondary employment (Moonlighting).' },
          { id: 'e2', label: 'Work Hours', content: 'Timesheets for both companies show 40+ hours/week during the same period.' },
        ],
        correctRisks: ['experience', 'status'],
        correctDecision: 'reject',
        strongJustificationKeywords: ['dual employment', 'moonlighting', 'overlapping tenure', 'contract breach', 'tax mismatch'],
      }
    ]
  }
];

export const investigationRoom = [
  {
    id: 'inv-1',
    title: 'The Multi-Source Mismatch',
    alert: 'Complex Conflict Detected',
    difficulty: 'expert',
    persona: getPersona('daniel-brooks'),
    visibleData: {
      resume: [
        'Role: Sr. Area Manager',
        'Company: LogiGlobal (2019-2024)',
        'Skills: Strategic Planning, Fleet Ops'
      ],
      portal: [
        'Role: Area Manager',
        'Company: LogiGlobal (2020-2024)',
        'Salary: $95k'
      ],
      system: [
        'Previous ID: DB-2017 (Terminated)',
        'Rehire Eligibility: Review Required',
        'Notes: Involuntary separation in 2017 due to policy breach.'
      ]
    },
    evidenceTokens: 4,
    evidence: [
      { id: 'e1', label: 'Termination File', content: 'Separated in 2017 for "Misuse of company assets". Not eligible for rehire for 5 years (period expired).' },
      { id: 'e2', label: 'Experience Check', content: 'LogiGlobal records show tenure started in June 2020, not 2019 as per resume.' },
      { id: 'e3', label: 'Manager Feedback', content: 'Former manager at LogiGlobal: "Daniel was a solid performer but often overstated his scope."' },
      { id: 'e4', label: 'Skill Audit', content: 'Internal test results: Strategic Planning (72%), Fleet Ops (88%).' }
    ],
    correctRisks: ['rehire', 'timeline', 'experience'],
    correctDecision: 'escalate',
    strongJustificationKeywords: ['previous termination', 'tenure discrepancy', 'inflation', 'rehire eligibility', 'policy breach'],
  },
  {
    id: 'inv-2',
    title: 'The Ghost Enterprise',
    alert: 'Unverifiable Employer',
    difficulty: 'expert',
    persona: getPersona('ankit-verma'),
    visibleData: {
      resume: ['Exp: 2 Years at "SwiftLog Solutions"', 'Role: Operations Lead'],
      portal: ['Exp: 2 Years at SwiftLog', 'Role: Lead'],
      system: ['Employer Search: No registration found for SwiftLog Solutions in MCA database.']
    },
    evidenceTokens: 4,
    evidence: [
      { id: 'e1', label: 'Domain Research', content: 'SwiftLogSolutions.com was registered only 3 months ago by Ankit Verma.' },
      { id: 'e2', label: 'Social Graph', content: 'No other employees found on LinkedIn for this company.' },
      { id: 'e3', label: 'Bank Statement', content: 'Salary credits show as "Personal Transfer" from a private account, not a corporate one.' },
      { id: 'e4', label: 'Tax Form (Form 16)', content: 'Candidate failed to provide Form 16, claiming "Company was small".' }
    ],
    correctRisks: ['experience', 'mismatch', 'status'],
    correctDecision: 'reject',
    strongJustificationKeywords: ['fake company', 'self-registered domain', 'no tax records', 'unverifiable employer', 'experience fabrication'],
  },
  {
    id: 'inv-3',
    title: 'The Managerial Mirage',
    alert: 'Role Inflation Check',
    difficulty: 'expert',
    persona: getPersona('jason-miller'),
    visibleData: {
      resume: ['Role: Operations Director', 'Team Size: 150+', 'Budget: $2M'],
      portal: ['Role: Operations Manager', 'Team Size: 50+'],
      system: ['Industry Benchmark: Typical Director role at his previous company requires 15+ years; Jason has 12.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'Org Chart Audit', content: 'Org chart shows Jason reporting to a Senior Manager. Actual team size was 12 direct reports.' },
      { id: 'e2', label: 'KPI Report', content: 'Jason managed a project budget of $200k, not $2M. Project was successful but smaller scale.' },
      { id: 'e3', label: 'Title Verification', content: 'HR confirms title was "Operations Manager Level 2".' }
    ],
    correctRisks: ['managerial', 'experience'],
    correctDecision: 'escalate',
    strongJustificationKeywords: ['title inflation', 'budget exaggeration', 'team size mismatch', 'scope inflation'],
  },
  {
    id: 'inv-4',
    title: 'The Overlap Enigma',
    alert: 'Dual Employment Detected',
    difficulty: 'expert',
    persona: getPersona('emily-chen'),
    visibleData: {
      resume: ['Current: Senior PM at Tech-A (2022-Present)'],
      portal: ['Current: Senior PM at Tech-A (2022-Present)'],
      system: ['Cross-Check: Active ID found at Tech-B with "Active" status and recent badge-ins.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'Badge Activity', content: 'Candidate has badged into Tech-B office 3 times this week during core hours.' },
      { id: 'e2', label: 'Social Activity', content: 'Recent post on internal Tech-B slack: "Looking forward to the team dinner tonight!"' },
      { id: 'e3', label: 'Employment Proof', content: 'Tech-A HR confirms she is still on payroll as full-time.' }
    ],
    correctRisks: ['status', 'mismatch'],
    correctDecision: 'reject',
    strongJustificationKeywords: ['active dual employment', 'badge-in conflict', 'moonlighting', 'policy violation'],
  },
  {
    id: 'inv-5',
    title: 'The Alias Audit',
    alert: 'Identity Integrity Issue',
    difficulty: 'expert',
    persona: getPersona('michael-johnson'),
    visibleData: {
      resume: ['Name: Michael Johnson', 'DOB: 12-May-1990'],
      portal: ['Name: Mike Johnson', 'DOB: 12-May-1990'],
      system: ['Alias Match: Found "Mick Johnson" with same SSN/PAN but different work history.']
    },
    evidenceTokens: 3,
    evidence: [
      { id: 'e1', label: 'Identity Vault', content: 'SSN/PAN match is 100%. "Mick Johnson" has a "Blacklisted" status from 2021.' },
      { id: 'e2', label: 'History Gap', content: 'Michael\'s resume shows a gap during the exact time Mick was employed (and fired) at a competitor.' },
      { id: 'e3', label: 'Photo ID', content: 'Comparison of uploaded ID for both profiles shows identical facial features.' }
    ],
    correctRisks: ['duplicate', 'status', 'mismatch'],
    correctDecision: 'reject',
    strongJustificationKeywords: ['identity hiding', 'alias used', 'blacklisted match', 'SSN match', 'fraudulent omission'],
  }
];

