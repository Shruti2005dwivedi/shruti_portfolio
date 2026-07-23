import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech,
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Image Placeholder */}

      <div className="flex h-64 items-center justify-center bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 transition duration-500 group-hover:scale-105">

        <span className="text-slate-500">
          Project Preview
        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
            Live Demo
          </button>

          <button className="rounded-full border border-cyan-400/40 px-6 py-3 text-white">
            GitHub
          </button>

        </div>

      </div>
    </motion.div>
  );
}
