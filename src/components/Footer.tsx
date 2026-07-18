import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-16 px-4 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[15vw] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Brand Signoff */}
        <div className="text-center md:text-left space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-ping" />
            <h3 className="font-display font-black text-xl tracking-tighter text-white uppercase">rsn<span className="text-[#7C3AED]">01</span></h3>
          </div>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
            Full Stack Developer | Systems Specialist
          </p>
        </div>

        {/* Quick Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a href="#home" className="text-xs text-zinc-400 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-xs text-zinc-400 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-xs text-zinc-400 hover:text-white transition-colors">Services</a>
          <a href="#values" className="text-xs text-zinc-400 hover:text-white transition-colors">Values</a>
          <a href="#projects" className="text-xs text-zinc-400 hover:text-white transition-colors">Projects</a>
          <a href="#journey" className="text-xs text-zinc-400 hover:text-white transition-colors">Journey</a>
          <a href="#experience" className="text-xs text-zinc-400 hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="text-xs text-zinc-400 hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-xs text-zinc-400 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="clickable group p-3.5 rounded-full bg-white/[0.02] border border-white/5 hover:border-purple-500/30 text-zinc-400 hover:text-white transition-all duration-300"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
