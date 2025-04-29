
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EDUCATION, EXPERIENCE, PROJECTS } from '@/lib/constants';

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
      content: `Hi there! I'm ${firstName}'s AI assistant. How can I help you today?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const generateResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (normalizedMessage.match(/^(hi|hello|hey|greetings|sup|what's up).*/i)) {
      return `Hello there! I'm ${firstName}'s virtual assistant. How can I help you today?`;
    }
    
    // Check for questions about personal info
    if (normalizedMessage.includes('who') || normalizedMessage.includes('tell me about') || normalizedMessage.includes('what is your name') || normalizedMessage.includes('introduce')) {
      return `${PERSONAL_INFO.name} is an aspiring Machine Learning Engineer passionate about building intelligent, real-world applications. He specializes in Python, Cloud Computing (AWS & Azure), and Deep Learning, with hands-on experience in NLP, computer vision, and full-stack development.`;
    }
    
    // Check for questions about skills
    if (normalizedMessage.includes('skill') || normalizedMessage.includes('tech') || normalizedMessage.includes('technology')) {
      return `${firstName} is proficient in various technologies including:
      
Programming: ${SKILLS.programming.join(', ')}
Frontend: ${SKILLS.frontend.join(', ')}
Backend: ${SKILLS.backend.join(', ')}
AI/ML: ${SKILLS.ai_ml.join(', ')}
Cloud: ${SKILLS.cloud.join(', ')}
Databases: ${SKILLS.databases.join(', ')}

Is there a specific skill you'd like to know more about?`;
    }
    
    // Check for questions about projects
    if (normalizedMessage.includes('project') || normalizedMessage.includes('portfolio') || normalizedMessage.includes('work')) {
      const projectList = PROJECTS.map((project, index) => `${index + 1}. ${project.title}: ${project.description}`).join('\n\n');
      return `${firstName} has worked on several exciting projects including:
      
${projectList}

You can check out more details in the Projects section of this portfolio!`;
    }
    
    // Check for questions about education
    if (normalizedMessage.includes('education') || normalizedMessage.includes('degree') || normalizedMessage.includes('university') || normalizedMessage.includes('college') || normalizedMessage.includes('study')) {
      return `${firstName}'s education:
      
${EDUCATION[0].degree} at ${EDUCATION[0].institution} (${EDUCATION[0].duration})

${EDUCATION[1].degree} at ${EDUCATION[1].institution} (${EDUCATION[1].duration})

${EDUCATION[2].degree} at ${EDUCATION[2].institution} (${EDUCATION[2].duration})`;
    }
    
    // Check for contact information requests
    if (normalizedMessage.includes('contact') || normalizedMessage.includes('email') || normalizedMessage.includes('reach') || normalizedMessage.includes('hire')) {
      return `You can contact ${firstName} via email at ${PERSONAL_INFO.email} or connect on LinkedIn at ${PERSONAL_INFO.linkedin}. Would you like me to provide more information?`;
    }
    
    // Check for experience questions
    if (normalizedMessage.includes('experience') || normalizedMessage.includes('work history') || normalizedMessage.includes('job') || normalizedMessage.includes('intern')) {
      return `${firstName} has the following work experience:
      
${EXPERIENCE[0].position} at ${EXPERIENCE[0].company} (${EXPERIENCE[0].duration})

During this internship, he:
- ${EXPERIENCE[0].highlights[0]}
- ${EXPERIENCE[0].highlights[1]}`;
    }

    // Check for resume requests
    if (normalizedMessage.includes('resume') || normalizedMessage.includes('cv')) {
      return `You can download ${firstName}'s resume directly from the "Download CV" button on the homepage. It contains detailed information about his skills, education, and professional experience.`;
    }

    // Check for interests or hobbies
    if (normalizedMessage.includes('interest') || normalizedMessage.includes('hobby') || normalizedMessage.includes('passion')) {
      return `${firstName} is passionate about building intelligent applications, particularly in the field of AI and Machine Learning. He enjoys exploring new technologies, working on computer vision projects, and developing full-stack applications. He's currently focused on advanced AI integration and creating futuristic user experiences.`;
    }
    
    // For other questions
    return `Thanks for your question about ${normalizedMessage.slice(0, 30)}... 

Based on ${firstName}'s portfolio, he's an aspiring Machine Learning Engineer with expertise in Python, AI/ML, and full-stack development. He's currently pursuing his B.Tech in Computer Science and had an internship at Practo Technologies.

Is there something specific about his skills, education, or projects you'd like to know more about?`;
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
                    <MessageSquare size={16} className="text-neon-purple" />
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
