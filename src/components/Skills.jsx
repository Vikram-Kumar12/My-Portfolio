import { div } from "framer-motion/client";
import { useState } from "react";
import { skillData } from "../Data";

const Skills = () => {
  const [skills] = useState(skillData);

  return (
    <section className=" w-full lg:w-2/3 lg:ml-[33.33%] px-10 sm:px-8 lg:px-8 xl:px-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 style={{ fontFamily: "font2" }} className="text-2xl  mb-5 mt-5">
          My Skills
        </h2>

        <div className="flex flex-wrap items-center  gap-3 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative flex items-center justify-center gap-2 px-2 w-fit  rounded-full transition-all duration-300 hover:bg-zinc-100 border-1 border-zinc-400 hover:border-white `}
            >
              <div
                className={`text-black transition-colors duration-300 flex items-center justify-center ${skill.color}`}
              >
                {skill.icon}
              </div>
              <span style={{ fontFamily: "font2" }} className="text-black">
                {skill.Name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
