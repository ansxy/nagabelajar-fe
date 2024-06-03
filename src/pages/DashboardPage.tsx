import { ArrowRight, Radio, Sparkle, VenetianMask } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import DashboardImage from "../assets/Dashboard-removebg.png";
import Realibity from "../assets/realibity.webp";

export const Dashboard: React.FC = () => {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["beginners", "intermediate", "advanced"],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      backDelay: 1000,
      backSpeed: 80,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col-reverse md:flex-row border-b-2 border-black w-full">
        <div className="flex flex-col py-16 md:py-56 pl-5 md:pl-20 bg-[#dbdbff]">
          <Sparkle size={38} alignmentBaseline="after-edge" />
        </div>
        <section className="flex flex-col gap-8 bg-[#dbdbff] w-full md:w-[80%]">
          <div className="flex flex-col pt-10 md:pt-52 px-5 md:px-0">
            <h1 className="font-normal text-4xl md:text-7xl flex flex-col whitespace-nowrap">
              Any///
              <span>development</span>
              <span>
                for <span className="text-[#f00000]" ref={el}></span>
              </span>
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-col px-5 md:px-0">
            <p className="font-normal text-sm md:text-base">
              Learn the basics of anything development with this
              beginner-friendly tutorial. We'll cover from the basic into
              expert.
            </p>
          </div>
          <div className="flex flex-row cursor-pointer relative px-5 md:px-0">
            <div className="relative inline-block">
              <div className="absolute inset-0 transform translate-x-[5px] translate-y-[5px] border border-black opacity-90"></div>
              <div className="relative z-10 text-white bg-black font-bold">
                <p className="px-8 py-3 flex gap-2 text-sm md:text-base">
                  Learn How{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex md:flex border-black md:border-l-2 border-b-2 p-5">
          <figure className="w-full md:w-[500px] bg-[#feef06] rounded-t-full border-2 border-black drop-shadow-[10px_10px_0_rgb(0,0,0)]">
            <img
              src={DashboardImage}
              alt="Dashboard"
              className="w-full md:w-auto"
            />
          </figure>
        </section>
      </div>
      <div className="flex flex-row w-full justify-between px-10 bg-[#1d2321] py-5">
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
      </div>
      <div className="flex flex-col items-center gap-8 py-20 bg-[#edfaca] w-full">
        <section className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl md:text-3xl text-black tracking-widest">
            Programming Course
          </h1>
          <p className="font-semibold text-4xl md:text-5xl tracking-tight">
            Explore Our Course Offering
          </p>
        </section>
        <section className="flex flex-wrap justify-center gap-4 px-5">
          <div className="rounded-lg cursor-pointer border-2 border-gray-600 bg-white py-2 px-4">
            <p className="text-sm md:text-base">Python</p>
          </div>
          <div className="rounded-lg cursor-pointer border-2 border-gray-600 bg-white py-2 px-4">
            <p className="text-sm md:text-base">Javascript</p>
          </div>
          <div className="rounded-lg cursor-pointer border-2 border-gray-600 bg-white py-2 px-4">
            <p className="text-sm md:text-base">Go-Lang</p>
          </div>
          <div className="rounded-lg cursor-pointer border-2 border-gray-600 bg-white py-2 px-4">
            <p className="text-sm md:text-base">C++</p>
          </div>
          <div className="rounded-lg cursor-pointer border-2 border-gray-600 bg-white py-2 px-4">
            <p className="text-sm md:text-base">Typescript</p>
          </div>
          <div className="rounded-lg cursor-pointer border-2 border-gray-600 bg-white py-2 px-4">
            <p className="text-sm md:text-base">Erlang</p>
          </div>
          <div className="rounded-lg cursor-pointer border-2 border-gray-600 bg-white py-2 px-4">
            <p className="text-sm md:text-base">Python</p>
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-8 px-5">
          <div className="flex flex-col w-[200px]">
            <figure className="rounded-xl w-full border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <h2 className="font-bold text-xl md:text-2xl mt-4">Beginners</h2>
            <p className="text-sm md:text-base">
              Learning basic programming with python to create anything
            </p>
          </div>
          <div className="flex flex-col w-[200px]">
            <figure className="rounded-xl w-full border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <h2 className="font-bold text-xl md:text-2xl mt-4">Intermediate</h2>
            <p className="text-sm md:text-base">
              Learning basic programming with python to create anything
            </p>
          </div>
          <div className="flex flex-col w-[200px]">
            <figure className="rounded-xl w-full border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <h2 className="font-bold text-xl md:text-2xl mt-4">Advanced</h2>
            <p className="text-sm md:text-base">
              Learning basic programming with python to create anything
            </p>
          </div>
          <div className="flex flex-col w-[200px]">
            <figure className="rounded-xl border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <span className="flex flex-col flex-wrap">
              <h2 className="font-bold text-xl md:text-2xl mt-4">Expert</h2>
              <p className="text-sm md:text-base">
                Learning basic programming with python to create anything
              </p>
            </span>
          </div>
        </section>
      </div>
      <div className="flex flex-row w-full justify-between px-10 bg-[#88ac20] py-5">
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
        <VenetianMask size={64} className="text-white" />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-end  border-black">
        <section className="flex flex-col pl-5 md:pl-40 pb-10 md:pb-20">
          <h2 className="font-bold text-3xl md:text-4xl">Realibity</h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-end">
            <div className="flex flex-col w-full md:w-[20rem]">
              <span className="border-b-2 border-black flex justify-end">
                <h3 className="font-bold text-xl py-10">01</h3>
              </span>
              <p className="text-sm md:text-base p-2">
                Blockchain based storage for storing certificate data makes it
                more secure compared to traditional storage systems.
              </p>
            </div>
            <div className="flex flex-col w-full md:w-[20rem] p-2">
              <span className="border-b-2 border-black flex justify-end">
                <h3 className="font-bold text-xl py-10">02</h3>
              </span>
              <p className="text-sm md:text-base">
                Online compiler for students to test their code and get instant
                results without any installation required.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center pr-5 md:pr-[15rem]">
          <figure className="w-full md:w-[25rem]">
            <img src={Realibity} alt="Realibity" className="w-full md:w-auto" />
          </figure>
        </section>
      </div>
      <div className="flex flex-row w-full justify-between px-10 bg-[#ff4040e7] py-5">
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
        <Radio size={64} className="text-white" />
      </div>
      <div className="flex flex-col bg-[#ff5f5fe7] w-full">
        <section className="">
          <h1 className="tracking-wider text-3xl font-bold ">How It Works</h1>
        </section>
      </div>
    </div>
  );
};
