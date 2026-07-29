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
          className="font-mono text-sm uppercase tracking-[0.35em] text-[#C49A6C]"
        >
          02 • SELECTED Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-5xl font-black text-[#F5E9D7] md:text-6xl"
        >
          Selected Projects
        </motion.h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C7B59B]">
          Every project began with a question. These Projects survived
          countless iterations, failures and late-night debugging sessions.
        </p>

        {/* Journal Cards */}

        <div className="mt-14 flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-hide">

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
                w-[300px]
                h-[245px]
                shrink-0
                cursor-pointer
                snap-start
                rounded-[24px]
                border
                border-[#4A3B32]
                bg-[#231C18]/90
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#B78C56]
                hover:shadow-[0_10px_35px_rgba(183,140,86,0.18)]
              "
            >
              <div className="flex items-center justify-between">

                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C49A6C]">
                  Experiment {project.no}
                </p>

                <span className="text-xs text-[#8E7D68]">
                  {project.year}
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-bold text-[#F5E9D7]">
                {project.title}
              </h3>

              <p className="mt-2 text-sm italic text-[#A79278]">
                {project.subtitle}
              </p>

              <p className="mt-5 line-clamp-3 leading-7 text-[#C7B59B]">
                {project.question}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#4A3B32] pt-4">

                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#8E7D68]">
                  Journal Entry
                </span>

                <span className="text-sm font-medium text-[#C49A6C] transition group-hover:translate-x-1">
                  Open →
                </span>

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
