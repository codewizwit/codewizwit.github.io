export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'The Lift', href: '/the-lift' },
  { label: 'Writing', href: '/writing' },
  { label: 'Connect', href: '/connect' },
];
