"use client";

import React from "react";
import Image from "next/image";

const portfolioList = [
  {
    image: "/images/ecom.jpg",
    title: "Branding",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
  {
    image: "/images/ecom.jpg",
    title: "Marketing",
    description:
      "It is easier to reach your savings goals when you have the right savings account. It is easier to reach your savings goals when you have the right savings account.",
  },
  {
    image: "/images/ecom.jpg",
    title: "Development",
    description:
      "Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim pharetra felis. Orci commodo mauris digital industry is booming adipiscing semper amet.",
  },
  {
    image: "/images/ecom.jpg",
    title: "Design",
    description:
      "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];

const Project = () => {
  return (
    <section className="py-14 md:py-24 bg-[#0b1727] text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 justify-center mb-6">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-2xl font-bold mb-2">My Latest Works</h2>
            <p className="mb-2 text-sm">THIS IS WHAT WE DO</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {portfolioList.map((portfolio, i) => (
            <div
              key={i}
              className="relative bg-slate-800 hover:-translate-y-1 mt-6 duration-300 rounded-xl"
            >
              <div className="bg-green-100 flex rounded-xl p-6 pt-0 lg:pt-0 relative">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  width={500}
                  height={500}
                  draggable={false}
                  className="w-full h-auto -mb-24 mt-12 rounded-xl"
                />
              </div>
              <div className="p-6 mt-20">
                <h4 className="text-2xl font-medium mb-4">{portfolio.title}</h4>
                <p className="opacity-50 mb-0">{portfolio.description}</p>
                <div className="">
                  <button className="px-5 py-2 rounded border border-blue-600 hover:text-white hover:bg-blue-600 duration-300 mt-6 mb-6">
                    Marketing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
