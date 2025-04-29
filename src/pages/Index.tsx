
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/lib/useScrollProgress";

const Index = () => {
  useScrollAnimation();
  
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
    </div>
  );
};

export default Index;
