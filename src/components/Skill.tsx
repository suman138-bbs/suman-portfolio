import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

type skillsDetailType = {
  name: string;
  profieciency: string;
  src: string;
}[];

function Skill({ directionLeft }: Props) {
  const skillsDetail: skillsDetailType = [
    {
      name: "AWS",
      profieciency: "60%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Bash",
      profieciency: "40%",
      src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
    },
    {
      name: "C",
      profieciency: "60%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C++",
      profieciency: "60%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    },
    {
      name: "CSS",
      profieciency: "70%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Cypress",
      profieciency: "60%",
      src: "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
    },
    {
      name: "Docker",
      profieciency: "40%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    },
    {
      name: "Express",
      profieciency: "70%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Html",
      profieciency: "70%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "Firebase",
      profieciency: "70%",
      src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
      name: "Git",
      profieciency: "75%",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "JavaScript",
      profieciency: "70%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      profieciency: "70%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },

    {
      name: "Kafka",
      profieciency: "50%",
      src: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    },
    {
      name: "Kubernetes",
      profieciency: "40%",
      src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    },
    {
      name: "MongoDb",
      profieciency: "60%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "Linux",
      profieciency: "40%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    },

    {
      name: "PostGreSql",
      profieciency: "65%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "NextJs",
      profieciency: "70%",
      src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    {
      name: "NodeJs",
      profieciency: "60%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "React",
      profieciency: "80%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Redis",
      profieciency: "60%",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
    },
  ];
  return (
    <div className=" w-2/3 flex flex-wrap gap-4">
      {skillsDetail.map(({ name, src, profieciency }) => {
        return (
          <div className="group relative flex cursor-pointer" key={name}>
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={src}
              className="rounded-full border border-gray-500 object-cover w-4 h-4 md:w-14 md:h-14 filter group-hover:grayscale transition duration duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-4 w-4  md:w-14 md:h-14   rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-xl font-bold text-black opacity-100">
                  {profieciency}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skill;
