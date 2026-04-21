"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "./icons";

const STRIPE_LINK_PROMO = "https://buy.stripe.com/6oUbJ350F5Xv7c51M5aR201";
const STRIPE_LINK_NORMAL = "https://buy.stripe.com/fZu00l3WB99HfIBduNaR200";

const openStripeCheckout = (url: string) => {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
};

const promoFeatures = [
  "Painel financeiro inteligente com controle total do seu dinheiro",
  "Agenda integrada com lembretes automáticos no WhatsApp",
  "Planejamento completo de treinos semanais",
  "Controle alimentar com acompanhamento de metas",
  "Scanner de alimentos com inteligência artificial",
  "Relatórios de evolução (financeiro, físico e rotina)",
  "Lembretes automáticos diários para manter disciplina",
  "Organização total da sua rotina em um só lugar",
  "Sem contrato e sem fidelidade"
];

const normalFeatures = [
  "Sistema completo de gestão pessoal",
  "Controle financeiro detalhado com relatórios avançados",
  "Planejamento de treinos com acompanhamento de evolução",
  "Gestão alimentar com metas e monitoramento diário",
  "Scanner de alimentos com inteligência artificial",
  "Agenda inteligente com integração WhatsApp",
  "Relatórios completos de desempenho",
  "Organização total da sua vida em um único sistema",
  "Suporte contínuo e melhorias constantes",
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

      <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/25 via-primary/10 to-accent/10 p-7 shadow-glow md:scale-[1.02]"
        >
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-28 h-28 bg-accent/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-semibold">
              🔥 Mais escolhido pelos usuários
            </div>
            <div>
              <p className="text-sm text-slate-300">Acesso completo com desconto especial por tempo limitado</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold">R$ 49,90</span>
                <span className="text-slate-300 mb-2">/ mês</span>
              </div>
              <p className="text-slate-200 text-sm">
                ⚠️ Oferta promocional válida por 3 meses. Após esse período, o plano será ajustado automaticamente
                para o valor normal.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {promoFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" /> {feature}
                </li>
              ))}
            </ul>
            <div>
              <button
                type="button"
                onClick={() => openStripeCheckout(STRIPE_LINK_PROMO)}
                aria-label="Garantir acesso promocional e abrir a etapa de finalização"
                className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-white text-dark font-semibold text-lg shadow-2xl transition hover:-translate-y-0.5"
              >
                Garantir plano promocional
              </button>
            </div>
            <div className="text-xs text-slate-200/80 leading-relaxed">
              Bônus: vídeos + configuração guiada + templates de rotina + automações prontas no WhatsApp.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 p-7"
        >
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-28 h-28 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div>
              <p className="text-sm text-slate-300">Plano completo sem desconto promocional</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold">R$ 80,00</span>
                <span className="text-slate-300 mb-2">/ mês</span>
              </div>
              <p className="text-slate-200 text-sm">Assinatura mensal por R$ 80,00. Cancele quando quiser, sem fidelidade.</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {normalFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" /> {feature}
                </li>
              ))}
            </ul>
            <div>
              <button
                type="button"
                onClick={() => openStripeCheckout(STRIPE_LINK_NORMAL)}
                aria-label="Garantir acesso completo e abrir a etapa de finalização"
                className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-white text-dark font-semibold text-lg shadow-2xl transition hover:-translate-y-0.5"
              >
                Garantir plano normal
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
