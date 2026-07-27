import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getWorkSpaces } from "@/actions/workspace.actions";
import { Navbar } from "@/components/layout/Navbar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CreateWorkspaceModal } from "@/components/workspace/CreateWorkspaceModal";
import { ArrowRight, Terminal, AlertCircle } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { workspaces, error } = await getWorkSpaces();

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0F0C] text-[#F5F7F5] font-sans selection:bg-[#D4FF3D]/20 selection:text-[#F5F7F5]">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 relative">
        {/* Glow backgrounds */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4FF3D]/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative space-y-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/[0.08] pb-8">
            <div className="space-y-1.5">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#F5F7F5]">
                Workspaces
              </h1>
              <p className="text-[#8A938E] text-sm max-w-2xl font-sans">
                Select a workspace to view your integrations, trigger incident
                response workflows, and configure autonomous developers.
              </p>
            </div>
            <div>
              <CreateWorkspaceModal />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-mono">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>[error] {error}</span>
            </div>
          )}

          {/* Workspaces Grid */}
          {!error && (!workspaces || workspaces.length === 0) ? (
            /* Empty State */
            <div className="relative p-12 md:p-16 rounded-2xl bg-[#151C17] border border-dashed border-white/[0.08] text-center max-w-2xl mx-auto overflow-hidden">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4FF3D]/10 border border-[#D4FF3D]/20 mb-6">
                <Terminal className="h-6 w-6 text-[#D4FF3D]" />
              </div>

              <h3 className="text-xl font-bold text-[#F5F7F5] mb-2">
                No Workspaces Found
              </h3>

              <p className="text-[#8A938E] text-sm mb-8 leading-relaxed">
                You haven&apos;t joined or created any workspaces yet. Create
                your first workspace to connect Sentry alerts, GitHub
                repositories, and begin autopilot debugging.
              </p>

              <CreateWorkspaceModal />
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {workspaces?.map((item) => {
                const ws = item.workspace;
                if (!ws) return null;

                return (
                  <Card
                    key={ws.id}
                    className="relative bg-[#151C17] border-white/[0.08] hover:border-[#D4FF3D]/30 transition-all shadow-lg hover:shadow-[#D4FF3D]/5 group flex flex-col justify-between overflow-hidden rounded-xl"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4FF3D]/10 border border-[#D4FF3D]/20 group-hover:border-[#D4FF3D]/30 group-hover:bg-[#D4FF3D]/20 transition-all">
                          <Terminal className="h-4.5 w-4.5 text-[#D4FF3D]" />
                        </div>
                        <CardTitle className="font-heading text-base font-semibold text-[#F5F7F5] group-hover:text-[#D4FF3D] transition-colors">
                          {ws.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-[#8A938E] font-mono text-[11px]">
                        ID: {ws.id}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="border-t border-white/[0.06] pt-4 flex justify-between items-center">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-[#8A938E]">
                        <span>role: {item.role}</span>
                      </div>
                      <Link
                        href={`/dashboard/${ws.id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#D4FF3D] hover:text-[#D4FF3D]/80 transition-colors cursor-pointer group/link"
                      >
                        <span>Enter</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
