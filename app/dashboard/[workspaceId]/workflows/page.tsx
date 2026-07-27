import { getWorkflows } from "@/actions/workflow.actions";
import { WorkflowCard } from "@/components/workflow/WorkflowCard";
import { CreateWorkflowModal } from "@/components/workflow/CreateWorkflowModal";
import { GitFork, AlertCircle, Plus, Zap, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ workspaceId: string }>;
}

const WorkflowsPage = async ({ params }: PageProps) => {
  const { workspaceId } = await params;
  const { workflows, error } = await getWorkflows(workspaceId);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#F5F7F5]">
              Workflows
            </h1>
            {workflows && workflows.length > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#D4FF3D]/10 text-[#D4FF3D] border border-[#D4FF3D]/20">
                {workflows.length}{" "}
                {workflows.length === 1 ? "workflow" : "workflows"}
              </span>
            )}
          </div>
          <p className="text-[#8A938E] text-sm mt-1">
            Create, manage, and monitor your automated pipelines and agent
            triggers.
          </p>
        </div>

        <CreateWorkflowModal workspaceId={workspaceId} />
      </div>

      {/* Error state */}
      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-mono">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
          <span>Error loading workflows: {error}</span>
        </div>
      )}

      {/* Empty state */}
      {!error && workflows?.length === 0 && (
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#151C17] via-[#0D1410] to-[#0A0F0C] p-10 md:p-16 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4FF3D]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md space-y-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-2 bg-[#D4FF3D]/20 rounded-2xl blur-sm opacity-40 animate-pulse" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#151C17] border border-[#D4FF3D]/30 text-[#D4FF3D] shadow-xl shadow-[#D4FF3D]/10">
                <GitFork className="w-8 h-8" />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F7F5]">
                No Workflows Found
              </h2>
              <p className="text-sm text-[#8A938E] leading-relaxed">
                You haven&apos;t created any workflows in this workspace yet.
                Get started by building your first integration pipeline.
              </p>
            </div>

            <CreateWorkflowModal
              workspaceId={workspaceId}
              trigger={
                <Button className="bg-[#D4FF3D] hover:bg-[#D4FF3D]/90 text-[#0A0F0C] rounded-full px-6 py-2.5 font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-[#D4FF3D]/20 hover:scale-[1.02] active:scale-[0.98]">
                  <Plus className="w-4 h-4" />
                  <span>Create Workflow</span>
                </Button>
              }
            />

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 border-t border-white/[0.06] w-full text-xs font-mono text-[#8A938E]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <Zap className="w-3.5 h-3.5 text-[#D4FF3D]" />
                <span>Instant Execution</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <Cpu className="w-3.5 h-3.5 text-[#7DA6F5]" />
                <span>AI Automations</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <Sparkles className="w-3.5 h-3.5 text-[#C792EA]" />
                <span>Visual Flow Editor</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workflows Grid */}
      {!error && workflows && workflows.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkflowsPage;
