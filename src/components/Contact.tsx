
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-dark-blue text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 text-center">
              Let's Work Together
            </h2>
            <p className="font-inter text-white/80 text-center mb-12 max-w-2xl mx-auto">
              Ready to create something amazing? Let's discuss your next
              project.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible ? "animate-slide-in-left" : "opacity-0"
                }`}
              >
                <h3 className="font-poppins text-2xl font-semibold mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="font-inter text-white/80">Email</p>
                    <a
                      href="mailto:krishna98das@gmail.com"
                      className="font-inter text-lg hover:text-white/80 transition-colors"
                    >
                      krishna98das@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="font-inter text-white/80">Phone</p>
                    <a
                      href="tel:+353894144098"
                      className="font-inter text-lg hover:text-white/80 transition-colors"
                    >
                      +353 894144098
                    </a>
                  </div>

                  <div>
                    <p className="font-inter text-white/80">Location</p>
                    <p className="font-inter text-lg">Ireland</p>
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <a
                    href="https://linkedin.com/in/krishnadas-kadambottupalliyalil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.behance.net/krishnadas31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h1.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                    </svg>
                    <span>Behance</span>
                  </a>
                </div>

                <a href="files\Resume.pdf">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white transition-colors"
                  >
                    <Download size={16} className="mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? "animate-slide-in-right" : "opacity-0"
                }`}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-dark-blue hover:bg-white/90 font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
