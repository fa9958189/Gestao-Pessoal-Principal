"use client";

import { motion } from "framer-motion";
import { CheckIcon, LightningIcon, MessageIcon } from "./icons";

const panelVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const notifications = [
  {
    name: "WhatsApp - Treino",
    message: "Seu treino de peito começa às 18h. Confirma presença?",
    time: "agora"
  },
  {
    name: "Agenda - Nutrição",
    message: "Reunião de ajustes do cardápio amanhã às 9h.",
    time: "2 dias antes"
  }
];

export default function AnimatedDashboard() {
  return (
    <div className="relative">
      <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-6 bottom-0 w-24 h-24 rounded-full bg-accent/30 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass grid-pattern shadow-2xl rounded-2xl p-5 border border-white/5"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-slate-400">Painel inteligente</p>
            <h3 className="text-xl font-bold">Gestão Pessoal</h3>
          </div>
          <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-semibold">Ao vivo</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Saldo e metas", value: "R$ 18.450" },
            { label: "Rotina concluída", value: "92%" },
            { label: "Calorias hoje", value: "1.460" }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={panelVariants}
              initial="hidden"
              animate="show"
              custom={i}
              className="rounded-xl bg-gradient-to-br from-white/5 via-white/0 to-primary/5 border border-white/5 p-3"
            >
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="text-xl font-bold">{item.value}</p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 mt-1">
                <CheckIcon className="w-3 h-3" /> progresso em alta
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <motion.div
            className="rounded-xl bg-gradient-to-r from-primary/30 to-primary/10 p-4 border border-white/10"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white font-semibold">Fluxo financeiro</p>
                <p className="text-slate-300 text-sm">Receitas, despesas e metas automáticas.</p>
              </div>
              <LightningIcon className="w-10 h-10 text-white" />
            </div>
            <div className="mt-3 h-20 bg-white/10 rounded-lg overflow-hidden">
              <motion.div
                className="h-full bg-accent/60"
                initial={{ width: "45%" }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className="text-xs text-slate-300 mt-2">Meta mensal alcançada em 78%.</p>
          </motion.div>
          <motion.div
            className="rounded-xl bg-gradient-to-r from-accent/20 to-white/0 p-4 border border-white/10"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp 24/7</p>
                <p className="text-slate-300 text-sm">Alertas, confirmações e lembretes automáticos.</p>
              </div>
              <MessageIcon className="w-8 h-8 text-accent" />
            </div>
            <div className="mt-4 space-y-3">
              {notifications.map((notification, i) => (
                <motion.div
                  key={notification.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">{notification.name}</p>
                    <span className="text-xs text-slate-400">{notification.time}</span>
                  </div>
                  <p className="text-sm text-slate-200">{notification.message}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
