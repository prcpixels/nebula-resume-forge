
import React from 'react';
import { AnimatedTitle } from '@/components/AnimatedText';
import { EXPERIENCE, EDUCATION } from '@/lib/constants';
import { useScrollAnimation } from '@/lib/useScrollProgress';
import { cn } from '@/lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  isLast?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  organization, 
  period, 
  description, 
  highlights, 
  isLast = false, 
  index 
}) => {
  return (
    <div className={cn("relative scroll-animation opacity-0")} style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-7 top-8 h-full w-[1px] bg-gradient-to-b from-neon-blue to-transparent"></div>
      )}
      
      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center border-2 border-neon-blue shadow-glow">
          <div className="w-3 h-3 rounded-full bg-neon-blue"></div>
        </div>
        
        {/* Content */}
        <div className="glass-card p-6 rounded-lg flex-1 mb-10 hover:shadow-lg hover:shadow-neon-blue/10 transition-all duration-300">
          <span className="text-sm text-neon-blue">{period}</span>
          <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
          <div className="text-gray-300 font-medium mb-4">{organization}</div>
          <p className="text-gray-400">{description}</p>
          
          {highlights && highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="mt-1 text-neon-blue">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  useScrollAnimation();
  
  return (
    <section id="experience" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-neon-blue h-7 w-7" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Experience</span>
          </h2>
        </div>
        
        <div className="flex flex-col">
          {EXPERIENCE.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.position}
              organization={exp.company}
              period={exp.duration}
              description={exp.description}
              highlights={exp.highlights}
              isLast={index === EXPERIENCE.length - 1}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-neon-blue h-7 w-7" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Education</span>
            </h2>
          </div>
          
          <div className="flex flex-col">
            {EDUCATION.map((edu, index) => (
              <TimelineItem
                key={edu.id}
                title={edu.degree}
                organization={edu.institution}
                period={edu.duration}
                description={edu.description}
                isLast={index === EDUCATION.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
