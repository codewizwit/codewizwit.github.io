export const lenses = [
  {
    number: 1,
    name: 'Developer Experience & Growth',
    core: 'Does this AI tool make developers better at their jobs, or just faster?',
    questions: [
      'Does this tool enhance developer happiness and creativity?',
      'Does it support learning by providing explainable suggestions, or just auto-fix without context?',
      'Are we maintaining opportunities for craftsmanship and skill development?',
      'Does it reduce cognitive load in helpful ways, or create new friction?',
      'Can developers opt out or adjust the level of AI assistance?',
    ],
    redFlags: [
      'Developers feel pressured to accept AI suggestions without understanding them',
      'Tools make decisions that bypass learning opportunities',
      'Increasing dependency on AI for basic tasks',
      'Loss of creative autonomy or flow state',
    ],
  },
  {
    number: 2,
    name: 'Responsibility & Equity',
    core: 'Does everyone benefit equally, or are some people left behind?',
    questions: [
      'Are the AI\'s suggestions biased toward certain styles, patterns, or contributors?',
      'Do all team members benefit equally, regardless of experience level or role?',
      'Have we built in ways to monitor for unintended impacts on quality or fairness?',
      'Are we considering how this affects different working styles and accessibility needs?',
      'Who is accountable when AI suggestions introduce bugs or security issues?',
    ],
    redFlags: [
      'Junior developers are disadvantaged by tools optimized for senior workflows',
      'Certain coding styles or frameworks receive better AI support than others',
      'No clear ownership when AI-generated code causes problems',
      'Accessibility barriers in AI-assisted workflows',
    ],
  },
  {
    number: 3,
    name: 'Culture & Collaboration',
    core: 'Is AI strengthening how your team works together, or quietly eroding it?',
    questions: [
      'How does this tool change how team members interact?',
      'Are we using AI to enhance collaboration and shared understanding, or replacing valuable discussion?',
      'Are we balancing speed with depth in our work?',
      'Does this strengthen psychological safety and trust on the team?',
      'Are we preserving space for mentorship, pair programming, and knowledge sharing?',
    ],
    redFlags: [
      'Code reviews become automated checklist exercises instead of conversations',
      'Decreased pair programming or collaborative problem-solving',
      'Team members stop asking questions because "AI already answered"',
      'Loss of shared code ownership and understanding',
    ],
  },
  {
    number: 4,
    name: 'Transparency & Trust',
    core: 'Can your team see, understand, and challenge what the AI is doing?',
    questions: [
      'Are AI-generated suggestions clearly labeled and explainable?',
      'Can developers challenge, override, or contextualize AI feedback easily?',
      'Are we transparent about when and how AI is used in workflows?',
      'Do we provide visibility into how AI tools make decisions?',
      'Are limitations and failure modes clearly communicated?',
    ],
    redFlags: [
      'Developers can\'t tell what was AI-generated vs human-written',
      'No way to understand why AI made a specific suggestion',
      'Hidden AI assistance that affects performance evaluations',
      'Lack of documentation on AI tool capabilities and limits',
    ],
  },
];
