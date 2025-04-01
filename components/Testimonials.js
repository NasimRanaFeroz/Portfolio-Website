"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "John transformed our legacy codebase into a modern, scalable application. His full-stack expertise allowed him to rebuild our frontend with React while optimizing our Node.js backend for performance. The result was a 70% improvement in load times and a much better user experience.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/images/4.png",
    rating: 5,
    project: "E-commerce Platform Overhaul",
    relation: "client"
  },
  {
    quote:
      "Working with John on our SaaS dashboard was exceptional. He architected a robust API with Express and MongoDB that handled our complex data requirements, while building a responsive React frontend that our users love. His ability to work across the entire stack made the development process seamless.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/images/4.png",
    rating: 5,
    project: "Analytics Dashboard",
    relation: "client"
  },
  {
    quote:
      "John's full-stack skills were crucial for our startup. He implemented authentication with JWT, set up our PostgreSQL database with proper indexing, and created a beautiful UI with Next.js and Tailwind. His attention to both backend security and frontend usability was exactly what we needed.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/images/4.png",
    rating: 5,
    project: "Project Management Tool",
    relation: "client"
  },
  {
    quote:
      "As a fellow developer, I've collaborated with John on several projects, and his full-stack expertise is impressive. He's equally comfortable optimizing database queries as he is implementing complex UI animations. His code is clean, well-documented, and follows best practices across both frontend and backend.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/images/4.png",
    rating: 5,
    project: "Multiple Projects",
    relation: "colleague"
  },
  {
    quote:
      "John developed our entire platform from scratch. He built a scalable Node.js microservices architecture on the backend and an elegant React frontend with Redux for state management. His ability to handle both sides of development accelerated our timeline by months.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/4.png",
    rating: 5,
    project: "Enterprise Resource Platform",
    relation: "client"
  },
  {
    quote:
      "We hired John to rebuild our payment processing system. He implemented a secure backend with Node.js that integrated with multiple payment gateways, while creating a seamless checkout experience with React. His full-stack approach ensured consistent error handling across the entire application.",
    name: "David Wilson",
    designation: "Founder at PaymentFlow",
    src: "/images/4.png",
    rating: 5,
    project: "Payment Processing System",
    relation: "client"
  }
];

const TestimonialCard = ({ testimonial, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1]
        }
      } : {}}
      className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-2xl p-8 border border-slate-700/30 shadow-xl relative overflow-hidden group"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full -ml-16 -mb-16" />
      
      <div className="relative mb-6">
        <FaQuoteLeft className="text-blue-400/20 text-4xl" />
      </div>

      <div className="relative">
        <p className="text-slate-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>

        <div className="mb-6">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {testimonial.project}
          </span>
        </div>

        <div className="flex mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-amber-400 mr-1" />
          ))}
        </div>

        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-500/30">
            <Image
              src={testimonial.src}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-white">{testimonial.name}</h4>
            <p className="text-sm text-slate-400">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "Clients", "Colleagues"];
  
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
              : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/70"
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const filteredTestimonials = React.useMemo(() => {
    if (activeFilter === "All") return testimonials;
    if (activeFilter === "Clients") return testimonials.filter(t => t.relation === "client");
    if (activeFilter === "Colleagues") return testimonials.filter(t => t.relation === "colleague");
    return testimonials;
  }, [activeFilter]);

  return (
    <div className="bg-gradient-to-b from-[#0b1727] to-[#0f1f32] min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
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
                TESTIMONIALS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span> About My Work
            </h1>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Hear directly from the clients and colleagues I&apos;ve worked with on full-stack development projects.
              These testimonials reflect my commitment to delivering high-quality solutions across the entire technology stack.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={ref} className="pb-24">
        <div className="container px-4 mx-auto">
          {/* Filter Buttons */}
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          
          {/* Custom Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                testimonial={testimonial}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-24 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
            <p className="text-slate-300 mb-8">
              Let&apos;s work together to bring your next web application to life with modern full-stack development.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-shadow duration-300"
            >
              Start a Project
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
