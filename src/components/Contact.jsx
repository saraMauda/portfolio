import { FiGithub, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const contactItems = [
  {
    label: "GitHub",
    value: "github.com/saraMauda",
    href: "https://github.com/saraMauda",
    Icon: FiGithub,
  },
  {
    label: "Email",
    value: "saramauda06@gmail.com",
    href: "mailto:saramauda06@gmail.com",
    Icon: FiMail,
  },
  {
    label: "Location",
    value: "Rosh HaAyin, Israel",
    href: null,
    Icon: FiMapPin,
  },
  {
    label: "Phone",
    value: "053-4167064",
    href: "tel:0534167064",
    Icon: FiPhone,
  },
];

function Contact() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="section-title">Contact</p>
        <h2 className="section-heading">Let&apos;s build something real.</h2>
        <p className="max-w-2xl text-sm md:text-base text-slate-300/90">
          Whether it&apos;s a production system, a proof-of-concept or a complex technical challenge,
          I&apos;m always interested in meaningful work with real impact.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {contactItems.map(({ label, value, href, Icon }) => {
          const content = (
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/90 border border-slate-700/75">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
                <p className="text-sm font-medium text-slate-100">{value}</p>
              </div>
            </div>
          );

          return (
            <motion.div
              key={label}
              whileHover={{ y: -3 }}
              className="glass p-4 md:p-5"
            >
              {href ? (
                <a
                  href={href}
                  className="flex items-center justify-between gap-3 text-slate-100"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center justify-between gap-3 text-slate-100">
                  {content}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;

