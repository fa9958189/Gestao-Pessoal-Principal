"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AISection from "@/components/AISection";
import RemindersSection from "@/components/RemindersSection";
import ResultsSection from "@/components/ResultsSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";

type FinalizarOverlayProps = {
  onClose: () => void;
};

function FinalizarOverlay({ onClose }: FinalizarOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-primary/40 bg-slate-950/90 p-8 text-left shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar etapa de finalização"
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20"
        >
          X
        </button>
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Finalize sua assinatura</p>
            <h2 className="text-3xl font-bold text-white">Finalize sua assinatura</h2>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-slate-200">
            Após finalizar o checkout, volte nesta página e entre em contato com a nossa equipe comercial para liberar o
            seu acesso à plataforma.
          </div>
          <div className="rounded-xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 via-primary/10 to-transparent px-4 py-3 text-sm text-slate-100 shadow-[0_0_18px_rgba(16,185,129,0.15)]">
            <p className="text-base font-semibold text-emerald-200">Quer 7 dias grátis para testar?</p>
            <p className="mt-1 text-slate-200">
              Entre em contato com a nossa equipe comercial antes ou após o checkout para solicitar a liberação do
              período de teste gratuito.
            </p>
          </div>
          <div className="space-y-2 text-sm text-slate-200">
            <p>1) Clique em “Ir para o checkout” e finalize o pagamento.</p>
            <p>2) Após concluir, volte aqui e clique em “Entrar em contato com a equipe comercial”.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                window.location.href = "https://kiwify.app/X4HKTVu";
              }}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-dark font-semibold transition hover:-translate-y-0.5"
            >
              Ir para o checkout
            </button>
            <button
              type="button"
              onClick={() => {
                window.open(
                  "https://wa.me/5563992393705?text=Ol%C3%A1!%20Acabei%20de%20finalizar%20o%20checkout%20do%20Gest%C3%A3o%20Pessoal%20e%20quero%20liberar%20meu%20acesso%20%C3%A0%20plataforma.",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="inline-flex items-center justify-center rounded-xl border border-emerald-400/50 bg-emerald-500/20 px-6 py-3 text-emerald-100 font-semibold transition hover:-translate-y-0.5"
            >
              Entrar em contato com a equipe comercial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <main className="min-h-screen space-y-8 pb-20">
      <Hero />
      <ProblemSection />
      <div id="solucao">
        <SolutionSection />
      </div>
      <AISection />
      <RemindersSection />
      <ResultsSection />
      <PricingSection onOpenOverlay={handleOpenOverlay} />
      <FinalCTA onOpenOverlay={handleOpenOverlay} />
      {isOverlayOpen ? <FinalizarOverlay onClose={handleCloseOverlay} /> : null}
    </main>
  );
}
