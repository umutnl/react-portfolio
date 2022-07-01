import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";


const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },

    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },

    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-600",
    },

    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },

    {
      id: 7,
      src: github,
      title: "Gitub",
      style: "shadow-gray-500",
    },

    {
      id: 8,
      src: graphql,
      title: "Graphql",
      style: "shadow-pink-400",
    },

  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from bg-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Experience
        </p>
        <p className="py-6">These are the techologies I've worked with</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
