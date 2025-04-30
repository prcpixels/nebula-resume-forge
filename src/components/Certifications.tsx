
import React from 'react';
import { AnimatedTitle } from '@/components/AnimatedText';
import { CERTIFICATIONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/lib/useScrollProgress';
import { ExternalLink, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const Certifications: React.FC = () => {
  useScrollAnimation();
  
  return (
    <section id="certifications" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-neon-blue h-7 w-7" />
          <AnimatedTitle text="Certifications" />
        </div>
        
        <p className="text-gray-300 max-w-2xl mb-12 scroll-animation opacity-0">
          Continuous learning is essential in the rapidly evolving tech industry. Here are some of my recent certifications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={cert.id} 
              className="glass-card p-6 rounded-lg scroll-animation opacity-0 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-black/30 border border-neon-blue/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <h3 className={cn(
                "text-lg font-bold text-center mb-1 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple"
              )}>
                {cert.title}
              </h3>
              
              <div className="text-center mb-4">
                <p className="text-gray-300 text-sm">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border border-white/10 hover:bg-neon-blue/10 hover:border-neon-blue/50 transition-all duration-300"
                asChild
              >
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>View Certificate</span>
                  <ExternalLink size={14} />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
