import {
  SiGithub,
  SiSentry,
  SiJira,
  SiPagerduty,
  SiVercel,
  SiLinear,
  SiDatadog,
  SiDiscord,
} from "@icons-pack/react-simple-icons";
import { FaSlack } from "react-icons/fa";

const tools = [
  { name: "GitHub", icon: SiGithub },
  { name: "Sentry", icon: SiSentry },
  { name: "Slack", icon: FaSlack },
  { name: "Jira", icon: SiJira },
  { name: "PagerDuty", icon: SiPagerduty },
  { name: "Vercel", icon: SiVercel },
  { name: "Linear", icon: SiLinear },
  { name: "Datadog", icon: SiDatadog },
  { name: "Discord", icon: SiDiscord },
];

export function IntegrationsSection() {
  const marqueeTools = [...tools, ...tools, ...tools];

  return (
    <section
      id="integrations"
      className="w-full py-20 border-y border-white/[0.08] bg-[#0D1410]/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-semibold text-[#D4FF3D] uppercase tracking-widest mb-3">
          Extensible Stack Ecosystem
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-[#F5F7F5]">
          Natively Integrated with Your Existing Toolchain
        </h3>
      </div>

      {/* Infinite Marquee Container */}
      <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-4">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] transition-all">
          {marqueeTools.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.08] bg-[#151C17] text-[#8A938E] backdrop-blur-sm transition-all duration-300 hover:border-[#D4FF3D]/30 hover:text-[#F5F7F5] hover:bg-[#151C17]/80 cursor-pointer group"
            >
              <tool.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold text-sm tracking-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
