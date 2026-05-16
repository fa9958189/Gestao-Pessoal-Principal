"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Tutorial = {
  id: number;
  title: string;
  description: string;
  duration: string;
  youtubeEmbedUrl: string;
  videoUrl?: string;
};

type TutorialCategory = {
  name: string;
  step: string;
  eyebrow: string;
  accent: string;
  tutorial: Tutorial;
};

const tutorialCategories: TutorialCategory[] = [
  {
    name: "Usuário",
    step: "1️⃣",
    eyebrow: "Gestão de acesso",
    accent: "from-cyan-400 via-violet-500 to-emerald-400",
    tutorial: {
      id: 1,
      title: "Usuário",
      description:
        "Aprenda a cadastrar, editar e gerenciar usuários dentro da plataforma de forma rápida e organizada.",
      duration: "5 min",
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_USUARIO",
      videoUrl: "https://youtu.be/mr4EY2viapU",
    },
  },
  {
    name: "Transações",
    step: "2️⃣",
    eyebrow: "Movimentações e registros",
    accent: "from-amber-400 via-orange-500 to-cyan-400",
    tutorial: {
      id: 2,
      title: "Transações",
      description:
        "Veja o tutorial principal para cadastrar, revisar e manter suas transações sempre atualizadas.",
      duration: "6 min",
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_TRANSACOES",
      videoUrl: "https://youtu.be/NwOJ_nVuyJM",
    },
  },
  {
    name: "Agenda",
    step: "3️⃣",
    eyebrow: "Organização diária",
    accent: "from-sky-400 via-blue-500 to-violet-500",
    tutorial: {
      id: 3,
      title: "Agenda",
      description:
        "Aprenda a organizar horários, compromissos e visualizações da agenda para manter sua rotina sob controle.",
      duration: "5 min",
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_AGENDA",
      videoUrl: "https://youtu.be/yhz2E--buL0",
    },
  },
  {
    name: "Treino",
    step: "4️⃣",
    eyebrow: "Rotina e performance",
    accent: "from-emerald-400 via-cyan-400 to-violet-500",
    tutorial: {
      id: 4,
      title: "Treino",
      description:
        "Veja como criar e acompanhar treinos de forma simples, com foco em organização e progresso.",
      duration: "6 min",
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_TREINO",
      videoUrl: "https://youtu.be/e6mysevG_-g",
    },
  },
  {
    name: "Alimentação",
    step: "5️⃣",
    eyebrow: "Nutrição inteligente",
    accent: "from-orange-400 via-rose-400 to-violet-500",
    tutorial: {
      id: 5,
      title: "Alimentação",
      description:
        "Aprenda o fluxo principal para registrar refeições e consultar dados alimentares sem etapas desnecessárias.",
      duration: "5 min",
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_ALIMENTACAO",
      videoUrl: "https://youtu.be/xniL6Of4Kto",
    },
  },
  {
    name: "Relatório Geral",
    step: "6️⃣",
    eyebrow: "Visão consolidada",
    accent: "from-violet-500 via-fuchsia-500 to-cyan-400",
    tutorial: {
      id: 6,
      title: "Relatório Geral",
      description:
        "Entenda como visualizar indicadores consolidados e transformar os dados da plataforma em decisões rápidas.",
      duration: "7 min",
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_RELATORIO_GERAL",
      videoUrl: "https://youtu.be/hmocbENCZxA",
    },
  },
  {
    name: "Personal",
    step: "7️⃣",
    eyebrow: "Acompanhamento profissional",
    accent: "from-cyan-400 via-primary to-fuchsia-500",
    tutorial: {
      id: 7,
      title: "Personal",
      description:
        "Conheça o tutorial principal para acompanhar alunos, organizar atendimentos e centralizar informações do personal.",
      duration: "6 min",
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_PERSONAL",
    },
  },
];

function PlayIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 shadow-[0_0_30px_rgba(139,92,246,0.45)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-primary">
      <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-white" />
    </span>
  );
}

function MoneyIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 shadow-[0_0_30px_rgba(139,92,246,0.45)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-primary">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 7.75h15a1.75 1.75 0 0 1 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-15a1.75 1.75 0 0 1-1.75-1.75v-8A1.75 1.75 0 0 1 4.5 7.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 7.75V6.5A1.75 1.75 0 0 1 8.75 4.75h10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6.75 13.5h.01M17.25 13.5h.01"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function VideoModal({
  tutorial,
  onClose,
}: {
  tutorial: Tutorial;
  onClose: () => void;
}) {
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
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  Área preparada para embed
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Futuro embed YouTube: {tutorial.youtubeEmbedUrl}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5 border-t border-white/10 p-6 lg:border-l lg:border-t-0">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Assistir aula
              </p>
              <h2
                id="support-video-title"
                className="text-2xl font-extrabold text-white"
              >
                {tutorial.title}
              </h2>
              <p className="text-sm leading-6 text-slate-300">
                {tutorial.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
              <p className="text-slate-500">Tempo estimado</p>
              <p className="font-semibold text-white">{tutorial.duration}</p>
            </div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-50">
              Este modal já está estruturado para receber um iframe do YouTube
              futuramente, sem redirecionar o usuário para fora da plataforma.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuportePage() {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(
    null,
  );

  const totalCategories = tutorialCategories.length;
  const totalTutorials = tutorialCategories.length;

  const handleWatchTutorial = (tutorial: Tutorial) => {
    if (tutorial.videoUrl) {
      const videoLink = document.createElement("a");
      videoLink.href = tutorial.videoUrl;
      videoLink.target = "_blank";
      videoLink.rel = "noopener noreferrer";
      videoLink.click();
      return;
    }

    setSelectedTutorial(tutorial);
  };

  return (
    <main className="min-h-screen overflow-hidden pb-20">
      <section className="section-shell relative py-8 md:py-10">
        <nav className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-300 transition hover:text-white"
          >
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
                <h1 className="text-4xl font-extrabold leading-tight text-glow md:text-6xl">
                  Central de Suporte
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Aprenda rapidamente como utilizar todas as funções do Gestão
                  Pessoal e aproveite ao máximo a plataforma.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-2xl font-extrabold text-white">
                    {totalTutorials}
                  </p>
                  <p className="text-sm text-slate-400">tutoriais</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-2xl font-extrabold text-white">
                    {totalCategories}
                  </p>
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
                  <p className="text-sm font-semibold text-white">
                    Trilha sugerida
                  </p>
                  <p className="text-xs text-slate-500">
                    Comece pelos fundamentos
                  </p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Novo
                </span>
              </div>
              <div className="space-y-3">
                {tutorialCategories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/15 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,92,246,0.28)]">
                      {category.step}
                    </span>
                    <div>
                      <p className="font-semibold text-white">
                        {category.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        1 tutorial principal
                      </p>
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
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-slate-300">
              ⌕
            </span>
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

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {tutorialCategories.map((category) => (
            <article
              key={category.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06] hover:shadow-[0_0_45px_rgba(139,92,246,0.18)]"
            >
              <button
                type="button"
                onClick={() => handleWatchTutorial(category.tutorial)}
                className="block h-full w-full text-left"
                aria-label={`Assistir aula: ${category.tutorial.title}`}
              >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-slate-950">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-30 transition duration-300 group-hover:opacity-45`}
                  />
                  <div className="absolute inset-0 grid-pattern opacity-25" />
                  <div className="absolute left-4 top-4 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-sm font-bold text-white shadow-[0_0_26px_rgba(139,92,246,0.35)] backdrop-blur-md">
                    {category.step}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {category.tutorial.duration}
                  </div>
                  {category.name === "Transações" ? (
                    <MoneyIcon />
                  ) : (
                    <PlayIcon />
                  )}
                </div>
                <div className="space-y-4 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    {category.eyebrow}
                  </p>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold text-white">
                      {category.tutorial.title}
                    </h2>
                    <p className="text-sm leading-6 text-slate-400">
                      {category.tutorial.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-xl border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      Assistir aula
                    </span>
                    <span className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-300">
                      {category.tutorial.duration} estimados
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-primary/10 to-cyan-400/10 p-6 text-center shadow-[0_0_70px_rgba(16,185,129,0.12)] md:p-10">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative z-10 mx-auto max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
              Atendimento humano
            </p>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Não encontrou sua dúvida?
            </h2>
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

      {selectedTutorial ? (
        <VideoModal
          tutorial={selectedTutorial}
          onClose={() => setSelectedTutorial(null)}
        />
      ) : null}
    </main>
  );
}
