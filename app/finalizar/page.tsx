export default function FinalizarPage() {
  return (
    <main className="min-h-screen pb-20">
      <section className="section-shell py-20">
        <div className="relative overflow-hidden glass rounded-2xl p-10 border border-primary/30 shadow-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-accent/10" />
          <div className="relative z-10 space-y-6 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold">Finalize sua assinatura</h1>
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-primary/10 px-6 py-4 text-slate-100 shadow-glow">
              <p className="text-base md:text-lg font-semibold">
                Após finalizar o checkout, volte nesta página e entre em contato com a nossa equipe comercial
                para liberar o seu acesso à plataforma.
              </p>
            </div>
            <p className="text-sm md:text-base text-slate-300 whitespace-pre-line">
              1) Clique em "Ir para o checkout" e finalize o pagamento.{"\n"}2) Após concluir, volte aqui e
              clique em "Entrar em contato com a equipe comercial".
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://kiwify.app/X4HKTVu"
                aria-label="Ir para o checkout da Kiwify"
                className="px-8 py-3 rounded-xl bg-white text-dark font-bold text-lg shadow-2xl transition hover:-translate-y-0.5"
              >
                Ir para o checkout
              </a>
              <a
                href="https://wa.me/5563992393705?text=Ol%C3%A1!%20Acabei%20de%20finalizar%20o%20checkout%20do%20Gest%C3%A3o%20Pessoal%20e%20quero%20liberar%20meu%20acesso%20%C3%A0%20plataforma."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato com a equipe comercial pelo WhatsApp"
                className="px-8 py-3 rounded-xl bg-emerald-500/20 text-emerald-100 border border-emerald-400/50 font-semibold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition"
              >
                Entrar em contato com a equipe comercial
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
