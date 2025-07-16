'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Server, Database, Cloud, Smartphone } from 'lucide-react';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({});
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'text-blue-600',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'text-green-600',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      color: 'text-purple-600',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'text-orange-600',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Kubernetes', level: 70 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      color: 'text-pink-600',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Adobe Creative Suite', level: 75 },
        { name: 'Prototyping', level: 80 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'text-indigo-600',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 70 },
        { name: 'PWA', level: 85 },
        { name: 'Responsive Design', level: 95 }
      ]
    }
  ];

  const tools = [
    'VS Code', 'Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Postman', 'Jira', 'Slack', 'Linear'
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const progressValues: Record<string, number> = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            progressValues[skill.name] = skill.level;
          });
        });
        setAnimatedProgress(progressValues);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skillCategories]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Skills & Technologies</h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <category.icon className={`h-8 w-8 mr-3 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={animatedProgress[skill.name] || 0} 
                          className="h-2 bg-slate-200"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-slate-800">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline" className="px-4 py-2 text-sm hover:bg-slate-100 transition-colors">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}