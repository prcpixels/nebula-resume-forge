
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  texts,
  delay = 100, 
  className 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentText === texts[currentTextIndex]) {
        // Done typing current text, pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      } else {
        // Continue typing
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].substring(0, currentText.length + 1));
        }, delay);
      }
    } else {
      if (currentText === '') {
        // Done deleting, move to next text
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      } else {
        // Continue deleting
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, delay / 2);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, delay, isTyping, texts]);
  
  return (
    <div className={cn("flex items-center", className)}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
        {currentText}
      </span>
      <span className="w-1 h-6 bg-neon-blue ml-1 animate-blink-cursor"></span>
    </div>
  );
};

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className }) => {
  return (
    <h2 className={cn("section-title relative overflow-hidden", className)}>
      <span className="inline-block animate-fade-in-up">{text}</span>
    </h2>
  );
};
