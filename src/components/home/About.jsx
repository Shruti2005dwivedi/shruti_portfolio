import { motion } from "framer-motion";
import StatCard from "../ui/StatCard";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <div className="mb-20 text-center">

  <p className="mb-3 uppercase tracking-[0.4em] text-cyan-400">
    WHO AM I
  </p>

  <h2 className="text-5xl font-black text-white">
    About Me
  </h2>

  <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-cyan-400"></div>

</div>

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Left */}

        <div>
          <div className="h-[430px] rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-xl flex items-center justify-center">

            <div className="text-center">

  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-5xl">
    👩🏻‍💻
  </div>

  <p className="mt-6 text-slate-500">
    Professional Photo Coming Soon
  </p>

</div>

          </div>
        </div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white">
            AI Engineer & Builder
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-400">
            I'm an <span className="text-cyan-400 font-semibold">AI & Data Science</span> undergraduate passionate about building <span className="text-cyan-400 font-semibold">intelligent software</span>, <span className="text-cyan-400 font-semibold">blockchain applications</span>, and <span className="text-cyan-400 font-semibold">AI-powered products</span> that solve real-world problems.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-6">

            <StatCard number="9.35" label="CGPA" />
            <StatCard number="20+" label="Projects" />
            <StatCard number="10+" label="Hackathons" />
            <StatCard number="6+" label="Leadership Roles" />

          </div>

        </motion.div>

      </div>
    </section>
  );
}
