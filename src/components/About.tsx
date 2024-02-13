import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../public/About.jpg";
import Image from "next/image";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex  flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" mt-[100px] md:mb-0"
      >
        <Image
          src={AboutImg}
          alt="About Image"
          className=" w-44 h-52 rounded-full object-cover md:rounded-lg md:w-[800px] md:h-80 xl:w-[700px] xl:h-[400px]"
        />
      </motion.div>
      <div className="space-y-2 px-0 md:px-10 ">
        <h4 className="text-lg md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A] ">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          Dynamic Computer Science grad excelling in Full Stack Software
          Development and AWS. Proficient in public speaking, I shape impactful
          events. Balancing tech with wellness, I practice yoga and fitness
          regularly. Mastering digital marketing enhances my online presence.
          Leveraging tech for meaningful and lasting change.
        </p>
      </div>
    </div>
  );
}
