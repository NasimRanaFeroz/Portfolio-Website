"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useState } from "react";

require("dotenv").config();

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !message) {
      setError("Please fill in all fields");
      return;
    }

    const templateParams = {
      from_name: name,
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
          setSuccess("Your e-mail has been sent successfully.");
          setName("");
          setEmail("");
          setMessage("");
        },
        function (error) {
          setIsLoading(false);
          setError("Sending failed. Please send me a direct e-mail.");
          console.error(error);
        }
      );
  };

  return (
    <div className="h-96 md:h-[40rem] sm:h-[30rem] bg-[url('/images/bg-rain.png')] bg-cover bg-center flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 w-1/2 gap-4 p-3 mt-12 backdrop-blur-xs hover:backdrop-blur-sm shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        <div>
          <p className="text-2xl text-blue-950 pb-3 pt-1 text-center">Get in touch!</p>
        </div>
        <div className="flex justify-center items-center px-8">
          <form
            onSubmit={handleSubmit}
            className=" rounded-lg px-6 pt-1 w-full space-y-3"
          >
            <div className="grid grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500"
                } text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              >
                {isLoading ? "Sending..." : "Send Email"}
              </button>
            </div>
            <div className="text-center mt-2">
              {success && <p className="text-green-950">{success}</p>}
              {error && <p className="text-red-900">{error}</p>}
            </div>
          </form>
        </div>
        <div>
          <p className="text-center text-blue-950">or send me an e-mail at</p>
          <p className="text-center text-blue-950 text-lg">
            feroznasimrana@gmail.com
          </p>
        </div>
        <div className="border-t-2 border-blue-950">
          <p className="text-center text-blue-950 mt-2">
            Connect with me on other platforms
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
                className="p-2 border-sky-400 rounded-lg shadow-sm hover:shadow-md hover:shadow-sky-500 transition duration-300"
                href="https://www.linkedin.com/in/nasim-rana-feroz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="p-2 border-sky-400 rounded-lg shadow-sm hover:shadow-md hover:shadow-sky-500 transition duration-300"
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

export default Contact;
