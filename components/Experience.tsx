'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

export function Experience() {
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

  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of enterprise-scale web applications using React, Node.js, and AWS. Managed a team of 5 developers and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      achievements: [
        'Reduced page load times by 40% through optimization',
        'Led migration to microservices architecture',
        'Mentored 5 junior developers'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive, user-friendly interfaces.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'GraphQL'],
      achievements: [
        'Built 15+ client projects from scratch',
        'Implemented automated testing reducing bugs by 60%',
        'Collaborated with cross-functional teams'
      ]
    },
    {
      company: 'WebDesign Studio',
      position: 'Junior Developer',
      location: 'Los Angeles, CA',
      period: '2019 - 2020',
      description: 'Started my professional journey building responsive websites and learning modern development practices. Focused on front-end development and UI/UX implementation.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SCSS', 'jQuery'],
      achievements: [
        'Created 20+ responsive websites',
        'Improved code quality through peer reviews',
        'Learned modern development workflows'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Experience</h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300 hidden md:block"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.position}</h3>
                          <div className="flex items-center text-amber-600 mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <div className="text-sm text-slate-600">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1 bg-amber-100 text-amber-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}