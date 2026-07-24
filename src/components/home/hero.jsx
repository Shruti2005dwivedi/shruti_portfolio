import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { personalInfo } from "../../data/portfolio";
import BackgroundGlow from "../ui/BackgroundGlow";
import shrutiImg from "../../assets/images/shruti.jpeg";
export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-8 py-14 md:px-20 md:py-16"
    >
      <BackgroundGlow />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-20">

        {/* LEFT */}

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm uppercase tracking-[0.4em] text-violet-400"
          >
            ENGINEERING JOURNAL • ISSUE 01
          </motion.p>

          <p className="mt-5 text-sm tracking-wide text-slate-500">
          AI & Data Science @ VIT Pune
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl xl:text-7xl"
          >
            Hi, I'm
            <br />

            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 max-w-3xl text-xl leading-9 text-slate-400"
          >
            I enjoy building intelligent software where{" "}
            <span className="font-semibold text-white">
              Artificial Intelligence
            </span>{" "}
            meets{" "}
            <span className="font-semibold text-white">
              Blockchain
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Security
            </span>{" "}
            and real-world engineering challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <span className="font-medium text-slate-500">
              Currently Exploring —
            </span>

            <span className="text-xl font-semibold text-violet-300">
              <TypeAnimation
                sequence={[
                  "Explainable AI",
                  2000,
                  "Computer Vision",
                  2000,
                  "Blockchain",
                  2000,
                  "Distributed Systems",
                  2000,
                  "Post-Quantum Cryptography",
                  2000,
                ]}
                repeat={Infinity}
                speed={45}
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-14 flex flex-wrap gap-5"
          >
            <Link
              to="projects"
              smooth
              duration={700}
              className="cursor-pointer rounded-full px-8 py-4 font-semibold text-white transition hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg,#A855F7,#C084FC)",
              }}
            >
              View Experiments →
            </Link>

            <a
              href="/Shruti_Dwivedi_Resume.pdf"
              download
              className="rounded-full border border-white/10 bg-[#16111F] px-8 py-4 font-semibold text-slate-300 transition hover:border-violet-400 hover:text-white"
            >
              Resume ↓
            </a>
          </motion.div>

          <div className="mt-16 flex items-center gap-3">

            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

            <p className="text-sm text-slate-500">
              Currently building{" "}
              <span className="text-white">
                CreditSense AI
              </span>
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative hidden lg:flex items-center justify-center">

          <div className="relative">

            <div className="flex h-[430px] w-[430px] items-center justify-center overflow-hidden rounded-full border border-violet-500/20 bg-[#16111F]">

              {/* Replace later with your image */}

              {/* Photo */}

<div className="flex h-[430px] w-[380px] overflow-hidden rounded-[32px] border border-violet-500/20 bg-[#16111F] shadow-xl">

  <img
  src={shrutiImg}
  alt="Shruti Dwivedi"
  className="h-full w-full object-cover"
/>

</div>

            </div>

            <div className="absolute -right-8 top-10 rounded-3xl border border-violet-500/20 bg-[#16111F]/90 p-6 backdrop-blur-xl">

              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-violet-300">
                CURRENT FOCUS
              </p>

              <ul className="space-y-3 text-slate-300">

                <li>AI Systems</li>

                <li>CreditSense AI</li>

                <li>System Design</li>

                <li>Open Source</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mx-auto mt-20 flex max-w-7xl justify-end border-t border-white/10 pt-6"
      >
        <Link
          to="projects"
          smooth
          duration={700}
          className="cursor-pointer text-sm uppercase tracking-[0.35em] text-slate-500 transition hover:text-violet-300"
        >
          Explore My Work →
        </Link>
      </motion.div>
    </section>
  );
}
