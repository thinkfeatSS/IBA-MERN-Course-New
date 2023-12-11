import React from "react";

const About = ({desc, info}) => {
  

  return (
    <section id="#about" className="text-white py-10 ">
      <div className="text-center ">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>{" "}
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="my-3 text-gray-300">
          <p className="text-center leading-7 w-11/12 font-semibold mx-auto">
           {desc}
          </p>
          <div className="flex mt-10 items-center gap-7 justify-center">
            {info?.map((content,i) => (
              <div key={i}>
                <h3 className="text-2xl md:text-4xl font-semibold text-white">
                  {content.count}
                </h3>
                <span className="text-cyan-600 text-xs md:text-base">
                  {content.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
