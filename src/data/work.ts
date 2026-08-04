export interface WorkItem {
  name: string;
  blurb: string;
  href: string;
  external: boolean;
}

export const work: WorkItem[] = [
  {
    name: "das",
    blurb:
      "Documentation as Skills. Turns any docs source into a token-bounded, progressive-disclosure skill an agent navigates instead of swallowing. On npm.",
    href: "https://codewizwit.github.io/das-cli/",
    external: true,
  },
  {
    name: "human-in-the-loop",
    blurb:
      "Reusable prompts that keep human judgment inside AI-assisted work, at the points where it actually matters. On npm.",
    href: "https://codewizwit.github.io/human-in-the-loop/",
    external: true,
  },
  {
    name: "wizwit lab",
    blurb:
      "Frameworks, architecture, and published tools for AI-assisted work that elevates everyone.",
    href: "https://wizwit-lab.vercel.app/",
    external: true,
  },
  {
    name: "wizwit shorts",
    blurb:
      "Illustrated, interactive scrollytelling pieces on AI and human-centered work.",
    href: "https://wizwit-shorts.vercel.app/",
    external: true,
  },
  {
    name: "claude & i",
    blurb: "A complete Claude Code environment. Fork it and make it yours.",
    href: "https://claude-code-playbook-sigma.vercel.app",
    external: true,
  },
];

/** Things built for the fun of it. Rendered as its own list below the work rows. */
export const playground: WorkItem[] = [
  {
    name: "spaceland",
    blurb:
      "A drifting field of spheres that answer the cursor and pop in chain reactions. Three.js, pure ESM, no build step.",
    href: "https://sphere-field.vercel.app",
    external: true,
  },
  {
    name: "The Jira Chronicles",
    blurb:
      "An interactive click-through story about what project management could look like reimagined with AI.",
    href: "https://wizwit-shorts.vercel.app/shorts/jira-chronicles/",
    external: true,
  },
  {
    name: "Claude & Claude",
    blurb:
      "A spectator-mode dialogue between two Claude instances. Pick a topic and watch them riff.",
    href: "https://claude-vs-claude.vercel.app",
    external: true,
  },
];
