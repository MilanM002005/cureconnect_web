
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, Users, MapPin, Calendar } from 'lucide-react';

const Petition = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Start a Health Camp Petition
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Initiate positive change in your community by organizing health camps. Create a petition to gather support from locals and healthcare providers, and make healthcare accessible to underserved areas.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-brand-pink/10 rounded-full">
                  <CheckCircle className="w-6 h-6 text-brand-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Create Awareness</h3>
                  <p className="text-gray-600">Start a petition to raise awareness about local healthcare needs and gather community support.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-brand-pink/10 rounded-full">
                  <Users className="w-6 h-6 text-brand-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Connect with Volunteers</h3>
                  <p className="text-gray-600">Find healthcare professionals and volunteers willing to participate in your health camp.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-brand-pink/10 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Secure Venue & Resources</h3>
                  <p className="text-gray-600">Get help with logistics, venue selection, and procuring necessary medical resources.</p>
                </div>
              </div>
            </div>
            
            <Button className="animated-button flex items-center">
              <FileText className="mr-2 h-5 w-5" /> Start a Petition
            </Button>
          </div>
          
          {/* Example Petition */}
          <div className="scroll-section">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-brand-pink text-white p-6">
                <h3 className="text-2xl font-bold">Health Camp Petition Example</h3>
                <p className="opacity-90 mt-1">Diabetes Screening Camp - East Riverside</p>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/45.jpg" 
                      alt="Petition Creator" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-medium">Started by Amelia Wilson</p>
                      <p className="text-sm text-gray-500">Local Community Leader</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-brand-pink" />
                    <span className="font-semibold">247</span> <span className="text-gray-500 text-sm">supporters</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-3 text-brand-pink" />
                    <span>Proposed Date: September 15-16, 2023</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-brand-pink" />
                    <span>East Riverside Community Center</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-600 text-sm">
                    East Riverside has one of the highest rates of undiagnosed diabetes in our city. Many residents lack access to regular healthcare screenings. We're requesting volunteer healthcare providers, equipment for basic screenings, and educational materials to serve approximately 200 residents.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Needed Resources</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">4 Doctors</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">8 Nurses</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Testing Equipment</span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Educational Materials</span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="text-brand-pink hover:text-brand-pink-light font-medium text-sm flex items-center">
                    <FileText className="h-4 w-4 mr-1" /> View Full Petition
                  </button>
                  <button className="text-brand-pink bg-brand-pink/10 hover:bg-brand-pink/20 transition-colors px-4 py-2 rounded-md text-sm font-medium">
                    Support This Petition
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

export default Petition;
