"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

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
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Led development of enterprise-scale web applications using React, Node.js, and AWS. Managed a team of 5 developers and improved application performance by 40%.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      achievements: [
        "Reduced page load times by 40% through optimization",
        "Led migration to microservices architecture",
        "Mentored 5 junior developers",
      ],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive, user-friendly interfaces.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "GraphQL"],
      achievements: [
        "Built 15+ client projects from scratch",
        "Implemented automated testing reducing bugs by 60%",
        "Collaborated with cross-functional teams",
      ],
      icon: Award,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      company: "WebDesign Studio",
      position: "Junior Developer",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      description:
        "Started my professional journey building responsive websites and learning modern development practices. Focused on front-end development and UI/UX implementation.",
      technologies: ["HTML5", "CSS3", "JavaScript", "SCSS", "jQuery"],
      achievements: [
        "Created 20+ responsive websites",
        "Improved code quality through peer reviews",
        "Learned modern development workflows",
      ],
      icon: Users,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My professional journey and the impact I've made along the way.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Modern Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 rounded-full hidden md:block opacity-30"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 md:pl-20">
                  {/* Timeline dot with gradient */}
                  <div
                    className={`absolute left-6 top-8 w-6 h-6 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center`}
                  >
                    <exp.icon className="h-3 w-3 text-white" />
                  </div>

                  <Card className="bg-white/60 backdrop-blur-md border border-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/70">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="mb-4 lg:mb-0 lg:flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center text-purple-600 mb-3 font-semibold">
                            <Building className="h-5 w-5 mr-2" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="lg:flex-shrink-0">
                          <div className="flex flex-col space-y-2 text-sm text-gray-600">
                            <div className="flex items-center bg-white/50 rounded-full px-3 py-1">
                              <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center bg-white/50 rounded-full px-3 py-1">
                              <MapPin className="h-4 w-4 mr-2 text-green-500" />
                              <span className="font-medium">
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <div className="grid md:grid-cols-1 gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-start bg-white/50 rounded-lg p-3"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Summary card */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/40">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Professional Growth
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Throughout my career, I've consistently grown from a junior
                  developer to a senior role, always focusing on learning new
                  technologies, improving code quality, and delivering
                  exceptional results. My journey reflects a commitment to
                  excellence and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
