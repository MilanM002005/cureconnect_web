
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content: "CureConnect helped me find a specialist for my condition within minutes. The AI chatbot accurately assessed my symptoms and recommended the right specialist. The entire process was seamless!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Healthcare Professional",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As a doctor, I appreciate how CureConnect helps patients find the right healthcare services. The emergency response system is exceptional, providing critical information before patients arrive at the hospital.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    content: "When my son had a high fever at 2 AM, the CureConnect chatbot guided me through appropriate home care steps and helped me decide when it was necessary to seek emergency care. It gave me peace of mind.",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Blood Donor",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "I've been a regular blood donor, and CureConnect makes it so easy to find blood donation camps near me. The reminders and health tracking features are really helpful in maintaining my donation schedule.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((current) => 
      (current + 1) % testimonials.length
    );
  };
  
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from patients, healthcare professionals, and donors who have experienced the benefits of CureConnect.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative scroll-section">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                className="w-16 h-16 rounded-full object-cover border-4 border-brand-pink/20"
              />
              <div className="ml-4">
                <h3 className="font-bold text-xl">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "{testimonials[activeIndex].content}"
            </blockquote>
            
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-brand-pink' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
            
            <button 
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
