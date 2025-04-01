"use client";
import React, { useRef, useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaFileDownload, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { HiCode } from "react-icons/hi";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });
  
  useEffect(() => {
    // Debounced mouse move handler
    let timeoutId = null;
    const handleMouseMove = (e) => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calculate parallax values
        const parallaxX = (clientX - centerX) / 30;
        const parallaxY = (clientY - centerY) / 30;
        
        // Update spring values for smooth animation
        springX.set(parallaxX);
        springY.set(parallaxY);
      }, 5); // Short timeout for debouncing
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [springX, springY]);
  
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const imageRotateY = useTransform(scrollYProgress, [0, 0.3], [0, -5]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.3], [0, 3]);

  const socialIcons = [
    { 
      icon: <FaGithub size={20} />, 
      href: "https://github.com/NasimRanaFeroz",
      label: "GitHub",
      color: "#38bdf8"
    },
    { 
      icon: <FaLinkedin size={20} />, 
      href: "https://www.linkedin.com/in/nasim-rana-feroz",
      label: "LinkedIn",
      color: "#38bdf8"
    },
    { 
      icon: <SiGmail size={20} />, 
      href: "/contact",
      label: "Email",
      color: "#38bdf8"
    },
    { 
      icon: <AiFillInstagram size={20} />, 
      href: "https://www.instagram.com/nasim_rana_feroz/",
      label: "Instagram",
      color: "#38bdf8"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-auto overflow-hidden">
      <BackgroundBeamsWithCollision>
        <motion.div 
          className="flex flex-col h-[calc(100vh-80px)] items-center justify-center lg:flex-row-reverse lg:justify-center gap-3 md:gap-6 lg:gap-14 xl:gap-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="flex justify-center items-center p-4 sm:p-8 relative"
            style={{ 
              scale: imageScale, 
              opacity: imageOpacity,
              rotateY: imageRotateY,
              rotateX: imageRotateX,
            }}
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 2, 0, -2, 0],
                transition: { 
                  scale: { duration: 0.3 },
                  rotate: { repeat: 0, duration: 0.5 }
                }
              }}
              style={{
                x: springX,
                y: springY,
              }}
            >
              <motion.div 
                className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-r from-sky-600/20 to-blue-600/20 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  x: springX,
                  y: springY,
                  scale: 1.2,
                }}
              />
              
              <motion.div 
                className="absolute -left-5 top-1/2 -translate-y-1/2 text-4xl md:text-5xl lg:text-6xl text-sky-500/30 font-mono"
                animate={{
                  x: [0, -5, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {"{"}
              </motion.div>
              
              <motion.div 
                className="absolute -right-5 top-1/2 -translate-y-1/2 text-4xl md:text-5xl lg:text-6xl text-sky-500/30 font-mono"
                animate={{
                  x: [0, 5, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {"}"}
              </motion.div>
              
              <Image
                src="/images/Profile.jpg"
                alt="Nasim"
                fill
                className="rounded-full object-cover border-4 border-sky-900/40 shadow-lg"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(56, 189, 248, 0.3))"
                }}
                priority
              />
              
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  background: [
                    "linear-gradient(to top right, rgba(56, 189, 248, 0.2), transparent)",
                    "linear-gradient(to top right, rgba(14, 165, 233, 0.2), transparent)",
                    "linear-gradient(to top right, rgba(56, 189, 248, 0.2), transparent)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.div
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-sky-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <HiCode size={14} />
                <span>Developer</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Rest of your component remains the same */}
          <motion.div 
            className="grid rounded-xl backdrop-blur-md bg-gradient-to-r from-[#0b1320]/80 to-[#162032]/80 border border-sky-900/40 grid-cols-1 gap-5 py-6 sm:py-8 px-8 sm:px-10 md:w-3/5 lg:w-1/2 shadow-xl relative"
            style={{ y: contentY }}
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(56, 189, 248, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Content remains the same */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-t-xl" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-sky-400" />
            <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-blue-600 " />
            
            <motion.div className="flex-col" variants={itemVariants}>
              <motion.h1 
                className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hi! I&apos;m Nasim!
              </motion.h1>
              
              <motion.div className="text-blue-200/80 text-sm sm:text-base md:text-lg font-medium mt-1">
                I am a Full Stack Web Developer
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-blue-50 text-sm sm:text-base md:text-lg leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                I like to develop <span className="text-sky-400">full-stack applications</span>, make instant coffee and explore
                new technologies.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p 
                className="text-blue-200/80 text-sm sm:text-base md:text-lg flex items-center"
                whileHover={{ x: 5, color: "#38bdf8" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <IoLocationSharp className="mr-2 text-sky-400" /> 
                <span>Chengdu, Sichuan, China</span>
              </motion.p>
              <motion.p 
                className="text-blue-200/80 text-sm sm:text-base md:text-lg flex items-center"
                whileHover={{ x: 5, color: "#38bdf8" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <IoHome className="mr-2 text-sky-400" /> 
                <span>Rangpur, Bangladesh</span>
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-2"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {["MERN Stack", "Node.js", "Next.js", "Vue.js", "Tailwind CSS",].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-sky-900/30 text-sky-400 border border-sky-500/20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.8 + index * 0.1 }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(14, 165, 233, 0.2)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              className="text-sm lg:text-base text-blue-50 flex flex-wrap gap-3 sm:gap-4 md:gap-5"
              variants={itemVariants}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-lg text-sky-400 font-medium shadow-sm"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(14, 165, 233, 0.15)",
                  boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span>Resume</span>
                <FaFileDownload />
              </motion.a>

              <div className="flex gap-2 sm:gap-3">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 bg-[#162032] rounded-lg flex items-center justify-center text-sky-400 hover:text-sky-300 transition-colors shadow-sm relative group"
                    whileHover={{ 
                      scale: 1.15, 
                      backgroundColor: "rgba(14, 165, 233, 0.15)",
                      boxShadow: "0 10px 15px -3px rgba(56, 189, 248, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.5 + index * 0.1 } 
                    }}
                    style={{
                      color: social.color
                    }}
                  >
                    {social.icon}
                    
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0f172a] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Hero;
