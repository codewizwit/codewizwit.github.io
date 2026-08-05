export interface WorkItem {
  name: string;
  blurb: string;
  href: string;
  external: boolean;
}

export const work: WorkItem[] = [
  {
    name: "das-cli",
    blurb:
      "Slices documentation into context-efficient chunks with an index, so Claude loads only what it needs on demand. Point it at a GitHub URL, a Markdown file, a docs folder, or a project root. Hardened against prompt injection. Published on npm.",
    href: "https://codewizwit.github.io/das-cli/",
    external: true,
  },
  {
    name: "human-in-the-loop",
    blurb:
      "A CLI that finds and installs Claude Code skills from a reviewed library: search, install, diagnose, upgrade. The skills cover code review, security, testing, governance, and team culture. Published on npm, and the subject of my AI Summit talk.",
    href: "https://www.npmjs.com/package/@human-in-the-loop/cli",
    external: true,
  },
  {
    name: "philosophy",
    blurb:
      "One labeled diagram of how AI adoption should work: the north star, the four delivery stages that loop, and the tools underneath that keep it honest. Every piece of it is written out in full under Ideas.",
    href: "/philosophy",
    external: false,
  },
  {
    name: "wizwit shorts",
    blurb:
      "Six illustrated stories about AI and the way we work, told through scrolling. Hand drawn, one self-contained page each.",
    href: "https://wizwit-shorts.vercel.app/",
    external: true,
  },
  {
    name: "wizwit claude",
    blurb:
      "The Claude Code setup I actually work in. Agents, skills, and standards, documented so someone else can fork it.",
    href: "https://claude-code-playbook-sigma.vercel.app",
    external: true,
  },
];

/** Things built for the fun of it. Rendered as its own list below the work rows. */
export const playground: WorkItem[] = [
  {
    name: "spaceland",
    blurb:
      "A 3D field of spheres that drift, lean toward your cursor, and pop in chain reactions when you click one. Three.js, no build step, twelve themes.",
    href: "https://sphere-field.vercel.app",
    external: true,
  },
  {
    name: "claude vs claude",
    blurb:
      "Spectator mode for two Claude instances. Pick a preset or write your own topic, set the number of rounds, and watch Claude A play contrarian while Claude B hunts for unexpected angles. React and Vite, with an Express proxy so the API key never reaches the browser.",
    href: "https://claude-vs-claude.vercel.app",
    external: true,
  },
];
