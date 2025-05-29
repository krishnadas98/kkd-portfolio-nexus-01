
import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Qbay',
      period: '2024–2025',
      role: 'UI/UX Designer',
      achievements: [
        'B2B dashboard redesign',
        'AI-driven content personalization',
        'Accessibility audits'
      ],
      color: 'border-l-blue-500'
    },
    {
      company: 'Mentika (India)',
      period: '2022–2024',
      role: 'Junior UI/UX Designer',
      achievements: [
        'Patient app design',
        'CRM journey mapping',
        'CTA A/B tests'
      ],
      color: 'border-l-green-500'
    },
    {
      company: 'Infinite OSS',
      period: '2021–2022',
      role: 'Front-End Developer',
      achievements: [
        'Site performance optimization',
        'SEO improvement',
        'Payment integrations'
      ],
      color: 'border-l-purple-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-blue mb-4 text-center">
              Experience
            </h2>
            <p className="font-inter text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Building user-centric solutions across diverse industries and platforms
            </p>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className={`border-l-4 ${exp.color} pl-8 py-6 bg-gray-50 rounded-r-xl transition-all duration-1000 hover:shadow-lg hover:bg-gray-100 ${
                    isVisible ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-poppins text-2xl font-semibold text-dark-blue">
                        {exp.company}
                      </h3>
                      <p className="font-inter text-lg text-gray-700 font-medium">
                        {exp.role}
                      </p>
                    </div>
                    <span className="font-inter text-gray-600 font-medium bg-white px-4 py-2 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div 
                        key={achievement}
                        className={`bg-white p-4 rounded-lg shadow-sm border transition-all duration-500 hover:shadow-md hover:scale-105 ${
                          isVisible ? 'animate-scale-in' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${(index * 200) + (achievementIndex * 100) + 300}ms` }}
                      >
                        <p className="font-inter text-gray-700 font-medium text-center">
                          {achievement}
                        </p>
                      </div>
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

export default Experience;
