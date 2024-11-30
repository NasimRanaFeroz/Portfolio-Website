"use client"
import Navbarx from "@/components/Navbarx";
import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <div>
        <Navbarx />
      </div>
      <div className="h-auto bg-[#1B263B] bg-cover bg-center flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl py-4 font-bold text-center mb-1">About Me</h1>
        </div>
        <div className="flex flex-col sm:flex-row-reverse sm:pr-32 lg:pr-44 xl:pr-60">
          <div className="flex justify-center items-center p-4 sm:p-1">
            <div className="relative w-30 h-30 sm:w-44 md:w-56 lg:w-80">
              <Image
                src="/images/profile.jpg"
                alt="Nasim"
                width={280}
                height={280}
                className="rounded-full hover:shadow-2xl  border-sky-400 shadow-sm hover:shadow-sky-500 transition duration-300"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-300 text-center px-3 sm:w-2/3">
              Hi, I&apos;m Nasim! A 3rd-year Software Engineering student at
              Sichuan University, passionate about full-stack development and
              building impactful applications.
            </p>
          </div>
        </div>

        <div className="skills mt-8">
          <h2 className="text-2xl font-semibold text-center py-2">
            Skills & Expertise
          </h2>
          <div className="flex justify-center">
            <ul className="list-disc ml-6 mt-2 text-gray-300">
              <li>Full-stack Web Development </li>
              <li>Specialize in MERN Stack</li>
              <li>Data Structures & Algorithms in Java</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-8 text-center">
          <p className="text-lg">
            Let&apos;s work together! Contact me for projects or collaborations.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-500 transition duration-300 text-white py-2 px-4 rounded"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default about;
