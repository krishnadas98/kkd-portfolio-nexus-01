
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
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

  const projects = [
    {
      title: 'Qbay B2B Dashboard',
      description: 'Complete redesign of enterprise dashboard with AI-driven content personalization and enhanced user workflows.',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Healthcare Patient App',
      description: 'Mobile-first patient management application with intuitive CRM journey mapping and accessibility compliance.',
      category: 'Mobile Design',
      technologies: ['Adobe XD', 'WCAG 2.1', 'A/B Testing'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Salesforce Lightning Components',
      description: 'Custom Lightning components for enhanced CRM workflows with focus on user experience and performance.',
      category: 'Enterprise Design',
      technologies: ['Salesforce', 'Lightning Design System', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-blue mb-4 text-center">
              Featured Projects
            </h2>
            <p className="font-inter text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Showcasing impactful design solutions across various industries and platforms
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 hover:shadow-2xl hover:scale-105 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="bg-white text-dark-blue hover:bg-gray-100">
                        View Project
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-dark-blue/10 text-dark-blue rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="font-poppins text-xl font-semibold text-dark-blue mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
