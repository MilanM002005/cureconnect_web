
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img src="/lovable-uploads/6c239a03-e68c-4219-9118-99c4c41ea958.png" alt="CureConnect" className="h-10 w-10" />
              <span className={cn(
                "text-2xl font-bold",
                scrolled ? "text-brand-pink" : "text-white"
              )}>CureConnect</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className={cn(
              "px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200",
              scrolled ? "text-gray-700 hover:text-brand-pink" : "text-white hover:text-white hover:bg-white/20"
            )}>Features</a>
            <a href="#ai-chat" className={cn(
              "px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200",
              scrolled ? "text-gray-700 hover:text-brand-pink" : "text-white hover:text-white hover:bg-white/20"
            )}>AI Chat</a>
            <a href="#emergency" className={cn(
              "px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200",
              scrolled ? "text-gray-700 hover:text-brand-pink" : "text-white hover:text-white hover:bg-white/20"
            )}>Emergency</a>
            <a href="#search" className={cn(
              "px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200",
              scrolled ? "text-gray-700 hover:text-brand-pink" : "text-white hover:text-white hover:bg-white/20"
            )}>Search</a>
            <div className="relative group">
              <button className={cn(
                "px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 flex items-center",
                scrolled ? "text-gray-700 hover:text-brand-pink" : "text-white hover:text-white hover:bg-white/20"
              )}>
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block pt-2 w-48 right-0">
                <div className="bg-white rounded-md shadow-lg py-1">
                  <a href="#testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-pink hover:text-white">Testimonials</a>
                  <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-pink hover:text-white">About Us</a>
                  <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-pink hover:text-white">Contact</a>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="hidden md:block">
            <Button className="animated-button">Download App</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200",
                scrolled ? "text-gray-700 hover:text-brand-pink hover:bg-gray-100" : "text-white hover:bg-white/20"
              )}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-pink hover:text-white">Features</a>
          <a href="#ai-chat" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-pink hover:text-white">AI Chat</a>
          <a href="#emergency" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-pink hover:text-white">Emergency</a>
          <a href="#search" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-pink hover:text-white">Search</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-pink hover:text-white">Testimonials</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-pink hover:text-white">About Us</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-pink hover:text-white">Contact</a>
          <div className="mt-4">
            <Button className="w-full animated-button">Download App</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
