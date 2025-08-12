import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { techStack } from "../const";

export const FloatingTechBubbles = ({ isInView }) => {
  const [bubbleTechs, setBubbleTechs] = useState([]);

  useEffect(() => {
    const allSkills = techStack.flatMap((category) => category.skills);

    const generatedBubbles = allSkills
      .filter((_, i) => i % 4 === 0)
      .slice(0, 6)
      .map((skill, index) => ({
        ...skill,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        scale: Math.random() * 0.4 + 0.8,
        size: Math.random() * 200 + 100,
        left: Math.random() * 90 + 5,
        top: Math.random() * 90 + 5,
        uniqueId: `${skill.name}-${index}`,
      }));
    setBubbleTechs(generatedBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbleTechs.map((tech, index) => (
        <motion.div
          key={tech.uniqueId}
          initial={{
            opacity: 0,
            x: tech.x,
            y: tech.y,
            scale: 0.5,
          }}
          animate={
            isInView
              ? {
                  opacity: [0, 0.2, 0.1],
                  x: tech.x,
                  y: tech.y,
                  scale: tech.scale,
                  transition: {
                    duration: Math.random() * 10 + 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 2,
                  },
                }
              : {}
          }
          className="absolute rounded-full"
          style={{
            left: `${tech.left}%`,
            top: `${tech.top}%`,
            background: tech.glowColor,
            width: `${tech.size}px`,
            height: `${tech.size}px`,
            filter: "blur(80px)",
          }}
        />
      ))}
    </div>
  );
};
