"use client";

import React, { useState } from "react";
import {
  PlayCircle,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Terminal,
  Calendar,
  Clock,
  Cpu,
  Sparkles,
  RefreshCw,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ExecutionLog {
  id: string;
  workflowName: string;
  workflowId: string;
  version: string;
  status: "success" | "failed" | "skipped";
  timestamp: string;
  duration: string;
  steps: {
    name: string;
    type: string;
    status: "success" | "failed" | "skipped";
    duration: string;
    log: string;
  }[];
  aiExplanation?: {
    cause: string;
    recommendation: string;
    category: string;
  };
}

export default function ExecutionsPage() {
  const [statusFilter, setStatusFilter] = useState<
    "all" | "success" | "failed" | "skipped"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("exec-2");
  const [isRetrying, setIsRetrying] = useState<string | null>(null);

  const [executions] = useState<ExecutionLog[]>([
    {
      id: "exec-1",
      workflowName: "Sentry Incident Auto-Remediator",
      workflowId: "wf-1",
      version: "v1.2",
      status: "success",
      timestamp: "2026-07-15 09:12:05",
      duration: "12.4s",
      steps: [
        {
          name: "Sentry Webhook Trigger",
          type: "trigger",
          status: "success",
          duration: "0.1s",
          log: "Received webhook payload from Sentry. Issue ID: SEN-9921. Level: error.",
        },
        {
          name: "Analyze Error Log (AI Agent)",
          type: "ai_agent_step",
          status: "success",
          duration: "11.2s",
          log: "Starting autonomous agent session. Max tool calls: 8.\n[Agent] Reading stack trace...\n[Agent] Searching git commit log for matching file: 'actions/workspace.actions.ts'...\n[Agent] Found potential root cause: null pointer check missing on line 125.\n[Agent] Created issue analysis summary.",
        },
        {
          name: "Send Slack Alert",
          type: "action",
          status: "success",
          duration: "1.1s",
          log: "Sent alert payload to Slack channel #incidents. Message sent with block kit metadata.",
        },
      ],
    },
    {
      id: "exec-2",
      workflowName: "Vercel Deployment Failure Hook",
      workflowId: "wf-3",
      version: "v1.0",
      status: "failed",
      timestamp: "2026-07-15 07:15:32",
      duration: "1.8s",
      steps: [
        {
          name: "Vercel Webhook Trigger",
          type: "trigger",
          status: "success",
          duration: "0.1s",
          log: "Received deployment.failed webhook event from Vercel. Project ID: prj_relay_web.",
        },
        {
          name: "Vercel Rollback Deployment",
          type: "action",
          status: "failed",
          duration: "1.7s",
          log: "Requesting rollback to deployment 'dpl_last_stable'...\nERROR: 403 Forbidden. Invalid Vercel API Credentials or token expired.",
        },
        {
          name: "Send Slack Alert",
          type: "action",
          status: "skipped",
          duration: "0.0s",
          log: "Action skipped because preceding step 'Vercel Rollback Deployment' failed.",
        },
      ],
      aiExplanation: {
        category: "Authentication Failure",
        cause: "The Vercel integration API token has expired or has been revoked by the account admin.",
        recommendation:
          "Renew the Vercel API token in your integration credentials settings, then retry this execution run.",
      },
    },
    {
      id: "exec-3",
      workflowName: "GitHub Release Announcer",
      workflowId: "wf-2",
      version: "v1.1",
      status: "skipped",
      timestamp: "2026-07-14 18:30:11",
      duration: "0.2s",
      steps: [
        {
          name: "GitHub Push Event Trigger",
          type: "trigger",
          status: "success",
          duration: "0.1s",
          log: "Received push payload. Branch: 'feature/sidebar'. Base ref: 'refs/heads/feature/sidebar'.",
        },
        {
          name: "Filter branch == main",
          type: "filter",
          status: "skipped",
          duration: "0.1s",
          log: "Filter evaluation failed. Branch 'feature/sidebar' does not match target 'main'. Halting execution.",
        },
      ],
    },
  ]);

  const handleRetry = (execId: string) => {
    setIsRetrying(execId);
    setTimeout(() => {
      setIsRetrying(null);
      alert("Simulating workflow rerun. Triggered fresh execution context.");
    }, 1500);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredExecutions = executions.filter((exec) => {
    const matchesStatus =
      statusFilter === "all" || exec.status === statusFilter;
    const matchesSearch =
      exec.workflowName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exec.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exec.workflowId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-[#F5F7F5] flex items-center gap-2.5">
            <PlayCircle className="w-6 h-6 text-[#D4FF3D]" />
            Executions
          </h1>
          <p className="text-[#8A938E] text-xs font-sans">
            Review detailed, step-by-step logs, dry runs, and AI analysis for
            past workflow runs.
          </p>
        </div>
      </div>

      {/* Filter and search */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A938E]" />
          <input
            type="text"
            placeholder="Search by execution ID or workflow name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-[#0D1410] border border-white/[0.08] hover:border-white/[0.12] focus:border-[#D4FF3D]/50 pl-9 pr-4 py-2.5 text-xs text-[#F5F7F5] focus:outline-none placeholder:text-[#8A938E]/60 transition-colors font-sans"
          />
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] self-start sm:self-auto font-mono text-[10px]">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              statusFilter === "all"
                ? "bg-white/[0.08] text-[#F5F7F5] font-bold"
                : "text-[#8A938E] hover:text-[#F5F7F5]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("success")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              statusFilter === "success"
                ? "bg-[#D4FF3D]/10 text-[#D4FF3D] font-bold border border-[#D4FF3D]/10"
                : "text-[#8A938E] hover:text-[#F5F7F5]"
            }`}
          >
            Success
          </button>
          <button
            onClick={() => setStatusFilter("failed")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              statusFilter === "failed"
                ? "bg-red-500/10 text-red-400 font-bold border border-red-500/10"
                : "text-[#8A938E] hover:text-[#F5F7F5]"
            }`}
          >
            Failed
          </button>
          <button
            onClick={() => setStatusFilter("skipped")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              statusFilter === "skipped"
                ? "bg-white/[0.06] text-[#8A938E] font-bold"
                : "text-[#8A938E] hover:text-[#F5F7F5]"
            }`}
          >
            Skipped
          </button>
        </div>
      </div>

      {/* Logs Accordion */}
      <div className="space-y-4">
        {filteredExecutions.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.02]">
            <p className="text-[#8A938E] text-xs font-mono">
              No execution records found matching your filters.
            </p>
          </div>
        ) : (
          filteredExecutions.map((exec) => {
            const isExpanded = expandedId === exec.id;
            return (
              <div
                key={exec.id}
                className={`rounded-2xl border transition-all ${
                  isExpanded
                    ? "border-white/[0.12] bg-white/[0.03]"
                    : "border-white/[0.08] hover:border-white/[0.12] bg-white/[0.02]"
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(exec.id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {exec.status === "success" ? (
                        <CheckCircle2 className="w-5 h-5 text-[#D4FF3D]" />
                      ) : exec.status === "failed" ? (
                        <XCircle className="w-5 h-5 text-red-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-[#8A938E]" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-[#F5F7F5]">
                          {exec.workflowName}
                        </h3>
                        <span className="text-[9px] font-mono text-[#8A938E]">
                          {exec.version}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] text-[#8A938E]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exec.timestamp}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {exec.duration}
                        </span>
                        <span>ID: {exec.id}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto font-mono text-[10px]">
                    <span
                      className={`px-2 py-0.5 rounded-full uppercase ${
                        exec.status === "success"
                          ? "bg-[#D4FF3D]/10 border border-[#D4FF3D]/20 text-[#D4FF3D]"
                          : exec.status === "failed"
                            ? "bg-red-500/10 border border-red-500/20 text-red-400"
                            : "bg-white/[0.06] border border-white/[0.08] text-[#8A938E]"
                      }`}
                    >
                      {exec.status}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#8A938E]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#8A938E]" />
                    )}
                  </div>
                </div>

                {/* Expanded Content Panel */}
                {isExpanded && (
                  <div className="border-t border-white/[0.06] p-5 space-y-6 animate-in slide-in-from-top-1 duration-200">
                    {exec.status === "failed" && exec.aiExplanation && (
                      <div className="p-4 rounded-2xl border border-[#D4FF3D]/20 bg-[#D4FF3D]/5 space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-[#D4FF3D]/10">
                          <div className="flex items-center gap-2 text-[#D4FF3D] text-xs font-bold">
                            <Sparkles className="w-4 h-4" />
                            <span>AI Failure Analysis</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-[#D4FF3D]/10 text-[9px] font-mono text-[#D4FF3D]">
                            {exec.aiExplanation.category}
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase text-[#8A938E]">
                              Root Cause Description
                            </span>
                            <p className="text-xs text-[#D4D8D5] leading-relaxed font-sans">
                              {exec.aiExplanation.cause}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase text-[#8A938E]">
                              Suggested Action
                            </span>
                            <p className="text-xs text-[#D4FF3D] leading-relaxed font-sans font-medium">
                              {exec.aiExplanation.recommendation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A938E] block">
                        Execution Sequence
                      </span>
                      <div className="space-y-3 font-mono text-xs">
                        {exec.steps.map((step, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-white/[0.06] bg-[#0D1410] p-4 space-y-3"
                          >
                            <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/[0.06]">
                              <div className="flex items-center gap-2">
                                <span
                                  className={
                                    step.status === "success"
                                      ? "text-[#D4FF3D]"
                                      : step.status === "failed"
                                        ? "text-red-400"
                                        : "text-[#8A938E]/60"
                                  }
                                >
                                  &#9679;
                                </span>
                                <span className="font-bold text-[#D4D8D5]">
                                  {step.name}
                                </span>
                                <span className="text-[#8A938E]/60">
                                  ({step.type})
                                </span>
                              </div>
                              <span className="text-[#8A938E]">
                                {step.duration}
                              </span>
                            </div>
                            <pre className="text-[#8A938E] text-[10px] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                              {step.log}
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="text-[10px] font-mono text-[#8A938E]">
                        Version context: {exec.version} &#8226; Worker Node:
                        w-us-east-1
                      </div>
                      <Button
                        onClick={() => handleRetry(exec.id)}
                        disabled={isRetrying === exec.id}
                        className="bg-[#D4FF3D] hover:bg-[#D4FF3D]/90 text-[#0A0F0C] rounded-lg px-4 py-2 text-xs font-semibold cursor-pointer flex items-center gap-2"
                      >
                        {isRetrying === exec.id ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Retrying...</span>
                          </>
                        ) : (
                          <>
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Rerun Execution</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
