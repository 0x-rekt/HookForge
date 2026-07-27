import { getWorkspaceById } from "@/actions/workspace.actions";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/workspace/Sidebar";
import { AlertCircle } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ workspaceId: string }>;
}

export default async function WorkspaceLayout({
  children,
  params,
}: LayoutProps) {
  const { workspaceId } = await params;
  const { workspace } = await getWorkspaceById(workspaceId);

  if (!workspace) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0A0F0C] text-[#F5F7F5] font-sans selection:bg-[#D4FF3D]/20 selection:text-[#F5F7F5]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-mono max-w-md">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
            <span>Workspace not found or unauthorized.</span>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0F0C] text-[#F5F7F5] font-sans selection:bg-[#D4FF3D]/20 selection:text-[#F5F7F5]">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row w-full max-w-7xl mx-auto relative">
        {/* Sidebar Nav */}
        <Sidebar workspace={workspace} />

        {/* Main Content Area */}
        <main className="flex-1 px-6 py-8 md:py-10 relative overflow-hidden">
          {/* Subtle lime glow */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4FF3D]/3 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative">{children}</div>
        </main>
      </div>
    </div>
  );
}
