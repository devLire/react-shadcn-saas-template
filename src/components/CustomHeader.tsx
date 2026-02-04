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
  navigationMenuTriggerStyle,
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
import type { NavLink } from '@/constants/routes';
import { routeList } from '@/constants/routes';

export const CustomHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md shadow-md supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* LOGO AREA */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center justify-center">
            <img
              src="/imagotipo.webp"
              alt="Logo Marca"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {routeList.map((link) => {
                if (link.subLinks) {
                  return (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuTrigger className="bg-transparent text-muted-foreground 2xl:text-base hover:text-blue-900 focus:text-blue-800">
                        {link.label}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent className="bg-white rounded-md shadow-lg overflow-hidden border-0 md:left-1/2 md:-translate-x-1/2 md:mt-1 md:min-w-[220px]">
                        <ul className="grid w-[200px] p-0 gap-0">
                          {link.subLinks.map((subLink) => (
                            <li
                              key={subLink.href}
                              className="border-b last:border-b-0 border-gray-100"
                            >
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subLink.href}
                                  className={cn(
                                    'block w-full select-none px-4 py-3 text-sm leading-none no-underline outline-none transition-colors',

                                    'text-muted-foreground hover:bg-[#044a7c]/5 hover:text-[#044a7c]',

                                    'focus:bg-[#044a7c]/5 focus:text-[#044a7c]'
                                  )}
                                >
                                  <div className="font-medium">
                                    {subLink.label}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={link.href}>
                    <Link to={link.href}>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),

                          'bg-transparent 2xl:text-base text-muted-foreground hover:text-[#044a7c] cursor-pointer'
                        )}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ACTIONS AREA */}
        <div className="flex items-center gap-2">
          <Button className="hidden md:flex bg-emerald-600 text-white hover:bg-emerald-700">
            Empezar
          </Button>

          {/* MOBILE TRIGGER */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-muted-foreground hover:text-primary"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gradient-to-b from-slate-50 via-white to-white w-[88vw] max-w-sm px-6 py-5 border-l border-slate-100 shadow-xl"
              >
                <SheetHeader className="items-start space-y-2 border-b border-gray-100 pb-4">
                  <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 py-1 text-lg font-semibold text-emerald-700">
                    Menú
                  </p>
                  <SheetTitle className="text-left text-lg font-semibold text-foreground">
                    Navega por el sitio
                  </SheetTitle>
                  <p className="text-left text-sm text-muted-foreground">
                    Accede rápido a las secciones principales.
                  </p>
                </SheetHeader>
                <MobileNav items={routeList} setOpen={setIsMobileMenuOpen} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileNav = ({
  items,
  setOpen,
}: {
  items: NavLink[];
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div className="flex flex-col gap-6 mt-5">
      {items.map((item) => (
        <div
          key={item.href ?? item.label}
          className="flex flex-col space-y-3 px-1"
        >
          {item.subLinks ? (
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-foreground">
                {item.label}
              </h4>
              <div className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                {item.subLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    to={sub.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              to={item.href}
              onClick={() => setOpen(false)}
              className="font-semibold text-lg text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
      <div className="mt-2 pt-4 border-t border-gray-100">
        <Button
          className="w-full bg-emerald-800 text-white hover:bg-emerald-700"
          onClick={() => setOpen(false)}
        >
          Empezar
        </Button>
      </div>
    </div>
  );
};
