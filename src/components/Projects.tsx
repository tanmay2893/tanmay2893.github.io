
import React, { useState } from 'react';
import { Calendar, GitBranch, Search, Activity, Database } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'genomics' | 'finance' | 'logistics' | 'hobby';
}

const projects: Project[] = [
  {
    title: "Immunotherapy Response Prediction",
    description: "Predicting Responders vs Non-responders for Immunotherapy treatment using advanced machine learning techniques.",
    technologies: ["Graph Attention Network", "CNN", "Classification"],
    category: "genomics"
  },
  {
    title: "Antibody Clustering with Transformers",
    description: "Used Transformer model-based embeddings to cluster antibodies found in the human body for potential drug therapy.",
    technologies: ["Transformer Models", "Unsupervised Learning", "Clustering"],
    category: "genomics"
  },
  {
    title: "Cancer Therapy Target Discovery Portal",
    description: "A web based portal to discover plausible targets for cancer drugs using various data science techniques.",
    technologies: ["Flask", "ReactJS", "Regression", "Clustering"],
    category: "genomics"
  },
  {
    title: "Tumor Purity Prediction Web App",
    description: "Web application for deploying tumor purity prediction research as Software as a Service.",
    technologies: ["Docker", "Flask", "ReactJS", "Python"],
    category: "genomics"
  },
  {
    title: "Stock Market Prediction",
    description: "Developed LSTM and Transformer-based models for stock market prediction and backtesting. Achieved ~39% returns in 6 months.",
    technologies: ["LSTM", "Transformers", "Time-Series Forecasting"],
    category: "finance"
  },
  {
    title: "Interactive Trading Dashboard",
    description: "Built interactive trading dashboard (web & app) for real-time testing of trading strategies.",
    technologies: ["Web Development", "Real-time Data", "Visualization"],
    category: "finance"
  },
  {
    title: "Package Size/Weight Prediction",
    description: "Reduced fraudulent charges claims for package cost by around 11% using advanced regression techniques.",
    technologies: ["Regression Trees", "LSTM", "ElasticSearch"],
    category: "logistics"
  },
  {
    title: "Dangerous Goods Classification",
    description: "Classification system for dangerous/non-dangerous goods required for air transport of shipments.",
    technologies: ["NLP", "ElasticSearch", "Classification"],
    category: "logistics"
  },
  {
    title: "Image Sorting System",
    description: "A hobby project for intelligent sorting of images using computer vision techniques.",
    technologies: ["Computer Vision", "Python", "Clustering"],
    category: "hobby"
  },
  {
    title: "Hindi Poetry Author Attribution",
    description: "NLP based project for author attribution of a shayari (hindi poetry) using Llama2 pretrained model and LoRA.",
    technologies: ["NLP", "Llama2", "LoRA", "Fine-tuning"],
    category: "hobby"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'genomics':
        return <Activity className="h-4 w-4" />;
      case 'finance':
        return <Activity className="h-4 w-4" />;
      case 'logistics':
        return <Database className="h-4 w-4" />;
      case 'hobby':
        return <GitBranch className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-8 mb-12 flex flex-wrap gap-2">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 rounded-md text-sm ${filter === 'all' ? 'bg-primary text-white' : 'bg-card hover:bg-muted'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('genomics')} 
            className={`px-4 py-2 rounded-md text-sm ${filter === 'genomics' ? 'bg-primary text-white' : 'bg-card hover:bg-muted'}`}
          >
            Genomics
          </button>
          <button 
            onClick={() => setFilter('finance')} 
            className={`px-4 py-2 rounded-md text-sm ${filter === 'finance' ? 'bg-primary text-white' : 'bg-card hover:bg-muted'}`}
          >
            Finance
          </button>
          <button 
            onClick={() => setFilter('logistics')} 
            className={`px-4 py-2 rounded-md text-sm ${filter === 'logistics' ? 'bg-primary text-white' : 'bg-card hover:bg-muted'}`}
          >
            Logistics
          </button>
          <button 
            onClick={() => setFilter('hobby')} 
            className={`px-4 py-2 rounded-md text-sm ${filter === 'hobby' ? 'bg-primary text-white' : 'bg-card hover:bg-muted'}`}
          >
            Hobby Projects
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {getCategoryIcon(project.category)}
                  <span className="ml-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
