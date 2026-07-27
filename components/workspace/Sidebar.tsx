"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GitFork,
  PlayCircle,
  ChevronLeft,
  Cpu,
  Sparkles,
  Terminal,
  Plug,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  workspace: {
    id: string;
    name: string;
    ai_tokens_used: number;
    nl_gens_used: number;
  };
}

export function Sidebar({ workspace }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Overview",
      href: `/dashboard/${workspace.id}`,
      icon: LayoutDashboard,
      active: pathname === `/dashboard/${workspace.id}`,
    },
    {
      name: "Workflows",
      href: `/dashboard/${workspace.id}/workflows`,
      icon: GitFork,
      active: pathname.startsWith(`/dashboard/${workspace.id}/workflows`),
    },
    {
      name: "Executions",
      href: `/dashboard/${workspace.id}/executions`,
      icon: PlayCircle,
      active: pathname.startsWith(`/dashboard/${workspace.id}/executions`),
    },
    {
      name: "Integrations",
      href: `/dashboard/${workspace.id}/integrations`,
      icon: Plug,
      active: pathname.startsWith(`/dashboard/${workspace.id}/integrations`),
    },
  ];

  return (
    <aside className="w-full md:w-64 shrink-0 bg-[#0A0F0C] border-b md:border-b-0 md:border-r border-white/[0.08] p-5 flex flex-col justify-between h-auto md:h-[calc(100vh-4rem)] sticky top-16 select-none z-20">
      <div className="space-y-6">
        {/* Back Link & Workspace Label */}
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8A938E] hover:text-[#F5F7F5] transition-colors group cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Workspaces</span>
          </Link>

          {/* Workspace Title Card */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4FF3D]/10 border border-[#D4FF3D]/20 text-[#D4FF3D]">
              <Terminal className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0">
              <h2
                className="text-sm font-bold text-[#F5F7F5] truncate"
                title={workspace.name}
              >
                {workspace.name}
              </h2>
              <span className="text-[10px] font-mono text-[#8A938E]">
                Active Workspace
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group cursor-pointer",
                  item.active
                    ? "bg-[#D4FF3D]/10 border border-[#D4FF3D]/20 text-[#D4FF3D] shadow-sm"
                    : "border border-transparent text-[#8A938E] hover:text-[#F5F7F5] hover:bg-white/[0.04]"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-transform group-hover:scale-105",
                    item.active
                      ? "text-[#D4FF3D]"
                      : "text-[#8A938E] group-hover:text-[#F5F7F5]"
                  )}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Usage card at the bottom */}
      <div className="pt-6 border-t border-white/[0.08] space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A938E]">
            Workspace Usage
          </span>
        </div>

        {/* AI Tokens Meter */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-[#8A938E] flex items-center gap-1">
              <Cpu className="w-3 h-3 text-[#D4FF3D]" />
              AI Tokens
            </span>
            <span className="text-[#F5F7F5]">
              {workspace.ai_tokens_used.toLocaleString()}
            </span>
          </div>
          <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D4FF3D] rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (workspace.ai_tokens_used / 100000) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* NL Generations Meter */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-[#8A938E] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C792EA]" />
              NL Gens
            </span>
            <span className="text-[#F5F7F5]">
              {workspace.nl_gens_used.toLocaleString()}
            </span>
          </div>
          <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C792EA] rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (workspace.nl_gens_used / 500) * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
