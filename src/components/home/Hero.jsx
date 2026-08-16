import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { personalInfo } from "../../data/Portfolio";
import BackgroundGlow from "../ui/BackgroundGlow";
import shrutiImg from "../../assets/images/shruti.jpeg";

export default function Hero() {
  return (
    <section
  id="home"
  className="mx-auto max-w-7xl px-8 pt-40 pb-14 md:px-20 md:pt-44 md:pb-16"
>
      <BackgroundGlow />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-20">
        {/* Journal Lines */}
<div
  className="absolute inset-0 pointer-events-none opacity-[0.08]"
  style={{
    backgroundImage:
      "repeating-linear-gradient(to bottom, transparent 0px, transparent 38px, rgba(255,245,220,.15) 39px)",
  }}
/>

{/* Paper Texture */}
<div
  className="absolute inset-0 pointer-events-none opacity-[0.03]"
  style={{
    backgroundImage:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,.35) 1px, transparent 1px)",
    backgroundSize: "18px 18px",
  }}
/>
      <div
  className="absolute inset-0 opacity-[0.06] pointer-events-none"
  style={{
    backgroundImage:
      "repeating-linear-gradient(to bottom, transparent px, transparent 39px, rgba(255,255,255,.5) 40px)",
  }}
/>

        {/* LEFT */}

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm uppercase tracking-[0.4em] text-[#C49A6C]"
          >
            ENGINEERING JOURNAL • ISSUE 01
          </motion.p>
          <motion.h1
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15 }}
  className="mt-6 leading-none"
>
  <div className="text-5xl font-black text-[#F5E9D7] lg:text-6xl xl:text-7xl">
    Meet...
  </div>

  <span
    className="
      mt-2
      block
      font-['Cormorant_Garamond']
      text-6xl
      lg:text-7xl
      xl:text-8xl
      font-bold
      leading-none
      tracking-tight
      bg-gradient-to-r
      from-[#F7E8D2]
      via-[#E2B97E]
      to-[#B17C43]
      bg-clip-text
      text-transparent
      drop-shadow-[0_4px_20px_rgba(215,176,122,0.25)]
    "
  >
    {personalInfo.name}
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 max-w-3xl text-xl leading-9 text-[#C7B59B]"
          >
            I enjoy building intelligent solutions where{" "}
            <span className="font-semibold text-[#F5E9D7]">
              #Humanity
            </span>{" "}
            meets{" "}
            <span className="font-semibold text-[#F5E9D7]">
              Artificial Intelligence !
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <span className="font-medium text-[#9E8E79]">
              Currently Exploring : 
            </span>

            <span className="text-xl font-semibold text-[#D7B07A]">
              <TypeAnimation
                sequence={[
                  "Explainable AI",
                  2000,
                  "Computer Vision",
                  2000,
                  "Blockchain",
                  2000,
                  "System Design",
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
  className="mt-14"
>
  <a
    href="/Shruti_Dwivedi_VITPune.pdf"
    download
    className="
      inline-flex
      items-center
      gap-3
      group
      relative
      overflow-hidden
      border
      border-[#B88952]/40
      bg-[#2A211C]
      px-10
      py-4
      font-semibold
      tracking-wide
      text-[#F4E7D5]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#D8B07B]
      hover:shadow-[0_12px_35px_rgba(184,137,82,.25)]
    "
    style={{
      clipPath: "polygon(10% 0%,100% 0%,90% 100%,0% 100%)",
    }}
  >
    Resume
    <span className="transition-transform duration-300 group-hover:translate-y-1">
      
    </span>
  </a>
</motion.div>
</div>

         

        {/* RIGHT — PHOTO + JOURNAL GOALS */}
<div className="relative hidden lg:flex w-[420px] shrink-0 items-center justify-center">

  {/* PHOTO WRAPPER — this is the positioning parent */}
  <div className="relative w-[420px]">

    {/* PHOTO */}
    <div
      className="
        relative
        h-[560px]
        w-[420px]
        overflow-hidden
        rounded-[40px]
        border
        border-[#A67C52]/40
        bg-[#231C18]
        shadow-[0_30px_70px_rgba(0,0,0,.45)]
      "
    >

      <img
        src={shrutiImg}
        alt="Shruti Dwivedi"
        className="
          h-full
          w-full
          object-cover
          transition
          duration-700
          hover:scale-105
          brightness-[.96]
          contrast-[1.03]
          saturate-[.95]
        "
      />

      {/* Vintage overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-[#6B4B2A]/10
        "
      />

      {/* Film grain */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          mix-blend-overlay
          bg-[url('/noise.png')]
        "
      />

      {/* Photo caption */}
      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          rotate-[-4deg]
          rounded-[4px]
          bg-[#F6E8C8]
          px-5
          py-2
          shadow-xl
          whitespace-nowrap
        "
      >
        <p className="font-['Caveat'] text-2xl text-[#51361E]">
          @ NDA • 2025
        </p>
      </div>
    </div>

    {/* ============================= */}
    {/* CURRENT GOALS — JOURNAL PAPER */}
    {/* ============================= */}

    <motion.div
      initial={{ opacity: 0, x: -15, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="
  absolute
  -left-20
  top-[48%]
  z-30
  w-[260px]
  bg-[#E9D7B8]
  px-5
  pb-5
  pt-4
  text-[#49372A]
  shadow-[0_18px_40px_rgba(0,0,0,0.3)]
  rotate-[-2deg]
"
      style={{
        clipPath:
          "polygon(0% 0%,100% 0%,100% 93%,95% 97%,90% 94%,85% 98%,80% 95%,75% 99%,70% 95%,65% 98%,60% 94%,55% 98%,50% 95%,45% 99%,40% 95%,35% 98%,30% 94%,25% 98%,20% 95%,15% 99%,10% 95%,5% 98%,0% 93%)",
      }}
    >

      {/* Tape */}
      <div
        className="
          absolute
          -top-3
          left-1/2
          h-6
          w-24
          -translate-x-1/2
          rotate-[-2deg]
          bg-[#D8C49E]/70
        "
      />

      {/* Heading */}
      <p
        className="
          font-mono
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-[#806344]
        "
      >
        CURRENT #GOALS
      </p>

      {/* Dashed divider */}
     <div className="mt-3 border-t border-dashed border-[#806344]/35 pt-3">
  <div className="space-y-2">

    <p className="text-[14px] leading-5">
      – AI Systems
    </p>

    <p className="text-[14px] leading-5">
      – Competitive Programming
    </p>

    <p className="text-[14px] leading-5">
      – Open Source
    </p>

  </div>
</div>

      {/* Handwritten footer */}
     <p
  className="
    mt-3
    text-right
    font-['Caveat']
    text-sm
    text-[#76583D]
  "
>
  things I’m chasing ✦
</p>

    </motion.div>

  </div>

</div>

      </div> {/* z-10 flex container */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="mx-auto mt-20 max-w-7xl pt-8"
>
  <div className="flex items-center justify-between gap-10">

    {/* Left */}
    <div
  className="
  absolute
  inset-0
  pointer-events-none
  opacity-[0.06]
  "
  style={{
    backgroundImage:
      "repeating-linear-gradient(to bottom, transparent 0px, transparent 38px, rgba(255,255,255,.12) 39px)"
  }}
/>

    <div className="relative max-w-3xl">

      <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#B88952]">
        OFF engineering :
      </span>
      <div className="group relative inline-block cursor-pointer">

  <a
    href="/Certificates/Shruti Dwivedi.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
rounded-full
border
border-[#5B4633]
px-3
py-1
text-xs
uppercase
tracking-wide
text-[#B8A48A]
transition-all
duration-300
hover:border-[#B88952]
hover:text-[#F4E7D5]
"
  >
    Public Speaker
  </a>

  {/* Hover Card */}
  <div
    className="
absolute
left-1/2
top-full
z-50
mt-4
w-72
-translate-x-1/2
rounded-2xl
border
border-[#6E573D]/40
bg-[#231C18]/95
p-5
opacity-0
invisible
shadow-2xl
backdrop-blur-xl
transition-all
duration-300
group-hover:visible
group-hover:translate-y-1
group-hover:opacity-100
"
  >
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C79A58]">
      View Experience 
    </p>

    <div className="my-3 border-t border-dashed border-[#6E573D]/50"></div>

    <p className="text-sm text-[#D8C7B1]">
      Hosted technical events,
      delivered talks,
      participated in public speaking sessions.
    </p>
  </div>

</div>
{[
  "READER",
  "TRAVELLER",
  "WRITER",
].map((item) => (
  <span
    key={item}
    className="rounded-full border border-[#5B4633] px-3 py-1 text-xs uppercase tracking-wide text-[#B8A48A] transition-all duration-300 hover:border-[#B88952] hover:text-[#F4E7D5]"
  >
    {item}
  </span>
))}

<a
  href="https://medium.com/@dshruti593"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-[#5B4633] px-3 py-1 text-xs uppercase tracking-wide text-[#B8A48A] transition-all duration-300 hover:border-[#B88952] hover:text-[#F4E7D5]"
>
  BLOGGER
</a>

</div> {/* closes left flex */}

  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-[#5B4633]/20 to-transparent blur-sm" />
</div>
<div className="mt-10 border-t border-dashed border-[#6E573D]/50"></div>

</motion.div>

</section>
  );
}
