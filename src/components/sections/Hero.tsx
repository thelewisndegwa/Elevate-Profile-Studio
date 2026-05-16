"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroMockups } from "@/components/sections/HeroMockups";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(26,26,26,0.04),transparent)]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-xs font-medium uppercase tracking-[0.14em] text-text-muted"
            >
              Premium digital identity · Kenya & Africa
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,5vw+1rem,4.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-text"
            >
              Your online presence should look as professional as your work.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted"
            >
              We create elegant portfolio websites, executive profiles, and
              digital business cards for professionals across Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href={siteConfig.consultationUrl} variant="primary">
                Book a Consultation
              </Button>
              <Button href="#work" variant="secondary">
                View Our Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroMockups />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
