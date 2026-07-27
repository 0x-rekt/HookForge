"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, ChevronDown } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { data, refetch } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    refetch();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0A0F0C]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4FF3D]/10 border border-[#D4FF3D]/20">
              <Terminal className="h-4 w-4 text-[#D4FF3D]" />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#F5F7F5]">
              Relay
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {data?.user && (
              <Link
                href="/dashboard"
                className="hidden text-sm font-medium text-[#8A938E] hover:text-[#F5F7F5] sm:block transition-colors px-3 py-2"
              >
                Dashboard
              </Link>
            )}
            <button className="flex items-center gap-1 text-sm font-medium text-[#8A938E] hover:text-[#F5F7F5] transition-colors px-3 py-2 cursor-pointer">
              Developer Tools
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link
              href="#features"
              className="text-sm font-medium text-[#8A938E] hover:text-[#F5F7F5] transition-colors px-3 py-2"
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="text-sm font-medium text-[#8A938E] hover:text-[#F5F7F5] transition-colors px-3 py-2"
            >
              Integrations
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-[#8A938E] hover:text-[#F5F7F5] transition-colors px-3 py-2"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:flex h-2 w-2 rounded-full bg-[#D4FF3D] animate-glow-pulse" />
          {data?.user ? (
            <div className="flex items-center gap-4">
              <Image
                src={data.user.image!}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full ring-2 ring-white/10"
              />
              <Button
                onClick={handleSignOut}
                className="bg-[#D4FF3D] hover:bg-[#D4FF3D]/90 text-[#0A0F0C] rounded-full px-5 h-9 font-semibold text-sm transition-all cursor-pointer"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button className="bg-[#D4FF3D] hover:bg-[#D4FF3D]/90 text-[#0A0F0C] rounded-full px-5 h-9 font-semibold text-sm transition-all cursor-pointer">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
