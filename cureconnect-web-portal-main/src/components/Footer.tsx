
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <a href="#" className="flex items-center space-x-2 mb-6">
              <img src="/lovable-uploads/6c239a03-e68c-4219-9118-99c4c41ea958.png" alt="CureConnect" className="h-10 w-10" />
              <span className="text-2xl font-bold text-gray-900">CureConnect</span>
            </a>
            <p className="text-gray-600 mb-6">
              Your all-in-one healthcare companion powered by AI. Get instant medical guidance, find nearby healthcare facilities, and access emergency services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-600 hover:text-brand-pink transition-colors">Features</a>
              </li>
              <li>
                <a href="#ai-chat" className="text-gray-600 hover:text-brand-pink transition-colors">AI Chatbot</a>
              </li>
              <li>
                <a href="#emergency" className="text-gray-600 hover:text-brand-pink transition-colors">Emergency Services</a>
              </li>
              <li>
                <a href="#search" className="text-gray-600 hover:text-brand-pink transition-colors">Healthcare Search</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-brand-pink transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors">Community Guidelines</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-pink mr-3 mt-0.5" />
                <span className="text-gray-600">123 Healthcare Avenue, Medical District, City</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-pink mr-3" />
                <a href="mailto:info@cureconnect.com" className="text-gray-600 hover:text-brand-pink transition-colors">info@cureconnect.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-pink mr-3" />
                <a href="tel:+1-800-CURE-CON" className="text-gray-600 hover:text-brand-pink transition-colors">+1-800-CURE-CON</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-10 border-gray-200" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CureConnect. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-600 hover:text-brand-pink transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
