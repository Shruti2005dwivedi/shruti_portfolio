import LeadershipCard from "../ui/LeadershipCard";

const leadership = [
  {
    icon: "👑",
    title: "AI & DS Department",
    role: "Student Leader",
    duration: "2025 – Present",
  },
  {
    icon: "💻",
    title: "CodeChef Chapter",
    role: "Workshop Organizer",
    duration: "Technical Events",
  },
  {
    icon: "🎤",
    title: "Model United Nations",
    role: "Germany Delegate",
    duration: "International Relations",
  },
  {
    icon: "🚀",
    title: "Hackathons",
    role: "Team Lead",
    duration: "National Competitions",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <div className="mb-20 text-center">

        <p className="uppercase tracking-[0.4em] text-cyan-400">
          LEADERSHIP
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Building Teams & Communities
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {leadership.map((item) => (
          <LeadershipCard
            key={item.title}
            {...item}
          />
        ))}

      </div>
    </section>
  );
}
