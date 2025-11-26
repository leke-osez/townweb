import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/style";

// InfiniteLogoCarousel.jsx
// Props:
// - logos: array of { src, alt, width?, height? }
// - speed: pixels per second (default: 30 → slow)
// - gap: spacing in px between logos
// - direction: "left" | "right"
// - pauseOnHover: boolean

type Props = {
  logos: Array<{
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }>;
  speed?: number; // px per second — lower = slower
  gap?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  logoHeight?: number;
  className?: string;
};

export default function Carousel({
  logos = [],
  className,
  speed = 30, // px per second — lower = slower
  gap = 24,
  direction = "left",
  pauseOnHover = true,
  logoHeight = 48,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos so the track can loop seamlessly
  const items = [...logos, ...logos];

  useEffect(() => {
    const calc = () => {
      if (!trackRef.current || !containerRef.current) return;

      // full width of just one set of logos (first half)
      const firstHalfWidth = Array.from(trackRef.current.children)
        .slice(0, Math.ceil(trackRef.current.children.length / 2))
        .reduce(
          (sum, el) => sum + el.getBoundingClientRect().width,
          0
        );

      setDistance(firstHalfWidth);
    };

    calc();

    // Recalculate on resize to keep the loop seamless
    const ro = new ResizeObserver(calc);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("load", calc);
    window.addEventListener("resize", calc);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", calc);
      window.removeEventListener("resize", calc);
    };
  }, [logos, gap, logoHeight]);

  // duration (seconds) to move `distance` px at `speed` px/s
  const duration =
    distance > 0 ? Math.max(4, distance / Math.max(1, speed)) : 0;

  // direction multiplier
  const dir = direction === "left" ? -1 : 1;

  // animate x from 0 -> -distance (left) or 0 -> distance (right)
  const animateTo = dir * -distance;

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        ref={trackRef}
        className="flex items-center whitespace-nowrap"
        // start at 0, move to animateTo, then loop back
        animate={{ x: isPaused ? 0 : [0, animateTo] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration,
          },
        }}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center justify-center",
              className
            )}
            style={{
              paddingRight:
                i % logos.length === logos.length - 1 ? 0 : gap,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt || `logo-${i}`}
              height={logo.height || logoHeight}
              style={{
                height: logo.height || logoHeight,
                width: "auto",
                display: "block",
              }}
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* Usage example:

<InfiniteLogoCarousel
  logos={[
    { src: '/logos/stripe.svg', alt: 'Stripe' },
    { src: '/logos/netflix.svg', alt: 'Netflix' },
    { src: '/logos/shopify.svg', alt: 'Shopify' },
    // ...more
  ]}
  speed={20} // slower
  gap={40}
  direction="left"
  pauseOnHover={true}
  logoHeight={56}
/>

Notes:
- Uses Framer Motion for smooth linear animation.
- Duplicate array ensures seamless loop; ResizeObserver recalculates width on changes.
- If logos are SVGs, widths will be stable. For externally-loaded images, ensure they have intrinsic sizes or set logo.height.
*/
