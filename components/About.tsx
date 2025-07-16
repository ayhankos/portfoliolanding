'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code, title: 'Full Stack Development', description: 'Expertise in modern web technologies' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { icon: Zap, title: 'Performance Optimization', description: 'Building fast, scalable applications' },
    { icon: Users, title: 'Team Leadership', description: 'Leading development teams effectively' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">About Me</h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            A passionate developer with over 5 years of experience creating digital solutions that make a difference.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">My Story</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I started my journey in web development with a simple curiosity about how websites work. 
                Over the years, this curiosity evolved into a passion for creating exceptional digital experiences 
                that solve real-world problems.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                My approach combines technical expertise with creative problem-solving, always focusing on 
                user experience and performance. I believe in clean code, scalable architecture, and 
                continuous learning.
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 bg-slate-100 text-slate-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-800 mb-2">{highlight.title}</h4>
                    <p className="text-sm text-slate-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}