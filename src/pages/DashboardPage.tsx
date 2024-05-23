import { Sparkle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import DashboardImage from "../assets/DashboardSide.webp";

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
    <div className="flex flex-col">
      <div className="flex flex-row border-b-2 border-black">
        <div className="flex flex-col py-56 pl-20">
          <Sparkle size={38} alignmentBaseline="after-edge" />
        </div>
        <section className="flex flex-col gap-8 w-[80%]">
          <div className="flex flex-col pt-52">
            <h1 className="font-normal text-7xl flex flex-col whitespace-nowrap">
              Front end
              <span>development</span>
              <span>
                for <span ref={el}></span>
              </span>
            </h1>
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="font-normal text-sm ">
              Learn the basics of front end development with this
              beginner-friendly tutorial.We'll cover the basics of HTML, CSS,
              and JavaScript.
            </p>
          </div>
          <div className="flex flex-row cursor-pointer">
            <div className="text-white rounded-3xl bg-black font-bold">
              <p className="px-8 py-3">Learn How</p>
            </div>
          </div>
        </section>
        <section className="border-black border-l-2">
          <figure className="w-[600px]">
            <img src={DashboardImage} alt="Dashboard" />
          </figure>
        </section>
      </div>
      <div className="flex flex-col items-center gap-[2rem] border-b-2 border-black py-20 bg-[#f8f7f3]">
        <section className="flex flex-col items-center">
          <h1 className="font-bold text-2xl text-[#ff8643] tracking-widest">
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
    </div>
  );
};
