
import React, { useEffect } from 'react';

const ScrollObserver = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check on load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default ScrollObserver;
