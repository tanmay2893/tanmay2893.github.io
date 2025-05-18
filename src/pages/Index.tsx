
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation on scroll
    const handleAnimations = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if(position.top < window.innerHeight - 50) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on initial load
    handleAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleAnimations);
    
    return () => {
      window.removeEventListener('scroll', handleAnimations);
    };
  }, []);

  useEffect(() => {
    // Update document title
    document.title = "Tanmay Kulshrestha | Data Scientist";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
