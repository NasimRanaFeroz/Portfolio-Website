import React from "react";
import Hero from "../components/Hero";
import Techno from "@/components/Techno";
import Testimonials from "@/components/Testimonials";
import Project from "@/components/Project";
import Work from "@/components/Work";

const page = () => {
  return (
    <div>
      <Hero />
      <Techno />
      <Work/>
      <Project />
      <Testimonials />
    </div>
  );
};

export default page;
