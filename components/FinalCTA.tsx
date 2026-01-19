"use client";

import { motion } from "framer-motion";
import { SparklesIcon, WhatsAppIcon } from "./icons";

type FinalCTAProps = {
  onOpenOverlay: () => void;
};

export default function FinalCTA({ onOpenOverlay }: FinalCTAProps) {
  return (
    <section id="cta" className="section-shell py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden glass rounded-2xl p-10 border border-primary/30"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-accent/10 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm font-semibold">
            <SparklesIcon className="w-4 h-4" /> Você a um passo do controle total
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Tome decisões em minutos, não em dias. Ative seu Gestão Pessoal agora.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Um único cockpit para finanças, rotina, treinos e alimentação. Sem contratos, sem fricção, com IA e
            WhatsApp a seu favor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={onOpenOverlay}
              aria-label="Começar agora e abrir a etapa de finalização"
              className="px-8 py-3 rounded-xl bg-white text-dark font-bold text-lg shadow-2xl transition hover:-translate-y-0.5"
            >
              Começar agora
            </button>
            <a
              href="https://wa.me/5563992393705?text=%C3%93l%C3%A1!%20Tenho%20interesse%20no%20Gest%C3%A3o%20Pessoal%20e%20vim%20pelo%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a equipe comercial pelo WhatsApp"
              className="px-8 py-3 rounded-xl bg-emerald-500/20 text-emerald-100 border border-emerald-400/50 font-semibold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition"
            >
              <WhatsAppIcon className="w-5 h-5" /> Falar com a equipe comercial
            </a>
            <a href="#solucao" className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold">
              Ver como funciona
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
