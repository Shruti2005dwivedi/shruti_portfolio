import { motion } from "framer-motion";
import polaroidImg from "../../assets/images/Shruti_polaroid.jpeg";

const notes = [
  {
    title: "Curiosity",
    type: "curiosity",
    text: "Every meaningful project begins with one question:",
    question: "'Can technology genuinely solve this?'",
    rotate: "-rotate-2",
    color: "bg-[#F7E9A8]",
  },
  {
    title: "Learning",
    type: "learning",
    text: "I learn by building, experimenting, and exposing myself to new problems.",
    rotate: "rotate-2",
    color: "bg-[#F9F2C8]",
  },
  {
    title: "Building",
    type: "building",
    text: "I enjoy turning messy ideas into systems people can actually use.",
    rotate: "-rotate-1",
    color: "bg-[#FFF4BE]",
  },
  {
    title: "Mindset",
    type: "mindset",
    rotate: "rotate-1",
    color: "bg-[#F8EDAF]",
  },
];

const mindsetSteps = ["Learn", "Build", "Reflect", "Repeat"];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-24 md:px-20"
    >
      {/* SECTION HEADER */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm uppercase tracking-[0.45em] text-[#B88952]"
      >
        03 . IDEATION 
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-6 text-5xl font-black text-[#F5E9D7]"
      >
        THE WAY I THINK.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-3xl leading-8 text-[#B9AC9A]"
      >
        Behind every project lies a notebook filled with random ideas, sketches, and notes. I believe that the way I think is reflected in the way I build. Here are some of the principles that guide my work.
      </motion.p>

      {/* NOTEBOOK PAPER */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
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
        {/* Notebook lines */}

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

        {/* Red notebook margin */}

        <div className="absolute left-20 top-0 h-full w-[2px] bg-red-300/60" />

        {/* Coffee stain */}

        <div className="absolute right-20 top-12 h-32 w-32 rounded-full border-[12px] border-[#A06D3A]/20" />

        {/* NOTES */}

        <div className="relative grid gap-10 md:grid-cols-2">

          {notes.map((note) => (
            <motion.div
              key={note.title}
              whileHover={{
                y: -8,
                rotate: 0,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`
                ${note.color}
                ${note.rotate}
                relative
                min-h-[300px]
                rounded-xl
                p-7
                shadow-2xl
                cursor-default
              `}
            >
              {/* Push pin */}

              <div
                className="
                  absolute
                  left-1/2
                  top-2
                  h-4
                  w-4
                  -translate-x-1/2
                  rounded-full
                  bg-[#B61F24]
                  shadow
                "
              />

              {/* Note heading */}

              <p
                className="
                  mt-3
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#755634]
                "
              >
                {note.title}
              </p>

              {/* CURIOSITY */}

              {note.type === "curiosity" && (
                <div
                  className="
                    mt-7
                    font-['Segoe_Print']
                    text-[27px]
                    leading-[1.8]
                    text-[#3D2B1F]
                  "
                >
                  <p>{note.text}</p>

                  <p className="mt-7 font-bold">
                    {note.question}
                  </p>
                </div>
              )}

              {/* LEARNING */}

              {note.type === "learning" && (
                <p
                  className="
                    mt-8
                    font-['Segoe_Print']
                    text-[27px]
                    font-medium
                    leading-[1.8]
                    text-[#3D2B1F]
                  "
                >
                  {note.text}
                </p>
              )}

              {/* BUILDING */}

              {note.type === "building" && (
                <p
                  className="
                    mt-8
                    font-['Segoe_Print']
                    text-[27px]
                    font-medium
                    leading-[1.8]
                    text-[#3D2B1F]
                  "
                >
                  {note.text}
                </p>
              )}

              {/* MINDSET FLOW */}

              {note.type === "mindset" && (
                <div className="relative mt-8 flex h-[210px] items-center justify-center">

                  {/* Connecting loop */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[145px]
                      w-[145px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border-2
                      border-dashed
                      border-[#806044]/45
                    "
                  />

                  {/* Step 1 */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#F4DEA0]
                      px-5
                      py-2
                      shadow-md
                    "
                  >
                    <span className="font-['Segoe_Print'] text-xl font-semibold text-[#3D2B1F]">
                      Learn
                    </span>
                  </div>

                  {/* Step 2 */}

                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#F4DEA0]
                      px-5
                      py-2
                      shadow-md
                    "
                  >
                    <span className="font-['Segoe_Print'] text-xl font-semibold text-[#3D2B1F]">
                      Build
                    </span>
                  </div>

                  {/* Step 3 */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      rounded-full
                      bg-[#F4DEA0]
                      px-5
                      py-2
                      shadow-md
                    "
                  >
                    <span className="font-['Segoe_Print'] text-xl font-semibold text-[#3D2B1F]">
                      Reflect
                    </span>
                  </div>

                  {/* Step 4 */}

                  <div
                    className="
                      absolute
                      left-0
                      top-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#F4DEA0]
                      px-5
                      py-2
                      shadow-md
                    "
                  >
                    <span className="font-['Segoe_Print'] text-xl font-semibold text-[#3D2B1F]">
                      Repeat
                    </span>
                  </div>

                  {/* Center */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E9D58E]
                      shadow-inner
                    "
                  >
                    <span className="font-['Segoe_Print'] text-lg font-bold text-[#5A3E2A]">
                      ↻
                    </span>
                  </div>

                  {/* Arrows */}

                  <span className="absolute left-[57%] top-[16%] rotate-[35deg] text-xl text-[#806044]">
                    →
                  </span>

                  <span className="absolute bottom-[20%] right-[15%] rotate-[120deg] text-xl text-[#806044]">
                    →
                  </span>

                  <span className="absolute bottom-[17%] left-[27%] rotate-[215deg] text-xl text-[#806044]">
                    →
                  </span>

                  <span className="absolute left-[17%] top-[21%] rotate-[305deg] text-xl text-[#806044]">
                    →
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* POLAROID */}

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
            z-30
            w-52
            rounded-md
            bg-white
            p-3
            shadow-[0_20px_45px_rgba(0,0,0,.35)]
          "
        >
          {/* Push Pin */}

          <div
            className="
              absolute
              -top-2
              left-1/2
              h-5
              w-5
              -translate-x-1/2
              rounded-full
              border-2
              border-red-800
              bg-red-600
              shadow-lg
            "
          />

          {/* Tape */}

          <div
            className="
              absolute
              left-1/2
              top-1
              h-5
              w-16
              -translate-x-1/2
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
              rounded-sm
              object-cover
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

        {/* SIGNATURE */}

        <div className="relative mt-44 text-right">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7D6956]">
            Signed
          </p>

          <p className="mt-2 font-['Caveat'] text-5xl text-[#4E3524]">
            Shruti Dwivedi
          </p>

        </div>
      </motion.div>
    </section>
  );
}
