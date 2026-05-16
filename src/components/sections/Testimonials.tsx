"use client";

import { testimonials } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          label="Testimonials"
          title="Trusted by professionals who care about reputation"
          align="center"
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <blockquote className="flex h-full flex-col justify-between rounded-3xl border border-border bg-bg-elevated p-8 md:p-10">
                <p className="font-display text-xl leading-snug tracking-tight text-text md:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-border pt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-medium text-text">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-sm text-text-muted">
                      {testimonial.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
