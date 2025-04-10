
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AIChatbot from '@/components/AIChatbot';
import Emergency from '@/components/Emergency';
import Search from '@/components/Search';
import Testimonials from '@/components/Testimonials';
import Petition from '@/components/Petition';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

const Index = () => {
  useEffect(() => {
    document.title = 'CureConnect - Find the Best Healthcare';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <ScrollObserver />
      <Navbar />
      <Hero />
      <Features />
      <AIChatbot />
      <Emergency />
      <Search />
      <Testimonials />
      <Petition />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
