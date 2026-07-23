import { motion } from "framer-motion";

export default function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-cyan-500/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
    >
      <h3 className="text-5xl font-black text-cyan-400">
        {number}
      </h3>

      <p className="mt-3 text-slate-400 tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}
