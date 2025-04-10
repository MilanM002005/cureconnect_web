
import React from 'react';
import { Search as SearchIcon, MapPin, Filter, Stethoscope, Building2, Pill, Droplets } from 'lucide-react';

const Search = () => {
  return (
    <section id="search" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Find Healthcare Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Easily search for hospitals, clinics, blood donation camps, and pharmacies near you.
            Get detailed information, directions, and reviews.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16 scroll-section">
          <div className="bg-white shadow-lg rounded-lg p-1 flex items-center">
            <div className="flex-1 px-4 py-3">
              <div className="flex items-center">
                <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search hospitals, clinics, pharmacies..." 
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
            <div className="border-l border-gray-200 px-3 py-3 hidden sm:flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Location" 
                className="w-24 focus:outline-none text-gray-700"
              />
            </div>
            <div className="px-3 py-3 hidden md:flex items-center">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <button className="bg-brand-pink hover:bg-brand-pink-light text-white px-6 py-3 rounded-md transition-all duration-300">
              Search
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
              <Building2 className="h-4 w-4 mr-1" /> Hospitals
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
              <Stethoscope className="h-4 w-4 mr-1" /> Clinics
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
              <Droplets className="h-4 w-4 mr-1" /> Blood Banks
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
              <Pill className="h-4 w-4 mr-1" /> Pharmacies
            </button>
          </div>
        </div>
        
        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Result Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden scroll-section">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" 
              alt="City General Hospital" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-1">City General Hospital</h3>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <span className="ml-2 text-sm text-gray-600">(245 reviews)</span>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Open 24/7</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 flex items-center">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                2.3 miles away • Downtown, Main Street
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Emergency</span>
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Cardiology</span>
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Pediatrics</span>
              </div>
              <button className="text-brand-pink hover:text-brand-pink-light font-medium text-sm">
                View Details
              </button>
            </div>
          </div>
          
          {/* Result Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden scroll-section">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80" 
              alt="HealthFirst Clinic" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-1">HealthFirst Clinic</h3>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <span className="ml-2 text-sm text-gray-600">(178 reviews)</span>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Open until 8PM</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 flex items-center">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                0.8 miles away • Westside, Oak Street
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Family Medicine</span>
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Vaccination</span>
              </div>
              <button className="text-brand-pink hover:text-brand-pink-light font-medium text-sm">
                View Details
              </button>
            </div>
          </div>
          
          {/* Result Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden scroll-section">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Central Pharmacy" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-1">Central Pharmacy</h3>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <span className="ml-2 text-sm text-gray-600">(92 reviews)</span>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Open until 10PM</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 flex items-center">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                1.5 miles away • Midtown, Elm Avenue
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Prescription</span>
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">OTC Medication</span>
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">Delivery</span>
              </div>
              <button className="text-brand-pink hover:text-brand-pink-light font-medium text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10 scroll-section">
          <button className="animated-button">View More Results</button>
        </div>
      </div>
    </section>
  );
};

export default Search;
