
import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/30 py-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-sora font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
              <span className="text-white">.</span>
            </div>
            <p className="text-gray-400 text-sm">
              Aspiring Software Developer | AI/ML Enthusiast | Full Stack Developer
            </p>
          </div>
          
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm mb-3">Connect with me</p>
            <SocialLinks />
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="text-sm text-gray-400 hover:text-white transition-colors">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
