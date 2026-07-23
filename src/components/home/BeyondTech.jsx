import { motion } from "framer-motion";

const hobbies = [
  {
    emoji: "🏆",
    title: "Hackathons",
    desc: "Building innovative AI products under pressure and collaborating with amazing teams.",
  },
  {
    emoji: "🌍",
    title: "MUN & Policy",
    desc: "Exploring AI governance, cybersecurity, diplomacy and global policy discussions.",
  },
  {
    emoji: "🎤",
    title: "Public Speaking",
    desc: "Improving communication skills through presentations, workshops and events.",
  },
  {
    emoji: "📚",
    title: "Continuous Learning",
    desc: "Always exploring AI, Blockchain, System Design and emerging technologies.",
  },
  {
    emoji: "🚀",
    title: "Building Side Projects",
    desc: "Turning ideas into products using modern AI tools and full-stack development.",
  },
  {
    emoji: "☕",
    title: "Late Night Builder",
    desc: "Some of my best ideas arrive after midnight with coffee and VS Code.",
  },
];

export default function BeyondTech() {
  return (
    <section className="py-32 overflow-hidden">

      <h2 className="mb-5 text-center text-5xl font-bold text-white">
        Beyond Tech
      </h2>

      <p className="mb-16 text-center text-slate-400">
        Things that shape me beyond coding.
      </p>

      <motion.div
        drag="x"
        dragConstraints={{ left: -1400, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="flex cursor-grab gap-8 px-10"
      >
        {hobbies.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="min-w-[340px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">
              {item.emoji}
            </div>

            <h3 className="text-3xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
