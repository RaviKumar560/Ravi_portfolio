
import React, { Profiler } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Profile';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1E293B]">
      <Navigation />
      <Hero/>
      <Skills />
      <Certifications />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
