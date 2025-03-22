"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.volume = 0.3;
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact me", path: "/contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.div 
      className="navbar bg-transparent px-4 md:px-10 lg:px-20 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <motion.div
            tabIndex={0}
            role="button"
            className="btn glass btn-ghost lg:hidden bg-blue-700 hover:bg-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </motion.svg>
          </motion.div>
          <motion.ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base/80 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow text-blue-900"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={index} 
                className="rounded-md overflow-hidden"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{
                    backgroundColor: "rgba(96, 165, 250, 0.5)",
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  className="w-full h-full"
                >
                  <Link 
                    href={item.path} 
                    onClick={() => setIsOpen(false)}
                    className="block w-full h-full px-4 py-2"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div 
          className="hidden sm:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >   
          <motion.p 
            className="text-black text-base md:text-xl md:pl-3 sm:pl-2 lg:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Nasim Rana Feroz
          </motion.p>
        </motion.div>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <motion.ul 
          className="menu menu-horizontal px-1 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={index} 
              className="rounded-md overflow-hidden mx-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{
                  backgroundColor: "rgba(96, 165, 250, 0.5)",
                  scale: 1.05,
                  transition: { 
                    backgroundColor: { duration: 0.4, ease: "easeInOut" },
                    scale: { duration: 0.2, ease: "easeOut" }
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-full"
              >
                <Link 
                  href={item.path}
                  className="block w-full h-full px-4 py-2"
                >
                  {item.name}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      
      <motion.div 
        className="navbar-end gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <motion.input
            type="checkbox"
            className="toggle toggle-info ml-auto transition-all duration-300 ease-in-out"
            checked={isMusicPlaying}
            onChange={toggleMusic}
            whileTap={{ scale: 0.9 }}
          />
          <motion.p 
            className="text-black"
            animate={isMusicPlaying ? 
              { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 2 } } : 
              { scale: 1 }
            }
          >
            Music
          </motion.p>
        </motion.div>
      </motion.div>

      <audio ref={audioRef} src="/audios/suzume.mp3" loop />
    </motion.div>
  );
};

export default Navbar;
