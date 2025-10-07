import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
//<img src="/img/logo.jpeg" alt="Logo" style={{maxHeight: '40px', width: 'auto' }} />
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Detect active section
      const sections = ['home', 'about', 'services', 'colab', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Use a more reliable detection method
          if (section === 'colab') {
            // Check if the colab section is visible in the viewport
            return rect.top < windowHeight && rect.bottom > 0;
          }
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      // Debug logging for colab section
      if (current === 'colab') {
        console.log('Colab section detected as active');
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (section) => activeSection === section;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <img 
                src="/img/logo.png" 
                alt="Logo" 
                style={{ width: '70px', height: '70px', objectFit: 'cover' }} 
              />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={`font-medium pb-1 transition-all duration-300 ${
                isActiveLink('home')
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`font-medium pb-1 transition-all duration-300 ${
                isActiveLink('about')
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
              }`}
            >
              About us
            </a>
            <a 
              href="#services" 
              className={`font-medium pb-1 transition-all duration-300 ${
                isActiveLink('services')
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
              }`}
            >
              Our Team
            </a>
            <a 
              href="#contact" 
              className={`font-medium pb-1 transition-all duration-300 ${
                isActiveLink('contact')
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
              }`}
            >
              Contact
            </a>
            <a 
              href="#colab" 
              className={`font-medium pb-1 transition-all duration-300 ${
                isActiveLink('colab')
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
              }`}
            >
              Collaborators
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-lg">
              <a 
                href="#home" 
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActiveLink('home') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActiveLink('about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={toggleMobileMenu}
              >
                About us
              </a>
              <a 
                href="#services" 
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActiveLink('services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={toggleMobileMenu}
              >
                Oferta ANON
              </a>
              <a 
                href="#colab" 
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActiveLink('colab') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={toggleMobileMenu}
              >
                Collaborators
              </a>
              <a 
                href="#contact" 
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActiveLink('contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
