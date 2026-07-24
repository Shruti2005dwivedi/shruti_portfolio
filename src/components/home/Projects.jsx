import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "../ui/ProjectModal";
import { projects } from "../../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="mx-auto max-w-7xl px-8 py-14 md:px-20 md:py-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm uppercase tracking-[0.35em] text-violet-400"
        >
          02 • SELECTED EXPERIMENTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-black text-white md:text-6xl"
        >
          Selected Experiments
        </motion.h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Every project began as a question. These are the experiments that
          survived countless iterations, failures and late-night debugging
          sessions.
        </p>

        {/* Cards */}

        <div className="mt-16 flex gap-7 overflow-x-auto pb-6 snap-x scrollbar-hide">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="
                group
                w-[320px]
                h-[270px]
                shrink-0
                cursor-pointer
                snap-start
                rounded-[28px]
                border
                border-white/10
                bg-[#171222]/70
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-400/40
                hover:bg-[#1d1629]
              "
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-300">
                Experiment {project.no}
              </p>

              <h3 className="mt-7 text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                {project.subtitle}
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                {project.question}
              </p>

              <div className="mt-8 border-t border-white/10 pt-4 text-sm uppercase tracking-[0.2em] text-slate-500 transition group-hover:text-violet-300">
                Open Journal →
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
