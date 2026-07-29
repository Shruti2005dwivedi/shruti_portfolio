import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const {
    title,
    subtitle,
    description,
    github,
    image,
  } = project;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-white/5"
      style={{
        background: "#16111F",
      }}
    >
      {/* Image */}

      <div className="h-52 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

      </div>

      {/* Content */}

      <div className="p-7">

        <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber-400">
          Experiment {(index + 1).toString().padStart(2, "0")}
        </p>

        <h3 className="mt-4 text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-lg text-amber-300">
          {subtitle}
        </p>

        <p className="mt-5 line-clamp-3 leading-8 text-slate-400">
          {description}
        </p>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 text-amber-300 transition hover:text-amber-200"
        >
          <FaGithub />
          View on GitHub →
        </a>

      </div>
    </motion.article>
  );
}
