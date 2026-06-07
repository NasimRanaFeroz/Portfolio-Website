import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../../data/techStack";

const allSkills = techStack.flatMap((category) => category.skills);

const BUBBLE_CONFIGS = allSkills
  .filter((_, i) => i % 4 === 0)
  .slice(0, 6)
  .map((skill, index) => ({
    uniqueId: `${skill.name}-${index}`,
    glowColor: skill.glowColor,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    scale: Math.random() * 0.4 + 0.8,
    size: Math.random() * 200 + 100,
    left: Math.random() * 90 + 5,
    top: Math.random() * 90 + 5,
    duration: Math.random() * 10 + 20,
    delay: index * 2,
  }));

const getBubbleVariants = (config) => ({
  hidden: {
    opacity: 0,
    x: config.x,
    y: config.y,
    scale: 0.5,
  },
  visible: {
    opacity: [0, 0.15, 0.08],
    x: config.x,
    y: config.y,
    scale: config.scale,
    transition: {
      duration: config.duration,
      repeat: Infinity,
      repeatType: "mirror",
      delay: config.delay,
    },
  },
});

const BUBBLE_VARIANTS = BUBBLE_CONFIGS.map(getBubbleVariants);

export const FloatingTechBubbles = ({ isInView }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {BUBBLE_CONFIGS.map((bubble, index) => (
        <motion.div
          key={bubble.uniqueId}
          variants={BUBBLE_VARIANTS[index]}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute rounded-full"
          style={{
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            background: bubble.glowColor,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            filter: "blur(50px)",
          }}
        />
      ))}
    </div>
  );
};
