"use client";

import { motion, Variants } from "framer-motion";
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
  Brain,
  Rocket,
} from "lucide-react";

export function About() {
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

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Modern teknolojilerle end-to-end web çözümleri",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Palette,
      title: "Proje Kurulumu",
      description:
        "Sadece proje geliştirme değil deployment süreçlerini de yönetebilme becerisi",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Hızlı, ölçeklenebilir ve verimli uygulamalar",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Birçok farklı ekip ile uyum içinde çalışma tecrübesi",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
  ];

  const stats = [
    {
      icon: Star,
      number: "2+",
      label: "Yıl Deneyim",
      color: "text-yellow-400",
    },
    {
      icon: Award,
      number: "25+",
      label: "Tamamlanan Proje",
      color: "text-blue-400",
    },
    {
      icon: Target,
      number: "100%",
      label: "Müşteri Memnuniyeti",
      color: "text-green-400",
    },
    {
      icon: Lightbulb,
      number: "∞",
      label: "Öğrenme Modu",
      color: "text-purple-400",
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Prisma", category: "ORM" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "Debian", category: "Operating System" },
    { name: "Linux", category: "Operating System" },
    { name: "PM2", category: "Process Manager" },
    { name: "Nginx", category: "Web Server" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Hakkımda
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Modern full-stack web projeleri geliştiren, sürekli öğrenmeye ve
              kendini geliştirmeye odaklı bir yazılım geliştirici.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
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
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Story */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Brain className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">Hikayem</h3>
                </motion.div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Web geliştirme yolculuğuma merak ile başladım. Zamanla bu
                    merak, gerçek dünya problemlerini çözen dijital deneyimler
                    yaratma tutkusuna dönüştü.
                  </p>
                  <p>
                    Teknik uzmanlığı yaratıcı problem çözme ile birleştiren
                    yaklaşımım, her zaman kullanıcı deneyimini ve performansı ön
                    planda tutar.
                  </p>
                  <p>
                    Kod yazmadığım zamanlarda yeni teknolojileri keşfediyor,
                    açık kaynak projelere katkıda bulunuyor ve diğer
                    geliştiricilere mentorluk yapıyorum.
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <motion.h4
                    className="font-semibold text-white mb-4 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <Rocket className="h-5 w-5 mr-2 text-purple-400" />
                    Teknoloji Yığınım:
                  </motion.h4>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge className="w-full justify-center px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200">
                          <span className="font-medium">{tech.name}</span>
                          <span className="ml-2 text-xs opacity-70">
                            {tech.category}
                          </span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Highlights */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} ${highlight.bgColor} flex items-center justify-center mx-auto mb-4 border border-white/20`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <highlight.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h4 className="font-semibold text-white mb-3 text-lg">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Current Focus */}
              <motion.div
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-6 border border-white/10"
                whileHover={{
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  borderColor: "rgba(99, 102, 241, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h4
                  className="font-semibold text-white mb-3 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <Target className="h-5 w-5 text-blue-400 mr-2" />
                  Şu Anki Odağım
                </motion.h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Odak alanlarım arasında SEO optimizasyonlu web uygulamaları
                  geliştirmek, modern frontend teknolojileri ile kullanıcı
                  deneyimini en üst düzeye çıkarmak ve güçlü backend sistemleri
                  tasarlamak yer alıyor. Full-stack geliştirici olarak,
                  performans odaklı ve ölçeklenebilir çözümler üretmeyi
                  hedefliyorum.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
