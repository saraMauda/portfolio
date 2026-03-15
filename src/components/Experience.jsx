import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="section-title">Experience</p>
        <h2 className="section-heading">Microservices Career Platform.</h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300/90">
          Worked on the infrastructure layer of a microservices-based career platform, focusing on
          API gateway, routing, authentication and shared UI architecture.
        </p>
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        className="glass p-5 md:p-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
      >
        <div className="space-y-3 md:max-w-xl">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Role
            </p>
            <p className="mt-1 text-base font-semibold text-white">
              Gateway & Infrastructure Developer
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Description
            </p>
            <p className="mt-2 text-sm text-slate-300/90">
              Worked on infrastructure layer of a microservices career platform.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Responsibilities
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300/90">
              <li>Implemented API Gateway using Ocelot.</li>
              <li>Configured routing between microservices.</li>
              <li>Built React client infrastructure.</li>
              <li>Integrated automatic JWT token handling.</li>
              <li>Designed shared UI architecture.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 md:min-w-[190px]">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
              Technologies
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["C#", ".NET", "Ocelot", "React", "JWT", "Microservices"].map((tech) => (
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
    </div>
  );
}

export default Experience;

