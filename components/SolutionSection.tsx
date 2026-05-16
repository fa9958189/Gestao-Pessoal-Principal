"use client";

import { motion } from "framer-motion";
import { CalendarIcon, DumbbellIcon, MessageIcon, PlateIcon } from "./icons";

const solutions = [
  {
    title: "Treinos completos",
    desc: "Crie rotinas com divisão muscular, exercícios com GIFs, organização semanal, acompanhamento e controle de constância.",
    icon: <DumbbellIcon className="w-7 h-7 text-primary" />
  },
  {
    title: "Alimentação inteligente",
    desc: "Registre refeições, acompanhe proteínas, água e metas nutricionais com diário alimentar e scanner IA.",
    icon: <PlateIcon className="w-7 h-7 text-emerald-400" />
  },
  {
    title: "Rotina com lembretes",
    desc: "Receba alertas automáticos para treinos, hidratação, alimentação e compromissos importantes da rotina.",
    icon: <MessageIcon className="w-7 h-7 text-accent" />
  },
  {
    title: "Área Personal",
    desc: "Organize alunos, visualize informações, gerencie treinos e acompanhe evolução com mais controle profissional.",
    icon: <CalendarIcon className="w-7 h-7" />
  }
];

export default function SolutionSection() {
  return (
    <section className="section-shell py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-primary uppercase tracking-[0.2em]">Solução completa</p>
          <h2 className="text-3xl font-bold">Treino, alimentação e acompanhamento em alta performance</h2>
        </div>
        <div className="hidden md:block text-slate-400 max-w-sm text-sm">
          Um painel central para evoluir com clareza, reduzir tarefas manuais e manter a rotina sempre visível.
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
                <div className="text-xs text-primary/80 uppercase tracking-[0.2em]">Centralizado</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
