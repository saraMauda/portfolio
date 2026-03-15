import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function getScrollProgress() {
  if (typeof window === "undefined") return 0;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (docHeight <= 0) return 0;
  return Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });

    const onScroll = () => {
      setScrollProgress(getScrollProgress());
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-100 scroll-smooth">
      <div
        className="fixed left-0 top-0 z-40 h-[3px] bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <main className="w-full pt-28 md:pt-32 space-y-32 md:space-y-40 2xl:space-y-44">
        <section id="home" className="w-full">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Hero />
          </div>
        </section>
        <section id="about" data-aos="fade-up" className="w-full">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <About />
          </div>
        </section>
        <section id="skills" data-aos="fade-up" className="w-full">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Skills />
          </div>
        </section>
        <section id="projects" data-aos="fade-up" className="w-full">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Projects />
          </div>
        </section>
        <section id="experience" data-aos="fade-up" className="w-full">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Experience />
          </div>
        </section>
        <section id="contact" data-aos="fade-up" className="w-full">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

