"use client";

import { motion } from "framer-motion";
import { CheckIcon, WhatsAppIcon } from "./icons";

const STRIPE_LINK_NORMAL = "https://buy.stripe.com/fZu00l3WB99HfIBduNaR200";
const WHATSAPP_COMMERCIAL_LINK =
  "https://wa.me/5563992393705?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Gest%C3%A3o%20Pessoal%20e%20quero%20testar%207%20dias%20gr%C3%A1tis.%20Pode%20me%20ajudar%3F";

const openStripeCheckout = (url: string) => {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
};

const openWhatsAppCommercial = () => {
  window.open(WHATSAPP_COMMERCIAL_LINK, "_blank", "noopener,noreferrer");
};

const normalFeatures = [
  "Criação completa de treinos e rotina semanal",
  "Divisão muscular, exercícios com GIFs e acompanhamento de constância",
  "Diário alimentar com metas, proteínas, água e monitoramento diário",
  "Scanner de alimentos com inteligência artificial",
  "Dashboard visual para centralizar rotina, treino e alimentação",
  "Lembretes automáticos para reduzir esquecimentos",
  "Área Personal para organizar alunos, clientes e treinos",
  "Acompanhamento da evolução para usuários e profissionais",
  "Suporte contínuo e melhorias constantes",
  "Sem contrato e sem fidelidade"
];

const trialHighlights = [
  "7 dias grátis para validar a plataforma antes de assinar",
  "Ativação acompanhada pela equipe comercial no WhatsApp",
  "Acesso ao plano completo, incluindo treinos, alimentação, IA e Área Personal"
];

export default function PricingSection() {
  return (
    <section id="planos" className="section-shell py-16">
      <div className="text-center mb-10 space-y-3">
        <p className="text-sm text-primary uppercase tracking-[0.2em]">Planos e preço</p>
        <h2 className="text-3xl font-bold">Comece com 7 dias grátis e assine quando estiver pronto</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Teste o Gestão Pessoal com acompanhamento da equipe comercial. Depois do período gratuito, mantenha o
          acesso completo para treino, alimentação, IA, rotina e Área Personal por R$ 80,00/mês.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-emerald-400/60 bg-gradient-to-br from-emerald-500/25 via-primary/15 to-accent/10 p-7 shadow-[0_0_35px_rgba(16,185,129,0.22)]"
        >
          <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-emerald-400/30 blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-primary/40 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-sm font-semibold text-emerald-100">
                ✨ Teste grátis em destaque
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Plano de teste</p>
                <h3 className="text-4xl font-extrabold text-white">7 dias grátis</h3>
                <p className="text-slate-200">
                  Fale com a equipe comercial para liberar seu acesso gratuito e validar treinos, alimentação, IA e
                  acompanhamento antes da assinatura mensal.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-100">
                {trialHighlights.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-emerald-300" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={openWhatsAppCommercial}
              aria-label="Falar com a equipe comercial no WhatsApp para testar 7 dias grátis"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-lg font-bold text-slate-950 shadow-2xl transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              <WhatsAppIcon className="h-5 w-5" /> Testar 7 dias grátis
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/25 via-primary/10 to-accent/10 p-7 shadow-glow"
        >
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-28 h-28 bg-accent/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-semibold">
              ✅ Plano completo disponível
            </div>
            <div>
              <p className="text-sm text-slate-300">Assinatura mensal após o período de teste</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold">R$ 80,00</span>
                <span className="text-slate-300 mb-2">/ mês</span>
              </div>
              <p className="text-slate-200 text-sm">
                Plano único com acesso completo à experiência atual do sistema. Cancele quando quiser, sem contrato e sem
                fidelidade.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {normalFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" /> {feature}
                </li>
              ))}
            </ul>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => openStripeCheckout(STRIPE_LINK_NORMAL)}
                aria-label="Garantir acesso completo por 80 reais mensais e abrir a etapa de finalização"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-dark font-semibold shadow-2xl transition hover:-translate-y-0.5"
              >
                Assinar por R$ 80,00
              </button>
              <button
                type="button"
                onClick={openWhatsAppCommercial}
                aria-label="Falar com a equipe comercial pelo WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-500/20 px-5 py-3 text-emerald-100 font-semibold transition hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" /> Falar no WhatsApp
              </button>
            </div>
            <div className="text-xs text-slate-200/80 leading-relaxed">
              Bônus: vídeos + configuração guiada + organização de rotina + automações e lembretes inteligentes.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
