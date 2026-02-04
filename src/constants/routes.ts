export interface SubLink {
  href: string;
  label: string;
}

export type NavLink =
  | { href: string; label: string; subLinks?: never }
  | { href?: undefined; label: string; subLinks: SubLink[] };

export const routeList: NavLink[] = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#portafolio', label: 'Portafolio' },
  {
    label: 'Servicios',
    subLinks: [
      {
        href: '/servicios/react',
        label: 'Páginas Web',
      },
      {
        href: '/servicios/app',
        label: 'App Móvil',
      },
    ],
  },
  { href: '/nosotros', label: 'Sobre Nosotros' },
];
