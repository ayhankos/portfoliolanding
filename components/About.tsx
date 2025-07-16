"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Zap,
  Users,
  Star,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

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
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web solutions with modern technologies",
      color: "blue",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams",
      color: "green",
    },
  ];

  const stats = [
    { icon: Star, number: "5+", label: "Years Experience" },
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Target, number: "98%", label: "Client Satisfaction" },
    { icon: Lightbulb, number: "24/7", label: "Learning Mode" },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "Python",
    "MongoDB",
    "Redis",
    "Kubernetes",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate developer with over 5 years of experience creating
              digital solutions that make a difference.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md rounded-xl p-6 border border-white/40 shadow-lg text-center transform hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Story */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  My Story
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I started my journey in web development with a simple
                  curiosity about how websites work. Over the years, this
                  curiosity evolved into a passion for creating exceptional
                  digital experiences that solve real-world problems.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My approach combines technical expertise with creative
                  problem-solving, always focusing on user experience and
                  performance. I believe in clean code, scalable architecture,
                  and continuous learning.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or
                  mentoring fellow developers. I'm always excited to take on new
                  challenges and collaborate on innovative projects.
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">
                    Technologies I work with:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Highlights */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="bg-white/60 backdrop-blur-md border border-white/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 rounded-full bg-${highlight.color}-100 flex items-center justify-center mx-auto mb-4 border border-${highlight.color}-200`}
                      >
                        <highlight.icon
                          className={`h-6 w-6 text-${highlight.color}-600`}
                        />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional info card */}
              <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-6 border border-white/40">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  Current Focus
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Currently focusing on cloud-native applications, microservices
                  architecture, and AI-powered web solutions. Always exploring
                  the latest in web3 and blockchain technologies.
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
