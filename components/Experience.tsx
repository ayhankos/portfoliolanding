"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Users,
  Code2,
  Zap,
  Target,
  Code,
  Layout,
} from "lucide-react";
import { Variants } from "framer-motion";

export function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      company: "Freelance",
      position: "Yazılım Geliştirici",
      location: "Türkiye",
      period: "Ağustos 2024 - Günümüz",
      description:
        "Freelancer olarak çeşitli platformlarda hizmet vererek modern web teknolojileri ile projeler geliştiriyorum. SEO odaklı ve performans optimize edilmiş çözümler sunuyorum.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      achievements: [
        "10+ müşteri projesini başarıyla tamamladım",
        "SEO optimizasyonu ile organik trafiği artırdım",
        "Modern web teknolojileri ile yüksek performanslı uygulamalar geliştirdim",
        "Müşteri memnuniyeti odaklı çözümler sundum",
      ],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      company: "Moobile Bilgi Teknolojileri ve Yazılım Sanayii",
      position: "Yazılım Geliştirici",
      location: "Türkiye",
      period: "Mart 2024 - Ağustos 2024",
      description:
        "Full-stack geliştirici olarak web ve mobil uygulamalar geliştirdim. Modern teknolojiler kullanarak performans optimizasyonu ve kullanıcı deneyimi iyileştirmeleri yaptım.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Prisma",
        "ShadCN UI",
        "Tailwind CSS",
        "React Native",
        "Expo",
      ],
      achievements: [
        "Çeşitli kurumsal projelerde frontend ve backend geliştirmeleri gerçekleştirdim",
        "Modern teknoloji stack'i ile yeni projelerin yapılandırmasını ve geliştirilmesini sağladım",
        "Müşteri ihtiyaçlarına yönelik özelleştirilmiş web ve mobil çözümler ürettim",
        "Takım içi code review süreçlerine ve teknik dokümantasyona katkıda bulundum",
      ],
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      company: "TeknoDC",
      position: "Frontend Stajyeri",
      location: "Türkiye",
      period: "Yaz 2023",
      description:
        "Modern frontend teknolojileri kullanarak etkileşimli UI bileşenleri geliştirdim. Responsive tasarım prensiplerini uygulayarak kullanıcı dostu arayüzler oluşturdum.",
      technologies: [
        "JavaScript",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "React",
        "Responsive Design",
      ],
      achievements: [
        "Yeniden kullanılabilir UI komponentleri geliştirdim",
        "Modern web standartlarını uyguladım",
        "Cross-browser uyumluluğunu sağladım",
        "Performans optimizasyonları gerçekleştirdim",
      ],
      icon: Layout,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
    {
      company: "Marmara Teknokent",
      position: "Yazılım Stajyeri",
      location: "İstanbul, Türkiye",
      period: "Yaz 2022",
      description:
        "Web geliştirme temellerini uygulayarak portföy ve açılış sayfaları oluşturdum. Modern web teknolojilerini kullanarak responsive tasarımlar geliştirdim.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Git",
        "Web Standards",
      ],
      achievements: [
        "5+ portföy ve landing page geliştirdim",
        "Modern CSS pratiklerini uyguladım",
        "Temel web optimizasyonları gerçekleştirdim",
        "Version control sistemlerini aktif kullandım",
      ],
      icon: Code2,
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Deneyimlerim
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Profesyonel yolculuğum ve yol boyunca yarattığım etkiler.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Modern Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 rounded-full hidden md:block opacity-30"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12 md:pl-20"
                  variants={itemVariants}
                >
                  {/* Timeline dot with gradient */}
                  <motion.div
                    className={`absolute left-6 top-8 w-6 h-6 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-gray-900 shadow-lg hidden md:flex items-center justify-center`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <exp.icon className="h-3 w-3 text-white" />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotateY: 2,
                      rotateX: 2,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-xl">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="mb-4 lg:mb-0 lg:flex-1">
                            <motion.h3
                              className="text-2xl font-bold text-white mb-2"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              {exp.position}
                            </motion.h3>
                            <motion.div
                              className="flex items-center text-purple-400 mb-3 font-semibold"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Building className="h-5 w-5 mr-2" />
                              <span>{exp.company}</span>
                            </motion.div>
                          </div>

                          <div className="lg:flex-shrink-0">
                            <div className="flex flex-col space-y-2 text-sm text-gray-400">
                              <motion.div
                                className="flex items-center bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm"
                                whileHover={{
                                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                                }}
                              >
                                <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                                <span className="font-medium">
                                  {exp.period}
                                </span>
                              </motion.div>
                              <motion.div
                                className="flex items-center bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm"
                                whileHover={{
                                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                                }}
                              >
                                <MapPin className="h-4 w-4 mr-2 text-green-400" />
                                <span className="font-medium">
                                  {exp.location}
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                          {exp.description}
                        </p>

                        <div className="mb-6">
                          <motion.h4
                            className="font-semibold text-white mb-4 flex items-center"
                            whileHover={{ x: 5 }}
                          >
                            <Award className="h-5 w-5 mr-2 text-yellow-400" />
                            Temel Başarılar
                          </motion.h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                className="flex items-start bg-white/5 rounded-lg p-3 border border-white/10"
                                whileHover={{
                                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                                  borderColor: "rgba(255, 255, 255, 0.2)",
                                  x: 5,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.div
                                  className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}
                                  whileHover={{ scale: 1.5 }}
                                />
                                <span className="text-gray-300 text-sm">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <motion.h4
                            className="font-semibold text-white flex items-center"
                            whileHover={{ x: 5 }}
                          >
                            <Code2 className="h-5 w-5 mr-2 text-blue-400" />
                            Kullanılan Teknolojiler:
                          </motion.h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge
                                  className={`px-3 py-1 bg-gradient-to-r ${exp.bgGradient} text-white border border-white/20 hover:border-white/40 transition-all duration-200`}
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary card */}
          <motion.div
            className="max-w-4xl mx-auto mt-16"
            variants={itemVariants}
          >
            <motion.div
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              whileHover={{
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                borderColor: "rgba(99, 102, 241, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="h-8 w-8 text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Profesyonel Gelişim
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Kariyerim boyunca yazılımla ilk tanıştığım andan şimdiye kadar
                  sürekli kendimi geliştirmeye odaklandım. Her zaman yeni
                  teknolojiler öğrenmeye, kod kalitesini artırmaya ve olağanüstü
                  sonuçlar vermeye odaklandım. Yolculuğum mükemmellik ve sürekli
                  gelişim odaklı devam ediyor.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
