import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relay | Developer Integration Platform with Agentic AI",
  description:
    "Eliminate friction between your tools. Combine rule-based workflow automation with an autonomous agentic incident responder to resolve issues faster, without human-in-the-loop bottlenecks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        inter.variable,
        jetbrainsMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
