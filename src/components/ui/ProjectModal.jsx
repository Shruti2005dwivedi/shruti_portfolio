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
              y: 80,
              opacity: 0,
              scale: .96,
            }}

            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}

            exit={{
              y: 80,
              opacity: 0,
            }}

            transition={{
              duration: .45,
            }}

            className="mx-auto mt-12 h-[88vh] w-[92%] max-w-6xl overflow-y-auto rounded-[36px] border border-white/10 bg-[#15111E] p-12"
          >

            <button
              onClick={onClose}
              className="mb-12 text-slate-400 hover:text-white"
            >
              ← Close Journal
            </button>

            <p className="font-mono text-sm tracking-[0.3em] text-violet-400">
              EXPERIMENT {project.no}
            </p>

            <h1 className="mt-5 text-6xl font-black text-white">
              {project.title}
            </h1>

            <p className="mt-3 text-xl text-slate-400">
              {project.subtitle}
            </p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}
