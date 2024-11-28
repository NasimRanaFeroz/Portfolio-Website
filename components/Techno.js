"use client";
import React from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Techno = () => {
  return (
    <div className="bg-[#050526]">
      <div className="pt-10">
        <div className="text-center">
          <p className="text-2xl p-2 font-bold">Technologies</p>
          <p className="text-base pb-3">
            The technologies and tools I specialize in:
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4 px-6 md:px-14 lg:px-20 py-4 pb-16">
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#090934] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/JS-logo.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex-col items-center justify-center">
                <p className="text-sm p-1">JavaScript</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/TS.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">TypeScript</p>
                <p className="text-xs pl-1 pb-1">Better JavaScript</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/react.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">React</p>
                <p className="text-xs pl-1 pb-1">JavaScript Library</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/next.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">NextJS</p>
                <p className="text-xs pl-1 pb-1">React Framework</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/node.svg"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md bg-white"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">NodeJS</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/ex.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">ExpressJS</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>{" "}
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/py.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Python</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/git.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Git</p>
                <p className="text-xs pl-1 pb-1">Version Control</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/gh.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Github</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/tw.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Tailwind</p>
                <p className="text-xs pl-1 pb-1">CSS Framework</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/bs.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">BootStrap</p>
                <p className="text-xs pl-1 pb-1">CSS Framework</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/figma.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Figma</p>
                <p className="text-xs pl-1 pb-1">Design Tool</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex-col items-center justify-center">
              <div className="flex items-center justify-center pl-2">
                <Image
                  src="/images/icon/postgre.png"
                  alt="JS"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">PostgreSQL</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/MongoDB.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">MongoDB</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/jwt.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">JWT</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/zod.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Zod</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/stripe.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Stripe</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/form.svg"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">React Hook Form</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/flask.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Flask</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/sb.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md bg-slate-900"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">SupaBase</p>
                <p className="text-xs pl-1 pb-1">Backend Tool</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/sql.svg"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md bg-white"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">MySQL</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/fb.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">Firebase</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/html.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">HTML</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
          <div className="flex rounded-md py-1 gap-1 sm:gap-2 bg-[#070735] hover:bg-blue-950 transition duration-300">
            <div className="flex items-center justify-center pl-2">
              <Image
                src="/images/icon/css.png"
                alt="JS"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-col justify-center items-center">
                <p className="text-sm p-1">CSS</p>
                <p className="text-xs pl-1 pb-1">Programming Language</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techno;
