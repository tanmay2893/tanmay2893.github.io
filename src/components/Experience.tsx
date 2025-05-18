
import React, { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  achievements: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Machine Learning Specialist (Bioinformatics)",
    company: "Genome Institute of Singapore (A*STAR)",
    date: "Jan 2021 - Present",
    location: "Singapore",
    achievements: [
      "Predicted Responders vs Non-responders for Immunotherapy treatment using EDA, Classification, Graph Attention Network, and CNN.",
      "Utilized Transformer model-based embeddings to cluster existing antibodies found in the human body for potential use in drug therapy.",
      "Developed a web-based portal to discover plausible targets for cancer drugs using EDA, Regression, Clustering, Statistics, Flask, ReactJS, and Web scraping.",
      "Created a web app for deploying tumor purity prediction research as SaaS using Docker, ReactJS, Flask, and Python."
    ]
  },
  {
    title: "Associate Data Scientist",
    company: "Ecom Express",
    date: "July 2019 - December 2020",
    location: "Gurgaon, India",
    achievements: [
      "Reduced fraudulent charges claims for package cost by around 11% with Size/Weight Prediction using Regression Trees, LSTM, and ElasticSearch.",
      "Implemented classification of dangerous/non-dangerous goods required for air transport of shipments using ElasticSearch, NLP, and Classification.",
      "Developed item taxonomy classification using item descriptions for downstream tasks with NLP and ElasticSearch.",
      "Created systems for masking confidential details from ID cards using OCR, Image Processing, and Object Detection.",
      "Built prediction API for box vs non-box packages which impacted logistics costs using Deep Learning and CNNs.",
      "Provided key insights for network redesign, decreasing network cost by around 8% theoretically."
    ]
  },
  {
    title: "Software Engineer (Machine Learning)",
    company: "LexentBio Inc.",
    date: "May 2018 - April 2019",
    location: "Hyderabad, India",
    achievements: [
      "Developed Cancer Progression classifier",
      "Created Data Analytics pipelines",
      "Built Data engineering framework using GCP"
    ]
  },
  {
    title: "Software Engineer",
    company: "CGI",
    date: "November 2017 - May 2018",
    location: "Bengaluru, India",
    achievements: []
  }
];

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div ref={timelineRef} className="mt-12">
          {experienceData.map((job, index) => (
            <div key={index} className="timeline-item pl-10 animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="bg-card p-6 rounded-lg shadow-sm mb-2">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={16} className="mr-1" />
                    {job.date}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="font-medium text-primary">{job.company}</div>
                  <div className="text-muted-foreground text-sm">{job.location}</div>
                </div>
                
                {job.achievements.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
