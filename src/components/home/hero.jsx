import BackgroundGlow from "../ui/BackgroundGlow";
import { motion } from "framer-motion";
import Spotlight from "../ui/Spotlight";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
   <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-40 text-center">

      {/* Small Heading */}
        <BackgroundGlow />
        <Spotlight />
        <div className="relative z-10">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 uppercase tracking-[0.45em] text-slate-400 text-sm"
      >
        AI × DATA × SECURITY
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="leading-[0.88] font-black text-white"
      >
        <span className="block text-7xl md:text-[8rem]">
          SHRUTI
        </span>

        <span className="block text-7xl md:text-[8rem] text-cyan-400">
          DWIVEDI
        </span>
      </motion.h1>

      {/* Tagline */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 max-w-3xl text-xl md:text-2xl leading-relaxed text-slate-300"
      >
        Building intelligent software, AI-powered products,
        and impactful technology that creates meaningful change.
      </motion.p>

      {/* Skills */}

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.9 }}
  className="mt-10 text-2xl text-cyan-300 font-semibold"
>
  <TypeAnimation
    sequence={[
      "AI Engineer", 2000,
      "Blockchain Developer", 2000,
      "Computer Vision Enthusiast", 2000,
      "Generative AI Builder", 2000,
      "Problem Solver", 2000,
    ]}
    wrapper="span"
    speed={45}
    repeat={Infinity}
  />
</motion.div>

      {/* Buttons */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="mt-14 flex flex-wrap items-center justify-center gap-5"
>
  <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]">
    Explore My Work
  </button>

  <button className="rounded-full border border-cyan-400/40 bg-white/5 px-8 py-4 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10">
    Download Resume
  </button>
</motion.div>

      {/* Scroll Indicator */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, 8, 0],
  }}
  transition={{
    opacity: { delay: 1.6, duration: 0.8 },
    y: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="mt-20 flex flex-col items-center text-slate-500"
>
  <span className="text-xs uppercase tracking-[0.4em]">
    Scroll
  </span>

  <span className="mt-3 text-3xl">
    ↓
  </span>
</motion.div>
    </div>
    </section>
  );
}

