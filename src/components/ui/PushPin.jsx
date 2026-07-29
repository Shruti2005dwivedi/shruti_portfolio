import { motion } from "framer-motion";

const colors = {
  red: {
    top: "#E84D4D",
    mid: "#C53030",
    light: "#FF8A8A",
  },

  blue: {
    top: "#5DA9FF",
    mid: "#2B6CB0",
    light: "#A8D6FF",
  },

  yellow: {
    top: "#F6D64A",
    mid: "#D4A017",
    light: "#FFF3A8",
  },

  green: {
    top: "#63D471",
    mid: "#2F855A",
    light: "#B8F7C0",
  },
};

export default function PushPin({
  color = "red",
  className = "",
}) {
  const c = colors[color];

  return (
    <motion.div
      whileHover={{
        scale: 1.18,
        rotate: 12,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 14,
      }}
      className={`absolute ${className}`}
    >
      {/* Needle */}

      <div
        className="
        absolute
        left-1/2
        top-6
        h-8
        w-[2px]
        -translate-x-1/2
        rounded-full
        bg-gradient-to-b
        from-gray-300
        via-gray-500
        to-gray-800
      "
      />

      {/* Head */}

      <div
        className="relative h-6 w-6 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 25%, ${c.light}, ${c.top} 45%, ${c.mid} 100%)`,
          boxShadow: `
            0 10px 18px rgba(0,0,0,.35),
            inset -2px -4px 5px rgba(0,0,0,.28),
            inset 2px 2px 4px rgba(255,255,255,.45)
          `,
        }}
      >
        {/* Shine */}

        <div
          className="
          absolute
          left-[5px]
          top-[4px]
          h-2
          w-2
          rounded-full
          bg-white/70
          blur-[1px]
        "
        />

      </div>
    </motion.div>
  );
}
