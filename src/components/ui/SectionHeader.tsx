import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeIn className={cn(align === "center" && "text-center", className)}>
      {label && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
          {label}
        </p>
      )}
      <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-text">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed text-text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
