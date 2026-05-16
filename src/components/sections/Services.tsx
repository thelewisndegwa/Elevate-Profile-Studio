"use client";

import {
  Layout,
  CreditCard,
  Linkedin,
  FileText,
  Mic,
  RefreshCw,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  "credit-card": CreditCard,
  linkedin: Linkedin,
  "file-text": FileText,
  mic: Mic,
  "refresh-cw": RefreshCw,
  globe: Globe,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          label="Services"
          title="Everything you need to look credible online"
          description="Tailored for executives, advisors, and professionals who cannot afford to look amateur on the web."
          className="mb-16"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Layout;
            return (
              <FadeIn key={service.title} delay={index * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:border-text/15 hover:shadow-[0_16px_48px_-16px_rgba(26,26,26,0.1)] md:p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-warm/50 text-text transition-colors group-hover:bg-text group-hover:text-bg">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
