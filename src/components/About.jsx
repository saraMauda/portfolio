import { motion } from "framer-motion";

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const highlights = [
  "AI Agents & LLM Systems",
  "Microservices & API Architecture",
  "Workflow & Process Automation",
  "Cloud Deployment (Docker · Azure)",
];

const dataquestTopics = [
  "LLM Fundamentals",
  "AI Application Development",
  "Machine Learning",
  "Deep Learning",
  "Embeddings",
  "Vector Databases",
  "RAG Systems",
  "AI Agents",
];

function About() {
  return (
    <motion.div
      className="space-y-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="space-y-3">
        <p className="section-title">About</p>
        <h2 className="section-heading">Engineering intelligent systems at scale.</h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300/90">
          AI Automation Engineer focused on real-world AI systems, intelligent automation
          and production-grade backend architecture. I design and ship microservices,
          automation pipelines and cloud-deployed platforms — from LLM-powered recruitment
          workflows to API-driven services secured with JWT and gateway patterns. I take
          ownership end to end: system design, implementation, integration and deployment
          on Docker and Azure, with a builder mindset oriented around reliable, scalable
          outcomes.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((label) => (
          <div
            key={label}
            className="glass px-4 py-3 text-xs font-medium text-slate-100 flex items-center justify-between"
          >
            <span>{label}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          </div>
        ))}
      </div>

      <div className="glass p-5 md:p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
            Continuous learning
          </p>
          <p className="text-sm font-semibold text-white">
            AI Engineering Program — Dataquest
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {dataquestTopics.map((topic) => (
            <span
              key={topic}
              className="badge-pill bg-slate-900/80 border-slate-700/70 text-[11px] text-slate-100"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
