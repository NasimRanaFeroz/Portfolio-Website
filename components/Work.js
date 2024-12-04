"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function WorkEducation() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className="bg-[#0b1727] flex justify-center py-8">
      <div
        className=" w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4
                  border rounded-lg bg-gray-900"
      >
        <nav className="border-2 border-gray-400 flex justify-around rounded-md bg-gray-800">
          <div className="flex-1">
            <button
              className={`${
                activeSection === "work"
                  ? "text-blue-100 rounded-md my-1 ml-1 font-bold w-full bg-[#0b1727] text-xl sm:text-2xl py-1 pl-1"
                  : "text-gray-400 w-full text-xl sm:text-2xl py-1 pl-1 my-1 ml-1"
              }`}
              onClick={() => setActiveSection("work")}
            >
              Work
            </button>
          </div>

          <div className="flex-1">
            <button
              className={`${
                activeSection === "education"
                  ? "text-blue-100 rounded-md my-1 mr-1 bg-[#0b1727] font-bold w-full text-xl sm:text-2xl py-1 pr-1"
                  : "text-gray-400  w-full my-1 mr-1 text-xl sm:text-2xl py-1 pr-1"
              }`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
          </div>
        </nav>

        <div className="mt-4 mb-4 px-6 text-white">
          {activeSection === "work" && (
            <div>
              <ul className="list-disc list-inside">
                <li>Software Engineer at XYZ</li>
                <li>Intern at ABC</li>
                <li>Freelance Web Developer</li>
                <li>Volunteer at Tech Nonprofit</li>
              </ul>
            </div>
          )}

          {activeSection === "education" && (
            <div className="py-4">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/icon/scu.png"
                    alt="SCU"
                    width={40}
                    height={40}
                    className="rounded-md bg-white"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Sichuan University, Chengdu, China
                    </h3>
                    <p className="text-sm text-gray-400">July 2022 – Current</p>
                    <p className="text-sm text-gray-300">
                      B.Sc. in Software Engineering
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                      <li>Graduating with a Major in Software Engineering</li>
                      <li>
                        Some Important things I did blah blah blah
                      </li>
                      <li>CGPA 3.50 out of 4.00</li>
                    </ul>
                    {/* Tags */}
                    <div className="flex space-x-2 mt-2">
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs">
                        Final Year Project
                      </span>
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs">
                        View All Projects
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/icon/rgc.jpg"
                    alt="RGC"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Rangpur Govt College, Bangladesh
                    </h3>
                    <p className="text-sm text-gray-400">
                      May 2018 – January 2021
                    </p>
                    <p className="text-sm text-gray-300">
                      Higher Secondary Certificate (HSC) in Science
                    </p>

                    <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                      <li>Earned a certification in the field of science</li>
                      <li>GPA 5.00 out of 5.00</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/icon/rphs.jpg"
                    alt="RPHS"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Rajarhat Pilot High School, Bangladesh
                    </h3>
                    <p className="text-sm text-gray-400">
                      January 2013 – March 2018
                    </p>
                    <p className="text-sm text-gray-300">
                      Secondary School Certificate (SSC) in Science
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                      <li>Earned a certification in the field of science</li>
                      <li>GPA 5.00 out of 5.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
