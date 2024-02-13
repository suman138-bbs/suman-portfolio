import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const Projects = [1];
  return (
    <div className="h-[1000px] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20   scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <div className="flex space-y-5 gap-10 items-center justify-center">
            <div>
              {Projects.map((project, index) => {
                return (
                  <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          {/* <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50 ">
                Case Study of Ups clone
              </span>
            </h4>
            <p className="text-lg text-center md:text-left">
              This will force the installation of the package despite the
              dependency conflict. However, note that this may result in an
            </p>
          </div> */}
        </div>
      </div>
      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
