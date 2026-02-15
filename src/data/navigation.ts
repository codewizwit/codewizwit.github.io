export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Frameworks', href: '/frameworks' },
  { label: 'Writing', href: '/writing' },
  { label: 'Hot Dog', href: '/the-hot-dog' },
  { label: 'Connect', href: '/connect' },
];
