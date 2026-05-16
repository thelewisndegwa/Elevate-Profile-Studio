import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300";
  const variants = {
    primary:
      "bg-text text-bg hover:bg-text/90 shadow-[0_8px_30px_-8px_rgba(26,26,26,0.35)] hover:shadow-[0_12px_40px_-10px_rgba(26,26,26,0.4)] hover:-translate-y-0.5",
    secondary:
      "border border-text/15 bg-transparent text-text hover:border-text/30 hover:bg-text/[0.03]",
  };

  const classes = cn(base, variants[variant], className);

  const isExternal =
    external ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
