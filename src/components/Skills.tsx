import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="w-screen relative  flex flex-col gap-4 items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className=" text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className="flex flex-col items-center">
        <Skill />
      </div>
    </motion.div>
  );
}
