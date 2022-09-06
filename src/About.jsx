import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A passionate programming freelancer witH experience in web app and
          desktop application development.
        </p>
        <br />

        <p className="text-xl">
          I get energy from coming up with creative solutions. I have the
          following skills html5 css3 tailwind css, react and wordpress. I'm
          programming on a daily basis it's a passion for me
        </p>
      </div>
    </div>
  );
};

export default About;
