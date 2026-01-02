"use client";

import { motion } from "framer-motion";
import { FireIcon } from "./icons";

const problems = [
  {
    title: "Dinheiro escapando",
    desc: "Boletos atrasados, cartões sem controle e zero visibilidade do fluxo de caixa.",
    highlight: "-32%" 
  },
  {
    title: "Rotina bagunçada",
    desc: "Compromissos, entregas e hábitos se perdem entre notificações e anotações soltas.",
    highlight: "8 apps" 
  },
  {
    title: "Treino abandonado",
    desc: "Sem lembretes, sem feedback e sem métricas. Resultado: abandono e frustração.",
    highlight: "0 constância"
  }
];

export default function ProblemSection() {
  return (
    <section className="section-shell py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass rounded-xl p-5 border border-red-500/20 bg-gradient-to-br from-red-600/10 to-black/20"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white">{problem.title}</h3>
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <FireIcon className="w-4 h-4" /> {problem.highlight}
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{problem.desc}</p>
            <div className="mt-4 text-xs uppercase tracking-wide text-red-300/80">Caos identificado</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
