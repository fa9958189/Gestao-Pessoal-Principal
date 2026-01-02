"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "./icons";

const metrics = [
  { label: "Crescimento financeiro", value: "+28%", detail: "ticket médio em 60 dias" },
  { label: "Constância de treinos", value: "4.6x", detail: "mais sessões concluídas" },
  { label: "Controle de rotina", value: "92%", detail: "tarefas críticas entregues" }
];

export default function ResultsSection() {
  return (
    <section className="section-shell py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-primary uppercase tracking-[0.2em]">Resultados reais</p>
          <h2 className="text-3xl font-bold">Veja o progresso semana a semana</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          Painéis animados mostram constância, evolução de receita, macros batidas e hábitos cumpridos em tempo real.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Gráfico de evolução</h3>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">+12% esta semana</span>
          </div>
          <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/10 to-white/0 rounded-xl relative overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-primary to-accent opacity-60"
              initial={{ clipPath: "polygon(0 100%, 0 100%, 0 100%)" }}
              whileInView={{ clipPath: "polygon(0 80%, 25% 60%, 50% 75%, 75% 50%, 100% 30%)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-16 bg-white/10"
              initial={{ clipPath: "polygon(0 100%, 0 100%, 0 100%)" }}
              whileInView={{ clipPath: "polygon(0 85%, 25% 75%, 50% 80%, 75% 60%, 100% 55%)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-white/5 p-3 border border-white/10">
                <p className="text-xs text-slate-400">{metric.label}</p>
                <p className="text-xl font-bold">{metric.value}</p>
                <p className="text-xs text-slate-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-4">Indicadores de evolução</h3>
          <div className="space-y-4">
            {["Disciplina financeira", "Hidratação", "Sono", "Treino", "Alimentação"].map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item}</p>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: "40%" }}
                      whileInView={{ width: `${65 + idx * 6}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
                <span className="text-sm text-emerald-400 inline-flex items-center gap-1">
                  <CheckIcon className="w-4 h-4" />
                  +{8 + idx * 3}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
