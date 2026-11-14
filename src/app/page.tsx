import { projects, siteConfig } from "@/lib/constants";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-10 md:py-16">
      <header className="flex items-baseline justify-between gap-6">
        <p className="text-sm font-medium tracking-tight text-text">
          {siteConfig.name}
        </p>
        <a
          href={siteConfig.consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted underline-offset-4 hover:text-text hover:underline"
        >
          WhatsApp
        </a>
      </header>

      <main className="mt-20 flex-1 md:mt-28">
        <h1 className="font-display text-[2.25rem] leading-[1.15] tracking-[-0.02em] text-text md:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
          We design portfolio websites and digital profiles for advisors,
          consultants, and creators. Based in {siteConfig.location}.
        </p>
        <a
          href={siteConfig.consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-medium text-text underline underline-offset-4"
        >
          Book a consultation
        </a>

        <section className="mt-20">
          <h2 className="text-sm text-text-muted">Work</h2>
          <ul className="mt-4 border-t border-border">
            {projects.map((project) => (
              <li key={project.slug} className="border-b border-border">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-medium text-text group-hover:underline group-hover:underline-offset-4">
                    {project.client}
                  </span>
                  <span className="text-sm text-text-muted">
                    {project.industry}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-20 text-sm text-text-muted">
        <a
          href={siteConfig.consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text"
        >
          {siteConfig.whatsapp}
        </a>
        <p className="mt-1">{siteConfig.location}</p>
        <p className="mt-6">
          © {year} {siteConfig.name}
        </p>
      </footer>
    </div>
  );
}
