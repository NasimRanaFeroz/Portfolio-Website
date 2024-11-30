"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Testimonials data
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/images/profile.jpg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/images/profile.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/images/profile.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/images/profile.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/profile.jpg",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="flex justify-center lg:pt-7 text-2xl font-bold bg-[#1B263B]">
        <p>Testimonials</p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
