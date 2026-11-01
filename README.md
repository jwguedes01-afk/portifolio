# Portfólio — Júlio Guedes

Site de portfólio pessoal (SPA estática) construído com React + Vite + TypeScript + Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Editando o conteúdo

Todo o conteúdo do site (dados pessoais, pilares, projetos, skills e trajetória) está
centralizado em [src/data/content.ts](src/data/content.ts). Edite esse arquivo para atualizar
textos sem precisar mexer nos componentes.

Pendências marcadas com `TODO` nesse arquivo:

- **Currículo em PDF**: adicione o arquivo em `public/curriculo-julio-guedes.pdf` (o link no Hero
  já aponta para esse caminho).
- **LinkedIn**: atualize `personal.linkedinUrl`.
- **Screenshots dos projetos**: cada projeto em `projects[].screenshots` tem um `src: null` —
  adicione as imagens em `public/` (ex: `public/projects/gestfrota-1.png`) e atualize o campo
  `src` com o caminho. Os placeholders aparecem nos cards e no modal de detalhes até lá.
- **Links de demo/repositório**: preencha `demoUrl` e `repoUrl` em cada projeto quando disponíveis.

## Estrutura

```
src/
  components/   # Um componente por seção (Hero, Pillars, About, Projects, Skills, Contact...)
  data/         # content.ts (dados) e pillarStyles.ts (mapa de cores por pilar)
  hooks/        # useDarkMode
  types/        # Tipos compartilhados
```

## Stack

React 19 · Vite · TypeScript · Tailwind CSS v4 · lucide-react
