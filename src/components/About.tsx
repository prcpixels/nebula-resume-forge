
import React from 'react';
import { AnimatedTitle } from '@/components/AnimatedText';
import { SKILLS } from '@/lib/constants';
import { useScrollAnimation } from '@/lib/useScrollProgress';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="glass-card p-4 h-full">
      <h3 className="text-lg font-sora mb-3 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="bg-black/30 text-sm px-3 py-1 rounded-full border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-glow"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  useScrollAnimation();
  
  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Me</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animation opacity-0">
            <h3 className="text-2xl font-sora mb-6 text-white">
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">innovative solutions</span> through code
            </h3>
            
            <p className="text-gray-300 mb-6">
              I'm Puli Ram Charan Tej, an aspiring software developer with a passion for AI/ML, web development, 
              and cloud technologies. I enjoy solving complex problems and creating efficient, elegant solutions.
            </p>
            
            <p className="text-gray-300 mb-6">
              Currently, I'm working as a Software Engineering Intern at Practo, where I'm 
              applying machine learning techniques to analyze health data and improve patient outcomes.
            </p>
            
            <p className="text-gray-300 mb-6">
              My goal is to create technology that makes a positive impact on people's lives through 
              intuitive interfaces and intelligent systems. I continuously expand my knowledge and
              skills to keep up with the rapidly evolving tech landscape.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-neon-blue/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Problem Solver</h4>
                  <p className="text-sm text-gray-400">Creative thinker</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-neon-purple/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Team Player</h4>
                  <p className="text-sm text-gray-400">Collaborative approach</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-neon-blue/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Fast Learner</h4>
                  <p className="text-sm text-gray-400">Adaptable & curious</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-animation opacity-0" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-sora mb-6 text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Technical Skills</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCategory title="Programming" skills={SKILLS.programming} />
              <SkillCategory title="Frontend" skills={SKILLS.frontend} />
              <SkillCategory title="Backend" skills={SKILLS.backend} />
              <SkillCategory title="AI & ML" skills={SKILLS.ai_ml} />
              <SkillCategory title="Cloud & DevOps" skills={SKILLS.cloud} />
              <SkillCategory title="Databases" skills={SKILLS.databases} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
