export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Frameworks', href: '/frameworks' },
  { label: 'Writing', href: '/writing' },
  { label: 'Connect', href: '/connect' },
];
