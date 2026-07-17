/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import useMouseGlow from './hooks/useMouseGlow';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Facts from './components/Facts';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Initialize general-purpose mouse glow spotlight tracking
  useMouseGlow();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Cinematic Film Noise Overlay */}
      <div className="noise-overlay" />

      {/* Luxury Custom Cursor Tracker */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Main Sections Storytelling Sequence */}
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <WhyWorkWithMe />
        <Projects />
        <Journey />
        <Experience />
        <Skills />
        <Facts />
        <Quote />
        <Contact />
      </main>

      {/* Footer Branding Map */}
      <Footer />
    </div>
  );
}

