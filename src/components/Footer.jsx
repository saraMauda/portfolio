function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center justify-between gap-3 text-xs text-slate-400 md:flex-row">
        <p>© Sara Mauda — Software Engineer Portfolio</p>
        <p className="text-[11px]">
          Built with React, Vite, TailwindCSS, Framer Motion & AOS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

