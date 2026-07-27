import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Full-width dark section with rounded top corners */}
      <div className="bg-[#0D1410] rounded-t-3xl border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center relative">
          {/* Subtle background path/line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.04]"
              viewBox="0 0 800 400"
              fill="none"
            >
              <path
                d="M0 200 Q200 100 400 200 Q600 300 800 200"
                stroke="#D4FF3D"
                strokeWidth="1"
              />
              <path
                d="M0 250 Q200 150 400 250 Q600 350 800 250"
                stroke="#D4FF3D"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Lime glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#D4FF3D]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#F5F7F5] mb-6 leading-tight max-w-2xl mx-auto">
              Ready to Automate your Developer Boilerplate?
            </h2>

            <p className="text-[#8A938E] mb-10 max-w-xl mx-auto text-base md:text-lg leading-[1.6]">
              Join the engineering teams reducing MTTR to seconds and reclaiming
              5+ hours a week. Get 2M tokens free on your first month.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
              <Button
                size="lg"
                className="w-full bg-[#D4FF3D] text-[#0A0F0C] hover:bg-[#D4FF3D]/90 rounded-full px-8 h-12 font-semibold shadow-lg shadow-[#D4FF3D]/10 hover:scale-[1.02] active:scale-100 transition-all cursor-pointer"
              >
                Create Free Workspace
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/[0.08] text-[#8A938E] bg-[#151C17] hover:bg-[#151C17]/80 hover:text-[#F5F7F5] hover:border-white/[0.15] rounded-full px-6 h-12 font-medium backdrop-blur-sm transition-all cursor-pointer"
              >
                Talk to Sales
              </Button>
            </div>

            <p className="text-[11px] text-[#8A938E]/60 mt-6 font-mono">
              No credit card required. Free tier includes all core integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
