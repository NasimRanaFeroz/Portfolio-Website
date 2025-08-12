"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TechCard } from "./ui/TechCard";
import { FloatingTechBubbles } from "./ui/FloatingBubbles";
import { techStack } from "./const";

const Techno = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      className="bg-gradient-to-b from-[#0b1727] to-[#0f2136] py-12 md:py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <FloatingTechBubbles isInView={isInView} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center pb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
            }
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
            The technologies and frameworks I specialize in for building modern,
            scalable applications
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + categoryIndex * 0.1,
              }}
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.6 + categoryIndex * 0.1,
                }}
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <TechCard
                    key={skill.name}
                    tech={skill}
                    index={skillIndex + categoryIndex * 10}
                    isInView={isInView || hasAnimated}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
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
                  "0 0 0 0 rgba(74, 222, 128, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <p className="text-sm text-gray-200">
              Actively using these technologies in production
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Techno;
