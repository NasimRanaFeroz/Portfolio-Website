"use client";
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { TechCard } from "./ui/TechCard";
import { FloatingTechBubbles } from "./ui/FloatingBubbles";
import { techStack } from "../data/techStack";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const badgeVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
};

const headingVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const categoryVariants = techStack.map((_, index) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + index * 0.08 },
  },
}));

const Techno = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-[#0b1727] to-[#0f2136] py-12 md:py-20 relative overflow-hidden"
    >
      <FloatingTechBubbles isInView={isInView} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center pb-12">
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-block mb-2"
          >
            <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-medium text-blue-400">
              Technical Expertise
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Technologies & Tools
          </motion.h2>

          <p className="mt-3 text-base md:text-lg text-gray-300 max-w-3xl mx-auto opacity-0 animate-lcp-fade">
            The technologies and frameworks I specialize in for building modern,
            scalable applications
          </p>
        </div>

        <div className="space-y-12">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              variants={categoryVariants[categoryIndex]}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <TechCard
                    key={skill.name}
                    tech={skill}
                    index={skillIndex + categoryIndex * 10}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techno;
