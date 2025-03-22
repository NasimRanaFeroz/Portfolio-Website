"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

const journey = [
  {
    year: "2022",
    title: "Started Software Engineering",
    description: "Began my journey at Sichuan University, diving into programming fundamentals."
  },
  {
    year: "2023",
    title: "Web Development Focus",
    description: "Discovered my passion for web development and started building projects with the MERN stack."
  },
  {
    year: "2024",
    title: "Internship Experience",
    description: "Gained practical experience through internships and collaborative projects."
  },
  {
    year: "2025",
    title: "Advanced Projects",
    description: "Developing complex applications and expanding my technical skill set."
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const bioRef = useRef(null);
  const journeyRef = useRef(null);
  
  const bioInView = useInView(bioRef, { once: false, threshold: 0.3 });
  const journeyInView = useInView(journeyRef, { once: false, threshold: 0.1 });
  
  const bioControls = useAnimation();
  const journeyControls = useAnimation();
  
  useEffect(() => {
    if (bioInView) {
      bioControls.start("visible");
    }
    if (journeyInView) {
      journeyControls.start("visible");
    }
  }, [bioInView, journeyInView, bioControls, journeyControls]);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1B263B] min-h-screen text-white">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="relative h-[40vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/code-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]" />
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">About Me</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto">
            Crafting digital experiences through code and creativity
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          ref={bioRef}
          className="flex flex-col lg:flex-row items-center gap-8 mb-16"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={bioControls}
        >
          <motion.div 
            className="lg:w-2/5 flex justify-center lg:justify-end"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <motion.div
                className="w-full h-full rounded-lg overflow-hidden shadow-xl"
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5, 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Image
                  src="/images/Profile.jpg"
                  alt="Nasim"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                  style={{ 
                    filter: "contrast(1.05) brightness(1.05)"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              Hello, I&apos;m Nasim
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-4 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 }
                }
              }}
            >
              A 3rd-year Software Engineering student at Sichuan University with a focus on building impactful web applications.
            </motion.p>
            
            <motion.p 
              className="text-base text-gray-400 mb-6 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 }
                }
              }}
            >
              I specialize in full-stack development using the MERN stack, creating responsive and user-friendly interfaces. My goal is to combine technical expertise with creative problem-solving to build applications that make a difference.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: 0.6 }
                }
              }}
            >
              <Link href="/projects" className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-white font-medium hover:from-sky-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center group">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          ref={journeyRef}
          className="mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={journeyControls}
        >
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
              }
            }}
          >
            My Journey
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-500 to-blue-600" />
            
            {journey.map((item, index) => (
              <motion.div 
                key={item.year + index}
                className={`flex flex-col md:flex-row items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.2 }
                  }
                }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <h3 className="text-xl font-bold text-sky-400 mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
                
                <div className="mx-4 my-3 md:my-0 relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {item.year}
                  </div>
                </div>
                
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s Create Something Amazing Together
          </motion.h2>
          
          <motion.p 
            className="text-base text-gray-300 mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I&apos;m always open to new opportunities, collaborations, and interesting projects. 
            Let&apos;s connect and bring your ideas to life!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-white font-medium hover:from-sky-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center group">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
