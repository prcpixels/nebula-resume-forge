
import React, { useState } from 'react';
import SocialLinks from '@/components/SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';
import ChatbotDialog from '@/components/ChatbotDialog';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [chatbotOpen, setChatbotOpen] = useState(false);
  
  return (
    <footer className="bg-black/30 py-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-sora font-bold mb-2 flex items-center gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Aspiring Machine Learning Engineer | Cloud & Python Developer | AI Enthusiast | Full Stack Web Innovator
            </p>
          </div>
          
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm mb-3">Connect with me</p>
            <SocialLinks onChatbotClick={() => setChatbotOpen(true)} />
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

      {/* Chatbot Dialog */}
      <ChatbotDialog open={chatbotOpen} onOpenChange={setChatbotOpen} />

      {/* Global styles */}
      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        
        .typing-indicator span {
          height: 8px;
          width: 8px;
          margin-right: 4px;
          border-radius: 50%;
          background-color: #3a86ff;
          display: inline-block;
          opacity: 0.4;
        }
        
        .typing-indicator span:nth-child(1) {
          animation: pulse 1s infinite ease-in-out;
        }
        
        .typing-indicator span:nth-child(2) {
          animation: pulse 1s infinite ease-in-out 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation: pulse 1s infinite ease-in-out 0.4s;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 5px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(58, 134, 255, 0.2);
          border-radius: 3px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
