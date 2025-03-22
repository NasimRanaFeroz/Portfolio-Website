"use client";

import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdPerson, MdMessage } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

require("dotenv").config();

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !message) {
      setError("Please fill in all required fields");
      setTimeout(() => setError(""), 5000);
      return;
    }

    const templateParams = {
      from_name: name || "Anonymous",
      from_email: email,
      message,
    };

    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          setIsLoading(false);
          setSuccess("Your message has been sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setSuccess(""), 5000);
        },
        function (error) {
          setIsLoading(false);
          setError("Message sending failed. Please try again or email me directly.");
          console.error(error);
          setTimeout(() => setError(""), 5000);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const socialIcons = [
    { 
      icon: <FaGithub size={22} />, 
      href: "https://github.com/NasimRanaFeroz",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={22} />, 
      href: "https://www.linkedin.com/in/nasim-rana-feroz",
      label: "LinkedIn"
    },
    { 
      icon: <AiFillInstagram size={22} />, 
      href: "https://www.instagram.com/nasim_rana_feroz/",
      label: "Instagram"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0b1320] to-[#162032] py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <motion.div 
        className="w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="bg-gradient-to-r from-[#0b1320]/90 to-[#162032]/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-sky-900/40"
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(56, 189, 248, 0.25)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left side - Contact Info */}
            <motion.div 
              className="lg:col-span-2 bg-gradient-to-br from-[#0b1320] to-[#162032] p-8 flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 mb-6"
                  variants={itemVariants}
                >
                  Let&apos;s Connect
                </motion.h2>
                
                <motion.p 
                  className="text-blue-200/80 mb-8 leading-relaxed"
                  variants={itemVariants}
                >
                  I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </motion.p>
                
                <motion.div 
                  className="mb-8"
                  variants={itemVariants}
                >
                  <motion.p 
                    className="text-sky-400 font-medium mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    Email me at
                  </motion.p>
                  <motion.a 
                    href="mailto:feroznasimrana@gmail.com" 
                    className="text-blue-50 hover:text-sky-400 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <MdEmail className="inline-block" />
                    feroznasimrana@gmail.com
                  </motion.a>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <motion.p 
                  className="text-sky-400 font-medium mb-4"
                  variants={itemVariants}
                >
                  Connect with me
                </motion.p>
                
                <motion.div 
                  className="flex space-x-4"
                  variants={itemVariants}
                >
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 bg-[#162032] rounded-lg flex items-center justify-center text-sky-400 transition-colors duration-300 border border-sky-900/30"
                      initial={{ backgroundColor: "rgba(22, 32, 50, 1)" }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(14, 165, 233, 0.15)",
                        color: "#38bdf8",
                        boxShadow: "0 10px 15px -3px rgba(56, 189, 248, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 15 
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Contact Form */}
            <motion.div 
              className="lg:col-span-3 p-8"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl font-bold text-blue-50 mb-6"
                variants={itemVariants}
              >
                Send me a message
              </motion.h2>
              
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-blue-200/80 mb-1 flex items-center gap-2"
                  >
                    <MdPerson className="text-sky-400" />
                    Name
                  </label>
                  <motion.div
                    className={`relative rounded-lg overflow-hidden ${
                      focusedField === 'name' ? 'ring-2 ring-sky-400' : ''
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="p-3 w-full bg-[#0b1320]/50 border border-sky-900/30 rounded-lg text-blue-50 placeholder-blue-200/50 focus:outline-none"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-blue-200/80 mb-1 flex items-center gap-2"
                  >
                    <MdEmail className="text-sky-400" />
                    Email <span className="text-sky-400">*</span>
                  </label>
                  <motion.div
                    className={`relative rounded-lg overflow-hidden ${
                      focusedField === 'email' ? 'ring-2 ring-sky-400' : ''
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="p-3 w-full bg-[#0b1320]/50 border border-sky-900/30 rounded-lg text-blue-50 placeholder-blue-200/50 focus:outline-none"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-blue-200/80 mb-1 flex items-center gap-2"
                  >
                    <MdMessage className="text-sky-400" />
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <motion.div
                    className={`relative rounded-lg overflow-hidden ${
                      focusedField === 'message' ? 'ring-2 ring-sky-400' : ''
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="p-3 w-full bg-[#0b1320]/50 border border-sky-900/30 rounded-lg text-blue-50 placeholder-blue-200/50 focus:outline-none resize-none"
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="flex justify-end"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`flex items-center gap-2 px-6 py-3 bg-sky-500/10 border border-sky-500/30 rounded-lg text-sky-400 font-medium shadow-sm ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(14, 165, 233, 0.15)",
                      boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FaPaperPlane />
                      </>
                    )}
                  </motion.button>
                </motion.div>
                
                <AnimatePresence>
                  {success && (
                    <motion.div 
                      className="bg-green-900/20 border border-green-500/30 text-green-400 p-3 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {success}
                    </motion.div>
                  )}
                  
                  {error && (
                    <motion.div 
                      className="bg-red-900/20 border border-red-500/30 text-red-400 p-3 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
