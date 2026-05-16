"use client";

import { motion } from "framer-motion";
import { CalendarIcon, MessageIcon } from "./icons";

const reminders = [
  {
    title: "Treino programado",
    timing: "No dia e no horário",
    desc: "Alertas para abrir a ficha, seguir a rotina semanal e manter constância nos treinos.",
    accent: "#8B5CF6"
  },
  {
    title: "Água e alimentação",
    timing: "Durante o dia",
    desc: "Lembretes para hidratação, refeições, proteína e metas nutricionais importantes.",
    accent: "#22D3EE"
  },
  {
    title: "Acompanhamento Personal",
    timing: "Rotina de alunos",
    desc: "Organização para visualizar alunos, acompanhar evolução e manter treinos sob controle.",
    accent: "#22c55e"
  }
];

export default function RemindersSection() {
  return (
    <section className="section-shell py-16">
      <div className="flex items-center gap-3 mb-6">
        <CalendarIcon className="w-6 h-6 text-primary" />
        <div>
          <p className="text-sm text-primary uppercase tracking-[0.2em]">Lembretes inteligentes</p>
          <h2 className="text-3xl font-bold">Rotina em movimento com alertas automáticos</h2>
        </div>
      </div>
      <div className="space-y-6">
        {reminders.map((reminder, index) => (
          <motion.div
            key={reminder.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center gap-4"
          >
            <div
              className="w-full md:w-1/3 p-4 rounded-xl glass border border-white/10"
              style={{ boxShadow: `0 10px 30px ${reminder.accent}30` }}
            >
              <p className="text-xs text-slate-400">{reminder.timing}</p>
              <h3 className="text-xl font-semibold">{reminder.title}</h3>
              <p className="text-slate-300 text-sm">{reminder.desc}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              className="flex-1 grid md:grid-cols-3 gap-3"
            >
              {["Alerta enviado", "Ação registrada", "Evolução visível"].map((text) => (
                <div key={text} className="glass rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MessageIcon className="w-4 h-4 text-accent" />
                    {text}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Automação para reduzir esquecimentos.</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
