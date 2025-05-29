
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'ProtoPie'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Prototyping',
      skills: ['Wireframes', 'User Flows', 'A/B Testing', 'Responsive Design'],
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Research',
      skills: ['User Interviews', 'Usability Testing', 'Analytics (GA, Mixpanel)'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Accessibility',
      skills: ['WCAG 2.1/2.2', 'Inclusive Design'],
      color: 'bg-red-50 border-red-200'
    },
    {
      title: 'Advanced Tools',
      skills: ['Framer AI', 'VR/AR Prototyping', 'Salesforce Lightning'],
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Methods',
      skills: ['Agile/Scrum', 'Design Thinking', 'Lean UX'],
      color: 'bg-teal-50 border-teal-200'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-blue mb-4 text-center">
              Skills & Expertise
            </h2>
            <p className="font-inter text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A comprehensive toolkit spanning design, development, and user research methodologies
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={category.title}
                  className={`${category.color} border-2 rounded-xl p-6 transition-all duration-1000 hover:shadow-lg hover:scale-105 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 150}ms` }}
                >
                  <h3 className="font-poppins text-xl font-semibold text-dark-blue mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skill}
                        className={`px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm transition-all duration-500 hover:shadow-md hover:scale-105 ${
                          isVisible ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50) + 300}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
