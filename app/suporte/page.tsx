"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Tutorial = {
  title: string;
  description: string;
  duration: string;
  level: string;
  videoPlaceholder: string;
  youtubeEmbedUrl: string;
};

type TutorialCategory = {
  name: string;
  eyebrow: string;
  description: string;
  accent: string;
  tutorials: Tutorial[];
};

const tutorialCategories: TutorialCategory[] = [
  {
    name: "Financeiro",
    eyebrow: "Controle e resultados",
    description: "Aprenda a lançar, revisar e interpretar suas finanças dentro da plataforma.",
    accent: "from-violet-500 via-fuchsia-500 to-cyan-400",
    tutorials: [
      {
        title: "Como cadastrar transações",
        description: "Veja como registrar entradas, saídas e manter seu histórico financeiro organizado.",
        duration: "6 min",
        level: "Iniciante",
        videoPlaceholder: "financeiro-cadastrar-transacoes",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_FINANCEIRO_TRANSACOES"
      },
      {
        title: "Como fechar o mês",
        description: "Entenda o fluxo ideal para revisar gastos, receitas e consolidar seu mês.",
        duration: "8 min",
        level: "Essencial",
        videoPlaceholder: "financeiro-fechar-mes",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_FINANCEIRO_FECHAMENTO"
      },
      {
        title: "Como acompanhar resultados",
        description: "Use os indicadores para visualizar evolução, metas e pontos de melhoria.",
        duration: "7 min",
        level: "Intermediário",
        videoPlaceholder: "financeiro-acompanhar-resultados",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_FINANCEIRO_RESULTADOS"
      }
    ]
  },
  {
    name: "Treinos",
    eyebrow: "Rotina e performance",
    description: "Configure treinos, lembretes e transferências para manter consistência.",
    accent: "from-emerald-400 via-cyan-400 to-violet-500",
    tutorials: [
      {
        title: "Como criar um treino",
        description: "Monte sua rotina de exercícios com organização, dias definidos e foco claro.",
        duration: "5 min",
        level: "Iniciante",
        videoPlaceholder: "treinos-criar-treino",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_TREINOS_CRIAR"
      },
      {
        title: "Como ativar lembretes",
        description: "Configure alertas para não perder horários importantes da sua rotina física.",
        duration: "4 min",
        level: "Rápido",
        videoPlaceholder: "treinos-ativar-lembretes",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_TREINOS_LEMBRETES"
      },
      {
        title: "Como transferir treinos",
        description: "Reorganize sessões quando precisar ajustar sua semana sem perder planejamento.",
        duration: "6 min",
        level: "Intermediário",
        videoPlaceholder: "treinos-transferir-treinos",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_TREINOS_TRANSFERIR"
      }
    ]
  },
  {
    name: "Alimentação",
    eyebrow: "Nutrição inteligente",
    description: "Registre refeições, use IA alimentar e acompanhe macronutrientes com clareza.",
    accent: "from-orange-400 via-rose-400 to-violet-500",
    tutorials: [
      {
        title: "Como registrar refeições",
        description: "Aprenda a manter um diário alimentar simples, visual e fácil de consultar.",
        duration: "5 min",
        level: "Iniciante",
        videoPlaceholder: "alimentacao-registrar-refeicoes",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_ALIMENTACAO_REFEICOES"
      },
      {
        title: "Como usar a IA alimentar",
        description: "Entenda como aproveitar a inteligência artificial para acelerar registros.",
        duration: "9 min",
        level: "Avançado",
        videoPlaceholder: "alimentacao-ia-alimentar",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_ALIMENTACAO_IA"
      },
      {
        title: "Como acompanhar proteínas",
        description: "Veja onde analisar consumo diário e acompanhar sua meta de proteína.",
        duration: "4 min",
        level: "Essencial",
        videoPlaceholder: "alimentacao-acompanhar-proteinas",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_ALIMENTACAO_PROTEINAS"
      }
    ]
  },
  {
    name: "Agenda",
    eyebrow: "Organização diária",
    description: "Domine eventos e lembretes para manter compromissos sob controle.",
    accent: "from-sky-400 via-blue-500 to-violet-500",
    tutorials: [
      {
        title: "Como criar eventos",
        description: "Cadastre compromissos, organize horários e visualize sua rotina com facilidade.",
        duration: "5 min",
        level: "Iniciante",
        videoPlaceholder: "agenda-criar-eventos",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_AGENDA_EVENTOS"
      },
      {
        title: "Como funcionam os lembretes",
        description: "Conheça o comportamento dos alertas e como usá-los para não perder tarefas.",
        duration: "6 min",
        level: "Essencial",
        videoPlaceholder: "agenda-funcionam-lembretes",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_AGENDA_LEMBRETES"
      }
    ]
  },
  {
    name: "Conta e Assinatura",
    eyebrow: "Perfil, segurança e plano",
    description: "Gerencie sua conta, dados pessoais e informações relacionadas ao plano.",
    accent: "from-fuchsia-500 via-violet-500 to-indigo-500",
    tutorials: [
      {
        title: "Como alterar senha",
        description: "Veja as etapas para manter sua conta protegida com uma nova senha.",
        duration: "3 min",
        level: "Rápido",
        videoPlaceholder: "conta-alterar-senha",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_CONTA_SENHA"
      },
      {
        title: "Como atualizar perfil",
        description: "Aprenda a revisar seus dados para personalizar melhor sua experiência.",
        duration: "4 min",
        level: "Iniciante",
        videoPlaceholder: "conta-atualizar-perfil",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_CONTA_PERFIL"
      },
      {
        title: "Como funciona o plano",
        description: "Entenda detalhes da assinatura, acesso à plataforma e próximos passos.",
        duration: "6 min",
        level: "Essencial",
        videoPlaceholder: "conta-funciona-plano",
        youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_CONTA_PLANO"
      }
    ]
  }
];

function PlayIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 shadow-[0_0_30px_rgba(139,92,246,0.45)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-primary">
      <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-white" />
    </span>
  );
}

function VideoModal({ tutorial, onClose }: { tutorial: Tutorial; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-8 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-video-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/30 bg-[#090911] shadow-[0_0_80px_rgba(139,92,246,0.25)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar aula"
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-bold text-white transition hover:border-primary/60 hover:bg-primary/30"
        >
          X
        </button>

        <div className="grid gap-0 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-slate-950 sm:min-h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,0.35),transparent_35%),linear-gradient(135deg,rgba(34,211,238,0.18),rgba(139,92,246,0.12)_45%,rgba(15,23,42,0.9))]" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative z-10 space-y-4 text-center">
              <PlayIcon />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Área preparada para embed</p>
                <p className="mt-2 text-sm text-slate-300">Futuro embed YouTube: {tutorial.youtubeEmbedUrl}</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 border-t border-white/10 p-6 lg:border-l lg:border-t-0">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Assistir aula</p>
              <h2 id="support-video-title" className="text-2xl font-extrabold text-white">
                {tutorial.title}
              </h2>
              <p className="text-sm leading-6 text-slate-300">{tutorial.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-slate-500">Duração</p>
                <p className="font-semibold text-white">{tutorial.duration}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-slate-500">Nível</p>
                <p className="font-semibold text-white">{tutorial.level}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-50">
              Este modal já está estruturado para receber um iframe do YouTube futuramente, sem redirecionar o usuário para fora da plataforma.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuportePage() {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  const totalLessons = useMemo(
    () => tutorialCategories.reduce((total, category) => total + category.tutorials.length, 0),
    []
  );

  return (
    <main className="min-h-screen overflow-hidden pb-20">
      <section className="section-shell relative py-8 md:py-10">
        <nav className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-300 transition hover:text-white">
            ← Voltar para a página inicial
          </Link>
          <a
            href="https://wa.me/5563992393705?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20o%20Gest%C3%A3o%20Pessoal."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-400/20"
          >
            Suporte via WhatsApp
          </a>
        </nav>
      </section>

      <section className="section-shell relative pb-10 pt-4 md:pb-16 md:pt-8">
        <div className="absolute left-1/2 top-8 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[110px] md:h-[440px] md:w-[440px]" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:p-10 lg:p-12">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Central de conhecimento
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight text-glow md:text-6xl">Central de Suporte</h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Aprenda rapidamente como utilizar todas as funções do Gestão Pessoal e aproveite ao máximo a plataforma.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-2xl font-extrabold text-white">{totalLessons}</p>
                  <p className="text-sm text-slate-400">aulas preparadas</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-2xl font-extrabold text-white">5</p>
                  <p className="text-sm text-slate-400">categorias</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-2xl font-extrabold text-white">24/7</p>
                  <p className="text-sm text-slate-400">consulta rápida</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-5 shadow-card backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Trilha sugerida</p>
                  <p className="text-xs text-slate-500">Comece pelos fundamentos</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">Novo</span>
              </div>
              <div className="space-y-3">
                {tutorialCategories.slice(0, 4).map((category, index) => (
                  <div key={category.name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{category.name}</p>
                      <p className="text-xs text-slate-400">{category.tutorials.length} tutoriais disponíveis</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-card md:p-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary/20 to-transparent" />
          <label htmlFor="support-search" className="sr-only">
            Pesquisar ajuda ou tutoriais
          </label>
          <div className="relative flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-slate-300">⌕</span>
            <input
              id="support-search"
              type="search"
              placeholder="Pesquisar ajuda ou tutoriais..."
              className="w-full bg-transparent py-3 text-base text-white outline-none placeholder:text-slate-500"
              aria-label="Pesquisar ajuda ou tutoriais"
            />
          </div>
        </div>
      </section>

      <section className="section-shell space-y-12">
        {tutorialCategories.map((category) => (
          <div key={category.name} className="space-y-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{category.eyebrow}</p>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">{category.name}</h2>
                <p className="max-w-2xl text-sm leading-6 text-slate-400 md:text-base">{category.description}</p>
              </div>
              <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
                {category.tutorials.length} aulas
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {category.tutorials.map((tutorial) => (
                <article
                  key={tutorial.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06] hover:shadow-[0_0_45px_rgba(139,92,246,0.18)]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedTutorial(tutorial)}
                    className="block w-full text-left"
                    aria-label={`Assistir aula: ${tutorial.title}`}
                  >
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-950">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-30 transition duration-300 group-hover:opacity-45`} />
                      <div className="absolute inset-0 grid-pattern opacity-25" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {tutorial.level}
                      </div>
                      <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {tutorial.duration}
                      </div>
                      <PlayIcon />
                    </div>
                    <div className="space-y-4 p-5">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white">{tutorial.title}</h3>
                        <p className="text-sm leading-6 text-slate-400">{tutorial.description}</p>
                      </div>
                      <span className="inline-flex items-center justify-center rounded-xl border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        Assistir aula
                      </span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section-shell pt-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-primary/10 to-cyan-400/10 p-6 text-center shadow-[0_0_70px_rgba(16,185,129,0.12)] md:p-10">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative z-10 mx-auto max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Atendimento humano</p>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Não encontrou sua dúvida?</h2>
            <p className="text-slate-300">Nossa equipe pode ajudar você.</p>
            <a
              href="https://wa.me/5563992393705?text=Ol%C3%A1!%20N%C3%A3o%20encontrei%20minha%20d%C3%BAvida%20na%20Central%20de%20Suporte%20do%20Gest%C3%A3o%20Pessoal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-300/50 bg-emerald-400/20 px-7 py-3 font-bold text-emerald-50 shadow-[0_0_30px_rgba(16,185,129,0.2)] transition hover:-translate-y-0.5 hover:bg-emerald-400/30"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {selectedTutorial ? <VideoModal tutorial={selectedTutorial} onClose={() => setSelectedTutorial(null)} /> : null}
    </main>
  );
}
