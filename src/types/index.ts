export type PillarId = "logistica" | "dados" | "dev";

export interface Pillar {
  id: PillarId;
  title: string;
  description: string;
  colorVar: string; // CSS var name para cor sólida do pilar
  softVar: string; // CSS var name para cor de fundo suave do pilar
}

export interface ProjectScreenshot {
  alt: string;
  caption?: string; // legenda curta exibida no modal
  // TODO: adicionar screenshot — substituir por caminho real da imagem (ex: "/projects/gestfrota-1.png")
  src: string | null;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  pillars: PillarId[];
  stack: string[];
  status: string;
  screenshots: ProjectScreenshot[];
  demoUrl?: string; // TODO: adicionar link de demo
  repoUrl?: string; // TODO: adicionar link do repositório (GitHub)
}

export interface SkillGroup {
  pillar: PillarId;
  items: string[];
}

export interface Dashboard {
  id: string;
  title: string;
  description: string;
  tools: string[];
  // TODO: link "Publicar na Web" do Power BI (https://app.powerbi.com/view?r=...)
  embedUrl?: string;
  // TODO: print do dashboard (ex: "/powerbi/frota.png")
  image?: string;
}
