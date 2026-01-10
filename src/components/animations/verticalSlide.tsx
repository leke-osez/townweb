import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SlideOverSectionProps {
  children: ReactNode;
  index: number;
  totalSections: number;
  className?: string;
}

export const SlideOverSection = ({
  children,
  index,
  // totalSections,
  className = "",
}: SlideOverSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Calculate scale effect - each section starts slightly scaled down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Calculate opacity fade
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 1, 0.6]
  );

  // Calculate Shadow intensity
  // const shadowIntensity = useTransform(
  //   scrollYProgress,
  //   [0, 0.3, 1],
  //   [0, 0.15, 0.3]
  // );

  // const boxShadow = useTransform(shadowIntensity, (value) => {
  //   return `0 -10px 40px -10px rgba(0, 0, 0, ${value * 2})`;
  // });

  // Calculate z-index based on section order - higher index = higher z-index
  const zIndex = index + 1;

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        zIndex,
        // boxShadow,
      }}
      className={`sticky top-0 h-fit overflow-hidden ${className}`}
    >
      <div className="h-full w-full">{children}</div>
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 1]
  );

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -20]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1, 1]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [10, 0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
        rotateX,
        transformPerspective: 1000,
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
