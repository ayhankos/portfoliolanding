"use client";

import { motion, Variants } from "framer-motion";
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
  Zap,
  Globe,
} from "lucide-react";

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-400/30",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "ShadcnUI", level: 85 },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-400/30",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "JWT/Auth", level: 80 },
      ],
    },
    {
      icon: Database,
      title: "Database & ORM",
      color: "text-purple-400",
      bgColor: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-400/30",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Prisma", level: 85 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: "Deployment & Hosting",
      color: "text-orange-400",
      bgColor: "from-orange-500/10 to-amber-500/10",
      borderColor: "border-orange-400/30",
      skills: [
        { name: "Linux", level: 75 },
        { name: "PM2", level: 80 },
        { name: "Nginx", level: 70 },
        { name: "Vercel", level: 85 },
      ],
    },
    {
      icon: Palette,
      title: "UI/UX & Design",
      color: "text-pink-400",
      bgColor: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-400/30",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "UI Components", level: 85 },
        { name: "Design Systems", level: 80 },
        { name: "CSS Animation", level: 75 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-indigo-400",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-400/30",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Expo", level: 80 },
        { name: "Mobile UI", level: 75 },
        { name: "App Performance", level: 70 },
      ],
    },
  ];

  const tools = [
    { name: "VS Code", category: "Editor" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Version Control" },
    { name: "npm/yarn", category: "Package Manager" },
    { name: "Postman", category: "API Testing" },
    { name: "Chrome DevTools", category: "Development" },
    { name: "Terminal", category: "Command Line" },
    { name: "Figma", category: "Design" },
    { name: "Termius", category: "SSH Client" },
    { name: "Notion", category: "Documentation" },
  ];

  const highlights = [
    { icon: Star, label: "Yıl Deneyim", value: "2+", color: "text-yellow-400" },
    {
      icon: TrendingUp,
      label: "Teknoloji",
      value: "15+",
      color: "text-blue-400",
    },
    {
      icon: Code,
      label: "Tamamlanan Proje",
      value: "20+",
      color: "text-green-400",
    },
    {
      icon: Cloud,
      label: "Web Servisi",
      value: "5+",
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Yetenekler & Teknolojiler
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Teknik uzmanlığım ve yeterlilik seviyelerimin kapsamlı bir
              görünümü.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            variants={itemVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg text-center group"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon
                    className={`h-8 w-8 ${highlight.color} mx-auto mb-3`}
                  />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  {highlight.value}
                </motion.div>
                <div className="text-sm text-gray-400">{highlight.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={itemVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className={`flex items-center mb-6 p-3 rounded-xl bg-gradient-to-r ${category.bgColor} border ${category.borderColor}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <category.icon
                          className={`h-8 w-8 mr-3 ${category.color}`}
                        />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                    </motion.div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="bg-white/5 rounded-lg p-3 border border-white/10"
                          whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-medium text-gray-200">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-400 font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.5,
                                delay: 0.2 + skillIndex * 0.1,
                                ease: "easeOut",
                              }}
                              style={{
                                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Section */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
              <motion.h3
                className="text-2xl font-semibold mb-8 text-white flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Globe className="h-6 w-6 mr-2 text-blue-400" />
                </motion.div>
                Araçlar & Teknolojiler
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="w-full justify-center px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-medium text-sm">{tool.name}</span>
                        <span className="text-xs opacity-70 mt-1">
                          {tool.category}
                        </span>
                      </div>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
