
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-blue mb-12 text-center">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="bg-gradient-to-br from-dark-blue to-dark-blue/80 rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="font-poppins text-2xl font-semibold mb-4">
                    4+ Years Experience
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Specializing in fintech, healthcare, and SaaS platforms with a focus on user-centric design solutions.
                  </p>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                  User-centric UI/UX Designer with 4+ years of experience crafting intuitive digital solutions for fintech, healthcare, and SaaS platforms. Expertise in Agile-driven design systems, WCAG-compliant interfaces, and data-informed prototyping to elevate user engagement.
                </p>
                
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  Adept at bridging stakeholder vision with technical feasibility. Passionate about designing seamless workflows in CRM and B2B systems.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Design Systems', 'WCAG Compliance', 'Agile/Scrum', 'User Research'].map((skill, index) => (
                    <span 
                      key={skill}
                      className={`px-4 py-2 bg-dark-blue/10 text-dark-blue rounded-full text-sm font-medium transition-all duration-500 delay-${700 + index * 100} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
