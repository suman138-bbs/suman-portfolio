import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      name: "Quizz App",
      href: "https://quizzie123.netlify.app/auth",
      src: "/Quizie.png",
      width: 500,
      height: 500,
    },
    {
      id: 2,
      name: "E-commerce",
      href: "https://crwn-clothing-bqbu.vercel.app/",
      src: "/crownClothing.png",
      width: 500,
      height: 500,
    },
    {
      id: 3,
      name: "",
      href: "https://super-app-livid.vercel.app/",
      src: "/SuperApp.png",
      width: 500,
      height: 500,
    },
    {
      id: 4,
      name: "",
      href: "https://rockpaperscissorsbhandari.netlify.app/",
      src: "/RockPaperScissor.png",
    },
    {
      id: 4,
      name: "",
      href: "https://todobhandari.netlify.app/",
      src: "/Tdod.png",
    },
  ];

  return (
    <div className="h-[1000px] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20   scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <div className="flex space-y-5 gap-10 items-center justify-center">
            <div className="flex gap-14">
              {projects.map((project) => (
                <div key={project.id}>
                  <Link href={project.href} target="_blank">
                    <motion.div
                      initial={{ y: -300, opacity: 0 }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      key={project.id}
                    >
                      <Image
                        src={project.src}
                        alt="image"
                        width={500}
                        height={500}
                        className=" object-cover rounded-md"
                      />
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
