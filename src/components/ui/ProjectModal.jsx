import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md"
        >
          <motion.div
            initial={{
              y: 60,
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: 60,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mx-auto mt-10 h-[90vh] w-[92%] max-w-6xl overflow-y-auto rounded-[34px] border border-[#4A3B32] bg-[#1D1815] p-12"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="mb-10 text-[#A8957A] transition hover:text-[#F5E9D7]"
            >
              ← Close Journal
            </button>

            {/* Heading */}

            <p className="font-mono text-sm uppercase tracking-[0.35em] text-[#C49A6C]">
              Experiment {project.no}
            </p>

            <h1 className="mt-5 text-6xl font-black text-[#F5E9D7]">
              {project.title}
            </h1>

            <p className="mt-3 text-xl italic text-[#B99A71]">
              {project.subtitle}
            </p>

            {/* Cover */}

            <div className="mt-10 overflow-hidden rounded-3xl border border-[#4A3B32]">
              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover"
              />
            </div>

            {/* Journal */}

            <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">

              {/* LEFT */}

              <div>

                <section className="mb-12">
                  <h3 className="mb-4 font-mono uppercase tracking-[0.25em] text-[#C49A6C]">
                    Overview
                  </h3>

                  <p className="leading-8 text-[#C8B59A]">
                    {project.overview}
                  </p>
                </section>

                <section className="mb-12">
                  <h3 className="mb-4 font-mono uppercase tracking-[0.25em] text-[#C49A6C]">
                    Problem
                  </h3>

                  <p className="leading-8 text-[#C8B59A]">
                    {project.problem}
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 font-mono uppercase tracking-[0.25em] text-[#C49A6C]">
                    Solution
                  </h3>

                  <p className="leading-8 text-[#C8B59A]">
                    {project.solution}
                  </p>
                </section>

              </div>

              {/* RIGHT */}

              <div>

                <div className="rounded-3xl border border-[#4A3B32] bg-[#231C18] p-6">

                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C49A6C]">
                    Tech Stack
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#5C4938] px-4 py-2 text-sm text-[#E3D2B9]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="mt-8 rounded-3xl border border-[#4A3B32] bg-[#231C18] p-6">

                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C49A6C]">
                    Gallery
                  </p>

                  <div className="mt-5 space-y-4">
                    {project.gallery.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        className="rounded-2xl border border-[#4A3B32]"
                      />
                    ))}
                  </div>

                </div>

              </div>

            </div>

            {/* Footer */}

            <div className="mt-14 flex justify-between border-t border-[#4A3B32] pt-8">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#C49A6C] hover:text-[#F5E9D7]"
              >
                GitHub →
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#C49A6C] hover:text-[#F5E9D7]"
                >
                  Live Demo →
                </a>
              )}

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
