export interface NavItem {
  text: string;
  to?: string;
  children?: NavItem[];
}

export const routeList: NavItem[] = [
  {
    text: 'Inicio',
    to: '/#inicio',
  },
  {
    text: 'Portafolio',
    to: '/#portafolio',
  },
  {
    text: 'Servicios',
    children: [
      {
        text: 'Páginas Web',
        to: '/servicios/web',
      },
      {
        text: 'App Móvil',
        to: '/servicios/app',
      },
    ],
  },
  {
    text: 'Sobre Nosotros',
    to: '/nosotros',
  },
];
