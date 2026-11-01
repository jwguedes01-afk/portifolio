import { personal } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-8 bg-navy-950 border-t border-navy-800">
      <div className="container-x flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-xs text-navy-400">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <a
          href="#topo"
          className="text-xs font-medium text-navy-400 hover:text-white transition-colors"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
