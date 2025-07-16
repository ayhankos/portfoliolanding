'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
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

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'image'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates and team features.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'image'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication and real-time transactions.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'image'
    },
    {
      title: 'AI Dashboard Demo',
      description: 'Interactive dashboard showcasing AI-powered analytics and data visualization.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'video'
    },
    {
      title: 'Design System',
      description: 'A comprehensive design system with reusable components and design guidelines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'design',
      technologies: ['Figma', 'Storybook', 'React', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'image'
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts and interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'mobile',
      technologies: ['Flutter', 'OpenWeatherAPI', 'Maps API'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'image'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Portfolio</h2>
          <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            A selection of my recent work and creative projects.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-amber-600 hover:bg-amber-700' 
                    : 'hover:bg-slate-100'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-slate-800">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-slate-800">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2 py-1 bg-slate-100 text-slate-700">
                        {tech}
                      </Badge>
                    ))}
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