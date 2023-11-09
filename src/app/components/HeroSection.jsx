"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Travis Mundy",
                2000,
                "Software Dev",
                2000,
                "Systems Dev",
                2000,
                "Embedded Dev",
                2000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a Software Developer with and interest in systems programming
            and Security I enjoy creating efficient and secure low level systems
            I enjoy creating applications that people find useful.
          </p>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-500 to-red-50 hover:bg-slate-800 text-white">
              <span className="block bg-[#090915] hover:bg-[#4f2B43] rounded-full px-5 py-2">
                Hire Me
              </span>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-500 to-red-50 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#090915] hover:bg-[#4f2B43] rounded-full px-5 py-2">
                Download CV{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              //src="/images/hero-image.png"
              alt="Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
