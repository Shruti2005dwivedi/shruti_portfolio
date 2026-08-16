import { motion } from "framer-motion";
import { journey } from "../../data/Journey";

const categories = [
  {
    key: "hackathon",
    label: "HACKATHONS",
    icon: "🏆",
    accent: "text-[#D6A365]",
    line: "border-[#B8875A]/35",
  },
  {
    key: "mun",
    label: "MUNs",
    icon: "✒",
    accent: "text-[#D0A59A]",
    line: "border-[#A98278]/35",
  },
  {
    key: "club",
    label: "CLUBS",
    icon: "♜",
    accent: "text-[#B7C0A5]",
    line: "border-[#8FA08A]/35",
  },
  {
    key: "misc",
    label: "MISC.",
    icon: "✦",
    accent: "text-[#D4B67F]",
    line: "border-[#C2A77D]/35",
  },
];

const yearNotes = {
  2024: "the beginning",
  2025: "growing",
  2026: "in progress",
};

const yearColors = {
  2024: "text-[#F1DFCA]",
  2025: "text-[#E8D2C7]",
  2026: "text-[#E5D4A9]",
};

function normalizeType(type) {
  if (!type) return "misc";

  const value = type.toLowerCase();

  if (value.includes("hackathon")) return "hackathon";
  if (value.includes("mun")) return "mun";
  if (value.includes("club")) return "club";

  return "misc";
}

function getItems(year, category) {
  return journey.filter(
    (item) =>
      item.year === year &&
      normalizeType(item.type) === category
  );
}

export default function Leadership() {
  const years = ["2024", "2025", "2026"];

  return (
    <section
      id="journey"
      className="
        relative
        mx-auto
        w-full
        max-w-[1700px]
        overflow-hidden
        px-8
        py-20
        md:px-12
        lg:px-16
      "
    >
      {/* ================= BACKGROUND JOURNAL WASH ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_50%_45%,rgba(139,88,76,0.16),transparent_58%)]
        "
      />

      {/* Decorative journal flowers */}

      <div
        className="
          pointer-events-none
          absolute
          right-10
          top-10
          rotate-12
          font-serif
          text-4xl
          text-[#B88952]/30
        "
      >
        ❀
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-12
          left-4
          -rotate-12
          font-serif
          text-3xl
          text-[#C49A6C]/25
        "
      >
        ✿
      </div>

      {/* ================= SECTION HEADER ================= */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
          font-mono
          text-sm
          uppercase
          tracking-[0.35em]
          text-[#C49A6C]
        "
      >
        03 • CHECKPOINTS
      </motion.p>

      <div className="mt-4 flex items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="
              font-black
              tracking-tight
              text-[#F5E9D7]
              text-5xl
              md:text-6xl
            "
          >
            Engineering Journey
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-[#BDAA94]
              md:text-lg
            "
          >
            A few things I built, won, joined, questioned and
            experienced along the way.
          </p>
        </motion.div>

        {/* Tiny Journal Label */}

        <div
          className="
            hidden
            rotate-[3deg]
            rounded-sm
            border
            border-[#A67C52]/30
            bg-[#F1DFC5]/90
            px-4
            py-3
            shadow-[0_8px_20px_rgba(0,0,0,0.18)]
            md:block
          "
        >
          <p className="font-['Caveat'] text-xl text-[#59402C]">
            little checkpoints ✦
          </p>
        </div>
      </div>

      {/* ================= CATEGORY HEADERS ================= */}

      <div className="mt-12 grid grid-cols-[130px_repeat(4,minmax(0,1fr))] gap-4">
        {/* Empty corner */}

        <div />

        {categories.map((category) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
              border-b
              ${category.line}
              pb-3
            `}
          >
            <div
              className={`
                flex
                items-center
                gap-2
                font-mono
                text-xs
                uppercase
                tracking-[0.28em]
                ${category.accent}
              `}
            >
              <span className="text-base">
                {category.icon}
              </span>

              <span>{category.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= YEAR MATRIX ================= */}

      <div className="mt-4 space-y-4">
        {years.map((year, yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: yearIndex * 0.08 }}
            className="
              grid
              grid-cols-[130px_repeat(4,minmax(0,1fr))]
              gap-4
            "
          >
            {/* ================= YEAR ================= */}

            <div
              className="
                relative
                flex
                min-h-[170px]
                flex-col
                justify-center
                border-l
                border-[#A67C52]/25
                pl-5
              "
            >
              {/* Small vertical journal thread */}

              <div
                className="
                  absolute
                  left-[-1px]
                  top-0
                  h-12
                  w-px
                  bg-[#C49A6C]/60
                "
              />

              <h3
                className={`
                  font-serif
                  text-4xl
                  font-bold
                  ${yearColors[year]}
                `}
              >
                {year}
              </h3>

              <p
                className="
                  mt-2
                  font-['Caveat']
                  text-lg
                  text-[#A99480]
                "
              >
                {yearNotes[year]}
              </p>
            </div>

            {/* ================= CATEGORY CELLS ================= */}

            {categories.map((category, categoryIndex) => {
              const items = getItems(year, category.key);

              return (
                <motion.div
                  key={category.key}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="
                    group
                    relative
                    min-h-[170px]
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#A67C52]/25
                    bg-[#2A211C]/75
                    p-5
                    shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#C49A6C]/55
                    hover:bg-[#30251F]/90
                    hover:shadow-[0_12px_30px_rgba(196,154,108,0.10)]
                  "
                >
                  {/* Soft inner paper glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_top_right,rgba(196,154,108,0.08),transparent_55%)]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Ribbon corner */}

                  {items.length > 0 && (
                    <div
                      className="
                        absolute
                        right-[-18px]
                        top-4
                        h-5
                        w-20
                        rotate-45
                        bg-[#C49A6C]/15
                      "
                    />
                  )}

                  <div className="relative z-10">
                    {items.length > 0 ? (
                      <div className="space-y-3">
                        {items.map((item, index) => (
                          <motion.div
                            key={`${item.title}-${index}`}
                            whileHover={{ x: 3 }}
                            className="
                              relative
                              rounded-xl
                              border
                              border-[#B58C68]/20
                              bg-[#332720]/55
                              px-4
                              py-3
                              transition-all
                              duration-200
                              hover:border-[#C49A6C]/35
                              hover:bg-[#392C24]/70
                            "
                          >
                            {/* Little handwritten marker */}

                            <span
                              className="
                                absolute
                                left-0
                                top-3
                                h-7
                                w-[2px]
                                rounded-full
                                bg-[#C49A6C]/65
                              "
                            />

                            <p
                              className="
                                pl-2
                                text-sm
                                leading-6
                                text-[#E3D4C2]
                              "
                            >
                              {item.title}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-[125px] items-center justify-center">
                        <p
                          className="
                            rotate-[-2deg]
                            font-['Caveat']
                            text-lg
                            text-[#8F7D6D]
                          "
                        >
                          nothing here yet...
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>

      {/* ================= BOTTOM JOURNAL NOTE ================= */}

      <div className="mt-8 flex justify-end">
        <div
          className="
            rotate-[-2deg]
            border-b
            border-[#C49A6C]/30
            px-4
            pb-1
          "
        >
          <p
            className="
              font-['Caveat']
              text-xl
              text-[#B99D83]
            "
          >
            still writing my destiny...
          </p>
        </div>
      </div>

      {/* ================= DECORATIVE FLOWER ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          right-20
          rotate-[12deg]
          text-2xl
          text-[#C49A6C]/30
        "
      >
        ✾
      </div>
    </section>
  );
}
