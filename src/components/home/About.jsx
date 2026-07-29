import { motion } from "framer-motion";
import polaroidImg from "../../assets/images/Shruti_polaroid.jpeg";
const notes = [
  {
    title: "Curiosity",
    text: "Every meaningful project begins with one question:\n\n'Can technology genuinely solve this?'",
    rotate: "-rotate-2",
    color: "bg-[#F7E9A8]",
  },
  {
    title: "Learning",
    text: "I don't chase tutorials.\n\nI chase understanding.",
    rotate: "rotate-2",
    color: "bg-[#F9F2C8]",
  },
  {
    title: "Building",
    text: "I enjoy turning messy ideas into systems people can actually use.",
    rotate: "-rotate-1",
    color: "bg-[#FFF4BE]",
  },
  {
    title: "Mindset",
    text: "Learn.\nBuild.\nReflect.\nRepeat.",
    rotate: "rotate-1",
    color: "bg-[#F8EDAF]",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-24 md:px-20"
    >
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono uppercase tracking-[0.45em] text-sm text-[#B88952]"
      >
        ENGINEER'S JOURNAL
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .1 }}
        className="mt-6 text-5xl font-black text-[#F5E9D7]"
      >
        THE WAY I THINK.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .2 }}
        className="mt-6 max-w-3xl leading-8 text-[#B9AC9A]"
      >
        Behind every project lies a notebook filled with random ideas,
        architecture sketches, failed experiments and endless "what if..."
        questions.
      </motion.p>

      {/* PAPER */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .3 }}
        className="
          relative
          mt-20
          overflow-hidden
          rounded-[35px]
          border
          border-[#6B533C]
          bg-[#EEE4D1]
          p-14
          shadow-[0_35px_90px_rgba(0,0,0,.45)]
        "
      >
        {/* notebook lines */}

        <div className="absolute inset-0 opacity-20">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="border-b border-[#8A7765]"
              style={{
                marginTop: "34px",
              }}
            />
          ))}
        </div>

        {/* red margin */}

        <div className="absolute left-20 top-0 h-full w-[2px] bg-red-300/60"></div>

        {/* coffee stain */}

        <div className="absolute right-20 top-12 h-32 w-32 rounded-full border-[12px] border-[#A06D3A]/20"></div>

        {/* notes */}

        <div className="relative grid gap-10 md:grid-cols-2">

          {notes.map((note, index) => (
            <motion.div
              key={note.title}
              whileHover={{
                y: -8,
                rotate: 0,
                scale: 1.03,
              }}
              transition={{
                duration: .3,
              }}
              className={`
                ${note.color}
                ${note.rotate}
                relative
                rounded-xl
                p-7
                shadow-2xl
                cursor-default
              `}
            >
              {/* push pin */}

              <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#B61F24] shadow"></div>

              <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-[#755634]">
                {note.title}
              </p>

              <p
                className="
                  mt-5
                  whitespace-pre-line
                  font-['Caveat']
                  text-[28px]
                  leading-10
                  text-[#3D2B1F]
                "
              >
                {note.text}
              </p>
            </motion.div>
          ))}
        </div>
<motion.div
  initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
  whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
  whileHover={{
    y: -10,
    rotate: -4,
    scale: 1.04,
  }}
  transition={{ duration: 0.4 }}
  className="
    absolute
    left-14
    bottom-10
    w-52
    rounded-md
    bg-white
    p-3
    shadow-[0_20px_45px_rgba(0,0,0,.35)]
    z-30
  "
>

  {/* Push Pin */}

  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      -top-2
      h-5
      w-5
      rounded-full
      bg-red-600
      border-2
      border-red-800
      shadow-lg
    "
  />

  {/* Tape */}

  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-1
      h-5
      w-16
      rotate-[-5deg]
      bg-[#F6E7A8]/70
    "
  />

  <img
    src={polaroidImg}
    alt="Shruti"
    className="
      h-60
      w-full
      object-cover
      rounded-sm
    "
  />

  <div className="pt-4 text-center">


    <h3
      className="
        mt-2
        font-['Caveat']
        text-3xl
        text-[#4A3425]
      "
    >
      Team Anveshak Netram at Innohack 2.0 
    </h3>

  </div>

</motion.div>
        {/* signature */}

        <div className="relative mt-44 text-right">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7D6956]">
            Signed
          </p>

          <p className="mt-2 font-['Caveat'] text-5xl text-[#4E3524]">
            Shruti Dwivedi
          </p>

          <p className="mt-2 text-sm text-[#86715E]">
            Engineering Journal • 2026
          </p>
        </div>
      </motion.div>
    </section>
  );
}
