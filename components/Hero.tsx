"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  }, [currentText, currentIndex, isTyping, texts]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[80vh] max-w-full mx-auto">
            {/* Left side - Profile Image */}
            <motion.div 
              className="lg:col-span-2 flex justify-center order-1 lg:order-1"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-40"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src="/ayhan.jpeg"
                  alt="Profile"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Tech stack icons - floating animation */}
                <motion.div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-blue-200/30"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <Code className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-green-200/30"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 0.7 }}
                >
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 -right-6 md:-right-8 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-purple-200/30"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1 }}
                >
                  <Server className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 -left-6 md:-left-8 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-orange-200/30"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <div className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left">
              {/* Name */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Ayhan Emin Kös
              </motion.h1>

              {/* Typing animation */}
              <motion.div 
                className="h-12 md:h-16 mb-6 flex items-center justify-center lg:justify-start"
                variants={itemVariants}
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
                  {currentText}
                  <span className="animate-pulse text-blue-400">|</span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.div 
                className="mb-8 lg:mb-10"
                variants={itemVariants}
              >
                <div className="bg-white/5 backdrop-blur-md rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl">
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6">
                    Modern web teknolojileri ile end-to-end çözümler geliştiren, 
                    kullanıcı deneyimini ön planda tutan ve ölçeklenebilir uygulamalar 
                    yaratan bir yazılım geliştirici.
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
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30 backdrop-blur-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-10"
                variants={itemVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full shadow-lg transition-all duration-300 border-0"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    CV İndir
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-full backdrop-blur-sm transition-all duration-300 bg-white/5"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    İletişime Geç
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social links */}
              <motion.div 
                className="flex justify-center lg:justify-start space-x-4 lg:space-x-6"
                variants={itemVariants}
              >
                {[
                  {
                    icon: (
                      <img
                        src="/github.svg"
                        alt="GitHub"
                        className="h-5 w-5 lg:h-6 lg:w-6 filter invert"
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
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md border border-gray-400/30 text-gray-300 hover:bg-white/20 hover:border-gray-300/50 transition-all duration-300 shadow-lg"
                    >
                      {social.icon}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center bg-white/5 backdrop-blur-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              onClick={scrollToAbout}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-6 w-6" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}