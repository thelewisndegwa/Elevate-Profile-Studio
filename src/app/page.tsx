import { projects, siteConfig } from "@/lib/constants";

const audiences = ["Advisors", "Consultants", "Creators"];

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M3 7h8M8 3.5 11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 border-b border-line bg-bg">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-clay font-display text-base text-bg">
              E
            </span>
            <span className="truncate text-sm font-medium tracking-tight">
              Elevate
              <span className="hidden sm:inline"> Profile Studio</span>
            </span>
          </a>
          <nav className="flex items-center gap-5 sm:gap-6">
            <a
              href="#work"
              className="text-sm text-muted transition-colors hover:text-clay"
            >
              Work
            </a>
            <a
              href={siteConfig.consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full bg-clay px-4 text-sm font-medium text-bg transition-colors hover:bg-clay-deep"
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book a call</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="mx-auto max-w-5xl px-5 pb-4 pt-14 sm:px-8 sm:pt-20">
          <p className="flex items-center gap-3 text-sm font-medium text-clay">
            <span className="h-px w-8 bg-clay" aria-hidden="true" />
            Personal branding studio · {siteConfig.location}
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-[2.7rem] leading-[1.02] tracking-[-0.03em] text-balance text-clay sm:text-6xl lg:text-7xl">
            {siteConfig.taglineLead}{" "}
            <span className="italic text-clay">{siteConfig.taglineEmphasis}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            We design portfolio websites and digital profiles for advisors,
            consultants, and creators. A clear site for the work, credentials,
            and story you want clients to find.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted"
              >
                {audience}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-clay px-6 text-sm font-medium text-bg transition-colors hover:bg-clay-deep"
            >
              Book a consultation
              <ArrowIcon />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center px-2 text-sm font-medium text-clay underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay-deep hover:decoration-clay-deep"
            >
              See selected work
            </a>
          </div>
        </section>

        <section
          id="work"
          className="mx-auto mt-16 max-w-5xl scroll-mt-24 px-5 sm:mt-24 sm:px-8"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                Selected work
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Recent portfolio and profile sites.
              </p>
            </div>
            <p className="shrink-0 text-sm text-muted">
              {projects.length} profiles
            </p>
          </div>
          <ul className="mt-6 border-t border-line">
            {projects.map((project, index) => (
              <li key={project.slug} className="border-b border-line">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[2.25rem_1fr_auto] items-start gap-x-3 py-6 transition-colors sm:grid-cols-[3.5rem_1fr_auto] sm:items-center sm:gap-x-6 sm:py-7"
                >
                  <span className="pt-1 font-display text-lg tabular-nums text-clay sm:pt-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-2xl leading-tight tracking-tight transition-colors group-hover:text-clay-deep sm:text-[1.75rem]">
                      {project.client}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                      {project.industry}
                      <span className="px-1.5 text-line" aria-hidden="true">
                        ·
                      </span>
                      {project.affiliation}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 pt-1.5 text-sm font-medium text-muted transition-colors group-hover:text-clay sm:pt-0">
                    Visit
                    <ArrowIcon />
                    <span className="sr-only">
                      {" "}
                      {project.client}&apos;s site (opens in a new tab)
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="mx-auto mt-16 max-w-5xl scroll-mt-24 px-5 sm:mt-24 sm:px-8"
        >
          <div className="rounded-3xl bg-clay px-6 py-10 text-bg sm:px-10 sm:py-14">
            <p className="text-sm font-medium text-clay-soft">WhatsApp</p>
            <h2 className="mt-3 max-w-lg font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Tell us about the profile you want.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-bg/75">
              Send a note with what you do and the kind of site you have in
              mind. We reply on WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={siteConfig.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-bg px-6 text-sm font-medium text-clay transition-colors hover:bg-clay-soft"
              >
                Book a consultation
                <ArrowIcon />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="tel:+16086081288"
                className="text-sm text-bg/80 underline decoration-bg/30 underline-offset-4 transition-colors hover:text-bg"
              >
                {siteConfig.whatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-16 flex max-w-5xl flex-col gap-3 px-5 py-10 text-sm text-muted sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>{siteConfig.location}</p>
      </footer>
    </div>
  );
}
