import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-14 md:px-20 md:py-16"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-[#B88952]"
      >
        JOURNAL ENTRY 01
      </motion.p>

      <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black leading-tight text-[#F2E9DA]">
            Why I Build???
          </h2>

          <div className="mt-12 space-y-8 text-lg leading-9 text-[#B9AC9A]">
            <p>
              I don't build projects just to fill a portfolio. Most ideas begin
              with a question that refuses to leave me alone.
            </p>

            <p>
              <span className="font-semibold text-[#F2E9DA]">
                "What if technology could solve this?"
              </span>{" "}
              is usually where everything starts. That question leads to
              research papers, whiteboards full of architecture diagrams,
              broken prototypes, late-night debugging sessions and countless
              iterations until the idea finally begins to make sense.
            </p>

            <p>
              Whether it's Artificial Intelligence, Blockchain, Computer Vision
              or Cybersecurity, I'm more interested in understanding{" "}
              <span className="text-white">why something works</span> than
              simply making it work.
            </p>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="rounded-3xl border border-[#3A3028] bg-[#241E18]/70 p-8 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#B88952]">
              CURRENT NOTE
            </p>

            <p className="mt-5 leading-8 text-[#B9AC9A]">
              "Lately I've been fascinated by how trust can be engineered—not
              assumed. That's what pulled me toward Explainable AI, Blockchain
              and Post-Quantum Cryptography."
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#171222]/70 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#B88952]">
              BUILD PHILOSOPHY
            </p>

            <ul className="mt-5 space-y-3 text-[#B9AC9A]">
              <li>→ Learn deeply before building.</li>
              <li>→ Keep experimenting publicly.</li>
              <li>→ Design for people, not just demos.</li>
              <li>→ Curiosity over perfection.</li>
              <li>→ Whether you Win or lose, YOU ARE ALWAYS A WINNER.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
