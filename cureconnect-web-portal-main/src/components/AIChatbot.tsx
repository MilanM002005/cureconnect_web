
import React from 'react';
import { Button } from '@/components/ui/button';
import { SendHorizonal, User, Bot } from 'lucide-react';

const AIChatbot = () => {
  return (
    <section id="ai-chat" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-5 scroll-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              AI-Powered Health Assistant
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our advanced AI chatbot uses machine learning to help predict potential health conditions based on your symptoms. Get immediate guidance, medical information, and personalized health recommendations.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Symptom-based disease prediction</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Medication reminders and tracking</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">24/7 availability for health queries</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full p-1 bg-green-100 mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Personalized health tips and advice</span>
              </li>
            </ul>
            <Button className="animated-button">Try AI Assistant Now</Button>
          </div>
          
          {/* Chat UI */}
          <div className="lg:col-span-7 scroll-section">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-lg mx-auto lg:ml-auto">
              {/* Chat Header */}
              <div className="bg-brand-pink p-4 text-white flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">CureConnect AI</h3>
                  <p className="text-xs text-white/80">Online | Medical Assistant</p>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="p-4 h-80 overflow-y-auto bg-gray-50 space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-white mr-2">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-white p-3 rounded-lg max-w-xs shadow-sm">
                    <p className="text-gray-700">Hello! I'm your CureConnect AI assistant. How can I help you with your health today?</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-end">
                  <div className="bg-brand-pink p-3 rounded-lg max-w-xs text-white shadow-sm">
                    <p>I've been having a headache and fever for the last 2 days.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-white mr-2">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-white p-3 rounded-lg max-w-xs shadow-sm">
                    <p className="text-gray-700">I'm sorry to hear that. Can you tell me if you have any other symptoms like body aches, chills, or congestion?</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-end">
                  <div className="bg-brand-pink p-3 rounded-lg max-w-xs text-white shadow-sm">
                    <p>Yes, I also have some body pain and mild sore throat.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-white mr-2">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-white p-3 rounded-lg max-w-xs shadow-sm">
                    <p className="text-gray-700">Based on your symptoms, you might have a common cold or flu. I recommend rest, staying hydrated, and taking OTC pain relievers. If symptoms persist for more than 3-4 days or worsen, please consult a doctor.</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                  <input 
                    type="text" 
                    placeholder="Type your health concern..." 
                    className="flex-grow p-3 focus:outline-none"
                  />
                  <button className="px-4 bg-brand-pink text-white">
                    <SendHorizonal className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;
