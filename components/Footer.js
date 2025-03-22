"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      href: "https://github.com/NasimRanaFeroz",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={20} />, 
      href: "https://www.linkedin.com/in/nasim-rana-feroz",
      label: "LinkedIn"
    },
    { 
      icon: <SiGmail size={20} />, 
      href: "mailto:feroznasimrana@gmail.com",
      label: "Email"
    },
    { 
      icon: <FaInstagram size={20} />, 
      href: "https://www.instagram.com/nasim_rana_feroz/",
      label: "Instagram"
    }
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0b1320] to-[#162032] text-blue-50 border-t border-sky-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <motion.h2 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Nasim Rana Feroz
            </motion.h2>
            <p className="text-sm text-blue-200/80 max-w-xs">
              Full Stack Web Developer specializing in modern web technologies and creative solutions.
            </p>
            
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-[#162032] rounded-lg flex items-center justify-center text-sky-400 hover:text-sky-300 transition-colors"
                  whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: "rgba(14, 165, 233, 0.15)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-sky-300">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="text-blue-200/80 hover:text-sky-400 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-sky-300">Get In Touch</h3>
            <p className="text-blue-200/80">
              Currently based in Chengdu, Sichuan, China
            </p>
            <p className="text-blue-200/80">
              Open for freelance opportunities and collaborations
            </p>
            <motion.a 
              href="/contact"
              className="inline-flex items-center px-4 py-2 mt-2 w-fit bg-sky-500/10 border border-sky-500/30 rounded-lg text-sky-400 hover:bg-sky-500/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-900/40 to-transparent my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-300/60">
          <p>© {year} Nasim Rana Feroz. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Crafted with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
