"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          label="Featured Work"
          title="Professionals who look credible online"
          description="Real client websites built for advisors, consultants, and industry leaders across Kenya."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-all duration-500 hover:border-text/15 hover:shadow-[0_20px_50px_-24px_rgba(26,26,26,0.12)]">
                  <div
                    className={`relative bg-gradient-to-br ${project.gradient} px-5 py-5`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted">
                          {project.industry}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-medium tracking-tight text-text">
                          {project.client}
                        </h3>
                        <p className="mt-0.5 truncate text-xs text-text-muted">
                          {project.affiliation}
                        </p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated/80 text-text opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>

                    <div className="relative mt-4 overflow-hidden rounded-lg border border-border/40 bg-bg-elevated/90 p-3 shadow-sm">
                      <div className="mb-2 flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-text/10" />
                        <span className="h-1.5 w-1.5 rounded-full bg-text/10" />
                        <span className="h-1.5 w-1.5 rounded-full bg-text/10" />
                      </div>
                      <div className="space-y-1.5">
                        <div
                          className="h-1.5 w-2/3 rounded-full"
                          style={{ backgroundColor: `${project.accent}30` }}
                        />
                        <div className="h-1.5 w-1/2 rounded-full bg-text/10" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-sm leading-relaxed text-text-muted">
                      {project.statement}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-warm px-2.5 py-0.5 text-[11px] text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </a>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
