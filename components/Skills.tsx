"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Server,
  Database,
  Cloud,
  Smartphone,
  Star,
  TrendingUp,
} from "lucide-react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<
    Record<string, number>
  >({});
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
      title: "Frontend Development",
      color: "text-blue-600",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-200",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-600",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-200",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "text-purple-600",
      bgColor: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-200",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 70 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-600",
      bgColor: "from-orange-500/10 to-amber-500/10",
      borderColor: "border-orange-200",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Kubernetes", level: 70 },
      ],
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "text-pink-600",
      bgColor: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-200",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Adobe Creative Suite", level: 75 },
        { name: "Prototyping", level: 80 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-indigo-600",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-200",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 70 },
        { name: "PWA", level: 85 },
        { name: "Responsive Design", level: 95 },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Git",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Postman",
    "Jira",
    "Slack",
    "Linear",
  ];

  const highlights = [
    { icon: Star, label: "Years of Experience", value: "5+" },
    { icon: TrendingUp, label: "Technologies Mastered", value: "25+" },
    { icon: Code, label: "Languages", value: "8+" },
    { icon: Cloud, label: "Cloud Platforms", value: "3+" },
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const progressValues: Record<string, number> = {};
        skillCategories.forEach((category) => {
          category.skills.forEach((skill) => {
            progressValues[skill.name] = skill.level;
          });
        });
        setAnimatedProgress(progressValues);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skillCategories]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and proficiency
              levels.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md rounded-xl p-6 border border-white/40 shadow-lg text-center transform hover:scale-105 transition-all duration-300"
              >
                <highlight.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {highlight.value}
                </div>
                <div className="text-sm text-gray-600">{highlight.label}</div>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-md border border-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/70"
              >
                <CardContent className="p-6">
                  <div
                    className={`flex items-center mb-6 p-3 rounded-xl bg-gradient-to-r ${category.bgColor} border ${category.borderColor}`}
                  >
                    <category.icon
                      className={`h-8 w-8 mr-3 ${category.color}`}
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-white/50 rounded-lg p-3"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${animatedProgress[skill.name] || 0}%`,
                              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools Section */}
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center justify-center">
                <Code className="h-6 w-6 mr-2 text-blue-600" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <Badge
                    key={tool}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-200 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-xl p-6 border border-white/40">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                Currently Learning
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Web3 Technologies, AI/ML Integration, Advanced Cloud
                Architecture, and Modern Testing Strategies.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-xl p-6 border border-white/40">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Star className="h-5 w-5 text-purple-600 mr-2" />
                Expertise Areas
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-stack development, Performance optimization, Scalable
                architecture, and User experience design.
              </p>
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
