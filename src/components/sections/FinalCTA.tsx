"use client";

import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated px-8 py-16 text-center md:px-16 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,26,26,0.06),transparent_70%)]" />

            <div className="relative">
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-text">
                Your reputation deserves a better online presence.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-text-muted">
                Join consultants, advisors, and executives across Kenya who trust
                us to represent them online.
              </p>
              <div className="mt-10">
                <Button href={siteConfig.consultationUrl} variant="primary">
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
