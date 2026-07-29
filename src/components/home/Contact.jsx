import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-8 pt-20 pb-20 md:px-20 overflow-hidden"
    >
      {/* Divider */}

      <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-[#6E573D]/60 to-transparent" />

      {/* Section Label */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-sm uppercase tracking-[0.45em] text-[#B88952]"
      >
        04 • FINAL PAGE
      </motion.p>

      {/* Journal Card */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="relative mx-auto mt-16 max-w-3xl"
      >
        <div className="rotate-[-1.5deg] rounded-[32px] border border-[#6E573D]/40 bg-[#221A16]/95 p-10 shadow-2xl backdrop-blur-xl">

          <p className="font-mono text-xs uppercase tracking-[0.45em] text-[#C79A58]">
            PERSONAL NOTE
          </p>

          <div className="mt-5 border-t border-dashed border-[#6E573D]/50"></div>

          <blockquote
  className="
    mt-8
    text-[22px]
    md:text-[25px]
    leading-[2]
    font-light
    tracking-[0.01em]
    text-[#E8D8C4]
  "
>

            If these pages sparked one for you,
            <br />
            maybe we should write
            <br />
            the next chapter together.”

          </blockquote>

          <div className="mt-8 border-t border-dashed border-[#6E573D]/50"></div>

          <p className="mt-5 text-right font-mono text-sm uppercase tracking-[0.35em] text-[#B88952]">
            — Shruti Dwivedi
          </p>

        </div>

        {/* Sticky Note */}

        <div
          className="
          absolute
          -right-28
          -top-10
          hidden
          lg:block
          rotate-[5deg]
          rounded-2xl
          border
          border-[#B88952]/30
          bg-[#D9B06E]
          p-5
          shadow-2xl
          w-[230px]
        "
        >

          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5A3C20]">
            CURRENT STATUS
          </p>

          <div className="my-3 border-t border-dashed border-[#8E6A43]"></div>

          <ul className="space-y-2 text-[#3A2413]">

            <li>✓ Building AI Systems</li>

            <li>✓ Open to Collaboration</li>

            <li>✓ Always Learning</li>

          </ul>

          <div className="mt-4 border-t border-dashed border-[#8E6A43]"></div>

        </div>

      </motion.div>

      {/* Contact Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .25 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-wrap justify-center gap-5"
      >

        <a
          href="dshruti593@gmail.com"
          className="flex items-center gap-3 rounded-full border border-[#5B4633] bg-[#221A16] px-7 py-4 text-[#E9DCC8] transition-all duration-300 hover:-translate-y-1 hover:border-[#B88952]"
        >
          <FaEnvelope />
          Email
        </a>

        <a
          href="https://github.com/Shruti2005dwivedi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full border border-[#5B4633] bg-[#221A16] px-7 py-4 text-[#E9DCC8] transition-all duration-300 hover:-translate-y-1 hover:border-[#B88952]"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shruti-dwivedi-69aa39335"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full border border-[#5B4633] bg-[#221A16] px-7 py-4 text-[#E9DCC8] transition-all duration-300 hover:-translate-y-1 hover:border-[#B88952]"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </motion.div>

      {/* Footer */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .5 }}
        viewport={{ once: true }}
        className="mt-24 pt-6 text-center"
      >

      </motion.div>

    </section>
  );
}
