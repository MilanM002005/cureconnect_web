
import React from 'react';
import { Phone, Navigation, Clock, AlertTriangle } from 'lucide-react';

const Emergency = () => {
  return (
    <section id="emergency" className="py-24 hero-gradient text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 scroll-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Services</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Quick access to emergency services when every second counts. Our SOS feature connects you with emergency responders immediately.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* SOS Button Demo */}
          <div className="scroll-section flex flex-col items-center justify-center">
            <div className="relative">
              <button className="sos-button text-2xl z-10">
                SOS
              </button>
              <span className="block text-center mt-6 text-white/90 font-medium">
                Press the SOS button in emergency situations
              </span>
            </div>
            
            <div className="mt-10 glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-white/90">Emergency Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>Automatic emergency calling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Navigation className="h-4 w-4" />
                  </div>
                  <span>GPS location sharing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <span>Alert emergency contacts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>24/7 emergency support</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Emergency Services Illustration */}
          <div className="scroll-section">
            <div className="relative">
              <div className="rotating-border">
                <img 
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Emergency Services" 
                  className="rounded-xl w-full max-w-md mx-auto"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 -right-4 bg-white text-red-600 p-4 rounded-lg shadow-lg animate-pulse">
                <AlertTriangle className="h-8 w-8" />
              </div>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 py-3 px-6 rounded-lg shadow-lg">
                <p className="font-semibold flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-brand-pink" />
                  Average response time: 4 minutes
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg opacity-90 max-w-md mx-auto">
                CureConnect partners with local emergency services to ensure you get help as quickly as possible in critical situations.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] relative block">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Emergency;
