"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

const portfolioList = [
  {
    id: 1,
    image: "/images/projects/fork.jpg",
    title: "Fork & Friends",
    category: "Development",
    tags: ["Python", "Flask", "React", "D3.js", "DeepSeek API"],
    description:
      "An AI-powered analytics and recommendation platform leveraging large-scale Yelp data for business insights and personalized user suggestions.",
    client: "Group Project",
    completionDate: "March 2025",
    liveLink: "https://fork-and-friends.onrender.com/",
    githubLink: "https://github.com/NasimRanaFeroz/Fork-Friends_Front-End",
    featured: true,
  },
  {
    id: 2,
    image: "/images/projects/mus.png",
    title: "StrabismusCare",
    category: "Development",
    tags: ["React Native", "Node.js", "Flask", "PyTorch", "MongoDB"],
    description:
      "AI-powered mobile app for automated strabismus screening, patient management, and real-time diagnostic feedback.",
    client: "OptiHealth Innovators",
    completionDate: "January 2025",
    liveLink: "https://github.com/OptiHealth-Innovators/StrabismusCareApp",
    githubLink: "https://github.com/OptiHealth-Innovators/StrabismusCareApp",
    featured: false,
  },
  {
    id: 3,
    image: "/images/projects/finance.jpg",
    title: "AI-Powered Financial Dashboard",
    category: "Development",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
    description:
      "A smart financial dashboard leveraging AI for expense tracking, budgeting insights, and personalized financial recommendations.",
    client: "Personal Project",
    completionDate: "December 2024",
    liveLink:
      "https://github.com/NasimRanaFeroz/AI-powered-financial-dashboard",
    githubLink:
      "https://github.com/NasimRanaFeroz/AI-powered-financial-dashboard",
    featured: false,
  },
  {
    id: 4,
    image: "/images/projects/ecom.jpg",
    title: "Urban Closet",
    category: "Development",
    tags: ["MERN Stack", "Redux", "Stripe", "MongoDB", "Node.js"],
    description:
      "A modern e-commerce platform featuring seamless user authentication, secure payments, and a dynamic product catalog.",
    client: "Urban Closet",
    completionDate: "October 2024",
    liveLink: "https://github.com/mdnezam-uddin/urban-closet-fe",
    githubLink: "https://github.com/mdnezam-uddin/urban-closet-fe",
    featured: false,
  },
  {
    id: 5,
    image: "/images/projects/weather.jpg",
    title: "City Weather Checker",
    category: "Development",
    tags: ["Python", "Flask", "OpenWeather API", "HTML", "CSS"],
    description:
      "A lightweight web application that provides real-time weather updates for cities worldwide using OpenWeather API.",
    client: "Personal Project",
    completionDate: "March 2024",
    liveLink: "https://city-weather-checker-lrnj.onrender.com/",
    githubLink: "https://github.com/NasimRanaFeroz/Weather-Website",
    featured: false,
  },
];

const categories = [
  "All",
  ...new Set(portfolioList.map((item) => item.category)),
];

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-xl overflow-hidden border border-slate-700/30 shadow-xl group ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-64 overflow-hidden">
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

        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Featured
            </span>
          </div>
        )}

        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 5).map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mb-5 text-xs text-slate-400">
          <div>Client: {project.client}</div>
          <div>{project.completionDate}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <motion.a
            href={project.liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-blue-400 font-medium text-sm"
          >
            View Project <FiArrowRight className="ml-2" />
          </motion.a>
          
          <div className="flex space-x-2">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-colors"
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
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(portfolioList);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    let result = portfolioList;

    if (filter !== "All") {
      result = result.filter((project) => project.category === filter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          project.category.toLowerCase().includes(query)
      );
    }

    setFilteredProjects(result);
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1727] to-[#0f1f32]">
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                PROJECTS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              My Creative{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Works
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Explore my collection of projects showcasing my expertise in
              development, design, branding, and marketing solutions.
            </p>

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search projects by name, tag, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 pl-12 rounded-full bg-slate-800/70 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/70"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div ref={ref} className="relative">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="inline-block p-6 rounded-full bg-slate-800/70 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Projects Found
                </h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  No projects match your current search criteria. Try adjusting
                  your search or filter selection.
                </p>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              >
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      isInView={isInView}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700/30">
              <h4 className="text-3xl font-bold text-white mb-1">
                {portfolioList.length}
              </h4>
              <p className="text-slate-400 text-sm">Total Projects</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700/30">
              <h4 className="text-3xl font-bold text-white mb-1">
                {
                  portfolioList.filter((p) => p.category === "Development")
                    .length
                }
              </h4>
              <p className="text-slate-400 text-sm">Development</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700/30">
              <h4 className="text-3xl font-bold text-white mb-1">
                {
                  portfolioList.filter(
                    (p) =>
                      p.tags.includes("AI/ML") ||
                      p.tags.includes("DeepSeek API") ||
                      p.tags.includes("PyTorch")
                  ).length
                }
              </h4>
              <p className="text-slate-400 text-sm">AI Projects</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700/30">
              <h4 className="text-3xl font-bold text-white mb-1">
                {portfolioList.filter((p) => p.featured).length}
              </h4>
              <p className="text-slate-400 text-sm">Featured</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Have a project in mind?
            </h2>

            <p className="text-lg text-slate-300 mb-10">
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-shadow duration-300"
            >
              Let&apos;s Work Together
              <FiArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
