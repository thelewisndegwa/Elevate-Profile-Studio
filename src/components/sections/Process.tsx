"use client";

import { processSteps } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-warm/30 py-24 md:py-32">
      <Container>
        <SectionHeader
          label="Process"
          title="A simple path to a premium presence"
          description="Three focused steps. No endless revisions. No confusion."
          className="mb-16"
        />

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />

          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="relative">
                <span className="font-display text-5xl font-medium text-text/10 md:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
