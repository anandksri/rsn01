/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import useMouseGlow from './hooks/useMouseGlow';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Facts from './components/Facts';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ToolsPage from './components/ToolsPage';
import LetsTalkPage from './components/LetsTalkPage';

type View = 'home' | 'blog' | 'tools' | 'lets-talk';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  // Initialize general-purpose mouse glow spotlight tracking
  useMouseGlow();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-white">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar currentView={currentView} onNavigate={setCurrentView} />

      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <About />
            <WhatIDo />
            <Projects />
            <Experience />
            <Facts />
            <Quote />
            <Contact />
          </>
        ) : currentView === 'blog' ? (
          <BlogPage />
        ) : currentView === 'tools' ? (
          <ToolsPage />
        ) : (
          <LetsTalkPage />
        )}
      </main>

      <Footer />
    </div>
  );
}

