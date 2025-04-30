
import React, { useState } from 'react';
import { AnimatedTitle } from '@/components/AnimatedText';
import { PROJECTS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/lib/useScrollProgress';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="scroll-animation opacity-0" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card
        className={cn(
          "glass-card overflow-hidden h-full transition-all duration-300 group",
          isHovered ? "transform scale-[1.02] shadow-lg shadow-neon-blue/20" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6 relative">
          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="text-xs px-2 py-1 rounded-full bg-black/30 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-2">
            <span className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300",
              isHovered ? "bg-gradient-to-r from-neon-cyan to-neon-purple" : ""
            )}>
              {project.title}
            </span>
          </h3>
          
          <p className="text-gray-300 text-sm mb-4">
            {project.description}
          </p>
          
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon-blue transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon-purple transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          
          {/* Decorative glow */}
          <div className={cn(
            "absolute -bottom-8 -right-8 w-20 h-20 rounded-full blur-xl transition-opacity duration-700",
            isHovered ? "opacity-100 bg-neon-blue/30" : "opacity-0"
          )}></div>
        </div>
      </Card>
    </div>
  );
};

const Projects: React.FC = () => {
  useScrollAnimation();
  
  return (
    <section id="projects" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <Folder className="text-neon-blue h-7 w-7" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Projects</span>
          </h2>
        </div>
        
        <p className="text-gray-300 max-w-2xl mb-12 scroll-animation opacity-0">
          Here are some of my recent projects showcasing my skills in software development, 
          data analysis, and artificial intelligence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
