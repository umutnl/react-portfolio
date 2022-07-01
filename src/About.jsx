import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          voluptate eius dolores id quae. Officia, nulla quaerat quis quam harum
          saepe ipsa accusantium repellat quos pariatur veritatis velit deleniti
          voluptatem alias ex, obcaecati ad. Maiores molestiae dolor odit ipsum
          laboriosam. Enim natus illo earum veniam, incidunt doloremque
          aspernatur odio provident?
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet
          eum, unde quaerat ullam fugit deserunt esse adipisci quibusdam in
          praesentium explicabo soluta veniam maxime! Quo possimus nemo corporis
          debitis, aspernatur quia labore quas est non necessitatibus placeat,
          culpa reiciendis libero, sunt iure. Laborum omnis aperiam molestias
          debitis delectus atque?
        </p>
      </div>
    </div>
  );
};

export default About;
