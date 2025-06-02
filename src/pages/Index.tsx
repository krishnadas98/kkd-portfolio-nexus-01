
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
