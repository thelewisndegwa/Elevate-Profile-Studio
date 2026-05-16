"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/constants";

function BrowserFrame({
  title,
  subtitle,
  gradient,
  accent,
  className,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  gradient: string;
  accent: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-[0_24px_80px_-24px_rgba(26,26,26,0.18)]">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-text/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-text/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-text/10" />
          </div>
          <div className="mx-auto flex h-6 max-w-[200px] flex-1 items-center justify-center rounded-md bg-warm/80 px-3">
            <span className="truncate text-[10px] text-text-muted">
              {title.toLowerCase().replace(/\s/g, "")}.com
            </span>
          </div>
        </div>
        <div className={`bg-gradient-to-br ${gradient} p-6 md:p-8`}>
          <div
            className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white"
            style={{ backgroundColor: accent }}
          >
            Professional
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-text md:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
          <div className="mt-6 space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-text/10" />
            <div className="h-2 w-1/2 rounded-full bg-text/[0.08]" />
            <div className="mt-4 inline-flex rounded-full bg-text px-4 py-2 text-xs font-medium text-bg">
              Book a Consultation
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroMockups() {
  const [emma, maggie] = projects;

  return (
    <div className="relative mx-auto h-[420px] max-w-md md:h-[480px]">
      <BrowserFrame
        title={maggie.client}
        subtitle={maggie.industry}
        gradient={maggie.gradient}
        accent={maggie.accent}
        className="absolute right-0 top-8 z-10 w-[85%] rotate-[4deg]"
        delay={0.5}
      />
      <BrowserFrame
        title={emma.client}
        subtitle={emma.industry}
        gradient={emma.gradient}
        accent={emma.accent}
        className="absolute left-0 top-0 z-20 w-[90%] -rotate-[2deg]"
        delay={0}
      />
      <div className="absolute -bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-border bg-bg-elevated/90 px-4 py-2 text-xs text-text-muted backdrop-blur-sm">
        Live client work
      </div>
    </div>
  );
}
