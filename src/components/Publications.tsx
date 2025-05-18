
import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications: React.FC = () => {
  const publications = [
    "Graph Network-based classification of DNA Structure",
    "A pan-cancer metabolic atlas of the tumor microenvironment",
    "Accurate pan-cancer tumor purity estimation from gene expression data",
    "PUREE: accurate pan-cancer tumor purity estimation from gene expression data"
  ];

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        
        <div className="mt-12 grid gap-6">
          {publications.map((publication, index) => (
            <div key={index} className="publication-card">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 mr-3 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">{publication}</h3>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Published research contributing to the field of bioinformatics and cancer genomics.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
