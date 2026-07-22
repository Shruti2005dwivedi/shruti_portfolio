import BackgroundGlow from "../ui/BackgroundGlow";
import { motion } from "framer-motion";
import Spotlight from "../ui/Spotlight";

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
        className="leading-none font-black text-white"
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
        className="mt-10 max-w-2xl text-2xl leading-relaxed text-slate-300"
      >
        Building intelligent software, AI-powered products,
        and impactful technology that creates meaningful change.
      </motion.p>

      {/* Skills */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >

        {[
          "AI Engineer",
          "Blockchain",
          "Computer Vision",
          "Generative AI",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/40 bg-white/5 px-5 py-3 text-sm text-cyan-300 backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            {item}
          </span>
        ))}

      </motion.div>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-14 flex gap-6"
      >
        <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105">
          Explore Work
        </button>

        <button className="rounded-full border border-cyan-400 px-8 py-4 text-white transition hover:bg-cyan-400/10">
          Resume
        </button>
      </motion.div>

      {/* Scroll */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 text-slate-500"
      >
        ↓ Scroll
      </motion.div>
    </div>
    </section>
  );
}

