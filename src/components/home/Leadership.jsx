import { motion } from "framer-motion";
import { journey } from "../../data/journey";

const colors = {
  education: "border-slate-500/30 text-[#B9AC9A]",
  club: "border-emerald-500/30 text-emerald-300",
  award: "border-amber-500/30 text-amber-300",
  mun: "border-sky-500/30 text-sky-300",
  hackathon: "border-violet-500/30 text-[#B88952]",
  project: "border-pink-500/30 text-pink-300",
};

export default function Leadership() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-8 py-14 md:px-20 md:py-16"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-sm uppercase tracking-[0.35em] text-[#B88952]"
      >
        03 • CHECKPOINTS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-5 text-5xl font-black text-[#F2E9DA]"
      >
        Engineering Journey
      </motion.h2>

      <div className="mt-16 overflow-x-auto scrollbar-hide">
        <div className="flex w-max gap-20">

          {["2024", "2025", "2026"].map((year) => (

            <div key={year} className="min-w-[340px]">

              <h3 className="mb-6 text-2xl font-bold text-[#F2E9DA]">
                {year}
              </h3>

              <div className="mb-6 h-px bg-white/10" />

              <div className="flex flex-wrap gap-3">

                {journey
                  .filter((item) => item.year === year)
                  .map((item) => (

                    <motion.div
                      whileHover={{ y: -4, scale: 1.04 }}
                      key={item.title}
                      className={`
                        rounded-full
                        border
                        px-4
                        py-2
                        text-sm
                        transition-all
                        duration-300
                        bg-[#171222]
                        ${colors[item.type]}
                      `}
                    >
                      {item.title}
                    </motion.div>

                  ))}

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}
