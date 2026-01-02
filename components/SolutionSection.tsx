"use client";

import { motion } from "framer-motion";
import { CalendarIcon, DumbbellIcon, MessageIcon, PlateIcon } from "./icons";

const solutions = [
  {
    title: "Controle Financeiro",
    desc: "Fluxo de caixa, cartões, metas e categorias automáticas com alertas de risco.",
    icon: <CalendarIcon className="w-7 h-7" />
  },
  {
    title: "Agenda com WhatsApp",
    desc: "Confirmação de presença, reagendamento e lembretes automáticos sem esforço.",
    icon: <MessageIcon className="w-7 h-7 text-accent" />
  },
  {
    title: "Rotina de Treino",
    desc: "Planos semanais com acompanhamento de constância e microvitórias diárias.",
    icon: <DumbbellIcon className="w-7 h-7 text-primary" />
  },
  {
    title: "Gestão Alimentar",
    desc: "Cardápios dinâmicos, macros automáticos e feedback do prato em segundos.",
    icon: <PlateIcon className="w-7 h-7 text-emerald-400" />
  }
];

export default function SolutionSection() {
  return (
    <section className="section-shell py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-primary uppercase tracking-[0.2em]">Solução completa</p>
          <h2 className="text-3xl font-bold">Cada área da sua vida em alta performance</h2>
        </div>
        <div className="hidden md:block text-slate-400 max-w-sm text-sm">
          Zero curva de aprendizado. Tudo organizado em cards inteligentes com animações ao passar o mouse.
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ translateY: -6, scale: 1.01 }}
            className="glass rounded-xl p-6 border border-white/10 hover:border-primary/40 hover:shadow-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/5">{solution.icon}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{solution.desc}</p>
                <div className="text-xs text-primary/80 uppercase tracking-[0.2em]">Automatizado</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
