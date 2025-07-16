"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Full Stack Developer",
    "Frontend Expert",
    "Backend Specialist",
    "Database Designer",
    "API Architect",
    "Cloud Engineer",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentText("");
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }, 2000);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[80vh] max-w-full mx-auto">
            {/* Left side - Profile Image */}
            <div className="lg:col-span-2 flex justify-center order-1 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <img
                  src="/ayhan.jpeg"
                  alt="Profile"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/80 shadow-2xl backdrop-blur-sm"
                />

                {/* Tech stack icons - positioned better for mobile */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center animate-float shadow-lg border border-blue-200">
                  <Code className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center animate-float delay-700 shadow-lg border border-green-200">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div className="absolute top-1/2 -right-6 md:-right-8 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center animate-float delay-1000 shadow-lg border border-purple-200">
                  <Server className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                </div>
                <div className="absolute top-1/2 -left-6 md:-left-8 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center animate-float delay-500 shadow-lg border border-orange-200">
                  <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Ayhan Emin Kös
              </h1>

              {/* Typing animation */}
              <div className="h-12 md:h-16 mb-6 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
                  {currentText}
                  <span className="animate-pulse text-blue-500">|</span>
                </p>
              </div>

              {/* Description */}
              <div className="mb-8 lg:mb-10">
                <div className="bg-white/60 backdrop-blur-md rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/40 shadow-xl">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                    I craft end-to-end solutions from beautiful user interfaces
                    to robust backend systems. Specializing in modern web
                    technologies, cloud architecture, and scalable applications
                    that deliver exceptional user experiences.
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "TypeScript",
                      "Python",
                      "PostgreSQL",
                      "AWS",
                      "Docker",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-10">
                <Button
                  size="lg"
                  className="w-full sm:w-auto relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 bg-white/50"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social links */}
              <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6">
                {[
                  {
                    icon: (
                      <img
                        src="/github.svg"
                        alt="GitHub"
                        className="h-5 w-5 lg:h-6 lg:w-6"
                      />
                    ),
                    delay: "0s",
                  },
                  {
                    icon: <Linkedin className="h-5 w-5 lg:h-6 lg:w-6" />,
                    delay: "0.2s",
                  },
                  {
                    icon: <Mail className="h-5 w-5 lg:h-6 lg:w-6" />,
                    delay: "0.4s",
                  },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                    style={{ animationDelay: social.delay }}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center bg-white/30 backdrop-blur-sm">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce"></div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
            onClick={scrollToAbout}
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </Button>
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

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
