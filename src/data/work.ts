export interface WorkItem {
  name: string;
  blurb: string;
  href: string;
  external: boolean;
}

export const work: WorkItem[] = [
  {
    name: "wizwit 3D",
    blurb:
      "An exploration of 3D motion, physics, and spatial color interactivity.",
    href: "https://sphere-field.vercel.app",
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
  {
    name: "Claude & Claude",
    blurb:
      "A spectator-mode dialogue between two Claude instances. Pick a topic and watch them riff.",
    href: "https://claude-vs-claude.vercel.app",
    external: true,
  },
];
