"use client";

import { useState } from "react";
import Link from "next/link";

const lessons = [
  {
    id: 1,
    title: "Entendendo como funciona a gestão pessoal de um modo geral.",
    youtubeId: "lMD4jOu4vRQ"
  },
  {
    id: 2,
    title: "Aprendendo a configurar transações",
    youtubeId: "UXeHpHhjgFE"
  },
  {
    id: 3,
    title: "Aprendendo a configurar agenda",
    youtubeId: "V2Qefks1FAA"
  },
  {
    id: 4,
    title: "Aprendendo a configurar a agenda diária",
    youtubeId: "QMcHAHKQL-Q"
  },
  {
    id: 5,
    title: "Aprendendo a configurar a rotina de treino",
    youtubeId: "sIvEAmHfvn0"
  },
  {
    id: 6,
    title: "Aprendendo a configurar diário alimentar",
    youtubeId: "lqSzI_W7wZA"
  }
];

export default function VideoaulasPage() {
  const [openLessonId, setOpenLessonId] = useState<number | null>(null);

  const handleToggleLesson = (lessonId: number) => {
    setOpenLessonId((current) => (current === lessonId ? null : lessonId));
  };

  return (
    <main className="min-h-screen pb-20">
      <section className="section-shell py-16 space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm text-primary uppercase tracking-[0.2em]">Configuração guiada</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Videoaulas de Configuração</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Siga as aulas na ordem para configurar o Gestão Pessoal do jeito certo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold transition hover:-translate-y-0.5"
            >
              Voltar para a página inicial
            </Link>
            <a
              href="https://wa.me/5563992393705?text=%C3%93l%C3%A1!%20Tenho%20interesse%20no%20Gest%C3%A3o%20Pessoal%20e%20vim%20pelo%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500/20 text-emerald-100 border border-emerald-400/50 font-semibold flex items-center justify-center gap-2 transition hover:-translate-y-0.5"
            >
              Falar com a equipe comercial
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {lessons.map((lesson) => {
            const isOpen = openLessonId === lesson.id;
            return (
              <div
                key={lesson.id}
                className="glass rounded-2xl border border-white/10 p-6 space-y-4 shadow-[0_0_20px_rgba(15,23,42,0.3)]"
              >
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Aula {lesson.id}</p>
                  <h2 className="text-xl font-semibold text-white">{lesson.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggleLesson(lesson.id)}
                  aria-expanded={isOpen}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Assistir
                </button>
                {isOpen ? (
                  <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
                      title={`Aula ${lesson.id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
