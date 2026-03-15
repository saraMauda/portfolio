import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="gradient-border">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-primary shadow-soft group-hover:scale-105 group-hover:rotate-3 transition-transform">
              <span className="text-lg font-semibold">S</span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-100">
              Sara Mauda
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Software Engineer
            </span>
          </div>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-full hover:bg-slate-800/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://github.com/saraMauda"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-primary/70 hover:text-primary hover:bg-slate-900/90 transition-colors"
          >
            <FiGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

