"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Navbar from "./Navbar";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { IoHome } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <div className="flex flex-col mt-6 mb-4 sm:flex-row-reverse sm:justify-center gap-3 md:gap-6 lg:gap-14 xl:gap-20  mx-6 sm:pt-6 px-4 md:px-4">
          <div className="flex justify-center items-center p-8 pt-12">
            <div className="relative w-30 h-30 sm:w-44 md:w-64 lg:w-80">
              <Image
                src="/images/profile.jpg"
                alt="Nasim"
                width={280}
                height={280}
                className="rounded-full hover:shadow-2xl  border-sky-400 shadow-sm hover:shadow-sky-500 transition duration-300"
              />
            </div>
          </div>
          <div className="grid rounded-lg m-3 sm:ml-4 md:ml-2  grid-cols-1 gap-5 py-4 sm:py-6 px-8 md:w-3/6  mb-4 lg:px-10 xl:px-16 backdrop-blur-xs hover:backdrop-blur-sm shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <div className="flex-col">
              <p className="text-xl md:text-2xl lg:text-3xl text-black">
                Hi! I&apos;m Nasim!
              </p>
              <p className="text-black text-sm sm:text-base md:text-lg">
                I&apos;m a Full Stack Web Developer
              </p>
            </div>
            <div>
              <p className="text-black text-sm sm:text-base md:text-lg">
                I like to develop full-stack, make instant coffee and explore
                new technologies.
              </p>
            </div>
            <div>
              <p className="text-black text-sm  sm:text-base md:text-lg flex items-center">
                <IoLocationSharp className="mr-2" /> Chengdu, Sichuan, China
              </p>
              <p className="text-black text-sm sm:text-base md:text-lg flex items-center">
                <IoHome className="mr-2" /> Rangpur, Bangladesh
              </p>
            </div>
            <div className="text-sm lg:text-lg text-black flex gap-2 md:gap-4 lg:gap-6">
              <div>
                <button className="flex items-center p-2 space-x-1 border-sky-400 rounded-lg shadow-sm hover:shadow-md hover:shadow-sky-500 transition duration-300">
                  <p>Resume</p>
                  <FaFileDownload />
                </button>
              </div>
              <div className="flex gap-1 md:gap-2 lg:gap-3 pt-1">
                <a
                  className="p-2 border-sky-400 rounded-lg shadow-sm hover:shadow-md hover:shadow-sky-500 transition duration-300"
                  href="https://github.com/NasimRanaFeroz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="p-2  border-sky-400 rounded-lg shadow-sm hover:shadow-md hover:shadow-sky-500 transition duration-300"
                  href="https://www.linkedin.com/in/nasim-rana-feroz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="p-2  border-sky-400 rounded-lg shadow-sm hover:shadow-md hover:shadow-sky-500 transition duration-300"
                  href="/contact"
                  rel="noopener noreferrer"
                >
                  <SiGmail />
                </a>
                <a
                  className="p-2  border-sky-400 rounded-lg shadow-sm hover:shadow-md hover:shadow-sky-500 transition duration-300"
                  href="https://www.instagram.com/nasim_rana_feroz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Hero;
