"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function WorkEducation() {
  const [activeSection, setActiveSection] = useState("education");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [selectedItem, setSelectedItem] = useState(null);

  const workExperience = [
    {
      company: "XYZ Tech Solutions",
      position: "Software Engineer",
      period: "January 2023 - Present",
      location: "Remote",
      description: "Developing and maintaining web applications using React, Next.js, and Node.js.",
      achievements: [
        "Led development of a customer dashboard that improved user engagement by 40%",
        "Optimized database queries resulting in 30% faster page load times",
        "Collaborated with design team to implement responsive UI components"
      ],
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      logo: "/images/icon/xyz.png"
    },
    {
      company: "ABC Digital",
      position: "Frontend Developer Intern",
      period: "May 2022 - December 2022",
      location: "Chengdu, China",
      description: "Assisted in developing UI components and implementing responsive designs.",
      achievements: [
        "Created reusable component library that reduced development time by 25%",
        "Implemented responsive designs for 5 client websites",
        "Participated in daily stand-ups and sprint planning sessions"
      ],
      tags: ["JavaScript", "React", "CSS", "Git"],
      logo: "/images/icon/abc.png"
    },
    {
      company: "Freelance",
      position: "Web Developer",
      period: "2020 - 2022",
      location: "Bangladesh",
      description: "Designed and developed websites for small businesses and individuals.",
      achievements: [
        "Completed 15+ projects for clients across various industries",
        "Maintained 100% client satisfaction rate",
        "Specialized in responsive, mobile-first design"
      ],
      tags: ["HTML/CSS", "JavaScript", "WordPress", "UI/UX"],
      logo: "/images/icon/freelance.png"
    }
  ];

  const education = [
    {
      institution: "Sichuan University",
      degree: "B.Sc. in Software Engineering",
      period: "July 2022 – Current",
      location: "Chengdu, China",
      logo: "/images/icon/scu.png",
      description: "Pursuing a comprehensive software engineering curriculum with focus on modern development practices.",
      achievements: [
        "Graduating with a Major in Software Engineering",
        "Participating in university hackathons and coding competitions",
        "CGPA 3.50 out of 4.00"
      ],
      tags: ["Final Year Project", "View All Projects"],
      color: "#8B0000"
    },
    {
      institution: "Rangpur Govt College",
      degree: "Higher Secondary Certificate (HSC) in Science",
      period: "May 2018 – January 2021",
      location: "Bangladesh",
      logo: "/images/icon/rgc.jpg",
      description: "Completed higher secondary education with focus on science subjects including Mathematics, Physics, and Chemistry.",
      achievements: [
        "Earned a certification in the field of science",
        "GPA 5.00 out of 5.00",
        "Participated in regional science fair"
      ],
      tags: ["Science", "Mathematics"],
      color: "#006400" 
    },
    {
      institution: "Rajarhat Pilot High School",
      degree: "Secondary School Certificate (SSC) in Science",
      period: "January 2013 – March 2018",
      location: "Bangladesh",
      logo: "/images/icon/rphs.jpg",
      description: "Completed secondary education with excellence in science and mathematics.",
      achievements: [
        "Earned a certification in the field of science",
        "GPA 5.00 out of 5.00",
        "Member of school science club"
      ],
      tags: ["Science", "Mathematics"],
      color: "#00008B"
    }
  ];

  const tabVariants = {
    active: { 
      backgroundColor: "#0b1727", 
      color: "#e0f2fe",
      fontWeight: "bold",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: { duration: 0.3 }
    },
    inactive: { 
      backgroundColor: "transparent", 
      color: "#9ca3af",
      fontWeight: "normal",
      boxShadow: "none",
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: [0.2, 0.5, 0.2], 
      transition: { 
        repeat: Infinity, 
        duration: 2,
        ease: "easeInOut" 
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({ 
      scale: 1,
      transition: { 
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-[#0b1727] to-[#0f1f32] py-20 px-4 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-3"
          >
            <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-medium text-blue-400">
              Professional Timeline
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            My Journey
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Exploring my professional path and educational background that shaped my expertise
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700/50"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Tab Navigation */}
          <nav className="flex bg-gray-800/70 border-b border-gray-700/50">
            <motion.button
              className="flex-1 py-5 px-6 flex items-center justify-center space-x-3 rounded-tl-xl focus:outline-none relative overflow-hidden"
              onClick={() => setActiveSection("work")}
              variants={tabVariants}
              animate={activeSection === "work" ? "active" : "inactive"}
              whileHover={{ backgroundColor: activeSection === "work" ? "#0b1727" : "#1f2937" }}
            >
              <div className="relative z-10 flex items-center space-x-3">
                <FaBriefcase className={`text-xl ${activeSection === "work" ? "text-blue-400" : "text-gray-400"}`} />
                <span className="text-xl">Work Experience</span>
              </div>
              
              {activeSection === "work" && (
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 w-full"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
            
            <motion.button
              className="flex-1 py-5 px-6 flex items-center justify-center space-x-3 rounded-tr-xl focus:outline-none relative overflow-hidden"
              onClick={() => setActiveSection("education")}
              variants={tabVariants}
              animate={activeSection === "education" ? "active" : "inactive"}
              whileHover={{ backgroundColor: activeSection === "education" ? "#0b1727" : "#1f2937" }}
            >
              <div className="relative z-10 flex items-center space-x-3">
                <FaGraduationCap className={`text-xl ${activeSection === "education" ? "text-blue-400" : "text-gray-400"}`} />
                <span className="text-xl">Education</span>
              </div>
              
              {activeSection === "education" && (
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 w-full"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          </nav>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div 
              className="p-6 md:p-8 lg:p-10"
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              key={activeSection}
            >
              {activeSection === "work" && (
                <div className="relative">
                  <div className="space-y-12 relative">
                    {workExperience.map((job, index) => (
                      <motion.div 
                        key={index}
                        className="relative"
                        variants={itemVariants}
                        custom={index}
                      >
                        {/* Timeline dot */}
                        <motion.div 
                          className="absolute left-8 top-8 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 z-10"
                          variants={dotVariants}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                        >
                          <motion.div 
                            className="absolute inset-0 rounded-full bg-blue-400/50"
                            variants={glowVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ scale: 1.5 }}
                          />
                        </motion.div>
                        
                        <motion.div 
                          className={`ml-16 rounded-xl p-6 ${selectedItem === `work-${index}` ? 'bg-gray-800/80' : 'bg-gray-800/40'} 
                            backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 
                            hover:shadow-lg hover:shadow-blue-500/5`}
                          onClick={() => setSelectedItem(selectedItem === `work-${index}` ? null : `work-${index}`)}
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            {/* Company logo */}
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                                <Image
                                  src={job.logo}
                                  alt={job.company}
                                  width={48}
                                  height={48}
                                  className="rounded-md object-contain"
                                />
                              </div>
                            </div>
                            
                            <div className="flex-grow">
                              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-blue-100">{job.position}</h3>
                                <div className="flex items-center space-x-1 text-blue-400 text-sm mt-1 md:mt-0">
                                  <FaCalendarAlt className="text-xs" />
                                  <span>{job.period}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap items-center mb-3 gap-y-2">
                                <span className="text-lg font-medium text-gray-300">{job.company}</span>
                                <span className="mx-2 text-gray-500">•</span>
                                <div className="flex items-center text-gray-400 text-sm">
                                  <FaMapMarkerAlt className="mr-1 text-xs" />
                                  <span>{job.location}</span>
                                </div>
                              </div>
                              
                              <p className="text-gray-300 mb-4">{job.description}</p>
                              
                              <AnimatePresence>
                                {(selectedItem === `work-${index}` || index === 0) && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <div className="mt-3 border-t border-gray-700/50 pt-4">
                                      <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Achievements</h4>
                                      <ul className="space-y-2 mb-4">
                                        {job.achievements.map((achievement, i) => (
                                          <motion.li 
                                            key={i} 
                                            className="text-gray-300 text-sm flex items-start"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                          >
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2"></span>
                                            {achievement}
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              
                              <div className="flex flex-wrap gap-2 mt-4">
                                {job.tags.map((tag, i) => (
                                  <span 
                                    key={i} 
                                    className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs
                                      border border-blue-500/20 shadow-sm"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              {index !== 0 && selectedItem !== `work-${index}` && (
                                <motion.button
                                  className="mt-3 text-xs text-blue-400 hover:text-blue-300 flex items-center"
                                >
                                  <span>Show details</span>
                                </motion.button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "education" && (
                <div className="relative">
                  <div className="space-y-12 relative">
                    {education.map((edu, index) => (
                      <motion.div 
                        key={index}
                        className="relative"
                        variants={itemVariants}
                        custom={index}
                      >
                        {/* Timeline dot */}
                        <motion.div 
                          className="absolute left-8 top-8 w-4 h-4 rounded-full bg-indigo-500 transform -translate-x-1/2 -translate-y-1/2 z-10"
                          variants={dotVariants}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                        >
                          <motion.div 
                            className="absolute inset-0 rounded-full bg-indigo-400/50"
                            variants={glowVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ scale: 1.5 }}
                          />
                        </motion.div>
                        
                        <motion.div 
                          className={`ml-16 rounded-xl p-6 ${selectedItem === `edu-${index}` ? 'bg-gray-800/80' : 'bg-gray-800/40'} 
                            backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300
                            hover:shadow-lg hover:shadow-indigo-500/5`}
                          onClick={() => setSelectedItem(selectedItem === `edu-${index}` ? null : `edu-${index}`)}
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="flex-shrink-0">
                              <div 
                                className="w-16 h-16 rounded-lg flex items-center justify-center p-2 shadow-lg"
                                style={{ 
                                  background: `linear-gradient(135deg, ${edu.color}33, ${edu.color}11)`,
                                  border: `1px solid ${edu.color}44`
                                }}
                              >
                                <Image
                                  src={edu.logo}
                                  alt={edu.institution}
                                  width={48}
                                  height={48}
                                  className="rounded-md object-contain"
                                />
                              </div>
                            </div>

                            <div className="flex-grow">
                              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-indigo-100">{edu.institution}</h3>
                                <div className="flex items-center space-x-1 text-indigo-400 text-sm mt-1 md:mt-0">
                                  <FaCalendarAlt className="text-xs" />
                                  <span>{edu.period}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap items-center mb-3 gap-y-2">
                                <span className="text-lg font-medium text-gray-300">{edu.degree}</span>
                                <span className="mx-2 text-gray-500">•</span>
                                <div className="flex items-center text-gray-400 text-sm">
                                  <FaMapMarkerAlt className="mr-1 text-xs" />
                                  <span>{edu.location}</span>
                                </div>
                              </div>
                              
                              <p className="text-gray-300 mb-4">{edu.description}</p>
                              
                              <AnimatePresence>
                                {(selectedItem === `edu-${index}` || index === 0) && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <div className="mt-3 border-t border-gray-700/50 pt-4">
                                      <h4 className="text-sm font-semibold text-indigo-300 mb-2">Achievements & Activities</h4>
                                      <ul className="space-y-2 mb-4">
                                        {edu.achievements.map((achievement, i) => (
                                          <motion.li 
                                            key={i} 
                                            className="text-gray-300 text-sm flex items-start"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                          >
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2"></span>
                                            {achievement}
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              
                              {edu.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {edu.tags.map((tag, i) => (
                                    <a 
                                      key={i} 
                                      href="#" 
                                      className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-xs flex items-center space-x-1 
                                        hover:bg-indigo-800/40 transition-colors border border-indigo-500/20 shadow-sm"
                                    >
                                      <span>{tag}</span>
                                      {tag.includes("View") && <FaExternalLinkAlt size={10} className="ml-1" />}
                                    </a>
                                  ))}
                                </div>
                              )}
                              
                              {index !== 0 && selectedItem !== `edu-${index}` && (
                                <motion.button
                                  className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 flex items-center"
                                >
                                  <span>Show details</span>
                                </motion.button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
