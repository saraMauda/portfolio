import { motion } from "framer-motion";
import { skills } from "../data/skills.js";
import { HiOutlineCodeBracket, HiOutlineServer, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { PiStackThin } from "react-icons/pi";

const iconForCategory = (category) => {
  if (category === "Languages") return HiOutlineCodeBracket;
  if (category === "Frontend") return PiStackThin;
  if (category === "Backend") return HiOutlineServer;
  return HiOutlineWrenchScrewdriver;
};

function Skills() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="section-title">Skills</p>
        <h2 className="section-heading">From problem to production.</h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300/90">
          A balanced skill set across backend, frontend and DevOps — enabling ownership of systems from
          architecture and implementation through testing and deployment.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group, index) => {
          const Icon = iconForCategory(group.category);
          return (
            <motion.div
              key={group.category}
              whileHover={{ y: -4 }}
              className="glass p-5 md:p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/90 border border-slate-700/80">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                </div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {String(group.items.length).padStart(2, "0")} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="badge-pill bg-slate-900/80 border-slate-700/70 text-xs text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {index === 0 && (
                <p className="text-[11px] text-slate-400/90">
                  Strong foundation in algorithmic thinking, data modelling and performance-aware
                  implementation.
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

