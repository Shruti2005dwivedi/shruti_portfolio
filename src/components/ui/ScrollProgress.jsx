import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        background:
          "linear-gradient(90deg,#B78C56,#D6B07A)",
      }}
      className="fixed left-0 top-0 z-[9999] h-[4px] w-full"
    />
  );
}

