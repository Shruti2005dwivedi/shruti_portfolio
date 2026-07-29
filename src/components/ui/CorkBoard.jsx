import { motion } from "framer-motion";
import StickyNote from "./StickyNote";
import PushPin from "./PushPin";
import shrutiImg from "../../assets/images/shruti.jpeg";

export default function CorkBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="
relative
mx-auto
mt-16
h-[850px]
w-full
max-w-6xl
overflow-hidden
rounded-[30px]
border-[12px]
border-[#4A2D18]
shadow-[0_40px_90px_rgba(0,0,0,.55)]
"
    >

      {/* WOOD */}

      <div
        className="absolute inset-0 rounded-[30px]"
        style={{
          background: `
          linear-gradient(
          135deg,
          #8A5B33,
          #6C4426,
          #805332
          )
          `,
        }}
      />
    {/* Lamp Light */}

<div
className="
pointer-events-none
absolute
left-1/2
top-0
h-[500px]
w-[700px]
-translate-x-1/2
rounded-full
bg-[#FFEFC4]/20
blur-[120px]
"
/>
{/* Lamp */}

<div ... />

{/* Dust */}

{[...Array(35)].map(...)}

<motion.div

animate={{
y:[0,-10,0],
rotate:[-8,-6,-8]
}}

transition={{
repeat:Infinity,
duration:6
}}

className="
absolute
left-[520px]
top-8
h-36
w-28
rounded
bg-[#F4ECD8]
shadow-xl
"
/>

<motion.div

animate={{
y:[0,-8,0],
rotate:[5,8,5]
}}

transition={{
repeat:Infinity,
duration:7
}}

className="
absolute
right-10
bottom-10
h-40
w-32
rounded
bg-[#EFE7D3]
shadow-xl
"
/>
      {/* Cork texture */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          radial-gradient(#3f2411 1px,transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Inner Shadow */}

      <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_0_80px_rgba(0,0,0,.45)]"/>

      {/* ===================== */}

      {/* POLAROID */}

      {/* ===================== */}

      <motion.div
        whileHover={{ rotate:0, scale:1.03 }}
        className="
        absolute
        left-12
        top-14
        rotate-[-7deg]
        rounded-md
        bg-white
        p-3
        shadow-2xl
        "
      >

        <img
          src={shrutiImg}
          className="h-[250px] w-[200px] object-cover"
          alt=""
        />

        <p className="mt-4 text-center font-['Caveat'] text-2xl">
          Shruti :)
        </p>

      </motion.div>

      <PushPin
        color="red"
        className="left-[140px] top-[35px]"
      />

      {/* ===================== */}
<div
className="
absolute
right-24
top-9
text-4xl
rotate-[18deg]
"
>
📎
</div>
      {/* NOTE 1 */}

      {/* ===================== */}

      <div className="absolute right-20 top-16">

        <PushPin color="yellow" className="left-[110px] -top-3"/>

        <StickyNote
          color="yellow"
          rotate={5}
          title="Why Build?"
        >
          <p>• Solve problems.</p>
          <p>• Learn deeply.</p>
          <p>• Create impact.</p>
        </StickyNote>

      </div>
<div
className="
absolute
left-16
top-[350px]
text-4xl
rotate-[-15deg]
"
>
📎
</div>
<PushPin
color="red"
className="left-[570px] top-[35px]"
/>

<PushPin
color="yellow"
className="right-[90px] bottom-[110px]"
/>

<PushPin
color="blue"
className="left-[60px] bottom-[90px]"
/>
      {/* NOTE 2 */}

      <div className="absolute left-24 top-[390px]">

        <PushPin color="blue" className="left-[105px] -top-3"/>

        <StickyNote
          color="blue"
          rotate={-4}
          title="Current Mission"
        >
          <p>→ CreditSense AI</p>
          <p>→ Shopify Platform</p>
          <p>→ System Design</p>
        </StickyNote>

      </div>

      {/* NOTE 3 */}

      <div className="absolute right-32 top-[420px]">

        <PushPin color="green" className="left-[105px] -top-3"/>

        <StickyNote
          color="green"
          rotate={3}
          title="Favourite Quote"
        >
          <p>
            Curiosity always
          </p>

          <p>
            beats perfection.
          </p>

        </StickyNote>

      </div>

      {/* NOTE 4 */}

      <div className="absolute left-[38%] bottom-14">

        <PushPin color="red" className="left-[105px] -top-3"/>

        <StickyNote
          color="pink"
          rotate={-5}
          title="Next Targets"
        >
          <p>✓ AI Research</p>
          <p>✓ Open Source</p>
          <p>✓ Big Tech</p>
        </StickyNote>

      </div>
{/* ================= THREADS ================= */}

<svg
  className="pointer-events-none absolute inset-0 h-full w-full"
  viewBox="0 0 1200 850"
>

  <path
    d="M210 170 L900 160"
    stroke="#b11d25"
    strokeWidth="3"
    fill="none"
    opacity=".9"
  />

  <path
    d="M230 260 L280 520"
    stroke="#b11d25"
    strokeWidth="3"
    fill="none"
  />

  <path
    d="M920 220 L720 650"
    stroke="#b11d25"
    strokeWidth="3"
    fill="none"
  />

  <path
    d="M280 520 L720 650"
    stroke="#b11d25"
    strokeWidth="3"
    fill="none"
  />

</svg>
    </motion.div>
  );
}
