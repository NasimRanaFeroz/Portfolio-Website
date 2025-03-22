"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";

const techStack = [
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: "/images/icon/JS-logo.png",
    bgColor: "bg-yellow-900/20",
    borderColor: "border-yellow-500/50",
    glowColor: "rgba(234, 179, 8, 0.3)"
  },
  {
    name: "TypeScript",
    category: "Better JavaScript",
    icon: "/images/icon/TS.png",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/50",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  {
    name: "React",
    category: "JavaScript Library",
    icon: "/images/icon/react.png",
    bgColor: "bg-blue-900/20",
    borderColor: "border-cyan-500/50",
    glowColor: "rgba(14, 165, 233, 0.3)"
  },
  {
    name: "NextJS",
    category: "React Framework",
    icon: "/images/icon/nextJS.jpg",
    bgColor: "bg-slate-900/40",
    borderColor: "border-white/30",
    glowColor: "rgba(226, 232, 240, 0.2)"
  },
  {
    name: "NodeJS",
    category: "Server Environment",
    icon: "/images/icon/node.svg",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/50",
    iconBg: "bg-white",
    glowColor: "rgba(34, 197, 94, 0.3)"
  },
  {
    name: "VueJS",
    category: "JavaScript Framework",
    icon: "/images/icon/vue.png",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/50",
    glowColor: "rgba(34, 197, 94, 0.3)"
  },
  {
    name: "React Native",
    category: "Mobile Framework",
    icon: "/images/icon/native.png",
    bgColor: "bg-blue-900/20",
    borderColor: "border-cyan-500/50",
    glowColor: "rgba(14, 165, 233, 0.3)"
  },
  {
    name: "ExpressJS",
    category: "Web framework",
    icon: "/images/icon/ex.png",
    bgColor: "bg-gray-900/20",
    borderColor: "border-gray-500/50",
    glowColor: "rgba(156, 163, 175, 0.3)"
  },
  {
    name: "Python",
    category: "Programming Language",
    icon: "/images/icon/py.png",
    bgColor: "bg-blue-900/20",
    borderColor: "border-yellow-500/50",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "/images/icon/git.png",
    bgColor: "bg-orange-900/20",
    borderColor: "border-orange-500/50",
    glowColor: "rgba(249, 115, 22, 0.3)"
  },
  {
    name: "Github",
    category: "Code Repository",
    icon: "/images/icon/ghub.png",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/50",
    glowColor: "rgba(168, 85, 247, 0.3)"
  },
  {
    name: "Tailwind",
    category: "CSS Framework",
    icon: "/images/icon/tw.png",
    bgColor: "bg-cyan-900/20",
    borderColor: "border-cyan-500/50",
    glowColor: "rgba(6, 182, 212, 0.3)"
  },
  {
    name: "BootStrap",
    category: "CSS Framework",
    icon: "/images/icon/bs.png",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/50",
    glowColor: "rgba(168, 85, 247, 0.3)"
  },
  {
    name: "Figma",
    category: "Design Tool",
    icon: "/images/icon/figma.png",
    bgColor: "bg-pink-900/20",
    borderColor: "border-pink-500/50",
    glowColor: "rgba(236, 72, 153, 0.3)"
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    icon: "/images/icon/postgre.png",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/50",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  {
    name: "MongoDB",
    category: "NoSQL database",
    icon: "/images/icon/MongoDB.png",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/50",
    glowColor: "rgba(34, 197, 94, 0.3)"
  },
  {
    name: "JWT",
    category: "Authentication token",
    icon: "/images/icon/jwt.png",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/50",
    glowColor: "rgba(168, 85, 247, 0.3)"
  },
  {
    name: "Stripe",
    category: "Payment Gateway",
    icon: "/images/icon/stripe.png",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/50",
    glowColor: "rgba(168, 85, 247, 0.3)"
  },
  {
    name: "AWS",
    category: "Cloud Service",
    icon: "/images/icon/aws.png",
    bgColor: "bg-yellow-900/20",
    borderColor: "border-yellow-500/50",
    glowColor: "rgba(234, 179, 8, 0.3)",
  },
  {
    name: "Flask",
    category: "Web framework",
    icon: "/images/icon/flask.png",
    bgColor: "bg-gray-900/20",
    borderColor: "border-gray-500/50",
    glowColor: "rgba(156, 163, 175, 0.3)"
  },
  {
    name: "SupaBase",
    category: "Backend Tool",
    icon: "/images/icon/sb.png",
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/50",
    iconBg: "bg-slate-900",
    glowColor: "rgba(34, 197, 94, 0.3)"
  },
  {
    name: "MySQL",
    category: "Relational Database",
    icon: "/images/icon/sql.svg",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/50",
    iconBg: "bg-white",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  {
    name: "Firebase",
    category: "Backend Service",
    icon: "/images/icon/fb.png",
    bgColor: "bg-orange-900/20",
    borderColor: "border-orange-500/50",
    glowColor: "rgba(249, 115, 22, 0.3)"
  },
  {
    name: "HTML",
    category: "Markup Language",
    icon: "/images/icon/html.png",
    bgColor: "bg-orange-900/20",
    borderColor: "border-orange-500/50",
    glowColor: "rgba(249, 115, 22, 0.3)"
  },
  {
    name: "CSS",
    category: "Styling Language",
    icon: "/images/icon/css3.png",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/50",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
];


const TechCard = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position tracking for 3D lighting effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Convert mouse position to CSS variables for lighting effect
  const spotlightX = useMotionTemplate`${mouseX}px`;
  const spotlightY = useMotionTemplate`${mouseY}px`;
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smoother animation
      }}
      className="perspective"
    >
      <motion.div 
        onMouseMove={handleMouseMove}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.05,
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 17 
          }
        }}
        style={{
          backgroundImage: isHovered 
            ? `radial-gradient(circle at ${spotlightX} ${spotlightY}, ${tech.glowColor}, transparent 40%)`
            : "none"
        }}
        className={`relative flex items-center rounded-xl py-4 px-4 ${tech.bgColor} backdrop-blur-sm 
          border border-opacity-20 ${tech.borderColor} shadow-lg transition-all duration-300
          hover:border-opacity-80 overflow-hidden group`}
      >
        {/* Animated background gradient */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-white/5 pointer-events-none"
            />
          )}
        </AnimatePresence>
        
        {/* Floating particles effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0,
                    x: 0, 
                    y: 0,
                    scale: 0 
                  }}
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    x: Math.random() * 60 - 30,
                    y: Math.random() * -60,
                    scale: Math.random() * 0.6 + 0.2
                  }}
                  transition={{ 
                    duration: Math.random() * 1 + 1,
                    delay: Math.random() * 0.3,
                    ease: "easeOut"
                  }}
                  className="absolute w-1 h-1 rounded-full bg-white pointer-events-none"
                  style={{ 
                    left: `${Math.random() * 100}%`,
                    bottom: "0%"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
        
        {/* Icon container with subtle rotation */}
        <motion.div 
          className={`flex-shrink-0 mr-4 w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden ${tech.iconBg || ''} 
            shadow-inner transition-transform duration-300`}
          animate={isHovered ? { rotate: [0, -5, 5, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ 
            rotate: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.4 }
          }}
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={42}
            height={42}
            className="rounded-md object-contain"
          />
        </motion.div>
        
        {/* Text content with staggered animation */}
        <div className="flex-grow">
          <motion.p 
            className="text-base font-medium"
            animate={isHovered ? { x: 3, color: "#ffffff" } : { x: 0, color: "#e2e8f0" }}
            transition={{ duration: 0.2 }}
          >
            {tech.name}
          </motion.p>
          
          <motion.p 
            className="text-xs text-gray-400"
            animate={isHovered ? { x: 3, color: "#cbd5e1" } : { x: 0, color: "#94a3b8" }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {tech.category}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Techno = () => {
  const [isInView, setIsInView] = useState(false);
  
  return (
    <motion.div 
      className="bg-gradient-to-b from-[#0b1727] to-[#0f2136] py-12 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated header */}
        <motion.div 
          className="text-center pb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-2"
          >
            <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-medium text-blue-400">
              Technical Expertise
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Technologies & Tools
          </motion.h2>
          
          <motion.p 
            className="mt-3 text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The technologies and frameworks I specialize in for building modern, scalable applications
          </motion.p>
        </motion.div>

        {/* Tech grid with stagger effect */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.06
              }
            }
          }}
        >
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>

        {/* Experience indicator with pulse animation */}
        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-800/90 to-slate-900/90 border border-slate-700/50 shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-green-400 mr-3"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  "0 0 0 0 rgba(74, 222, 128, 0.4)",
                  "0 0 0 4px rgba(74, 222, 128, 0.2)",
                  "0 0 0 0 rgba(74, 222, 128, 0.4)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <p className="text-sm text-gray-200">Actively using these technologies in production</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Techno;
