import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "../ui/ProjectModal";
import { projects } from "../../data/Projects";
import journalPhoto from "../../assets/images/02.jpeg";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="mx-auto w-full max-w-[1700px] px-8 py-20 md:px-12 lg:px-16"
      >
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm uppercase tracking-[0.35em] text-[#C49A6C]"
        >
          02 • SELECTED PROJECTS
        </motion.p>

        {/* Heading */}
        <div className="relative">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-5 text-5xl font-black text-[#F5E9D7] md:text-6xl"
  >
    Selected Projects
  </motion.h2>

  {/* Mini Journal Polaroid */}
  <motion.div
    initial={{ opacity: 0, y: 20, rotate: 5 }}
    whileInView={{ opacity: 1, y: 0, rotate: 4 }}
    viewport={{ once: true }}
    whileHover={{
      rotate: 0,
      y: -6,
      scale: 1.03,
    }}
    transition={{ duration: 0.35 }}
    className="
      absolute
      left-[700px]
      top-[-35px]
      hidden
      w-[150px]
      rotate-[4deg]
      bg-[#F6E8C8]
      p-2
      pb-5
      shadow-[0_15px_35px_rgba(0,0,0,0.35)]
      md:block
    "
  >

    {/* Push Pin */}
    <div
      className="
        absolute
        -top-3
        left-1/2
        h-5
        w-5
        -translate-x-1/2
        rounded-full
        bg-[#A92828]
        shadow-md
      "
    />

    <img
      src={journalPhoto}
      alt="Journal memory"
      className="h-[125px] w-full object-cover"
    />

    <p className="mt-2 text-center font-['Caveat'] text-lg text-[#51361E]">
      @ iSIH • 2025
    </p>

  </motion.div>

</div>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C7B59B]">
          " Every project began with a question. These projects survived
          through ideation, failures and late-night debugging sessions. "
        </p>

        {/* Journal Cards */}
<div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">

  {projects.map((project) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="
        group
        relative
        min-h-[300px]
        w-full
        rounded-[24px]
        border
        border-[#4A3B32]
        bg-[#231C18]/90
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#B78C56]
        hover:bg-[#291F19]
        hover:shadow-[0_15px_45px_rgba(183,140,86,0.18)]
      "
    >
              {/* Top Row */}
              <div className="flex items-center justify-between">

                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C49A6C]">
                  Project {project.no}
                </p>

                <span className="text-xs text-[#8E7D68]">
                  {project.year}
                </span>

              </div>

              {/* Project Title */}
              <h3 className="mt-7 text-3xl font-bold text-[#F5E9D7]">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-3 text-sm italic text-[#A79278]">
                {project.subtitle}
              </p>

              {/* Question */}
              <p className="mt-7 line-clamp-3 text-[15px] leading-7 text-[#C7B59B]">
                {project.question}
              </p>

              {/* Bottom */}
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-[#4A3B32] pt-4">

                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#8E7D68]">
  {project.year}
</span>

                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className="text-sm font-medium text-[#C49A6C] transition-all duration-300 hover:text-[#F5E9D7] group-hover:translate-x-1"
>
  GitHub ↗
</a>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
