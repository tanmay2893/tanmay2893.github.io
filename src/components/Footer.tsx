
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-muted/60">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-semibold text-foreground">
              <span className="text-primary mr-1">&lt;</span>
              Tanmay Kulshrestha
              <span className="text-primary ml-1">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Data Scientist | Machine Learning Specialist
            </p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Tanmay Kulshrestha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
