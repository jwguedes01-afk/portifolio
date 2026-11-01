import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { personal, pillars } from "../data/content";
import { PILLAR_ICONS } from "../data/pillarStyles";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex flex-col justify-center min-h-screen pt-28 pb-20 px-5 sm:px-8 overflow-hidden bg-navy-950 text-white"
    >
      <video
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src={`${import.meta.env.BASE_URL}video/hero-bg.mp4`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950"
      />
      <div aria-hidden="true" className="grid-pattern absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent-500/15 blur-3xl"
      />

      <div className="container-x w-full animate-fade-up">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-navy-100 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Aberto a novas oportunidades
        </p>

        <h1 className="mt-8 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
          {personal.shortName}
          <span className="text-accent-400">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl sm:text-2xl font-medium text-navy-100 leading-snug">
          {personal.role}
        </p>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-navy-300 leading-relaxed">
          {personal.headline}
        </p>

        <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-navy-300">
          <MapPin size={15} aria-hidden="true" />
          {personal.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-lg shadow-accent-500/20 hover:bg-accent-400 transition-colors"
          >
            Ver projetos
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Entrar em contato
          </a>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {pillars.map((p) => {
            const Icon = PILLAR_ICONS[p.id];
            return (
              <li
                key={p.id}
                className="flex items-center gap-3 bg-navy-950/80 px-5 py-4 backdrop-blur"
              >
                <Icon size={20} className="text-accent-400" aria-hidden="true" />
                <span className="text-sm font-semibold text-navy-50">
                  {p.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-navy-400 hover:text-white transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
