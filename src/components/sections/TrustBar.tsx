"use client";

import { industries, metrics } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function TrustBar() {
  return (
    <section className="border-y border-border py-16 md:py-20">
      <Container>
        <FadeIn>
          <p className="text-center text-sm text-text-muted">
            Trusted by consultants, founders, and executives across Kenya
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-xs font-medium text-text-muted"
            >
              {industry}
            </span>
          ))}
        </FadeIn>

        <FadeIn delay={0.2} className="mt-14 grid gap-8 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="font-display text-3xl font-medium tracking-tight text-text md:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-text-muted">{metric.label}</p>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-sm text-text-muted">
            Designed to create trust online — before the first handshake.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
