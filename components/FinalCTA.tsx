"use client";

import { motion } from "framer-motion";
import { SparklesIcon, WhatsAppIcon } from "./icons";

type FinalCTAProps = {
  onOpenOverlay: () => void;
};

export default function FinalCTA({ onOpenOverlay }: FinalCTAProps) {
  void onOpenOverlay;

  return (
    <section id="cta" className="section-shell py-20 md:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-slate-950/70 px-5 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-8 sm:py-12 md:px-12 lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.24),transparent_32%),radial-gradient(circle_at_82%_15%,rgba(34,211,238,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_42%,rgba(139,92,246,0.08))] pointer-events-none" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent pointer-events-none" />
        <div className="absolute -left-20 bottom-8 h-44 w-44 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_72%)] pointer-events-none" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 sm:gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-[0_0_24px_rgba(139,92,246,0.16)] sm:text-sm sm:normal-case sm:tracking-normal">
            <SparklesIcon className="h-4 w-4" /> Você a um passo do controle total
          </div>

          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Tome decisões em minutos, não em dias. Ative seu Gestão Pessoal agora.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Um único cockpit para finanças, rotina, treinos e alimentação. Sem contratos, sem fricção, com IA e
              WhatsApp a seu favor.
            </p>
          </div>

          <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="https://wa.me/5563992393705?text=%C3%93l%C3%A1!%20Tenho%20interesse%20no%20Gest%C3%A3o%20Pessoal%20e%20vim%20pelo%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a equipe comercial pelo WhatsApp"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary px-6 py-3 font-bold text-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-slate-950 hover:shadow-[0_0_26px_rgba(139,92,246,0.35)] focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-slate-950 sm:px-7"
            >
              <WhatsAppIcon className="h-5 w-5" /> Falar com a equipe comercial
            </a>
            <a
              href="#solucao"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950 sm:px-7"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
