
import React, { useEffect, useRef, useState } from 'react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'UI/UX Design Certification',
      type: 'Professional Certification',
      description: 'Comprehensive certification in user interface and user experience design principles',
      icon: '🎨'
    },
    {
      title: 'Master's in Data Analytics',
      institution: 'Dublin Business School',
      period: '2021–2023',
      description: 'Advanced degree focusing on data-driven decision making and analytics',
      icon: '📊'
    },
    {
      title: 'Bachelor of Engineering',
      institution: 'India',
      period: '2017–2021',
      description: 'Engineering foundation with focus on technical problem-solving',
      icon: '🎓'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-blue mb-4 text-center">
              Education & Certifications
            </h2>
            <p className="font-inter text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Continuous learning and professional development in design and technology
            </p>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-dark-blue transition-all duration-1000 hover:shadow-lg hover:scale-105 ${
                    isVisible ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="font-poppins text-xl font-semibold text-dark-blue">
                          {cert.title}
                        </h3>
                        {cert.period && (
                          <span className="font-inter text-gray-600 font-medium bg-white px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                            {cert.period}
                          </span>
                        )}
                      </div>
                      
                      {cert.institution && (
                        <p className="font-inter text-gray-700 font-medium mb-2">
                          {cert.institution}
                        </p>
                      )}
                      
                      {cert.type && (
                        <p className="font-inter text-gray-700 font-medium mb-2">
                          {cert.type}
                        </p>
                      )}
                      
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
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

export default Certifications;
