"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Star,
} from "lucide-react";

export function HeroSection() {
  const [logStep, setLogStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogStep((prev) => (prev < 6 ? prev + 1 : 0));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const mockLogs = [
    { time: "20:47:06", type: "info", text: "Webhook received from sentry.io: Alert #1289" },
    { time: "20:47:07", type: "agent", text: "Triggering IncidentResponderAgent..." },
    { time: "20:47:08", type: "agent", text: "Fetching recent commits for PaymentService.ts" },
    { time: "20:47:09", type: "agent", text: "Searching Linear for open bugs related to PaymentService" },
    { time: "20:47:10", type: "agent", text: "Retrieving error frequency from Sentry (last 24h)" },
    { time: "20:47:11", type: "agent", text: "Synthesizing findings and compiling incident report..." },
    { time: "20:47:12", type: "info", text: "Contextualized report posted to #incidents (5.2s)" },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#131A14,transparent)] pointer-events-none" />

      {/* Scattered lime dots */}
      <div className="absolute top-[15%] left-[10%] w-1 h-1 rounded-full bg-[#D4FF3D]/30 animate-glow-pulse pointer-events-none" />
      <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#D4FF3D]/20 animate-glow-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[60%] left-[5%] w-1 h-1 rounded-full bg-[#D4FF3D]/25 animate-glow-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[70%] right-[8%] w-1 h-1 rounded-full bg-[#D4FF3D]/15 animate-glow-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-[45%] left-[20%] w-0.5 h-0.5 rounded-full bg-[#D4FF3D]/40 animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Headline + CTA */}
          <div className="flex flex-col items-start text-left z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-[#8A938E] mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#D4FF3D] animate-pulse" />
              <span>Relay v1.0 — Autonomous Incident Investigation</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-[-0.02em] mb-6 leading-[1.05] text-[#F5F7F5]">
              Your Stack.
              <br />
              Connected.
              <br />
              <span className="text-[#D4FF3D]">Incidents. Investigated.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#8A938E] max-w-xl mb-10 leading-[1.6] font-normal">
              Relay connects your dev stack with autonomous AI agents that detect
              incidents, investigate root causes across tools, and deliver
              contextualized reports — so you can respond in seconds, not minutes.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button className="group flex items-center gap-0 bg-[#D4FF3D] hover:bg-[#D4FF3D]/90 text-[#0A0F0C] rounded-full px-1 py-1 pr-5 h-12 font-semibold text-sm transition-all shadow-lg shadow-[#D4FF3D]/10 cursor-pointer">
                <span className="px-4 py-2">Download</span>
                <span className="w-px h-5 bg-[#0A0F0C]/20 mx-1" />
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
              <span className="text-[#8A938E]">Trusted by software reviews</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D4FF3D] text-[#D4FF3D]"
                  />
                ))}
              </div>
              <span className="font-semibold text-[#F5F7F5]">4.8/5.0</span>
            </div>
          </div>

          {/* Right: Floating Code Panel + Dropdown */}
          <div className="relative z-10 hidden lg:block">
            {/* Main code editor panel */}
            <div className="relative rounded-2xl bg-[#0D1410] border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              {/* Top border glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4FF3D]/30 to-transparent" />

              {/* Tab bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F0C] border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/40" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <span className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex items-center gap-1 ml-4 text-xs font-mono">
                  <span className="px-3 py-1 rounded-md bg-white/[0.06] text-[#F5F7F5]">
                    agent_responder.log
                  </span>
                  <span className="px-3 py-1 rounded-md text-[#8A938E] hover:text-[#F5F7F5] cursor-pointer">
                    incident_report.json
                  </span>
                </div>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[280px]">
                {mockLogs.slice(0, logStep + 1).map((log, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                  >
                    <span className="text-[#8A938E]/60 select-none shrink-0">
                      [{log.time}]
                    </span>
                    {log.type === "info" ? (
                      <span className="text-[#7DA6F5] font-semibold shrink-0">
                        [sys]
                      </span>
                    ) : (
                      <span className="text-[#D4FF3D] font-semibold shrink-0">
                        [ai]
                      </span>
                    )}
                    <span className="text-[#D4D8D5] break-all">{log.text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[#8A938E]/60 select-none">
                    [{mockLogs[logStep === 6 ? 6 : logStep].time}]
                  </span>
                  <span className="h-4 w-1.5 bg-[#D4FF3D] animate-cursor-blink" />
                </div>
              </div>
            </div>

            {/* Overlapping dropdown/autocomplete card */}
            <div className="absolute -bottom-6 -left-8 w-72 rounded-xl bg-[#151C17] border border-white/[0.08] shadow-xl shadow-black/30 p-3 rotate-[2deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0D1410] border border-white/[0.06] mb-2">
                <span className="text-[11px] text-[#8A938E] font-mono">
                  relay workflow create
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#D4FF3D]/10 border border-[#D4FF3D]/20">
                  <span className="text-xs text-[#D4FF3D] font-mono">
                    sentry-handler.json
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white/[0.04] cursor-pointer">
                  <span className="text-xs text-[#8A938E] font-mono">
                    slack-notifier.json
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white/[0.04] cursor-pointer">
                  <span className="text-xs text-[#8A938E] font-mono">
                    jira-sync.json
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
