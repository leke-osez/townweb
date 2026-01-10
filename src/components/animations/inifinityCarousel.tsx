import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/style";

interface LogoItem {
  id: number;
  name: string;
  content: string;
}

// const logos: LogoItem[] = [
//   { id: 1, name: "TechCorp", content: "TECHCORP" },
//   { id: 2, name: "CloudSync", content: "CLOUDSYNC" },
//   { id: 3, name: "DataFlow", content: "DATAFLOW" },
//   { id: 4, name: "NeuralAI", content: "NEURAL AI" },
//   { id: 5, name: "PixelPro", content: "PIXELPRO" },
//   { id: 6, name: "WebForge", content: "WEBFORGE" },
//   { id: 7, name: "CodeLab", content: "CODELAB" },
//   { id: 8, name: "DevStack", content: "DEVSTACK" },
// ];

type Props = {
  logoList: LogoItem[];
  type?: "text" | "image" | "comp";
  imgClass?: string;
  imgWidth: number;
  imgMargin: number;
};

export const InfinityCarousel = ({
  logoList = [],
  type = "text",
  imgClass,
  imgWidth,
  imgMargin,
}: Props) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logoList, ...logoList];

  // Calculate exact width: each logo item is 192px (w-48) + 64px (mx-8 = 32px each side)
  const logoWidth = 208; // 192px + 64px
  const totalWidth = logoList.length * logoWidth;

  return (
    <div className="relative w-full overflow-hidden bg-inherit">
      <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black pointer-events-none z-10 w-full overflow-x-hidden" />

      <motion.div
        className="flex"
        animate={{
          x: [-totalWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="shrink-0 mx-2 group cursor-pointer "
            onMouseEnter={() => setHoveredId(logo.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.div
              className="relative w-48 h-12 flex items-center justify-center"
              style={{ width: imgWidth }}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                className={`text-2xl font-bold tracking-wider ${
                  hoveredId === logo.id
                    ? "text-logo-active"
                    : "text-logo-inactive"
                }`}
                style={{
                  filter:
                    hoveredId === logo.id
                      ? "drop-shadow(0 0 20px hsl(var(--glow) / 0.5))"
                      : "none",
                }}
              >
                {/* {type  === 'text' && <p>{logo.content}</p> } */}
                {type === "image" && (
                  <img
                    src={logo.content}
                    alt={logo.name}
                    className={cn("object-contain w-full", imgClass)}
                  />
                )}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
