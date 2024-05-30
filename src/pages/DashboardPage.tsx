import { ArrowRight, Sparkle } from "lucide-react";
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
      <div className="flex flex-row border-b-2 border-black w-full">
        <div className="flex flex-col py-56 pl-20 bg-[#dbdbff]">
          <Sparkle size={38} alignmentBaseline="after-edge" />
        </div>
        <section className="flex flex-col gap-8 bg-[#dbdbff] w-[80%]">
          <div className="flex flex-col pt-52">
            <h1 className="font-normal text-7xl flex flex-col whitespace-nowrap">
              Any///
              <span>development</span>
              <span>
                for <span className="text-[#f00000]" ref={el}></span>
              </span>
            </h1>
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="font-normal text-sm ">
              Learn the basics of anything development with this
              beginner-friendly tutorial.We'll cover from the basic into expert.
            </p>
          </div>
          <div className="flex flex-row cursor-pointer relative">
            <div className="relative inline-block">
              <div className="absolute inset-0 transform translate-x-[5px] translate-y-[5px]  border border-black opacity-90"></div>
              <div className="relative z-10 text-white bg-black font-bold">
                <p className="px-8 py-3 flex gap-2">
                  Learn How{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-black border-l-2 p-5">
          <figure className="w-[500px] bg-[#feef06] rounded-t-full border-2  border-black drop-shadow-[10px_10px_0_rgb(0,0,0)]">
            <img src={DashboardImage} alt="Dashboard" />
          </figure>
        </section>
      </div>
      <div className="flex flex-col items-center gap-[2rem] border-b-2 border-black py-20 bg-[#edfaca] w-full">
        <section className="flex flex-col items-center">
          <h1 className="font-bold text-2xl text-black tracking-widest">
            Programming Course
          </h1>
          <p className="font-semibold text-4xl tracking-tight">
            Explore Our Course Offering
          </p>
        </section>
        <section className="flex flex-row justify-center gap-[2rem]">
          <div className="rounded-lg  cursor-pointer border-2 border-gray-600 bg-white">
            <p className="py-2 px-4">Python</p>
          </div>
          <div className="rounded-lg  cursor-pointer border-2 border-gray-600 bg-white">
            <p className="py-2 px-4">Javascript</p>
          </div>
          <div className="rounded-lg  cursor-pointer border-2 border-gray-600 bg-white">
            <p className="py-2 px-4">Go-Lang</p>
          </div>
          <div className="rounded-lg  cursor-pointer border-2 border-gray-600 bg-white">
            <p className="py-2 px-4">C++</p>
          </div>
          <div className="rounded-lg  cursor-pointer border-2 border-gray-600 bg-white">
            <p className="py-2 px-4">Typescript</p>
          </div>
          <div className="rounded-lg  cursor-pointer border-2 border-gray-600 bg-white">
            <p className="py-2 px-4">Erlang</p>
          </div>
          <div className="rounded-lg  cursor-pointer border-2 border-gray-600 bg-white">
            <p className="py-2 px-4">Python</p>
          </div>
        </section>
        <section className="flex flex-row justify-center gap-[4rem]">
          <div className="flex flex-col w-[200px]">
            <figure className="rounded-xl w-full border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <h2 className="font-bold text-xl mt-4">Beginners</h2>
            <p>Learning basic programing with python to create anything</p>
          </div>
          <div className="flex flex-col w-[200px] ">
            <figure className="rounded-xl w-full border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <h2 className="font-bold text-xl mt-4">Intermediate</h2>
            <p>Learning basic programing with python to create anything</p>
          </div>
          <div className="flex flex-col w-[200px]">
            <figure className="rounded-xl w-full border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <h2 className="font-bold text-xl mt-4">Advanced</h2>
            <p>Learning basic programing with python to create anything</p>
          </div>
          <div className="flex flex-col w-[200px]">
            <figure className="rounded-xl border-2 border-gray-600 overflow-hidden">
              <img src="https://via.placeholder.com/200" alt="Course" />
            </figure>
            <span className="flex flex-col flex-wrap">
              <h2 className="font-bold text-xl mt-4">Expert</h2>
              <p>Learning basic programing with python to create anything</p>
            </span>
          </div>
        </section>
      </div>
      <div className="flex flex-row w-full justify-between items-end border-b-2 border-black">
        <section className="flex flex-col pl-40 pb-20">
          <h2 className="font-bold text-3xl">Realibity</h2>
          <div className="flex flex-row gap-20 items-end">
            <div className="flex flex-col w-[20rem] ">
              <span className="border-b-2 border-black flex justify-end">
                <h3 className="font-bold text-xl py-10">01</h3>
              </span>
              <p>
                Blockchain based storage for store certificate data make it more
                secure compare to traditional storage system.
              </p>
            </div>
            <div className="flex flex-col w-[20rem] ">
              <span className="border-b-2 border-black flex justify-end">
                <h3 className="font-bold text-xl py-10">02</h3>
              </span>
              <p>
                Online compiler for student to test their code and get instant
                without any installation required.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center pr-[15rem]">
          <figure className="w-[25rem]">
            <img src={Realibity} alt="" />
          </figure>
        </section>
      </div>
    </div>
  );
};
