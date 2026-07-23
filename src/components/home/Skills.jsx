import SkillCard from "../ui/SkillCard";

const categories = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      "AWS",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Blockchain",
    skills: [
      "Solidity",
      "Ethereum",
      "Web3",
      "Smart Contracts",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <div className="mb-20 text-center">

        <p className="uppercase tracking-[0.4em] text-cyan-400">
          MY TECH STACK
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Skills & Technologies
        </h2>

      </div>

      <div className="space-y-14">

        {categories.map((category) => (
          <div key={category.title}>

            <h3 className="mb-6 text-2xl font-bold text-white">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

              {category.skills.map((skill) => (
                <SkillCard
                  key={skill}
                  skill={skill}
                />
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
