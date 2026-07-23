import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <h2 className="mb-4 text-center text-5xl font-black text-white">
        Featured Projects
      </h2>

      <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-slate-400">
        A selection of AI, blockchain, and software engineering
        projects focused on solving real-world problems.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">

        <ProjectCard
          title="CreditSense AI"
          description="AI-powered credit risk assessment with explainable predictions and interactive analytics."
          tech={["Python", "ML", "SHAP", "Streamlit"]}
        />

        <ProjectCard
          title="StudySaathi AI"
          description="An AI-powered learning assistant that helps students organize notes, generate quizzes, and boost productivity."
          tech={["React", "Node.js", "Gemini API", "Firebase"]}
        />

      </div>
    </section>
  );
}
