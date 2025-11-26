import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  open: boolean;
  setOpen: (T: boolean) => void;
  children: ReactNode;
};

const SlideOut = ({ open, setOpen, children }: Props) => {
  return (
    <div>
      {/* Slide-Out Menu */}
      <motion.aside
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { x: 0 },
          closed: { x: "100%" },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6"
      >
        {children}
      </motion.aside>

      {/* Backdrop */}
      {open && (
        <motion.div
          onClick={() => setOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black"
        />
      )}
    </div>
  );
};

export default SlideOut;
