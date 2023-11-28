import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.jpg";
import javascript from "../assets/images/javascript.png";
const Skills = () => {
  // const skills = [
  //     {logo: html,
  //     level: "Advanced",
  //     count: 86},
  //     {logo: css,
  //     level: "Advanced",
  //     count: 40},
  //     {logo: javascript,
  //     level: "Advanced",
  //     count: 20},
  // ]
  const skills = [
    { logo: html, level: "Advanced", count: 86 },
    { logo: html, level: "Advanced", count: 40 },
    { logo: html, level: "Advanced", count: 20 },
    { logo: html, level: "Advanced", count: 20 },
    { logo: html, level: "Advanced", count: 20 },
  ];

  return (
    <section
      id="#skills"
      className="py-10 bg-gray-800 flex justify-center relative"
    >
      <div className="mt-8 text-white text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
        {/* <div className="flex items-center justify-center mt-12 relative min-w-[10rem] max-w-[16rem] p-10 bg-slate-900 rounded-xl"> */}
        <div className="flex items-center justify-center gap-10 mt-12 p-10 flex-wrap">
          {skills?.map((skill, index) => (
            <div className="border-2 min-w-[10rem] max-w-[16rem]">
              <img src={skill.logo} width='60px' height='60px' className="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
