
import React from 'react';
import { Linkedin, Download } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-poppins text-xl font-bold mb-2">Krishnadas Kadambottupalliyalil</h3>
            <p className="font-inter text-gray-400">UI/UX Designer & Front-End Developer</p>
            <p className="font-inter text-gray-400">Ireland | krishna98das@gmail.com</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://linkedin.com/in/krishnadas-kadambottupalliyalil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.behance.net/krishnadas31" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h1.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
            <a 
              href="#resume"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Download size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-inter text-gray-400 mb-4">
            © 2024 Krishnadas Kadambottupalliyalil. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition-colors font-inter"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
