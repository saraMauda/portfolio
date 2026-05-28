import { motion } from "framer-motion";

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const responsibilities = [
  "Developed AI-powered automation systems using Python and Claude API for intelligent resume processing and candidate analysis.",
  "Built AI agents that extract structured data from resumes and synchronize insights into Monday.com workflows.",
  "Designed intelligent automation pipelines for recruitment and candidate management processes.",
  "Developed autonomous Monday.com AI agents with advanced workflow capabilities, smart data extraction and system-wide automation.",
  "Built AI-driven candidate matching workflows for job-position alignment and recruitment optimization.",
  "Integrated LLM-based reasoning systems into production workflows.",
  "Worked with API integrations, automation platforms and scalable backend services.",
];

const technologies = [
  "Python",
  "Claude API",
  "Monday.com",
  "LLMs",
  "REST APIs",
  "Automation Pipelines",
];

function Experience() {
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
        <p className="section-title">Experience</p>
        <h2 className="section-heading">Building AI systems in production.</h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300/90">
          Professional experience delivering intelligent automation, LLM integrations and
          recruitment workflows on production platforms — from AI agents to scalable
          backend services.
        </p>
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        className="glass p-5 md:p-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
      >
        <div className="space-y-3 md:max-w-xl">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Company
            </p>
            <p className="mt-1 text-base font-semibold text-white">BeyondCode</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Role
            </p>
            <p className="mt-1 text-base font-semibold text-white">
              AI Automation Engineer
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Dates
            </p>
            <p className="mt-1 text-sm text-slate-300/90">2026 – Present</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Responsibilities
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300/90 list-disc pl-5">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3 md:min-w-[190px]">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Technologies
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="badge-pill bg-slate-900/80 border-slate-700/70 text-[11px] text-slate-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
