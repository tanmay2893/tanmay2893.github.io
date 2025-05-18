
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-8">
              Feel free to reach out if you're looking for a data scientist with experience in genomics, logistics, 
              and trading, or if you want to discuss machine learning, time-series modeling, or research translation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:tanmay2893@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  tanmay2893@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+6588255843" className="text-foreground hover:text-primary transition-colors">
                  +65 8825 5843
                </a>
              </div>
              
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-primary" />
                <a href="https://github.com/tanmay2893" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  github.com/tanmay2893
                </a>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-primary" />
                <a href="https://linkedin.com/in/tanmaykulshrestha" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  linkedin.com/in/tanmaykulshrestha
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
