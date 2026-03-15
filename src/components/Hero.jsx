import { motion } from "framer-motion";
import { SiReact, SiSpringboot, SiAngular, SiDocker } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa6";
import cvPdf from "../assets/cv sara mauda.pdf";

const floatingIcons = [
  { Icon: SiReact, className: "top-6 -left-2", color: "#61dafb" },
  { Icon: FaJava, className: "-top-2 right-8", color: "#f97316" },
  { Icon: SiSpringboot, className: "bottom-4 -left-4", color: "#22c55e" },
  { Icon: FaNodeJs, className: "bottom-0 right-2", color: "#16a34a" },
  { Icon: SiAngular, className: "top-10 right-24", color: "#ef4444" },
  { Icon: SiDocker, className: "bottom-10 left-20", color: "#38bdf8" },
];

function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden rounded-3xl md:rounded-[2rem] border border-slate-800/70 shadow-soft">
      <div className="absolute -top-40 -right-40 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

      <div className="relative grid gap-10 lg:gap-16 2xl:gap-20 md:grid-cols-[1.3fr_minmax(0,0.9fr)] items-center px-6 sm:px-8 md:px-10 lg:px-14 2xl:px-20 py-10 sm:py-14 lg:py-16 2xl:py-20 min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200 shadow-soft">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Available for opportunities & collaborations
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-[0.35em] uppercase text-slate-400">
              Software Engineer · Full-Stack
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight text-white">
              Sara Mauda
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Full-Stack Developer | Software Engineer
            </p>
          </div>

          <p className="max-w-xl text-sm md:text-base text-slate-300/90">
            &quot;I build scalable systems, modern web applications and practical
            real-world software solutions.&quot;
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="primary-gradient inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-soft shadow-indigo-900/70"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={cvPdf}
              download="Sara-Mauda-CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-primary/70 hover:text-primary hover:bg-slate-900/90 transition-colors"
            >
              Download CV
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-300/90">
            <span className="badge-pill border-primary/50 bg-primary/20 text-primary-50">
              Scalable backend & distributed systems
            </span>
            <span className="badge-pill border-emerald-500/50 bg-emerald-500/10 text-emerald-50">
              End-to-end product delivery
            </span>
            <span className="badge-pill border-slate-600/70 bg-slate-900/70 text-slate-200">
              Clean architecture & testing
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass relative px-6 pt-8 pb-7 shadow-soft">
            <div className="absolute inset-x-6 -top-6 h-12 rounded-3xl bg-gradient-to-r from-primary/60 via-slate-900 to-accent/60 blur-2xl opacity-70" />

            <div className="relative flex flex-col items-center gap-5">
              <div className="relative h-32 w-32 rounded-3xl bg-slate-900/80 border border-slate-700/70 shadow-soft flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-slate-900 to-accent/30" />
                <span className="relative text-5xl font-semibold text-white tracking-tight">
                  S
                </span>
              </div>

              <div className="relative w-full space-y-3 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Full-Stack Engineering
                </p>
                <p className="text-sm text-slate-300/90">
                  Building secure, production-ready systems from API gateway to
                  pixel-perfect UI.
                </p>
              </div>

              <div className="flex w-full justify-between text-[11px] text-slate-300/80">
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Focus
                  </p>
                  <p>System design, APIs, automation</p>
                </div>
                <div className="space-y-1.5 text-right">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Stack
                  </p>
                  <p>Java · C# · React · Angular</p>
                </div>
              </div>
            </div>
          </div>

          {floatingIcons.map(({ Icon, className, color }, index) => (
            <motion.div
              key={className}
              className={`absolute ${className}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                delay: 0.3 + index * 0.08,
                duration: 4 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="glass flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/80 shadow-lg shadow-slate-950/70">
                <Icon className="h-5 w-5" style={{ color }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

