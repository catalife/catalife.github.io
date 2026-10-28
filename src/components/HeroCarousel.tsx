import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock } from "lucide-react";
import { courses } from "@/data/courses";

// Slide order, strongest photos first and alternating light/dark so each change is noticeable.
// Courses not listed here (e.g. flyers, which don't crop well) are left out of the carousel.
const ORDER = [
  "Advance Diploma in Clinical Research",
  "SAS Programming",
  "Advance Diploma in Clinical Data Management",
  "R Programming",
  "Public Speaking Certificate Course",
  "Advance Diploma in Medical Writing",
  "Certificate Course of Soft Skills",
  "Regulatory Affairs",
  "Medical Coding",
  "Advance Diploma in Pharmacovigilance",
];

const slides = ORDER.map((title) => courses.find((c) => c.title === title)).filter(
  (c): c is (typeof courses)[number] => Boolean(c?.thumbnail),
);

const INTERVAL_MS = 3500;

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion || slides.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  if (slides.length === 0) return null;
  const s = slides[index];

  return (
    <div
      className="relative aspect-[4/3] max-h-[420px] w-full overflow-hidden rounded-2xl shadow-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={s.title}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to={`/contact?course=${encodeURIComponent(s.title)}`} className="block h-full w-full">
            <img src={s.thumbnail} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="mb-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {s.category}
              </span>
              <p className="font-display text-xl font-bold text-white">{s.title}</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-white/80">
                <Clock className="h-4 w-4" /> {s.duration}
              </p>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute right-4 top-4 z-10 flex gap-1.5">
        {slides.map((c, i) => (
          <button
            key={c.title}
            aria-label={`Show ${c.title}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-secondary" : "w-1.5 bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
