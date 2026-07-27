"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createWorkspace } from "@/actions/workspace.actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Terminal, Plus, Loader2 } from "lucide-react";

export function CreateWorkspaceModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await createWorkspace(name);
      if (res.error) {
        setError(res.error);
      } else {
        setName("");
        setOpen(false);
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="bg-[#D4FF3D] hover:bg-[#D4FF3D]/90 text-[#0A0F0C] rounded-full px-5 py-2 font-semibold transition-all cursor-pointer flex items-center gap-1.5">
            <Plus className="w-4 h-4" />
            <span>New Workspace</span>
          </Button>
        }
      />

      <DialogContent className="bg-[#151C17] border border-white/[0.08] rounded-2xl shadow-2xl p-6 relative">
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#D4FF3D]/5 blur-[50px] rounded-full pointer-events-none" />

        <DialogHeader className="flex flex-row items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4FF3D]/10 border border-[#D4FF3D]/20">
            <Terminal className="h-4 w-4 text-[#D4FF3D]" />
          </div>
          <DialogTitle className="text-xl font-bold text-[#F5F7F5]">
            Create Workspace
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-sm text-[#8A938E] mb-4">
          Create a new workspace to manage integration pipelines and autonomous
          agents.
        </DialogDescription>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="workspace-name"
              className="block text-xs font-mono text-[#8A938E] uppercase tracking-wider mb-2"
            >
              Workspace Name
            </label>
            <input
              id="workspace-name"
              type="text"
              required
              placeholder="e.g. Acme Integration"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-[#0D1410] border border-white/[0.08] focus:border-[#D4FF3D] focus:outline-none text-[#F5F7F5] text-sm transition-all placeholder:text-[#8A938E]/60"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="text-xs text-red-400 font-mono">
              [error] {error}
            </div>
          )}

          <DialogFooter className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setOpen(false);
                setError("");
                setName("");
              }}
              className="border-white/[0.08] text-[#8A938E] hover:bg-white/[0.06] hover:text-[#F5F7F5] rounded-xl px-4 py-2"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#D4FF3D] hover:bg-[#D4FF3D]/90 text-[#0A0F0C] rounded-xl px-5 py-2 font-medium transition-all flex items-center gap-1.5 cursor-pointer"
              disabled={loading}
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>Create Workspace</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
