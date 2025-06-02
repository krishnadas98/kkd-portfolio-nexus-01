
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Download } from 'lucide-react';

const Hero = () => {
  // const scrollToProjects = () => {
  //   const element = document.getElementById('projects');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-blue to-dark-blue/90 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Krishnadas<br />
              <span className="text-white/80">Kadambottupalliyalil</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-inter">
              UI/UX Designer & Front-End Developer
            </p>
            
            <p className="text-lg mb-8 text-white/80 font-inter">
              📍 Ireland | 📞 +353 894144098 | ✉️ krishna98das@gmail.com
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {/* <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="bg-white text-dark-blue hover:bg-white/90 font-medium px-8 py-3"
              >
                View Projects
              </Button> */}
               <a href="files\Resume.pdf">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-dark-blue hover:bg-white hover:text-dark-blue px-8 py-3"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://linkedin.com/in/krishnadas-kadambottupalliyalil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.behance.net/krishnadas31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h1.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
                <span>Behance</span>
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
