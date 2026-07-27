import { getIntegrations } from "@/actions/integration.actions";
import { IntegrationsClient } from "@/components/integrations/IntegrationsClient";

interface PageProps {
  params: Promise<{ workspaceId: string }>;
}

export default async function IntegrationsPage({ params }: PageProps) {
  const { workspaceId } = await params;
  const { integrations, error } = await getIntegrations(workspaceId);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#F5F7F5]">
            Integrations
          </h1>
          <p className="text-[#8A938E] text-sm mt-1">
            Connect your developer tools to enable workflow triggers and
            agentic actions.
          </p>
        </div>
      </div>

      <IntegrationsClient
        workspaceId={workspaceId}
        connectedIntegrations={integrations ?? []}
        error={error}
      />
    </div>
  );
}
