import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

export const TechCard = ({ tech, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useMotionTemplate`${mouseX}px`;
  const spotlightY = useMotionTemplate`${mouseY}px`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const rowIndex = Math.floor(index / 5);
  const colIndex = index % 5;
  const staggerDelay = rowIndex * 0.05 + colIndex * 0.05;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: staggerDelay,
                ease: [0.22, 1, 0.36, 1],
              },
            }
          : {}
      }
      className="perspective h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.05,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 17,
          },
        }}
        style={{
          backgroundImage: isHovered
            ? `radial-gradient(circle at ${spotlightX} ${spotlightY}, ${tech.glowColor}, transparent 40%)`
            : "none",
        }}
        className={`relative flex items-center rounded-xl py-4 px-4 ${tech.bgColor} backdrop-blur-sm 
          border border-opacity-20 ${tech.borderColor} shadow-lg transition-all duration-300
          hover:border-opacity-80 overflow-hidden group h-full`}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-white/5 pointer-events-none"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    x: Math.random() * 60 - 30,
                    y: Math.random() * -60,
                    scale: Math.random() * 0.6 + 0.2,
                  }}
                  transition={{
                    duration: Math.random() * 1 + 1,
                    delay: Math.random() * 0.3,
                    ease: "easeOut",
                  }}
                  className="absolute w-1 h-1 rounded-full bg-white pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: "0%",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        <motion.div
          className={`flex-shrink-0 mr-4 w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden ${
            tech.iconBg || ""
          } 
            shadow-inner transition-transform duration-300`}
          animate={
            isHovered
              ? { rotate: [0, -5, 5, 0], scale: 1.1 }
              : { rotate: 0, scale: 1 }
          }
          transition={{
            rotate: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.4 },
          }}
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={42}
            height={42}
            className="rounded-md object-contain"
          />
        </motion.div>

        <div className="flex-grow">
          <motion.p
            className="text-base font-medium"
            animate={
              isHovered
                ? { x: 3, color: "#ffffff" }
                : { x: 0, color: "#e2e8f0" }
            }
            transition={{ duration: 0.2 }}
          >
            {tech.name}
          </motion.p>

          <motion.p
            className="text-xs text-gray-400"
            animate={
              isHovered
                ? { x: 3, color: "#cbd5e1" }
                : { x: 0, color: "#94a3b8" }
            }
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {tech.category}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};
