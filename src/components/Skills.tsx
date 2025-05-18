
import React, { useEffect, useRef } from 'react';

interface SkillCategory {
  name: string;
  skills: Array<{ name: string; level: number }>;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "Luigi", level: 90 },
      { name: "Git", level: 85 },
      { name: "Scikit Learn", level: 90 },
      { name: "Keras", level: 85 },
      { name: "OpenCV", level: 80 },
      { name: "Selenium", level: 75 },
      { name: "Pandas", level: 95 },
      { name: "Flask", level: 80 },
      { name: "NLP", level: 85 },
    ]
  },
  {
    name: "Learning",
    skills: [
      { name: "Tensorflow", level: 70 },
      { name: "Pytorch", level: 75 },
      { name: "Docker", level: 65 },
      { name: "Folium", level: 60 },
      { name: "ReactJS", level: 60 },
      { name: "JavaScript", level: 65 },
      { name: "R", level: 60 },
      { name: "SQL", level: 70 },
      { name: "Huggingface", level: 75 },
      { name: "Langchain", level: 65 },
    ]
  },
  {
    name: "Familiar",
    skills: [
      { name: "NodeJs", level: 50 },
      { name: "MongoDB", level: 55 },
      { name: "Pyspark", level: 60 },
      { name: "AWS EC2, EMR", level: 55 },
      { name: "Elastic Search", level: 60 },
      { name: "PowerBI", level: 50 },
    ]
  }
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when visible
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const categories = skillsRef.current?.querySelectorAll('.skill-category');
    categories?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      categories?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div ref={skillsRef} className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bg">
                      <div 
                        className="skill-bar" 
                        style={{ width: 0 }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
