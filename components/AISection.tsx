"use client";

import { motion } from "framer-motion";
import { RadarIcon, PlateIcon } from "./icons";

export default function AISection() {
  return (
    <section className="section-shell py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-sm text-primary uppercase tracking-[0.2em]">IA do sistema</p>
          <h2 className="text-3xl font-bold leading-tight">Scanner inteligente para acelerar seu diário alimentar</h2>
          <p className="text-slate-300 text-lg">
            A IA do Gestão Pessoal ajuda a interpretar refeições, estimar calorias e macronutrientes, organizar registros
            e transformar o acompanhamento nutricional em uma experiência mais rápida e visual.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <RadarIcon className="w-5 h-5 text-accent" /> leitura inteligente
            </div>
            <div className="flex items-center gap-2">
              <PlateIcon className="w-5 h-5 text-emerald-400" /> macros e metas
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl border border-accent/30 p-6 shadow-glow"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 via-white/0 to-primary/10 p-6">
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/30 rounded-full blur-3xl" />
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-slate-300">Escaneando refeição</p>
                <h3 className="text-xl font-semibold">Frango + Arroz + Salada</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-accent/20 text-accent font-semibold">IA ativa</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["Proteína", "Calorias", "Macros"].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="rounded-lg bg-white/5 border border-white/10 p-3"
                >
                  <p className="text-xs text-slate-400">{item}</p>
                  <p className="text-lg font-semibold text-white">
                    {idx === 0 ? "38g" : idx === 1 ? "612 kcal" : "P40 C52 G18"}
                  </p>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-primary"
                      initial={{ width: "30%" }}
                      animate={{ width: `${50 + idx * 15}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-200 font-bold">
                  92%
                </div>
                <div>
                  <p className="font-semibold">Meta alimentar monitorada</p>
                  <p className="text-slate-400 text-xs">Proteína registrada, água e macros visíveis para fechar o dia.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                  IA
                </div>
                <div>
                  <p className="font-semibold">Registro mais rápido</p>
                  <p className="text-slate-400 text-xs">Use o scanner para acelerar lançamentos e manter histórico alimentar.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
