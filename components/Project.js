"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { portfolioList } from "../data/projects";

const PREVIEW_COUNT = 4;

const previewProjects = portfolioList.slice(0, PREVIEW_COUNT);

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const subheadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
};

const cardVariants = previewProjects.map((_, index) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}));

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      variants={cardVariants[index]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-b from-slate-800/90
        to-slate-900/90 border border-slate-700/30 shadow-xl group ${
          project.featured ? "sm:col-span-2" : ""
        }`}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center bg-white"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={16} />
            </motion.a>
          )}
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-blue-400 font-medium text-sm group/link">
          <a
            href="/projects"
            className="group-hover/link:underline hover:text-blue-300 transition-colors"
          >
            View Project
          </a>
          <HiArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-12 -mb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-[#0b1727] to-[#0f1f32] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            My Latest Projects
          </motion.h2>

          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-slate-300 max-w-2xl mx-auto"
          >
            Explore my recent work showcasing my skills in web development,
            design, and problem-solving. Each project represents unique
            challenges and innovative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {previewProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <Link href="/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-shadow duration-300 flex items-center mx-auto"
            >
              View All Projects
              <HiArrowRight className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
