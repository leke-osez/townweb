import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ShakeIcon({ children }: Props) {
  return (
    <motion.div
      animate={{
        x: [-2, 2, -2, 2, 0],
        rotate: [-2, 2, -2, 2, 0],
      }}
      transition={{
        // duration: 0.35,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.7,
        repeatDelay: 4,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
