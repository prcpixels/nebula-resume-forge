
import React, { useState } from 'react';
import { AnimatedTitle } from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SocialLinks from '@/components/SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';
import { useScrollAnimation } from '@/lib/useScrollProgress';
import { Send } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  
  useScrollAnimation();
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // This is a simulation of sending email via EmailJS 
      // Replace with actual EmailJS implementation when available
      console.log("Form submitted:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <AnimatedTitle text="Let's Connect" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="scroll-animation opacity-0">
            <h3 className="text-2xl font-sora mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Touch</span>
            </h3>
            
            <p className="text-gray-300 mb-6">
              I'm currently looking for new opportunities to apply my skills and grow professionally.
              Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-neon-blue transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 4a1 1 0 100 2 1 1 0 000-2zm0 7a1 1 0 100 2 1 1 0 000-2zm0-3.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-400 mb-4">Connect with me on social platforms</p>
              <SocialLinks showLabels iconSize={20} />
            </div>
          </div>
          
          <div className="scroll-animation opacity-0" style={{ animationDelay: "0.3s" }}>
            <form 
              className="glass-card p-6 rounded-lg shadow-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  className="bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue min-h-[120px]"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-glow transition-all duration-300 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Send Message</span>
                    <Send size={16} className="ml-2" />
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
