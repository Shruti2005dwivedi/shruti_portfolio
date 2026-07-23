import { motion } from "framer-motion";

export default function LeadershipCard({
  icon,
  title,
  role,
  duration,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
    >
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-cyan-300">
        {role}
      </p>

      <p className="mt-4 text-sm text-slate-400">
        {duration}
      </p>
    </motion.div>
  );
}
