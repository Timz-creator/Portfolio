import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-1">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold  ">
            <p>Hi. I'm Timarley, nice to meet you.</p>
          </div>
          <div>
            <p>
                Lorem cupidatat incididunt eiusmod veniam. Consequat commodo consectetur proident sit veniam pariatur consectetur eiusmod nostrud ad reprehenderit veniam exercitation aliqua. Consequat in fugiat nulla et do aliquip fugiat qui do pariatur id non occaecat ipsum. Consectetur Lorem velit et sit commodo culpa sit consequat. Ipsum Lorem enim amet est ullamco eu labore sint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
