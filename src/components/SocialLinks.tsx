
import React from 'react';
import { PERSONAL_INFO } from '@/lib/constants';
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  onChatbotClick?: () => void;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className, 
  iconSize = 20, 
  showLabels = false,
  onChatbotClick
}) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: PERSONAL_INFO.github,
      icon: <Github size={iconSize} />,
      onClick: undefined,
    },
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.linkedin,
      icon: <Linkedin size={iconSize} />,
      onClick: undefined,
    },
    {
      name: 'Chatbot',
      url: '#',
      icon: <MessageSquare size={iconSize} />,
      onClick: onChatbotClick,
    },
  ];

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.onClick ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 flex items-center gap-2"
          aria-label={link.name}
          onClick={link.onClick ? (e) => {
            e.preventDefault();
            link.onClick?.();
          } : undefined}
        >
          <div className="glass p-2 rounded-full hover:shadow-[0_0_10px_rgba(58,134,255,0.5)]">
            {link.icon}
          </div>
          {showLabels && <span className="text-sm">{link.name}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
