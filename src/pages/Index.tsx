
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/lib/useScrollProgress";
import ChatbotDialog from "@/components/ChatbotDialog";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useScrollAnimation();
  const [chatbotOpen, setChatbotOpen] = useState(false);
  
  useEffect(() => {
    document.title = "Puli Ram Charan Tej | Portfolio";
  }, []);

  return (
    <div className="bg-dark text-white flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Floating chatbot button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setChatbotOpen(true)}
          className="rounded-full w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-glow transition-all duration-300 p-0"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Chatbot Dialog */}
      <ChatbotDialog open={chatbotOpen} onOpenChange={setChatbotOpen} />
    </div>
  );
};

export default Index;
