
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Download } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-poppins font-bold text-xl text-dark-blue">
            Krishnadas K.
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-dark-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-dark-blue transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-dark-blue transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-dark-blue transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-dark-blue transition-colors"
            >
              Contact
            </button>
            
            <div className="flex items-center space-x-3">
              <a 
                href="https://linkedin.com/in/krishnadas-kadambottupalliyalil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-dark-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://behance.net/krishnadas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-dark-blue transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h1.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white transition-colors"
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <div className="space-y-2">
              <span className="block w-6 h-0.5 bg-dark-blue"></span>
              <span className="block w-6 h-0.5 bg-dark-blue"></span>
              <span className="block w-6 h-0.5 bg-dark-blue"></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
