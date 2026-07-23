import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
    >
      {skill}
    </motion.div>
  );
}
