"use client";
import React, { useRef } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Navbar from "./Navbar";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  const socialIcons = [
    { 
      icon: <FaGithub size={20} />, 
      href: "https://github.com/NasimRanaFeroz",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={20} />, 
      href: "https://www.linkedin.com/in/nasim-rana-feroz",
      label: "LinkedIn"
    },
    { 
      icon: <SiGmail size={20} />, 
      href: "/contact",
      label: "Email"
    },
    { 
      icon: <AiFillInstagram size={20} />, 
      href: "https://www.instagram.com/nasim_rana_feroz/",
      label: "Instagram"
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
    <div ref={containerRef} className="relative h-auto overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        
        <motion.div 
          className="flex flex-col h-[calc(100vh-80px)] items-center justify-center sm:flex-row-reverse sm:justify-center gap-3 md:gap-6 lg:gap-14 xl:gap-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center items-center p-4 sm:p-8"
            style={{ scale: imageScale, opacity: imageOpacity }}
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
            >
              <Image
                src="/images/Profile.jpg"
                alt="Nasim"
                fill
                className="rounded-full object-cover border-4 border-sky-400/30 shadow-lg"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(56, 189, 248, 0.3))"
                }}
                priority
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="grid rounded-xl backdrop-blur-md bg-white/10 border border-black/20 grid-cols-1 gap-5 py-6 sm:py-8 px-8 sm:px-10 md:w-3/5 lg:w-1/2 shadow-xl"
            style={{ y: contentY }}
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(56, 189, 248, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div className="flex-col" variants={itemVariants}>
              <motion.h1 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-black"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hi! I&apos;m Nasim!
              </motion.h1>
              <motion.p 
                className="text-black text-sm sm:text-base md:text-lg font-medium mt-1"
                variants={itemVariants}
              >
                I&apos;m a Full Stack Web Developer
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-black text-sm sm:text-base md:text-lg leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                I like to develop full-stack applications, make instant coffee and explore
                new technologies.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p 
                className="text-black text-sm sm:text-base md:text-lg flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <IoLocationSharp className="mr-2 text-black" /> 
                Chengdu, Sichuan, China
              </motion.p>
              <motion.p 
                className="text-black text-sm sm:text-base md:text-lg flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <IoHome className="mr-2 text-black" /> 
                Rangpur, Bangladesh
              </motion.p>
            </motion.div>

            <motion.div 
              className="text-sm lg:text-base text-black flex flex-wrap gap-3 sm:gap-4 md:gap-5"
              variants={itemVariants}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-transparent  rounded-lg text-black font-medium shadow-sm"
                whileHover={{ 
                  scale: 1.05,
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
                    className="p-2 bg-transparent  rounded-lg flex items-center justify-center text-black shadow-sm"
                    whileHover={{ 
                      scale: 1.15, 
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
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
                  >
                    {social.icon}
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
