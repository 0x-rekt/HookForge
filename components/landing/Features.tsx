import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BrainCircuit,
  Workflow,
  MessageSquareCode,
  BugPlay,
  Check,
  AlertCircle,
  Send,
  ArrowRight,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-[#F5F7F5] mb-5">
          Engineered for Modern Developers
        </h2>
        <p className="text-[#8A938E] max-w-2xl text-base md:text-lg leading-[1.6]">
          We combined deterministic rule engines with autonomous ReAct-style LLM
          agents to handle everything from ticket syncing to auto-rollback root
          cause investigations.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
        {/* Card 1: Agentic Incident Responder */}
        <Card className="bg-[#151C17] border-white/[0.08] hover:border-[#D4FF3D]/40 hover:shadow-[#D4FF3D]/5 hover:shadow-2xl transition-all duration-300 md:col-span-2 flex flex-col justify-between group overflow-hidden rounded-xl">
          <div className="p-7 pb-4">
            <CardHeader className="p-0">
              <div className="w-11 h-11 rounded-lg bg-[#D4FF3D]/10 flex items-center justify-center mb-5 border border-[#D4FF3D]/20 group-hover:bg-[#D4FF3D]/20 transition-all duration-300">
                <BrainCircuit className="w-5.5 h-5.5 text-[#D4FF3D]" />
              </div>
              <CardTitle className="text-xl text-[#F5F7F5] font-semibold mb-3">
                Agentic Incident Responder
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-[#8A938E] text-[15px] leading-[1.6] max-w-xl">
                When Sentry fires, Relay&apos;s AI autonomously investigates
                GitHub commits and Jira issues, synthesizing a root cause
                hypothesis and delivering a contextualized incident report
                before you even open Slack.
              </CardDescription>
            </CardContent>
          </div>

          {/* Card 1 Mockup */}
          <div className="px-7 pb-7 pt-3">
            <div className="rounded-xl border border-white/[0.06] bg-[#0D1410] p-4 font-mono text-xs text-[#8A938E] space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-red-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  CRITICAL: Sentry Alert #839
                </span>
                <span className="text-[#8A938E]/60">payment_svc</span>
              </div>
              <div className="space-y-1.5">
                <p className="text-[#D4D8D5]">
                  TypeError: Cannot read properties of null (reading
                  &apos;amount&apos;)
                </p>
                <p className="text-[#8A938E]">
                  &rarr; Scanning recent commits by{" "}
                  <span className="text-[#7DA6F5]">@developer-x</span>...
                </p>
                <p className="text-[#D4FF3D]/90 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Identified bug in checkout.ts:L98 (missing null check)
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 2: Natural Language Builder */}
        <Card className="bg-[#151C17] border-white/[0.08] hover:border-[#D4FF3D]/40 hover:shadow-[#D4FF3D]/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden rounded-xl">
          <div className="p-7 pb-4">
            <CardHeader className="p-0">
              <div className="w-11 h-11 rounded-lg bg-[#D4FF3D]/10 flex items-center justify-center mb-5 border border-[#D4FF3D]/20 group-hover:bg-[#D4FF3D]/20 transition-all duration-300">
                <MessageSquareCode className="w-5.5 h-5.5 text-[#D4FF3D]" />
              </div>
              <CardTitle className="text-xl text-[#F5F7F5] font-semibold mb-3">
                Natural Language Builder
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-[#8A938E] text-[15px] leading-[1.6]">
                Describe your automation flows in plain English. Our AI
                generates, type-checks, and deploys the JSON configurations
                instantly.
              </CardDescription>
            </CardContent>
          </div>

          {/* Card 2 Mockup */}
          <div className="px-7 pb-7 pt-3">
            <div className="rounded-xl border border-white/[0.06] bg-[#0D1410] p-4 space-y-3">
              <div className="flex items-center gap-2 rounded-lg bg-[#151C17] px-3 py-2 border border-white/[0.06]">
                <span className="text-[11px] text-[#8A938E] font-medium line-clamp-1 italic">
                  &quot;Sync Github issues to Jira...&quot;
                </span>
                <Send className="w-3.5 h-3.5 text-[#D4FF3D] shrink-0 ml-auto" />
              </div>
              <div className="rounded border border-white/[0.06] bg-[#0A0F0C] p-2 font-mono text-[10px] text-[#8A938E] overflow-x-auto">
                <span className="text-[#C792EA]">&quot;trigger&quot;</span>:{" "}
                <span className="text-[#B4E667]">&quot;github.issue_opened&quot;</span>,
                <br />
                <span className="text-[#C792EA]">&quot;action&quot;</span>:{" "}
                <span className="text-[#B4E667]">&quot;jira.create_ticket&quot;</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 3: Deterministic Workflows */}
        <Card className="bg-[#151C17] border-white/[0.08] hover:border-[#D4FF3D]/40 hover:shadow-[#D4FF3D]/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden rounded-xl">
          <div className="p-7 pb-4">
            <CardHeader className="p-0">
              <div className="w-11 h-11 rounded-lg bg-[#D4FF3D]/10 flex items-center justify-center mb-5 border border-[#D4FF3D]/20 group-hover:bg-[#D4FF3D]/20 transition-all duration-300">
                <Workflow className="w-5.5 h-5.5 text-[#D4FF3D]" />
              </div>
              <CardTitle className="text-xl text-[#F5F7F5] font-semibold mb-3">
                Deterministic Workflows
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-[#8A938E] text-[15px] leading-[1.6]">
                At-least-once delivery guarantees, exponential backoff, and
                idempotency built-in for mission-critical webhook automations.
              </CardDescription>
            </CardContent>
          </div>

          {/* Card 3 Mockup */}
          <div className="px-7 pb-7 pt-3">
            <div className="flex items-center justify-between gap-2 bg-[#0D1410] border border-white/[0.06] rounded-xl p-4 font-mono text-xs">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-[#8A938E] mb-1">Trigger</span>
                <span className="px-2 py-1 bg-[#7DA6F5]/10 text-[#7DA6F5] border border-[#7DA6F5]/20 rounded-md font-semibold text-[11px]">
                  Webhook
                </span>
              </div>
              <div className="h-px bg-white/[0.08] flex-1 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D4FF3D] animate-pulse" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-[#8A938E] mb-1">Retry</span>
                <span className="px-2 py-1 bg-[#C792EA]/10 text-[#C792EA] border border-[#C792EA]/20 rounded-md text-[11px]">
                  Backoff 3s
                </span>
              </div>
              <div className="h-px bg-white/[0.08] flex-1" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-[#8A938E] mb-1">Status</span>
                <span className="px-2 py-1 bg-[#D4FF3D]/10 text-[#D4FF3D] border border-[#D4FF3D]/20 rounded-md text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#D4FF3D] rounded-full" />
                  200 OK
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 4: AI Execution Debugger */}
        <Card className="bg-[#151C17] border-[#D4FF3D]/40 shadow-[#D4FF3D]/5 shadow-lg md:col-span-2 flex flex-col justify-between group overflow-hidden rounded-xl ring-1 ring-[#D4FF3D]/20">
          <div className="p-7 pb-4">
            <CardHeader className="p-0">
              <div className="w-11 h-11 rounded-lg bg-[#D4FF3D]/10 flex items-center justify-center mb-5 border border-[#D4FF3D]/30 bg-[#D4FF3D]/20">
                <BugPlay className="w-5.5 h-5.5 text-[#D4FF3D]" />
              </div>
              <CardTitle className="text-xl text-[#F5F7F5] font-semibold mb-3">
                AI Execution Debugger
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-[#8A938E] text-[15px] leading-[1.6] max-w-xl">
                Failed workflow execution? Get clear, plain-English explanations
                identifying whether the issue lies in user input errors, API rate
                limits, or downstream platform outages.
              </CardDescription>
            </CardContent>
          </div>

          {/* Card 4 Mockup */}
          <div className="px-7 pb-7 pt-3">
            <div className="rounded-xl border border-white/[0.06] bg-[#0D1410] p-4 font-mono text-xs flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-1.5 border-b md:border-b-0 md:border-r border-white/[0.06] pb-3 md:pb-0 md:pr-4">
                <p className="text-red-400 font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Execution Failed: Step 2
                </p>
                <p className="text-[#8A938E]/60 text-[11px]">
                  POST https://api.linear.app/v1/issues
                </p>
                <p className="text-[#C792EA]/90 font-medium">
                  Status code: 401 Unauthorized
                </p>
              </div>
              <div className="flex-1 bg-[#151C17] p-3 rounded-lg border border-white/[0.06]">
                <span className="text-[10px] text-[#D4FF3D] font-semibold uppercase tracking-wider block mb-1">
                  Relay Debug Assistant
                </span>
                <p className="text-[#D4D8D5] text-[11px] leading-relaxed">
                  &quot;The API key provided for Linear has expired or is
                  invalid. Regenerate the token in Linear settings and update
                  your credentials in Relay secrets.&quot;
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* View link */}
      <div className="flex justify-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D4FF3D] hover:text-[#D4FF3D]/80 transition-colors group"
        >
          View all features
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
