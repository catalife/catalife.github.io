import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/** Cycles through `items` in place with a short slide-up fade. Shows the first item only when reduced motion is preferred. */
const RotatingText = ({ items, intervalMs = 2200, className }: { items: string[]; intervalMs?: number; className?: string }) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || items.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), intervalMs);
    return () => window.clearInterval(id);
  }, [items.length, intervalMs, reduceMotion]);

  return (
    <span className={`relative inline-block overflow-hidden align-bottom ${className ?? ""}`}>
      {/* Invisible longest item reserves the width so nothing around it shifts. */}
      <span className="invisible">{items.reduce((a, b) => (b.length > a.length ? b : a), "")}</span>
      <AnimatePresence initial={false}>
        <motion.span
          key={items[index]}
          className="absolute inset-0"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">{items.join(", ")}</span>
    </span>
  );
};

export default RotatingText;
