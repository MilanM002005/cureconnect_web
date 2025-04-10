
import React, { useEffect } from 'react';
import { 
  MessageSquare, 
  Bell, 
  Search, 
  FileText, 
  Stethoscope,
  Building2,
  Droplets,
  Heart
} from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-brand-pink" />,
    title: 'AI Health Chatbot',
    description: 'Get instant disease predictions and medical advice from our advanced AI assistant.',
  },
  {
    icon: <Bell className="h-8 w-8 text-brand-pink" />,
    title: 'SOS Emergency',
    description: 'One-tap emergency service to get immediate help during critical situations.',
  },
  {
    icon: <Building2 className="h-8 w-8 text-brand-pink" />,
    title: 'Hospital Recommendations',
    description: 'Find the best hospitals near you based on ratings, specialties, and facilities.',
  },
  {
    icon: <FileText className="h-8 w-8 text-brand-pink" />,
    title: 'Health Camp Petitions',
    description: 'Start or sign petitions to organize health camps in underserved areas.',
  },
  {
    icon: <Search className="h-8 w-8 text-brand-pink" />,
    title: 'Healthcare Search',
    description: 'Advanced search to find hospitals, clinics, blood donation camps, and pharmacies.',
  },
  {
    icon: <Droplets className="h-8 w-8 text-brand-pink" />,
    title: 'Blood Donation',
    description: 'Find blood donation camps or connect with donors in your area for emergencies.',
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-brand-pink" />,
    title: 'Doctor Consultations',
    description: 'Schedule online or in-person consultations with top healthcare professionals.',
  },
  {
    icon: <Heart className="h-8 w-8 text-brand-pink" />,
    title: 'Health Tracking',
    description: 'Monitor your vital signs and health metrics with personalized dashboards.',
  }
];

const Features = () => {
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
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Comprehensive Healthcare Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CureConnect offers a wide range of features designed to make healthcare more accessible, 
            efficient, and personalized for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-6 scroll-section"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 rounded-lg bg-brand-pink/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
