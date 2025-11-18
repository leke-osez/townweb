import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
};

const Floating = ({ children, duration }: Props) => {
  return (
    <motion.div
      animate={{
        y: [0, -8, 4, -12, 0],
        x: [0, 4, -4, 2, 0],
      }}
      transition={{
        duration: duration ?? 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Floating;
