import { useScrollContext } from "@contexts/ScrollContext";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DescriptionSection({ level }: { level: string }) {
  const { scrollRef } = useScrollContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  return (
    <section
      ref={sectionRef}
      id={level}
      className="relative flex h-full w-full items-center justify-center"
    >
      {/* card */}
      <motion.div
        className="mx-8 flex min-h-3/4 w-full flex-col items-center justify-center rounded-3xl bg-yellow-100 text-4xl font-bold text-gray-800 shadow-2xl"
        style={{
          scale,
          opacity,
        }}
      >
        <h2 className="text-6xl text-blue-500">{level}</h2>
        <p className="mt-4 text-2xl">Description Section</p>
      </motion.div>
    </section>
  );
}
