import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
  id="contact"
  className="mx-auto max-w-7xl px-8 pt-16 pb-8 md:px-20"
>
      {/* Divider */}

      <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Section Label */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-sm uppercase tracking-[0.45em] text-[#B88952]"
      >
        04 • FINAL PAGE
      </motion.p>

      {/* Heading */}

      {/* Body */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 max-w-2xl text-xl leading-10 text-[#B9AC9A]"
      >
        If any of these experiments sparked an idea,
        <br />
        I'd love to hear it.
        <br />
        Let's build something meaningful together.
      </motion.p>

        

      {/* Signature */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-28"
      >
      </motion.div>
    </section>
  );
}
