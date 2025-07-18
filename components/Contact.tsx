"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactInfo = [
    {
      icon: Mail,
      label: "E-posta",
      value: "ayhanx926@gmail.com",
      href: "mailto:ayhanx926@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: MapPin,
      label: "Konum",
      value: "İstanbul-Kocaeli, Türkiye",
      href: "#",
      color: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: "github",
      href: "https://github.com/ayhankos",
      label: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-700/20",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/ayhaneminkos/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },
    {
      icon: "mail",
      href: "mailto:ayhanx926@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/20",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              İletişime Geçin
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Yeni projenizi başlatmaya hazır mısınız? Birlikte nasıl
              çalışabileceğimizi konuşalım.
            </p>
          </motion.div>

          <div className="gap-12">
            {/* Contact information */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl h-full">
                <motion.h3
                  className="text-2xl font-semibold mb-8 text-white flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <MessageCircle className="h-6 w-6 mr-3 text-blue-400" />
                  Bağlantı Kuralım
                </motion.h3>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </motion.div>
                      <div>
                        <div className="text-sm text-gray-400">
                          {info.label}
                        </div>
                        <motion.a
                          href={info.href}
                          className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {info.value}
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mb-8">
                  <motion.h4
                    className="text-lg font-semibold mb-4 text-white"
                    whileHover={{ x: 5 }}
                  >
                    Sosyal Medya
                  </motion.h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-gray-300 ${social.color} ${social.bgColor} transition-all duration-300`}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          borderColor: "rgba(255, 255, 255, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon === "github" ? (
                          <img
                            src="/github.svg"
                            alt="GitHub"
                            className="h-5 w-5 filter invert"
                          />
                        ) : social.icon === "linkedin" ? (
                          <Linkedin className="h-5 w-5" />
                        ) : (
                          <Mail className="h-5 w-5" />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10"
                  whileHover={{
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                    borderColor: "rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Çalışmaya Hazırım
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Şu anda tam zamanlı fırsatlar ve freelance projeler için
                    müsaitim. Bir sonraki projenizi konuşalım!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
