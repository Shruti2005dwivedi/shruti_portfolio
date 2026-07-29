import { motion } from "framer-motion";

const colors = {
  yellow: {
    bg: "#F6E58D",
    text: "#44351A",
    shadow: "rgba(246,229,141,.35)",
  },

  blue: {
    bg: "#A8D8FF",
    text: "#21384F",
    shadow: "rgba(168,216,255,.35)",
  },

  green: {
    bg: "#C9F7B7",
    text: "#234127",
    shadow: "rgba(201,247,183,.35)",
  },

  pink: {
    bg: "#FFD5E5",
    text: "#55293A",
    shadow: "rgba(255,213,229,.35)",
  },
};

export default function StickyNote({
  color = "yellow",
  title,
  children,
  rotate = 0,
  className = "",
}) {
  const c = colors[color];

  return (
    <motion.div
      whileHover={{
        rotate: 0,
        scale: 1.06,
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 15,
      }}
      style={{
        rotate,
        background: c.bg,
        color: c.text,
        boxShadow: `0 18px 40px ${c.shadow}`,
      }}
      className={`
      relative
      w-[260px]
      rounded-sm
      p-6
      select-none
      ${className}
    `}
    >
      {/* Folded Corner */}

      <div
        className="
        absolute
        right-0
        top-0
        h-8
        w-8
        bg-white/40
        clip-fold
      "
      />

      {/* Paper Texture */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        mix-blend-multiply
      "
        style={{
          backgroundImage: `
          repeating-linear-gradient(
          0deg,
          rgba(0,0,0,.08) 0px,
          rgba(0,0,0,.08) 1px,
          transparent 2px,
          transparent 5px
          )
        `,
        }}
      />

      {/* Tape */}

      <div
        className="
        absolute
        left-1/2
        top-2
        h-7
        w-20
        -translate-x-1/2
        rotate-[-6deg]
        bg-white/25
        backdrop-blur-sm
      "
      />

      {/* Content */}

      <div className="relative z-10">

        <h3
          className="
          mb-4
          text-2xl
          font-bold
          font-['Caveat']
        "
        >
          {title}
        </h3>

        <div
          className="
          space-y-2
          font-['Caveat']
          text-xl
          leading-8
        "
        >
          {children}
        </div>

      </div>

      {/* Shadow */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        rounded-sm
        shadow-[0_20px_45px_rgba(0,0,0,.28)]
      "
      />
    </motion.div>
  );
}
