
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot } from 'lucide-react';

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
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm Puli's assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

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

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Puli will get back to you soon.",
        "That's an interesting question! Let me forward it to Puli.",
        "Feel free to check out Puli's projects on GitHub for more information.",
        "I can help connect you with Puli. What's the best way to reach you?",
        "Puli specializes in AI/ML and full stack development. Would you like to know more?"
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col glass-card border-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="text-neon-blue" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Virtual Assistant
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto my-4 pr-2 max-h-[400px]">
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
                }`}
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
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <DialogFooter className="flex-shrink-0">
          <div className="flex w-full gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 glass-input"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <Button 
              onClick={handleSendMessage} 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-glow transition-all duration-300"
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
