import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GitFork, Clock, ArrowRight } from "lucide-react";

export interface Workflow {
  id: string;
  name: string;
  workspaceId?: string;
  graph?: unknown;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  status?: "active" | "draft" | "paused";
}

export interface WorkflowCardProps {
  workflow: Workflow;
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  const formattedDate = workflow.updatedAt
    ? new Date(workflow.updatedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Card className="group bg-[#151C17] border-white/[0.08] hover:border-[#D4FF3D]/30 transition-all duration-200 hover:shadow-lg hover:shadow-[#D4FF3D]/5 relative overflow-hidden flex flex-col justify-between rounded-xl">
      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#D4FF3D]/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#D4FF3D]/10 transition-all" />

      <CardHeader className="space-y-2 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#D4FF3D]/10 text-[#D4FF3D] border border-[#D4FF3D]/20">
              <GitFork className="w-4 h-4" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4FF3D]/10 text-[#D4FF3D] border border-[#D4FF3D]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3D] animate-pulse" />
              Active
            </span>
          </div>
        </div>

        <CardTitle className="text-lg font-semibold text-[#F5F7F5] group-hover:text-[#D4FF3D] transition-colors line-clamp-1">
          {workflow.name}
        </CardTitle>
        <CardDescription className="text-xs text-[#8A938E] font-mono">
          ID: {workflow.id}
        </CardDescription>
      </CardHeader>

      {formattedDate && (
        <CardContent className="py-2">
          <div className="flex items-center gap-1.5 text-xs text-[#8A938E] font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>Updated {formattedDate}</span>
          </div>
        </CardContent>
      )}

      <CardFooter className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
        {workflow.workspaceId ? (
          <Link
            href={`/dashboard/${workflow.workspaceId}/workflows/${workflow.id}`}
            className="inline-flex items-center gap-1.5 font-medium text-[#D4FF3D] hover:text-[#D4FF3D]/80 transition-colors"
          >
            <span>Open Workflow</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <span className="text-[#8A938E] font-medium">View details</span>
        )}
      </CardFooter>
    </Card>
  );
}

export default WorkflowCard;
