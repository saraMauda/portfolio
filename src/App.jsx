import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-100 scroll-smooth">
      <Navbar />
      <main className="w-full pt-28 md:pt-32 space-y-32 md:space-y-40 2xl:space-y-44">
        <section
          id="home"
          className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
        >
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Hero />
          </div>
        </section>
        <section
          id="about"
          data-aos="fade-up"
          className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
        >
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <About />
          </div>
        </section>
        <section
          id="skills"
          data-aos="fade-up"
          className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
        >
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Skills />
          </div>
        </section>
        <section
          id="projects"
          data-aos="fade-up"
          className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
        >
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Projects />
          </div>
        </section>
        <section
          id="experience"
          data-aos="fade-up"
          className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
        >
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
            <Experience />
          </div>
        </section>
        <section
          id="contact"
          data-aos="fade-up"
          className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
        >
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

