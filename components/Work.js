"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { workExperience, education } from "../data/workEducation";

const tabVariants = {
  active: {
    backgroundColor: "#0b1727",
    color: "#e0f2fe",
    fontWeight: "bold",
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    transition: { duration: 0.3 },
  },
  inactive: {
    backgroundColor: "transparent",
    color: "#9ca3af",
    fontWeight: "normal",
    boxShadow: "none",
    transition: { duration: 0.3 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const glowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0.2, 0.5, 0.2],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: (i) => ({
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  }),
};

const achievementVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const blobLeftAnim = { x: [0, 10, 0], y: [0, 15, 0] };
const blobRightAnim = { x: [0, -15, 0], y: [0, -10, 0] };

const blobTransition = (duration) => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
});

export default function WorkEducation() {
  const [activeSection, setActiveSection] = useState("work");
  const [selectedItem, setSelectedItem] = useState(null);
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const toggleItem = (key) =>
    setSelectedItem((prev) => (prev === key ? null : key));

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#0b1727] to-[#0f1f32] py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={blobLeftAnim}
          transition={blobTransition(8)}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"
          animate={blobRightAnim}
          transition={blobTransition(9)}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-block mb-3"
          >
            <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-medium text-blue-400">
              Professional Timeline
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            My Journey
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg opacity-0 animate-lcp-fade">
            Exploring my professional path and educational background that
            shaped my expertise
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700/50"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <nav className="flex bg-gray-800/70 border-b border-gray-700/50">
            {["work", "education"].map((tab) => (
              <motion.button
                key={tab}
                className={`flex-1 py-5 px-6 flex items-center justify-center space-x-3 focus:outline-none relative overflow-hidden ${
                  tab === "work" ? "rounded-tl-xl" : "rounded-tr-xl"
                }`}
                onClick={() => setActiveSection(tab)}
                variants={tabVariants}
                animate={activeSection === tab ? "active" : "inactive"}
                whileHover={{
                  backgroundColor:
                    activeSection === tab ? "#0b1727" : "#1f2937",
                }}
              >
                <div className="relative z-10 flex items-center space-x-3">
                  {tab === "work" ? (
                    <FaBriefcase
                      className={`text-xl ${activeSection === tab ? "text-blue-400" : "text-gray-400"}`}
                    />
                  ) : (
                    <FaGraduationCap
                      className={`text-xl ${activeSection === tab ? "text-blue-400" : "text-gray-400"}`}
                    />
                  )}
                  <span className="text-xl">
                    {tab === "work" ? "Work Experience" : "Education"}
                  </span>
                </div>
                {activeSection === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 w-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              className="p-6 md:p-8 lg:p-10"
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {activeSection === "work" && (
                <div className="space-y-12">
                  {workExperience.map((job, index) => (
                    <motion.div
                      key={job.company}
                      className="relative"
                      variants={itemVariants}
                      custom={index}
                    >
                      <motion.div
                        className="absolute left-8 top-8 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2 -translate-y-1/2 z-10"
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

                      <div
                        className={`ml-16 rounded-xl p-6 cursor-pointer backdrop-blur-sm border border-gray-700/50
                          hover:border-blue-500/30 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/5
                          ${selectedItem === `work-${index}` ? "bg-gray-800/80" : "bg-gray-800/40"}`}
                        onClick={() => toggleItem(`work-${index}`)}
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-shrink-0">
                            <a
                              href={job.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-16 h-16 rounded-lg flex items-center justify-center p-2 shadow-lg
                                hover:opacity-80 hover:scale-105 transition-all duration-200 block"
                              style={{
                                background: `linear-gradient(135deg, ${job.color}33, ${job.color}11)`,
                                border: `1px solid #2563eb44`,
                              }}
                            >
                              <Image
                                src={job.logo}
                                alt={job.company}
                                width={48}
                                height={48}
                                className="rounded-md object-contain"
                              />
                            </a>
                          </div>

                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-blue-100">
                                {job.position}
                              </h3>
                              <div className="flex items-center space-x-1 text-blue-400 text-sm mt-1 md:mt-0">
                                <FaCalendarAlt className="text-xs" />
                                <span>{job.period}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center mb-3 gap-y-2">
                              <a
                                href={job.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-lg font-medium text-gray-300 hover:text-blue-400
                                  transition-colors duration-200 flex items-center gap-1 group"
                              >
                                {job.company}
                                <FaExternalLinkAlt
                                  size={10}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                />
                              </a>
                              <span className="mx-2 text-gray-500">•</span>
                              <div className="flex items-center text-gray-400 text-sm">
                                <FaMapMarkerAlt className="mr-1 text-xs" />
                                <span>{job.location}</span>
                              </div>
                            </div>

                            <p className="text-gray-300 mb-4">
                              {job.description}
                            </p>

                            <AnimatePresence>
                              {(selectedItem === `work-${index}` ||
                                index === 0) && (
                                <motion.div
                                  variants={achievementVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                >
                                  <div className="mt-3 border-t border-gray-700/50 pt-4">
                                    <h4 className="text-sm font-semibold text-blue-300 mb-2">
                                      Key Achievements
                                    </h4>
                                    <ul className="space-y-2 mb-4">
                                      {job.achievements.map(
                                        (achievement, i) => (
                                          <motion.li
                                            key={i}
                                            className="text-gray-300 text-sm flex items-start"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                          >
                                            <span className="text-blue-400 mr-2 text-xl leading-none">
                                              •
                                            </span>
                                            {achievement}
                                          </motion.li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            <div className="flex flex-wrap gap-2 mt-4">
                              {job.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/20 shadow-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {index !== 0 &&
                              selectedItem !== `work-${index}` && (
                                <button className="mt-6 text-xs text-blue-400 hover:text-blue-300 flex items-center">
                                  Show details
                                </button>
                              )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeSection === "education" && (
                <div className="space-y-12">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.institution}
                      className="relative"
                      variants={itemVariants}
                      custom={index}
                    >
                      <motion.div
                        className="absolute left-8 top-8 w-4 h-4 rounded-full bg-indigo-500 -translate-x-1/2 -translate-y-1/2 z-10"
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

                      <div
                        className={`ml-16 rounded-xl p-6 cursor-pointer backdrop-blur-sm border border-gray-700/50
                          hover:border-indigo-500/30 transition-colors duration-300 hover:shadow-lg hover:shadow-indigo-500/5
                          ${selectedItem === `edu-${index}` ? "bg-gray-800/80" : "bg-gray-800/40"}`}
                        onClick={() => toggleItem(`edu-${index}`)}
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-shrink-0">
                            <div
                              className="w-16 h-16 rounded-lg flex items-center justify-center p-2 shadow-lg"
                              style={{
                                background: `linear-gradient(135deg, ${edu.color}33, ${edu.color}11)`,
                                border: `1px solid ${edu.color}44`,
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
                              <h3 className="text-xl font-bold text-indigo-100">
                                {edu.institution}
                              </h3>
                              <div className="flex items-center space-x-1 text-indigo-400 text-sm mt-1 md:mt-0">
                                <FaCalendarAlt className="text-xs" />
                                <span>{edu.period}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center mb-3 gap-y-2">
                              <span className="text-lg font-medium text-gray-300">
                                {edu.degree}
                              </span>
                              <span className="mx-2 text-gray-500">•</span>
                              <div className="flex items-center text-gray-400 text-sm">
                                <FaMapMarkerAlt className="mr-1 text-xs" />
                                <span>{edu.location}</span>
                              </div>
                            </div>

                            <p className="text-gray-300 mb-4">
                              {edu.description}
                            </p>

                            <AnimatePresence>
                              {(selectedItem === `edu-${index}` ||
                                index === 0) && (
                                <motion.div
                                  variants={achievementVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                >
                                  <div className="mt-3 border-t border-gray-700/50 pt-4">
                                    <h4 className="text-sm font-semibold text-indigo-300 mb-2">
                                      Achievements & Activities
                                    </h4>
                                    <ul className="space-y-2 mb-4">
                                      {edu.achievements.map(
                                        (achievement, i) => (
                                          <motion.li
                                            key={i}
                                            className="text-gray-300 text-sm flex items-start"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                          >
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2" />
                                            {achievement}
                                          </motion.li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {edu.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {edu.tags.map((tag) => (
                                  <a
                                    key={tag.label}
                                    href={tag.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-xs flex items-center gap-1
                                      hover:bg-indigo-800/40 transition-colors border border-indigo-500/20 shadow-sm"
                                  >
                                    <span>{tag.label}</span>
                                    <FaExternalLinkAlt size={10} />
                                  </a>
                                ))}
                              </div>
                            )}

                            {index !== 0 && selectedItem !== `edu-${index}` && (
                              <button className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 flex items-center">
                                Show details
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
