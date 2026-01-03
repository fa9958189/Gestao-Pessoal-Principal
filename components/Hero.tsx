"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "./icons";
import AnimatedDashboard from "./AnimatedDashboard";

const stats = [
  { label: "Fluxo de caixa", value: "+R$ 14.200", detail: "últimos 30 dias" },
  { label: "Tarefas concluídas", value: "92%", detail: "rotina sob controle" },
  { label: "Alertas enviados", value: "128", detail: "WhatsApp inteligente" }
];

export default function Hero() {
  return (
    <section className="section-shell pt-20 md:pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm">
          <SparklesIcon className="w-4 h-4" />
          <span>Nova geração de produtividade pessoal</span>
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-glow">
            Controle sua vida em um único sistema
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">
            Organize dinheiro, rotina, treinos e alimentação com um cockpit visual, lembretes automáticos e
            IA que pensa por você.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-glow transition hover:-translate-y-0.5"
            href="https://wa.me/5563992393705"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp para ter controle agora"
          >
            Quero ter controle agora
          </a>
          <div className="flex gap-4 text-sm text-slate-400">
            <div>
              <p className="font-semibold text-slate-100">Integração WhatsApp</p>
              <p>Alertas e interações em tempo real</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">IA nutricional</p>
              <p>Reconhece pratos e monta dieta</p>
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
