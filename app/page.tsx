import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AISection from "@/components/AISection";
import RemindersSection from "@/components/RemindersSection";
import ResultsSection from "@/components/ResultsSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
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
      <PricingSection />
      <FinalCTA />
    </main>
  );
}
