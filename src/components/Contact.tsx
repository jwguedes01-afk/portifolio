import { ArrowUpRight, Link2, Mail, Phone } from "lucide-react";
import { personal } from "../data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const channels = [
    {
      icon: Mail,
      label: "E-mail",
      value: personal.email,
      href: `mailto:${personal.email}`,
      external: false,
    },
    {
      icon: Phone,
      label: "Telefone / WhatsApp",
      value: personal.phone,
      href: `tel:+55${personal.phone.replace(/\D/g, "")}`,
      external: false,
    },
    {
      icon: Link2,
      label: "LinkedIn",
      value: "linkedin.com/in/julio-guedes-",
      href: personal.linkedinUrl,
      external: true,
    },
  ];

  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="section-y bg-navy-950 text-white"
    >
      <div className="container-x">
        <SectionHeader
          id="contato-heading"
          index="05"
          eyebrow="Contato"
          title="Vamos conversar"
          description="Aberto a oportunidades na interseção de logística, dados e tecnologia."
          light
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 90} className="h-full">
              <a
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col rounded-2xl border border-navy-800 bg-navy-900/60 p-6 transition-colors hover:border-accent-500/50 hover:bg-navy-900"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <c.icon size={20} aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="text-navy-500 transition-colors group-hover:text-accent-400"
                  />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-navy-400">
                  {c.label}
                </p>
                <p className="mt-1 break-all font-medium text-navy-50">
                  {c.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
