interface Props {
  id?: string;
}

export const Hero = ({ id }: Props) => {
  return (
    <section
      id={id}
      className="relative w-full py-15 md:py-2 bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="container px-4 lg:px-12 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <p className="font-sans text-sm font-semibold tracking-wide uppercase text-emerald-600">
              La actualización que tu empresa necesita
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-slate-900 max-w-[600px]">
              Descubre el potencial oculto de tu{' '}
              <span className="text-emerald-600">empresa</span>
            </h1>
            <p className="font-inter text-slate-600 text-lg md:text-xl max-w-[500px] leading-relaxed">
              En NextGen nos aseguramos de sacar el máximo potencial a tu
              empresa, proporcionándote una identidad única y sólida.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-100 rounded-full blur-3xl -z-10" />

            <img
              src="/mock-hero.webp"
              alt="Dashboard NextGen"
              width={600}
              height={600}
              className="object-contain w-full max-w-[500px] drop-shadow-xl hover:scale-105 transition-transform duration-500"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
