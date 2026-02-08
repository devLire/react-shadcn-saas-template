import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { routeList } from '@/constants/navigation.ts';
import type { NavItem } from '@/constants/navigation.ts';

const SiteLogo = () => (
  <Link
    to="/"
    className="flex items-center justify-center transition-opacity hover:opacity-90"
  >
    <img
      src="/imagotipo.webp"
      alt="Logo Marca"
      width={140}
      height={40}
      className="object-contain"
    />
  </Link>
);

const DesktopNav = ({ items }: { items: NavItem[] }) => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.to || item.text} className="relative">
            {item.children && item.children.length > 0 ? (
              <>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary data-[state=open]:text-primary font-medium">
                  {item.text}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="min-w-[180px] left-1/2 -translate-x-1/2">
                  <ul className="min-w-[180px] p-2 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.to ?? child.text}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={child.to ?? '#'}
                            className={cn(
                              'block select-none rounded-md px-3 py-2 text-sm font-medium leading-none no-underline outline-none transition-colors',
                              'text-muted-foreground hover:bg-slate-100 hover:text-primary focus:bg-slate-100 focus:text-primary'
                            )}
                          >
                            {child.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link to={item.to ?? '/'}>
                <NavigationMenuLink
                  className={cn(
                    'bg-transparent text-muted-foreground hover:text-primary cursor-pointer font-medium'
                  )}
                >
                  {item.text}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileSheet = ({ items }: { items: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-muted-foreground hover:text-primary"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[380px] flex flex-col p-0"
      >
        {/* SHEET HEADER */}
        <SheetHeader className="px-6 pt-8 pb-6 border-b border-border/40 bg-slate-50/50">
          <SheetTitle className="sr-only">Navegación principal</SheetTitle>
          <div className="flex justify-center mb-2">
            <div className="scale-100">
              <SiteLogo />
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground uppercase tracking-wider font-medium">
            Menú de Navegación
          </p>
        </SheetHeader>

        {/* SHEET NAV */}
        <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {item.children ? (
                <div className="space-y-3">
                  <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                    {item.text}
                    <span className="h-px flex-1 bg-border/60 ml-2"></span>
                  </h4>

                  <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-primary/10 ml-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.to ?? child.text}
                        to={child.to ?? '#'}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between text-base text-muted-foreground hover:text-primary hover:bg-slate-50 py-2 px-3 rounded-md transition-all"
                      >
                        {child.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.to ?? '/'}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors py-2 border-b border-transparent hover:border-border"
                >
                  {item.text}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* SHEET FOOTER */}
        <div className="mt-auto border-t border-border/40 bg-slate-50/50 p-6 space-y-6">
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-auto min-w-[160px] px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
              onClick={() => setIsOpen(false)}
            >
              Empezar Ahora
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              ¿Tienes alguna duda?{' '}
              <Link to="/contacto" className="underline hover:text-primary">
                Contáctanos
              </Link>
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            {[
              { src: '/footer/facebook.svg', label: 'Facebook', href: '/' },
              { src: '/footer/instagram.svg', label: 'Instagram', href: '/' },
              { src: '/footer/x.svg', label: 'X', href: '/' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-emerald-900 border border-emerald-800 flex items-center justify-center text-emerald-100 hover:bg-emerald-600 hover:text-white transition-all duration-300 group"
                aria-label={social.label}
              >
                <img
                  src={social.src}
                  alt={social.label}
                  className="w-5 h-5 group-hover:scale-110 transition-transform object-contain filter grayscale brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const CustomHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <SiteLogo />
        </div>

        {/* Navegación de escritorio */}
        <div className="hidden md:flex">
          <DesktopNav items={routeList} />
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm">
            Empezar
          </Button>

          <MobileSheet items={routeList} />
        </div>
      </div>
    </header>
  );
};
