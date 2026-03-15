import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/projects.js";

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="section-title">Projects</p>
        <h2 className="section-heading">Selected engineering work.</h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300/90">
          A snapshot of systems spanning full-stack web applications, automation frameworks and
          algorithm-heavy game logic.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="glass flex flex-col justify-between p-5 md:p-6"
          >
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary/70">
                Case Study {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-semibold text-white leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300/90">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge-pill bg-slate-900/80 border-slate-700/70 text-[11px] text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span>Production-ready patterns & practices</span>
              </div>

              <motion.a
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-primary/70 hover:text-primary hover:bg-slate-900/90 transition-colors"
              >
                <FiGithub className="h-4 w-4" />
                <span>View on GitHub</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Projects;

