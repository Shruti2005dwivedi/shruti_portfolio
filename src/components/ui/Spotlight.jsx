import { motion } from "framer-motion";

export default function Spotlight() {
  return (
    <>
      {/* Main Spotlight */}

      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -translate-x-1/2
          -translate-y-1/2
          h-[700px]
          w-[700px]
          rounded-full
          blur-[170px]
          opacity-20
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.65) 0%, rgba(192,132,252,0.15) 55%, transparent 80%)",
        }}
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          x: [0, -60, 60, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-20
          bottom-20
          h-[400px]
          w-[400px]
          rounded-full
          blur-[140px]
          opacity-15
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 75%)",
        }}
      />
    </>
  );
}
