
import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const courses = [
    "Python",
    "Algorithm",
    "Discrete Optimization",
    "Machine Learning",
    "Deep Learning",
    "Basic Generative Adversarial Networks (Coursera)",
    "Computer Vision Essentials (GreatLearning)",
    "Sequence models",
    "Introduction to ML in production (Coursera)",
    "AutoML (Coursera)",
    "Google Cloud Big Data and Machine Learning certification course"
  ];

  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="section-title">Education & Learning</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 mr-2 text-primary" />
              <h3 className="text-xl font-semibold">Formal Education</h3>
            </div>
            
            <div className="mb-4">
              <div className="font-medium text-primary text-lg">BITS PILANI</div>
              <div className="font-medium">M.Sc. (HONS.) BIOLOGICAL SCIENCES AND B.E. (HONS.) MECHANICAL</div>
              <div className="flex items-center text-muted-foreground text-sm mt-1">
                <Calendar size={16} className="mr-1" />
                2012 - 2017
              </div>
              <div className="text-muted-foreground text-sm">Pilani, Rajasthan, India</div>
            </div>
            
            <div className="mt-6">
              <div className="font-medium">Achievements</div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Participated in BIOMOD held at Wyss Institute, Harvard University in November 2015 and secured silver category</li>
                <li>Placed in Top 40 (INDIA) in Young Data Scientist Challenge organized by ZS Associates in August 2016</li>
                <li>4 Bronze medals at Hackerrank</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 mr-2 text-primary" />
              <h3 className="text-xl font-semibold">Online Learning</h3>
            </div>
            
            <div className="mb-4">
              <div className="font-medium">Online Courses & Certifications</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-sm rounded-md inline-flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {course}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="font-medium">Internships</div>
              <div className="mt-3">
                <div className="font-medium text-primary">INDIAN STATISTICAL INSTITUTE</div>
                <div className="text-sm">SUMMER RESEARCH INTERN</div>
                <div className="flex items-center text-muted-foreground text-xs mt-1">
                  <Calendar size={14} className="mr-1" />
                  May 2015 – July 2015
                </div>
                <div className="text-muted-foreground text-xs">Kolkata, India</div>
              </div>
              
              <div className="mt-3">
                <div className="font-medium text-primary">STRAND LIFE SCIENCES</div>
                <div className="text-sm">SUMMER INTERN</div>
                <div className="flex items-center text-muted-foreground text-xs mt-1">
                  <Calendar size={14} className="mr-1" />
                  May 2014 – July 2014
                </div>
                <div className="text-muted-foreground text-xs">Bengaluru, India</div>
                <div className="text-muted-foreground text-xs mt-1">Developed an intelligent adaptable quizzing web app for improving employee knowledge.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
