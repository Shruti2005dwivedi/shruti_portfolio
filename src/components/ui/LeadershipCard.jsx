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
      }}
      transition={{ duration: .3 }}
      className="rounded-3xl border border-white/5 p-8"
      style={{
        background:"#16111F",
      }}
    >
      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-violet-300">
        {role}
      </p>

      <p className="mt-6 text-sm text-slate-500">
        {duration}
      </p>
    </motion.div>
  );
}
