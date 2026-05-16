"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initial = direction === "up" ? { opacity: 0, y: 28 } : { opacity: 0 };
  const animate = direction === "up" ? { opacity: 1, y: 0 } : { opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
