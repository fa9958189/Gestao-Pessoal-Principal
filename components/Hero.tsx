"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "./icons";
import AnimatedDashboard from "./AnimatedDashboard";

const stats = [
  { label: "Treinos", value: "GIFs", detail: "divisão muscular e rotina semanal" },
  { label: "Alimentação", value: "Macros", detail: "proteínas, água e metas diárias" },
  { label: "Área Personal", value: "Alunos", detail: "acompanhamento profissional" }
];

export default function Hero() {
  return (
    <section className="section-shell pt-20 md:pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm">
          <SparklesIcon className="w-4 h-4" />
          <span>Plataforma inteligente de treino, alimentação e rotina</span>
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-glow">
            Controle sua evolução em um único sistema
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">
            Organize treinos, alimentação, rotina e acompanhamento de alunos com um painel visual, lembretes automáticos
            e IA para acelerar registros e decisões do dia a dia.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-glow transition hover:-translate-y-0.5"
            href="https://wa.me/5563992393705"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp para conhecer o Gestão Pessoal"
          >
            Quero conhecer o sistema
          </a>
          <div className="flex gap-4 text-sm text-slate-400">
            <div>
              <p className="font-semibold text-slate-100">Treinos completos</p>
              <p>GIFs, divisão muscular e constância</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">IA alimentar</p>
              <p>Scanner, macros e metas nutricionais</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass rounded-xl p-4 shadow-card"
            >
              <p className="text-xs uppercase tracking-[0.1em] text-slate-400">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <AnimatedDashboard />
      </div>
    </section>
  );
}
