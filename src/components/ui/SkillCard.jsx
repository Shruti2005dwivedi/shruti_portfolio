import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-2xl border border-white/5 px-6 py-5 text-center text-white transition-all duration-300 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(168,85,247,.18)]"
      style={{
        background: "#16111F",
      }}
    >
      {skill}
    </motion.div>
  );
}
