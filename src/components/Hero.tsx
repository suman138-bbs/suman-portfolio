import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCricles from "./BackgroundCricles";
import ProfileImg from "../../public/portfolio.jpeg";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Suman Bhandari",
      "Guy-who-loves-tea.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCricles />
      <Image
        src={ProfileImg}
        alt="image"
        className="relative rounded-full h-32 w-32 object-cover mx-auto"
      />

      <div className="z-20">
        <h1 className="text-gray-500 pb-2 tracking-[15px]">
          SOFTWARE ENGINEER
        </h1>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="text-2xl md:text-5xl">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects </button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
