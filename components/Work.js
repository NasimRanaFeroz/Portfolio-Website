"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

export default function WorkEducation() {
  const [activeSection, setActiveSection] = useState("education");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      tags: ["React", "Next.js", "Node.js", "MongoDB"]
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
      tags: ["JavaScript", "React", "CSS", "Git"]
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
      tags: ["HTML/CSS", "JavaScript", "WordPress", "UI/UX"]
    }
  ];

  const education = [
    {
      institution: "Sichuan University",
      degree: "B.Sc. in Software Engineering",
      period: "July 2022 – Current",
      location: "Chengdu, China",
      logo: "/images/icon/scu.png",
      description: "Graduating with a Major in Software Engineering",
      achievements: [
        "Graduating with a Major in Software Engineering",
        "Participating in university hackathons and coding competitions",
        "CGPA 3.50 out of 4.00"
      ],
      tags: ["Final Year Project", "View All Projects"]
    },
    {
      institution: "Rangpur Govt College",
      degree: "Higher Secondary Certificate (HSC) in Science",
      period: "May 2018 – January 2021",
      location: "Bangladesh",
      logo: "/images/icon/rgc.jpg",
      description: "Completed higher secondary education with focus on science subjects",
      achievements: [
        "Earned a certification in the field of science",
        "GPA 5.00 out of 5.00"
      ],
      tags: []
    },
    {
      institution: "Rajarhat Pilot High School",
      degree: "Secondary School Certificate (SSC) in Science",
      period: "January 2013 – March 2018",
      location: "Bangladesh",
      logo: "/images/icon/rphs.jpg",
      description: "Completed secondary education with focus on science subjects",
      achievements: [
        "Earned a certification in the field of science",
        "GPA 5.00 out of 5.00"
      ],
      tags: []
    }
  ];

  const tabVariants = {
    active: { 
      backgroundColor: "#0b1727", 
      color: "#e0f2fe",
      fontWeight: "bold",
      transition: { duration: 0.3 }
    },
    inactive: { 
      backgroundColor: "transparent", 
      color: "#9ca3af",
      fontWeight: "normal",
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
        staggerChildren: 0.1
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

  return (
    <section className="bg-gradient-to-b from-[#0b1727] to-[#0f1f32] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-100 mb-10">My Journey</h2>
        
        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Tab Navigation */}
          <nav className="flex bg-gray-800 border-b border-gray-700">
            <motion.button
              className="flex-1 py-4 px-6 flex items-center justify-center space-x-2 rounded-tl-xl focus:outline-none"
              onClick={() => setActiveSection("work")}
              variants={tabVariants}
              animate={activeSection === "work" ? "active" : "inactive"}
              whileHover={{ backgroundColor: activeSection === "work" ? "#0b1727" : "#1f2937" }}
            >
              <FaBriefcase className={activeSection === "work" ? "text-blue-400" : "text-gray-400"} />
              <span className="text-xl">Work Experience</span>
            </motion.button>
            
            <motion.button
              className="flex-1 py-4 px-6 flex items-center justify-center space-x-2 rounded-tr-xl focus:outline-none"
              onClick={() => setActiveSection("education")}
              variants={tabVariants}
              animate={activeSection === "education" ? "active" : "inactive"}
              whileHover={{ backgroundColor: activeSection === "education" ? "#0b1727" : "#1f2937" }}
            >
              <FaGraduationCap className={activeSection === "education" ? "text-blue-400" : "text-gray-400"} />
              <span className="text-xl">Education</span>
            </motion.button>
          </nav>

          {/* Content Area */}
          <motion.div 
            className="p-6 md:p-8"
            variants={contentVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            key={activeSection} // Force re-render animation when tab changes
          >
            {activeSection === "work" && (
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <motion.div 
                    key={index}
                    className="rounded-lg p-4 hover:shadow-lg transition-shadow"
                    variants={itemVariants}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-blue-100">{job.position}</h3>
                      <span className="text-blue-400 text-sm mt-1 md:mt-0">{job.period}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-medium text-gray-300">{job.company}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{job.location}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm">{achievement}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeSection === "education" && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="rounded-lg p-4 hover:shadow-lg transition-shadow"
                    variants={itemVariants}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          width={60}
                          height={60}
                          className="rounded-lg bg-white p-1"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-blue-100">{edu.institution}</h3>
                          <span className="text-blue-400 text-sm mt-1 md:mt-0">{edu.period}</span>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <span className="text-lg font-medium text-gray-300">{edu.degree}</span>
                          <span className="mx-2 text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">{edu.location}</span>
                        </div>
                        
                        <ul className="list-disc list-inside space-y-2 mb-4">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 text-sm">{achievement}</li>
                          ))}
                        </ul>
                        
                        {edu.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {edu.tags.map((tag, i) => (
                              <a 
                                key={i} 
                                href="#" 
                                className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs flex items-center space-x-1 hover:bg-blue-800/40 transition-colors"
                              >
                                <span>{tag}</span>
                                {tag.includes("View") && <FaExternalLinkAlt size={10} />}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
