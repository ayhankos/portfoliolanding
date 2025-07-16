'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-6">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg mb-12 text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with modern technologies. 
            Specialized in React, Next.js, and cloud-native solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-white hover:text-amber-300 hover:bg-white/10">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-amber-300 hover:bg-white/10">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-amber-300 hover:bg-white/10">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-amber-300 animate-bounce"
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
}