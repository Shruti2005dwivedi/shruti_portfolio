import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-8"
    >
      <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-16 backdrop-blur-xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-black text-white"
        >
          Let's Build Something Amazing
        </motion.h2>

        <p className="mt-8 text-center text-lg leading-8 text-slate-400">
          I'm always excited to collaborate on AI, software engineering,
          blockchain and impactful products.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <a
            href="dshruti593@gmail.com"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <MdEmail size={28} className="text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-slate-400">your@email.com</p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <FaLinkedin size={26} className="text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">LinkedIn</h3>
              <p className="text-slate-400">Connect with me</p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <FaGithub size={26} className="text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">GitHub</h3>
              <p className="text-slate-400">View my projects</p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <HiDocumentText size={28} className="text-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">Resume</h3>
              <p className="text-slate-400">Download PDF</p>
            </div>
          </a>

        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-cyan-400 px-10 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
            Say Hello 👋
          </button>
        </div>

      </div>
    </section>
  );
}
