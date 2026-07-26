import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

type View = 'home' | 'blog' | 'tools' | 'lets-talk';

interface NavItem {
  label: string;
  href?: string;
  view?: View;
}

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const homeNavItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const pageNavItems: NavItem[] = [
  { label: 'Blogs', view: 'blog' },
  { label: 'Tools', view: 'tools' },
  { label: 'Lets Talk', view: 'lets-talk' },
];

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (currentView !== 'home') {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      const sections = homeNavItems.map((item) => item.href?.slice(1) ?? 'home');
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleMainNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      requestAnimationFrame(() => scrollToSection(href));
    } else {
      scrollToSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  const handlePageNavClick = (e: MouseEvent<HTMLAnchorElement>, view: View) => {
    e.preventDefault();
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl transition-all duration-500 ${
          isScrolled
            ? 'glass py-3 px-6 rounded-full shadow-2xl shadow-black/40 border border-white/10'
            : 'bg-transparent py-5 px-4'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => handleMainNavClick(e, '#home')}
            className="group flex items-center gap-2 font-display font-bold text-lg tracking-tight text-white hover:opacity-90"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="tracking-tighter font-black text-xl font-display">
              rsn<span className="text-[#7C3AED]">01</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 flex-1 justify-end">
            {homeNavItems.map((item) => {
              const isActive = activeSection === item.href?.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleMainNavClick(e, item.href ?? '#home')}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveBg"
                      className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {pageNavItems.map((item) => (
              <a
                key={item.label}
                href={item.view ? `#${item.view}` : item.href}
                onClick={(e) => item.view && handlePageNavClick(e, item.view)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide text-zinc-300 transition-colors hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-[2.5%] w-[95%] z-40 glass rounded-3xl p-6 border border-white/10 shadow-2xl block md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {homeNavItems.map((item) => {
                const isActive = activeSection === item.href?.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleMainNavClick(e, item.href ?? '#home')}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? 'bg-purple-950/20 text-purple-300 border border-purple-500/15'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-purple-400 translate-x-0.5 -translate-y-0.5' : 'text-zinc-600'}`} />
                  </a>
                );
              })}
              {pageNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.view ? `#${item.view}` : item.href}
                  onClick={(e) => item.view && handlePageNavClick(e, item.view)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-white hover:bg-white/5 border border-transparent"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
