/**
 * Fonte única de conteúdo do portfólio.
 * Edite aqui para atualizar textos, projetos e skills
 * sem precisar mexer nos componentes.
 */
import type { Dashboard, Pillar, Project, SkillGroup } from "../types";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const personal = {
  name: "Júlio de Oliveira Guedes do Nascimento",
  shortName: "Júlio Guedes",
  initials: "JN",
  role: "Logística · Dados · Desenvolvimento",
  headline:
    "Entendo o problema operacional, analiso o dado por trás dele e construo a ferramenta que resolve.",
  location: "Fortaleza - CE, Brasil",
  email: "jwguedes01@gmail.com",
  phone: "(85) 98198-1846",
  powerBiUrl: undefined as string | undefined, // TODO: link do seu perfil/relatório público no Power BI
  linkedinUrl: "https://www.linkedin.com/in/julio-guedes-/",

  about:
    "6 anos de experiência em Logística — expedição, gestão de frota e controle de estoque, com domínio de sistemas de gestão (SAP, WMS, Flex, Sankhya, Procfit) e ferramentas de frota (Frotix, Cobli). Há 3 anos atuo como desenvolvedor (Python, FastAPI, Django, React, SQL), aplicando essa experiência técnica na automação de processos e análise de dados da própria operação logística.",
};

export const pillars: Pillar[] = [
  {
    id: "logistica",
    title: "Logística",
    description:
      "Gestão de frotas, roteirização, indicadores operacionais (OTIF, lead time, custo/kg), expedição e estoque.",
    colorVar: "var(--color-pillar-logistics)",
    softVar: "var(--color-pillar-logistics-soft)",
  },
  {
    id: "dados",
    title: "Dados",
    description:
      "Dashboards, KPIs, apuração/tratamento de dados, Excel avançado e Power BI, relatórios gerenciais.",
    colorVar: "var(--color-pillar-data)",
    softVar: "var(--color-pillar-data-soft)",
  },
  {
    id: "dev",
    title: "Desenvolvimento",
    description:
      "Construção de sistemas próprios (Python/FastAPI/Django, SQL, React) para automatizar processos que antes eram manuais.",
    colorVar: "var(--color-pillar-dev)",
    softVar: "var(--color-pillar-dev-soft)",
  },
];

export const projects: Project[] = [
  {
    id: "gestfrota",
    name: "GestFrota",
    tagline: "Gestão de Frotas",
    description:
      "Sistema web de gestão de frota (custos, manutenção, combustível) com dashboards de acompanhamento em tempo real.",
    pillars: ["logistica", "dados", "dev"],
    stack: ["React 19", "FastAPI", "Supabase/PostgreSQL", "Recharts"],
    status: "Projeto próprio, em produção",
    screenshots: [
      { alt: "Dashboard de custos da frota com valor total, evolução mensal e distribuição por departamento", caption: "Dashboard de custos", src: asset("/projects/gestfrota-dashboard.png") },
      { alt: "Painel com top 10 fornecedores, top 5 veículos por custo e tipos de serviço", caption: "Fornecedores, veículos e serviços", src: asset("/projects/gestfrota-custos.png") },
      { alt: "Formulário de cadastro de nota de manutenção com importação de XML e leitura da chave da NF-e", caption: "Cadastro de nota de manutenção", src: asset("/projects/gestfrota-cadastro-nota.png") },
      { alt: "Tela de login do GestFrota", caption: "Login", src: asset("/projects/gestfrota-login.png") },
    ],
    demoUrl: undefined,
    repoUrl: undefined,
  },
  {
    id: "rastreio",
    name: "Rastreio",
    tagline: "Controle logístico para transportadoras",
    description:
      "Sistema web para transportadoras controlarem recebimento, saídas e entregas de carga por nota fiscal, com bipagem de NF-e, saldo de peso e baixa com foto do canhoto.",
    longDescription:
      "Transportadoras costumam controlar o recebimento e a entrega de carga em planilha ou no boca a boca com o motorista: sem saber onde está cada nota fiscal, sem saldo de peso confiável quando a carga sai parcelada, e sem histórico de quem deu baixa em quê. Desenvolvi o Sistema de Rastreio de Mercadoria para centralizar isso. Cada transportadora cadastra o recebimento e bipa a chave da NF-e (o sistema busca os dados na API do meuDANFE), monta as saídas escolhendo notas do estoque e dá baixa em cada entrega com foto do canhoto, direto ou devolvida com motivo, voltando pro saldo. Um superadmin acompanha todas as transportadoras pelo painel geral.",
    highlights: [
      "Django com isolamento total de dados por transportadora (cada uma só vê seus próprios registros)",
      "Saldo de peso parcial por nota fiscal entre saídas, garantido por constraints no banco (nunca negativo, nunca acima do total)",
      "Bipagem automática de NF-e via API externa (meuDANFE), com parsing de XML protegido contra XXE (defusedxml)",
      "Segurança reforçada: proteção contra brute-force no login (django-axes), reCAPTCHA v3 invisível, cookies HttpOnly/SameSite, canhoto armazenado em S3 privado com URL assinada",
    ],
    pillars: ["logistica", "dados", "dev"],
    stack: ["Python", "Django", "PostgreSQL", "S3 (django-storages)", "Gunicorn", "Whitenoise"],
    status: "Projeto próprio, em produção",
    screenshots: [
      { alt: "Dashboard do Rastreio com entregas, status das cargas e transportadoras", caption: "Painel geral", src: asset("/projects/rastreio-dashboard.png") },
      { alt: "Tela de gestão de transportadoras", caption: "Gestão de transportadoras", src: asset("/projects/rastreio-transportadoras.png") },
      { alt: "Tela de estoque com notas fiscais e filtros", caption: "Estoque por nota fiscal", src: asset("/projects/rastreio-estoque.png") },
      { alt: "Relatório de entregas por período com exportação em PDF e Excel", caption: "Relatório de entregas por período", src: asset("/projects/rastreio-relatorios.png") },
    ],
    demoUrl: undefined,
    repoUrl: undefined,
  },
  {
    id: "prodmanutencao",
    name: "ProdManutenção",
    tagline: "Manutenção Preventiva Industrial",
    description:
      "Sistema web que substituiu o controle em Excel da manutenção preventiva de uma indústria de panificação: planos, ordens de serviço, alertas, estoque e dashboard gerencial.",
    longDescription:
      "Na indústria, a manutenção preventiva era controlada em uma planilha: sem histórico confiável, sem alertas de vencimento e sem rastreio de quem fez o quê. Desenvolvi o ProdManutenção para centralizar isso. Os técnicos abrem e concluem OS pelo celular (com QR Code nos equipamentos). O gerente acompanha o dashboard, os alertas e o estoque de peças. As OS preventivas são geradas automaticamente a partir do plano.",
    highlights: [
      "API REST em FastAPI com autenticação própria (PIN e senha com bcrypt, cookies httpOnly, dois perfis independentes)",
      "Postgres no Supabase com RLS e migrações SQL versionadas",
      "Front em React 19 com dashboards em Recharts e paginação reutilizável via hook e componente",
      "Deploy no Render (Static Site e Web Service)",
    ],
    pillars: ["dados", "dev"],
    stack: ["React 19", "FastAPI", "PostgreSQL (Supabase)", "Recharts", "Render"],
    status: "Projeto próprio, em produção",
    screenshots: [
      { alt: "Dashboard de manutenção com execução mensal, ranking por tipo de ativo e resumo de status", caption: "Dashboard do gerente", src: asset("/projects/prodmanutencao-dashboard.png") },
      { alt: "Quadro Kanban de ordens de manutenção por status", caption: "Kanban de OS", src: asset("/projects/prodmanutencao-kanban.png") },
      { alt: "Plano de manutenção com ativos, atividades e próximas execuções", caption: "Plano preventivo", src: asset("/projects/prodmanutencao-plano.png") },
      { alt: "Catálogo de atividades com frequência e checklist por tipo de ativo", caption: "Catálogo de atividades", src: asset("/projects/prodmanutencao-catalogo.png") },
    ],
    demoUrl: undefined,
    repoUrl: undefined,
  },
];

/**
 * Dashboards de Power BI. Adicione itens aqui; com `embedUrl` o dashboard
 * aparece interativo, com `image` aparece como print.
 */
export const dashboards: Dashboard[] = [
  {
    id: "entregas",
    title: "Dashboard de Entregas",
    description:
      "Acompanhamento diário de entregas realizadas x não realizadas, taxa de sucesso e falha, desempenho por motorista e motivos de devolução.",
    tools: ["Power BI", "DAX", "Excel"],
    image: asset("/powerbi/entregas.png"),
  },
  {
    id: "compras-diesel",
    title: "Dashboard de Compras de Diesel",
    description:
      "Evolução mensal de volume, valor pago e preço médio por litro, com comparativo ao ano anterior e análise por fornecedor.",
    tools: ["Power BI", "DAX", "Excel"],
    image: asset("/powerbi/compras-diesel.png"),
  },
  {
    id: "abastecimento-externo",
    title: "Dashboard de Abastecimento Externo",
    description:
      "Custo total, valor médio por litro e ticket médio, com variação contra o ano anterior e quebra por placa, motorista e serviço.",
    tools: ["Power BI", "DAX", "Excel"],
    image: asset("/powerbi/abastecimento-externo.png"),
  },
  {
    id: "abastecimento-interno",
    title: "Dashboard de Abastecimento Interno",
    description:
      "Litros abastecidos por mês, tipo de combustível (diesel e Arla), por placa e por motorista, com filtros de período e veículo.",
    tools: ["Power BI", "DAX", "Excel"],
    image: asset("/powerbi/abastecimento-interno.png"),
  },
];

export const skills: SkillGroup[] = [
  {
    pillar: "logistica",
    items: [
      "SAP",
      "WMS",
      "ERP-FLEX",
      "SANKHYA",
      "FROTIX",
      "COBLI",
      "PROCFIT",
      "TICKETLOG",
      "VEIC",
      "Roteirização",
      "Gestão de frota",
      "KPIs logísticos (OTIF, lead time, custo/kg, custo/cubado)",
    ],
  },
  {
    pillar: "dados",
    items: [
      "Power BI",
      "Excel Avançado",
      "Pandas",
      "OpenPyXL",
      "SQL",
      "Dashboards",
      "Relatórios gerenciais",
    ],
  },
  {
    pillar: "dev",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "React 19",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Recharts",
      "Chart.js",
    ],
  },
];
