import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
    <div>
      <div className="h-96 bg-cover bg-center md:h-[40rem] sm:h-[30rem] bg-[url('/images/house-bg.jpg')] py-10 px-6">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        </div>
        <div>
          <p className="text-lg text-gray-700 text-center">
            Hi, I&apos;m Nasim! A 3rd-year Software Engineering student at
            Sichuan University, passionate about full-stack development and
            building impactful applications.
          </p>
        </div>

        <div className="skills mt-8">
          <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>MERN Stack: React.js, Node.js, MongoDB</li>
            <li>Programming: Python, C++, Java</li>
            <li>Data Structures & Algorithms</li>
            <li>Frontend Design with Tailwind CSS</li>
          </ul>
        </div>

        <div className="cta mt-10 text-center">
          <p className="text-xl">
            Let&apos;s work together! Contact me for projects or collaborations.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default about;
