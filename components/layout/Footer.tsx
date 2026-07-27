import Link from "next/link";
import { Terminal } from "lucide-react";
import {
  SiGithub,
  SiSentry,
  SiJira,
  SiPagerduty,
  SiSlackware,
} from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0F0C] border-t border-white/[0.08] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4FF3D]/10 border border-[#D4FF3D]/20">
              <Terminal className="h-4 w-4 text-[#D4FF3D]" />
            </div>
            <span className="font-bold text-lg text-[#F5F7F5]">Relay</span>
          </Link>
          <p className="text-sm text-[#8A938E] mb-6 pr-8 leading-[1.6]">
            The Developer Integration Platform with an Agentic AI brain.
            Automate your toolchain natively.
          </p>
          <div className="flex items-center gap-4 text-[#8A938E]">
            <Link href="#" className="hover:text-[#D4FF3D] transition-colors">
              <SiGithub className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#D4FF3D] transition-colors">
              <SiSentry className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#D4FF3D] transition-colors">
              <SiJira className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#D4FF3D] transition-colors">
              <SiPagerduty className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#D4FF3D] transition-colors">
              <SiSlackware className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="font-semibold text-[#F5F7F5] mb-4 text-sm">Resources</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                API Reference
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                Changelog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#F5F7F5] mb-4 text-sm">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#F5F7F5] mb-4 text-sm">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-[#8A938E] hover:text-[#F5F7F5] transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#8A938E]/60">
          &copy; {new Date().getFullYear()} Relay Platform Inc. All rights
          reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#D4FF3D] animate-glow-pulse" />
          <span className="text-sm text-[#8A938E]/60">All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
