import { useState } from 'react';
import { Phone, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { routeList } from '@/constants/navigation.ts';
import { Link } from 'react-router';

export const CustomFooter = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (text: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
  };

  return (
    <footer className="bg-emerald-950 text-gray-400 border-t border-emerald-900/50 font-sans relative overflow-hidden">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* COLUMNA 1: LOGO Y REDES */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex justify-start">
              <img
                fetchPriority="low"
                src="/isotipo.webp"
                alt="NextGen logo"
                width={60}
                height={60}
                className="rounded-lg object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Soluciones de software pensadas para el mercado peruano.
              Priorizamos{' '}
              <span className="text-emerald-400 font-medium">calidad</span>,
              <span className="text-emerald-400 font-medium"> seguridad</span> y
              soporte local.
            </p>

            <div className="flex gap-3">
              {[
                { src: '/footer/facebook.svg', label: 'Facebook', href: '/' },
                { src: '/footer/instagram.svg', label: 'Instagram', href: '/' },
                { src: '/footer/x.svg', label: 'X', href: '/' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-emerald-900/40 border border-emerald-800 flex items-center justify-center text-emerald-100 hover:bg-emerald-600 hover:text-white transition-all duration-300 group"
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

          {/* COLUMNA 2: EXPLORAR */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold tracking-wide text-sm uppercase mb-6 flex items-center gap-2">
              Explorar
            </h3>
            <ul className="space-y-3">
              {routeList.slice(0, 5).map((link, index) => (
                <li key={index}>
                  {link.children ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleSection(link.text)}
                        className="flex items-center justify-between w-full text-emerald-200/80 text-sm font-medium hover:text-emerald-400 transition-colors group cursor-pointer text-left"
                      >
                        {link.text}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openSections[link.text] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          openSections[link.text]
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="pl-3 border-l border-emerald-800 space-y-2 mt-2 mb-2">
                            {link.children.map((sub) => (
                              <li key={sub.to ?? sub.text}>
                                <Link
                                  to={sub.to ?? '#'}
                                  className="text-sm hover:text-white transition-colors block py-0.5"
                                >
                                  {sub.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.to ?? '/'}
                      className="text-sm hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: LEGAL */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold tracking-wide text-sm uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                'Política de Privacidad',
                'Términos y Condiciones',
                'Libro de Reclamaciones',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span>{item}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-emerald-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold tracking-wide text-sm uppercase mb-6">
              Contáctanos
            </h3>

            <div className="space-y-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-300">
                      atencioncliente@nextgen.com
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-300">+51 999 999 999</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-300">+51 999 999 999</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-300">+51 999 999 999</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
