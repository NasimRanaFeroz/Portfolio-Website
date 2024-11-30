"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const Navbarx = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.volume = 0.1;
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="navbar bg-[#0b1320] px-4 sm:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn glass btn-ghost lg:hidden bg-[#1B263B] hover:bg-[#0f244b]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1B263B] rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <li className="hover:bg-blue-400 transition duration-300 rounded-md">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-blue-400 transition duration-300 rounded-md">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:bg-blue-400 transition duration-300 rounded-md">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:bg-blue-400 transition duration-300 rounded-md">
              <Link href="/contact">Contact me</Link>
            </li>
          </ul>
        </div>
        <div className=" hidden sm:block">
          <p className=" text-white text-base sm:text-xl md:pl-3 sm:pl-2 lg:text-2xl font-bold">
            Nasim Rana Feroz
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li className="hover:bg-blue-400 transition duration-300 rounded-md">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-blue-400 transition duration-300 rounded-md">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:bg-blue-400 transition duration-300 rounded-md">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:bg-blue-400 transition duration-300 rounded-md">
            <Link href="/contact">Contact me</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <input
          type="checkbox"
          className="toggle toggle-info ml-auto transition-all duration-300 ease-in-out"
          checked={isMusicPlaying}
          onChange={toggleMusic}
        />
        <p className="text-white">Music</p>
      </div>

      <audio ref={audioRef} src="/audios/suzume.mp3" loop />
    </div>
  );
};

export default Navbarx;
