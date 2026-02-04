import {
  Code2,
  Smartphone,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from 'lucide-react';

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4">
            Soluciones integrales para tu crecimiento
          </h2>
          <p className="text-slate-600 text-lg">
            Combinamos estrategia, diseño y tecnología para crear productos
            digitales que marcan la diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* CARD 1: Desarrollo Web */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-48 h-48 text-emerald-600 -mr-10 -mt-10" />
            </div>

            <div className="absolute right-46 top-1/2 -translate-y-1/2 w-1/3 h-auto z-20 hidden md:block">
              <img
                src="/services/mock-web.webp"
                alt="Ilustración desarrollo"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  Desarrollo Web & Software
                </h3>
                <p className="text-slate-600 max-w-sm">
                  Creamos plataformas robustas y escalables utilizando las
                  últimas tecnologías (React, Node, Python). Código limpio
                  pensado para el futuro.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2: Móvil */}
          <div className="md:row-span-2 relative group overflow-hidden rounded-3xl bg-emerald-900 p-8 border border-emerald-800 shadow-sm">
            <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <Smartphone className="w-64 h-64 text-emerald-400 -mb-10 -mr-10" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-emerald-800 flex items-center justify-center text-emerald-400 mb-4 shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>

              <div className="flex-1 flex items-center justify-center w-full min-h-0 py-2">
                <img
                  src="/services/mock-mobile.webp"
                  alt="Interfaz App Móvil"
                  className="h-full w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="shrink-0">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Apps Móviles Nativas
                </h3>
                <p className="text-emerald-100/80">
                  Lleva tu negocio al bolsillo de tus clientes. Desarrollo iOS y
                  Android con experiencia de usuario fluida y rendimiento
                  nativo.
                </p>
                <button className="mt-6 flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:text-white transition-colors group/btn">
                  Ver portafolio{' '}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3: Ciberseguridad */}
          <div className="relative group overflow-hidden rounded-3xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <img
              src="/services/mock-ciberseguridad.webp"
              alt="Ilustración de seguridad informática"
              className="absolute top-6 right-6 w-32 md:w-50 h-auto object-contain z-0"
            />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="pr-4 md:max-w-[60%]">
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                  Ciberseguridad
                </h3>
                <p className="text-slate-600 text-sm">
                  Auditorías y protección de datos para mantener tu negocio
                  seguro y compliant.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4: Escalabilidad */}
          <div className="relative group overflow-hidden rounded-3xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <img
              src="/services/mock-transformacion.webp"
              alt="Ilustración de seguridad informática"
              className="absolute top-6 right-6 w-32 md:w-50 h-auto object-contain z-0"
            />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="pr-4 md:max-w-[60%]">
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                  Transformación Digital
                </h3>
                <p className="text-slate-600 text-sm">
                  Modernizamos tus procesos legacy para automatizar tareas y
                  reducir costos operativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
