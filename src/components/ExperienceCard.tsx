import React from "react";

type Props = {};

const Experience: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center  gap-4 mt-28">
      <p className="mt-4">SOFTWARE ENGINEER INTERN | SHRIDHARA TECHNOLOGIES</p>
      <p>October 15, 2023 - Present</p>
      <ul className="list-disc text-sm md:text-lg">
        <li>
          Working as a Full Stack Software Engineer Intern at Shridhara
          Technologies, gaining in-depth knowledge in React, Firebase, and other
          modern technologies.
        </li>
        <li>
          Collaborating on projects that involve the development of web
          applications using React for the frontend and Firebase for backend
          services.
        </li>
        <li>
          Contributing to the implementation of features such as authentication,
          real-time database, and cloud functions using Firebase.
        </li>
        <li>
          Learning and applying best practices in software development,
          including code optimization, scalability, and security.
        </li>
      </ul>
    </div>
  );
};

export default Experience;
