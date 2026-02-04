interface Props {
  id?: string;
}

export const Sponsors = ({ id }: Props) => {
  interface Sponsor {
    name: string;
    hoverClass: string;
    imgSrc: string;
  }

  const sponsors: Sponsor[] = [
    {
      name: 'Acme Corp',
      hoverClass:
        'hover:text-blue-600 hover:bg-blue-50/70 hover:shadow-blue-100',
      imgSrc: '/sponsors/AcmeCorp.svg',
    },
    {
      name: 'Quantum',
      hoverClass:
        'hover:text-purple-600 hover:bg-purple-50/70 hover:shadow-purple-100',
      imgSrc: '/sponsors/Quantum.svg',
    },
    {
      name: 'Echo',
      hoverClass:
        'hover:text-emerald-600 hover:bg-emerald-50/70 hover:shadow-emerald-100',
      imgSrc: '/sponsors/Echo.svg',
    },
    {
      name: 'Celestial',
      hoverClass:
        'hover:text-amber-600 hover:bg-amber-50/70 hover:shadow-amber-100',
      imgSrc: '/sponsors/Celestial.svg',
    },
    {
      name: 'Pulse',
      hoverClass:
        'hover:text-rose-600 hover:bg-rose-50/70 hover:shadow-rose-100',
      imgSrc: '/sponsors/Pulse.svg',
    },
  ];

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-100" id={id}>
      <div className="container px-4 md:px-6 mx-auto">
        <p className="text-center text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">
          Empresas que confían en NextGen
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={`grid py-4 place-items-center gap-4 rounded-lg bg-white shadow-sm opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:-translate-y-1 ${sponsor.hoverClass}`}
            >
              <span className="text-xl font-bold text-slate-700 font-heading">
                {sponsor.name}
              </span>
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain mx-auto"
                src={sponsor.imgSrc}
                alt={`${sponsor.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
