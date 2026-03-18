import { motion } from "framer-motion";

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

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
        <h2 className="section-heading">Building reliable, scalable systems.</h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300/90">
  Software Engineering student specializing in full-stack development and scalable system design.
  Experienced in building complete systems from architecture to deployment, including secure
  authentication, role-based access control and automation frameworks. 
  Proficient in AI technologies, with hands-on experience integrating intelligent systems into production environments.
  Passionate about algorithms, clean architecture and solving real-world problems.
</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Algorithms & Data Structures",
          "Microservices Architecture",
          "Automation Testing",
          "DevOps Fundamentals",
        ].map((label) => (
          <div
            key={label}
            className="glass px-4 py-3 text-xs font-medium text-slate-100 flex items-center justify-between"
          >
            <span>{label}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;

