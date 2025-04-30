
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot, Code, Briefcase, GraduationCap, FileText, User } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EDUCATION, EXPERIENCE, PROJECTS, CERTIFICATIONS } from '@/lib/constants';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ open, onOpenChange }) => {
  const firstName = PERSONAL_INFO.name.split(' ')[0];
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hello! I'm ${firstName}'s AI assistant. How can I help you today? You can ask me about ${firstName}'s skills, projects, education, or work experience.`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [suggestions] = useState([
    "Tell me about your skills",
    "What projects have you worked on?",
    "What's your education background?",
    "Tell me about your work experience",
    "What certifications do you have?"
  ]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Process user message and get response
    setTimeout(() => {
      const botResponse = generateResponse(message);
      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay to simulate thinking
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const generateResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (normalizedMessage.match(/^(hi|hello|hey|greetings|sup|what's up).*/i)) {
      return `Hello there! I'm ${firstName}'s virtual assistant. How can I help you today? Feel free to ask about ${firstName}'s skills, projects, education, or experience!`;
    }
    
    // Check for questions about personal info
    if (normalizedMessage.includes('who') || normalizedMessage.includes('tell me about') || normalizedMessage.includes('what is your name') || normalizedMessage.includes('introduce')) {
      return `${PERSONAL_INFO.name} is an aspiring Machine Learning Engineer passionate about building intelligent, real-world applications. He specializes in Python, Cloud Computing (AWS & Azure), and Deep Learning, with hands-on experience in NLP, computer vision, and full-stack development.
      
Would you like to know more about his specific skills or projects?`;
    }
    
    // Check for questions about skills
    if (normalizedMessage.includes('skill') || normalizedMessage.includes('tech') || normalizedMessage.includes('technology') || normalizedMessage.includes('good at')) {
      return `${firstName} is proficient in various technologies including:
      
• Programming: ${SKILLS.programming.join(', ')}
• Frontend: ${SKILLS.frontend.join(', ')}
• Backend: ${SKILLS.backend.join(', ')}
• AI/ML: ${SKILLS.ai_ml.join(', ')}
• Cloud: ${SKILLS.cloud.join(', ')}
• Databases: ${SKILLS.databases.join(', ')}

His core strengths are in Python development, Machine Learning, and building full-stack web applications. Is there a particular area you'd like to explore further?`;
    }
    
    // Check for questions about projects
    if (normalizedMessage.includes('project') || normalizedMessage.includes('portfolio') || normalizedMessage.includes('work') || normalizedMessage.includes('built')) {
      let projectInfo = `${firstName} has worked on several exciting projects. Here are some highlights:`;
      
      PROJECTS.forEach((project, index) => {
        projectInfo += `\n\n• ${project.title}: ${project.description}\n  Technologies: ${project.tags.join(', ')}`;
      });
      
      projectInfo += `\n\nEach of these projects demonstrates his ability to work with different technologies and solve complex problems. Would you like more details on any specific project?`;
      
      return projectInfo;
    }
    
    // Check for questions about education
    if (normalizedMessage.includes('education') || normalizedMessage.includes('degree') || normalizedMessage.includes('university') || normalizedMessage.includes('college') || normalizedMessage.includes('study')) {
      return `${firstName}'s educational background:

• ${EDUCATION[0].degree}
  ${EDUCATION[0].institution} (${EDUCATION[0].duration})
  ${EDUCATION[0].description}

• ${EDUCATION[1].degree}
  ${EDUCATION[1].institution} (${EDUCATION[1].duration})
  ${EDUCATION[1].description}

• ${EDUCATION[2].degree}
  ${EDUCATION[2].institution} (${EDUCATION[2].duration})
  ${EDUCATION[2].description}

His education has provided him with strong foundations in computer science, AI/ML, and problem-solving skills.`;
    }
    
    // Check for contact information requests
    if (normalizedMessage.includes('contact') || normalizedMessage.includes('email') || normalizedMessage.includes('reach') || normalizedMessage.includes('hire') || normalizedMessage.includes('connect')) {
      return `You can contact ${firstName} through:

• Email: ${PERSONAL_INFO.email}
• LinkedIn: ${PERSONAL_INFO.linkedin}
• GitHub: ${PERSONAL_INFO.github}

You can also download his resume from the "Download CV" button on this website for more detailed information.`;
    }
    
    // Check for experience questions
    if (normalizedMessage.includes('experience') || normalizedMessage.includes('work history') || normalizedMessage.includes('job') || normalizedMessage.includes('intern')) {
      return `${firstName}'s professional experience includes:

• ${EXPERIENCE[0].position} at ${EXPERIENCE[0].company}
  ${EXPERIENCE[0].duration}
  
  During this role, he:
  - ${EXPERIENCE[0].highlights[0]}
  - ${EXPERIENCE[0].highlights[1]}
  - ${EXPERIENCE[0].highlights[2]}
  - ${EXPERIENCE[0].highlights[3]}

This experience has helped him develop practical skills in data analysis, teamwork, and real-world problem-solving.`;
    }

    // Check for resume requests
    if (normalizedMessage.includes('resume') || normalizedMessage.includes('cv')) {
      return `You can download ${firstName}'s resume directly from the "Download CV" button in the header section of this website. It contains detailed information about his skills, education, projects, and professional experience.`;
    }

    // Check for certifications
    if (normalizedMessage.includes('certification') || normalizedMessage.includes('certificate') || normalizedMessage.includes('course')) {
      let certInfo = `${firstName} has completed several relevant certifications that demonstrate his commitment to continuous learning:`;
      
      CERTIFICATIONS.forEach((cert) => {
        certInfo += `\n\n• ${cert.title}\n  Issued by ${cert.issuer} (${cert.date})`;
      });
      
      return certInfo + `\n\nThese certifications have helped him develop specialized skills in Python, Azure, networking, and AI/ML.`;
    }

    // Check for interests or hobbies
    if (normalizedMessage.includes('interest') || normalizedMessage.includes('hobby') || normalizedMessage.includes('passion')) {
      return `${firstName} is passionate about:

• Building intelligent applications that solve real-world problems
• Exploring cutting-edge AI and Machine Learning technologies
• Developing full-stack web applications with modern frameworks
• Computer vision projects and image processing
• Natural Language Processing and conversational AI

He enjoys learning new technologies and applying them to create innovative solutions.`;
    }
    
    // For other questions
    return `Thanks for your question! As ${firstName}'s AI assistant, I can tell you that he's an aspiring Machine Learning Engineer with expertise in:

• Python development and AI/ML technologies
• Cloud platforms (AWS & Azure)
• Full-stack web development
• Data analysis and visualization

Currently pursuing a B.Tech in Computer Science with a focus on AI/ML. Would you like to know more about his projects, skills, education, or how to contact him?`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col glass-card border-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="text-neon-blue" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              {firstName}'s AI Assistant
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto my-4 pr-2 max-h-[400px] scrollbar-thin scrollbar-thumb-neon-blue/20 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'bg-neon-blue/20 text-white' 
                    : 'bg-black/20 text-gray-200'
                } shadow-lg border border-white/5`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {msg.sender === 'bot' ? (
                    <Bot size={16} className="text-neon-blue" />
                  ) : (
                    <User size={16} className="text-neon-purple" />
                  )}
                  <span className="text-xs text-gray-400">
                    {msg.sender === 'user' ? 'You' : 'Assistant'}
                  </span>
                </div>
                <p className="text-sm whitespace-pre-line">{msg.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="mb-4 flex justify-start">
              <div className="px-4 py-2 rounded-lg bg-black/20 text-gray-200 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Bot size={16} className="text-neon-blue" />
                  <span className="text-xs text-gray-400">Assistant</span>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Quick suggestion buttons */}
        {messages.length < 3 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-xs px-3 py-1.5 rounded-full bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 transition-colors border border-neon-blue/30"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        
        <DialogFooter className="flex-shrink-0">
          <div className="flex w-full gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 glass-input"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button 
              onClick={handleSendMessage} 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-glow transition-all duration-300"
              disabled={isTyping}
            >
              <Send size={16} />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotDialog;
