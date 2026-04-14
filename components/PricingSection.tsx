"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "./icons";

const features = [
  "Painel financeiro e metas",
  "Agenda com WhatsApp",
  "IA nutricional",
  "Rotina de treinos e hábitos",
  "Lembretes automáticos",
  "Vídeos de configuração e automação (passo a passo)",
  "Sem contrato e sem fidelidade"
];

type PricingSectionProps = {
  onOpenOverlay: () => void;
};

export default function PricingSection({ onOpenOverlay }: PricingSectionProps) {
  return (
    <section id="planos" className="section-shell py-16">
      <div className="text-center mb-10 space-y-3">
        <p className="text-sm text-primary uppercase tracking-[0.2em]">Planos e preço</p>
        <h2 className="text-3xl font-bold">Escolha seu acesso e comece agora</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Oferta de lançamento: plano completo com IA, lembretes e integrações. Cancelamento livre, sem letras
          miúdas.
        </p>
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/25 via-primary/10 to-accent/10 p-7 shadow-glow"
        >
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-28 h-28 bg-accent/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-semibold">
              Oferta de lançamento
            </div>
            <div>
              <p className="text-sm text-slate-300">Acesso completo com IA, lembretes e integrações</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold">R$ 80,00</span>
                <span className="text-slate-300 mb-2">/ mês</span>
              </div>
              <p className="text-slate-200 text-sm">
                Assinatura mensal por R$ 80,00. Cancele quando quiser, sem fidelidade.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" /> {feature}
                </li>
              ))}
            </ul>
            <div>
              <button
                type="button"
                onClick={onOpenOverlay}
                aria-label="Garantir acesso e abrir a etapa de finalização"
                className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-white text-dark font-semibold text-lg shadow-2xl transition hover:-translate-y-0.5"
              >
                Garantir meu acesso
              </button>
            </div>
            <div className="text-xs text-slate-200/80 leading-relaxed">
              Bônus: vídeos + configuração guiada + templates de rotina + automações prontas no WhatsApp.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
