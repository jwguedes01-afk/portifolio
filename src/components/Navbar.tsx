import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { personal } from "../data/content";

const NAV_LINKS = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "powerbi", label: "Power BI" },
  { id: "stack", label: "Competências" },
  { id: "contato", label: "Contato" },
];
const IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(8);
  const active = useActiveSection(IDS);

  const solid = scrolled || isOpen;
  const iconBtn = `p-2 rounded-md transition-colors ${
    solid
      ? "text-navy-600 dark:text-navy-200 hover:bg-slate-100 dark:hover:bg-navy-800/60"
      : "text-navy-100 hover:text-white hover:bg-white/10"
  }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/85 dark:bg-navy-950/85 backdrop-blur-md border-b border-slate-200 dark:border-navy-800"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16"
      >
        <a
          href="#topo"
          className={`font-bold tracking-tight text-lg ${
            solid ? "text-navy-900 dark:text-white" : "text-white"
          }`}
        >
          {personal.initials}
          <span className="text-accent-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? "text-navy-900 dark:text-white"
                        : "text-navy-500 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white"
                      : isActive
                        ? "text-white"
                        : "text-navy-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded bg-accent-500 transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            className={iconBtn}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contato"
            className="hidden sm:inline-flex ml-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-accent-400 transition-colors"
          >
            Fale comigo
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            className={`md:hidden ${iconBtn}`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col px-5 pb-4 border-t border-slate-200 dark:border-navy-800">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium text-navy-600 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
