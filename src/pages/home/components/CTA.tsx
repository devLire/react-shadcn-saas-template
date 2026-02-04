interface Props {
  id: string;
}

export const CtaSection = ({ id }: Props) => {
  return (
    <section className="py-20 bg-white" id={id}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-emerald-900 px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-20" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Únete a las empresas que ya están escalando con NextGen. Agenda
              una consultoría gratuita de 15 minutos hoy mismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-emerald-950 shadow transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Empezar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
