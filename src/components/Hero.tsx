
import React from 'react';
import { Button } from '@/components/ui/button';
import { TypewriterText } from '@/components/AnimatedText';
import ThreeDCanvas from '@/components/ThreeDCanvas';
import SocialLinks from '@/components/SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      {/* Background Particles/3D Canvas */}
      <div className="absolute inset-0 z-0">
        <ThreeDCanvas className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left max-w-xl">
            <div className="mb-6 animate-fade-in-up">
              <span className="text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full text-sm">
                Hello, I'm
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple whitespace-nowrap">
                Puli Ram Charan Tej
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl font-sora mb-6 h-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <TypewriterText
                texts={[
                  "Aspiring Machine Learning Engineer",
                  "Cloud & Python Developer", 
                  "AI Enthusiast",
                  "Full Stack Web Innovator",
                ]}
              />
            </div>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Passionate about building intelligent, real-world applications. I specialize in Python, 
              Cloud Computing, and Deep Learning, with hands-on experience in NLP, computer vision, 
              and full-stack development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Button 
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-glow transition-all duration-300 text-white px-8"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/20 hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
                asChild
              >
                <a href={PERSONAL_INFO.resume} download="Puli_Ram_Charan_Tej_Resume.pdf">
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <SocialLinks />
            </div>
          </div>
          
          <div className="lg:flex-1 w-full max-w-md animate-float lg:ml-10">
            <div className="relative">
              <div className="glass-card w-full aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
                {PERSONAL_INFO.profileImage ? (
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 flex items-center justify-center">
                    <span className="font-sora text-4xl">P</span>
                  </div>
                )}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neon-blue"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
