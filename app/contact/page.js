"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const page = () => {
  return (
    <div className="h-96 md:h-[40rem] bg-[url('/images/bg-rain.png')] bg-cover bg-center flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 w-1/2 gap-4 p-3 mt-6 backdrop-blur-xs hover:backdrop-blur-sm shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        <div>
          <p className="text-2xl text-blue-950 text-center">Get in touch!</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            // onSubmit={handleSubmit}
            className=" shadow-md rounded-lg p-4 w-full max-w-md space-y-6"
          >
            <div className="grid grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className=" text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 h-5"
              >
                Message
              </label>
              <textarea
                rows="3"
                id="message"
                name="message"
                className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <p className="text-center text-blue-950">or send me an e-mail at</p>
          <p className="text-center text-blue-950 text-lg">
            feroznasimrana@gmail.com
          </p>
        </div>
        <div className=" border-t-2  border-blue-950">
          <p className="text-center text-blue-950 mt-2">
            connect with me at other platform
          </p>
          <div className="text-lg text-blue-950 flex justify-center gap-3">
            <div className="flex gap-4 pt-1">
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
    </div>
  );
};

export default page;
