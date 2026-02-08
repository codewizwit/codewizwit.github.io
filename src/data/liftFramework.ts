export const phases = [
  {
    number: 0,
    name: 'Trust',
    summary: 'Before anything else. Have honest conversations about what AI means for the team. Listen to the fears, the excitement, and everything in between. Build psychological safety so people feel comfortable experimenting together.',
    building: 'Permission to try',
  },
  {
    number: 1,
    name: 'Discovery',
    summary: 'Sit with teams. Learn how they actually work today. Understand what frustrates them, what they care about, and where AI could genuinely help. The early adopters and the skeptics both have something to teach you.',
    building: 'Understanding and buy-in',
  },
  {
    number: 2,
    name: 'Standards',
    summary: 'Teams come together to define their own rules. What does quality look like? What matters to us? These conversations build shared ownership. AI captures and encodes the standards the team agrees on.',
    building: 'Shared ownership of quality',
  },
  {
    number: 3,
    name: 'Infrastructure',
    summary: 'Build the foundation that gives everyone confidence to move fast. Static testing, CI/CD pipelines, architecture patterns, governance structures. The safety net that lets people take creative risks.',
    building: 'The safety net',
  },
  {
    number: 4,
    name: 'The Table',
    summary: 'Everyone in the room. Devs, product, design, domain experts building side by side. Ideas move from conversation to working prototype because the people who understand the problem are the ones solving it.',
    building: 'A new way of working together',
  },
  {
    number: 5,
    name: 'Encoding Intent',
    summary: 'Teams learn to articulate what they want before AI builds it. Configs, guardrails, planning prompts. The human judgment, experience, and vision go in first. Then AI executes from that blueprint.',
    building: 'The environment for AI to succeed',
  },
  {
    number: 6,
    name: 'Scale',
    summary: 'The model spreads because people believe in it. Teams teach teams. Internal champions emerge. Knowledge flows through relationships. The model becomes the culture because it made work better for the humans doing it.',
    building: 'Sustainable transformation',
  },
];

export const roles = [
  {
    title: 'Enablers',
    who: 'Engineers, tech leads, AI champions',
    does: 'Build the environment: configs, guardrails, infrastructure. Create the space where others can build.',
    shift: 'From gatekeeper to enabler',
    human: 'Mentorship matters more. Seniors teach judgment, architecture, and intent.',
  },
  {
    title: 'Builders',
    who: 'Anyone with ideas and domain expertise',
    does: 'Build inside the environment. Prototype, test, iterate without waiting in line.',
    shift: 'From requester to creator',
    human: 'Domain expertise finally gets a seat at the table. Ideas don\'t die in backlogs.',
  },
  {
    title: 'Advocates',
    who: 'Test practitioners, quality engineers',
    does: 'Ensure what gets built is trustworthy. Test for quality, security, bias, fairness.',
    shift: 'From checkers to architects of quality',
    human: 'Critical thinking becomes essential. Catching what AI misses is more valuable than ever.',
  },
  {
    title: 'Facilitators',
    who: 'Team leads, coaches, trained practitioners',
    does: 'Run The Table. Keep collaboration flowing. Make sure every voice is heard.',
    shift: 'From project manager to collaboration architect',
    human: 'Empathy and communication become core technical skills.',
  },
];

export const shifts = [
  { before: 'Engineers write code', after: 'Engineers build blueprints' },
  { before: 'AI assists', after: 'AI executes from the blueprint' },
  { before: 'Value = lines of code', after: 'Value = ideas, structure, judgment' },
  { before: 'Junior devs do grunt work', after: 'Junior devs learn to think, challenge, design' },
  { before: 'Quality is tested after', after: 'Quality is encoded before' },
  { before: 'Trust is assumed', after: 'Trust is built through transparency' },
  { before: 'Only technical people build', after: 'Everyone builds inside the environment' },
  { before: 'Handoffs between teams', after: 'Collaboration at The Table' },
  { before: 'Agile sprints and pivots', after: 'Encode intent upfront, build fast' },
];
