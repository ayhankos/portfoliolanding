'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star, Users, TrendingUp, BookOpen } from 'lucide-react';

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0
  });
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

  const stats = [
    { icon: TrendingUp, label: 'Projects Completed', value: 50, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 25, suffix: '+' },
    { icon: BookOpen, label: 'Years Experience', value: 5, suffix: '+' },
    { icon: Trophy, label: 'Awards Won', value: 8, suffix: '' }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'AWS Certified Solutions Architect',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
      date: '2023',
      issuer: 'Amazon Web Services',
      type: 'certification'
    },
    {
      icon: Trophy,
      title: 'Best Developer Award',
      description: 'Recognized for outstanding performance and innovation in software development.',
      date: '2022',
      issuer: 'TechCorp Solutions',
      type: 'award'
    },
    {
      icon: Star,
      title: 'React Expert Certification',
      description: 'Advanced certification in React development and modern frontend technologies.',
      date: '2022',
      issuer: 'Meta',
      type: 'certification'
    },
    {
      icon: Award,
      title: 'Innovation Challenge Winner',
      description: 'First place in company-wide innovation challenge for AI-powered development tools.',
      date: '2023',
      issuer: 'TechCorp Solutions',
      type: 'award'
    },
    {
      icon: BookOpen,
      title: 'Computer Science Degree',
      description: 'Bachelor of Science in Computer Science with focus on software engineering.',
      date: '2019',
      issuer: 'University of Technology',
      type: 'education'
    },
    {
      icon: Users,
      title: 'Team Leadership Recognition',
      description: 'Recognized for successfully leading and mentoring development teams.',
      date: '2023',
      issuer: 'TechCorp Solutions',
      type: 'recognition'
    }
  ];

  useEffect(() => {
    if (isVisible) {
      const animateNumbers = () => {
        stats.forEach((stat, index) => {
          const duration = 2000;
          const steps = 60;
          const increment = stat.value / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
              current = stat.value;
              clearInterval(timer);
            }
            
            setAnimatedNumbers(prev => ({
              ...prev,
              [stat.label.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '')]: Math.floor(current)
            }));
          }, duration / steps);
        });
      };

      setTimeout(animateNumbers, 500);
    }
  }, [isVisible, stats]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Achievements</h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            Milestones, certifications, and recognition that showcase my professional growth.
          </p>
          
          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {stat.label === 'Projects Completed' ? animatedNumbers.projects || 0 :
                     stat.label === 'Happy Clients' ? animatedNumbers.clients || 0 :
                     stat.label === 'Years Experience' ? animatedNumbers.experience || 0 :
                     animatedNumbers.awards || 0}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <achievement.icon className="h-8 w-8 text-amber-600 mr-3 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">{achievement.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{achievement.issuer}</span>
                        <Badge variant="outline" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}