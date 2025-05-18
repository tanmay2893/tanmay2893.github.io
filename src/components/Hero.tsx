
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Tanmay <span className="text-primary">Kulshrestha</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-secondary mb-6">Data Scientist</h2>
            <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
              6+ years of experience building machine learning systems in genomics, logistics & trading. 
              Strong in time-series modeling, full-stack deployment, and research translation.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="mailto:tanmay2893@gmail.com" 
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Mail size={18} /> Get in Touch
              </a>
              <a 
                href="https://github.com/tanmay2893" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/tanmay2893" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/tanmaykulshrestha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:tanmay2893@gmail.com" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/20 shadow-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-4xl font-bold text-primary">TK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
