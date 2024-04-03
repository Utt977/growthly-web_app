import React from "react";
import Service from "./Service";
import { useNavigate } from "react-router-dom";
import freelanceWorkImage from "../assets/laptop-5673901_1280.jpg";

const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/founderDetails");
  };

  const handleReadBtn = () => {
    navigate("/mission");
  }

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-screen mb-4" style={{ backgroundImage: `url(${freelanceWorkImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col justify-center items-center w-full md:w-3/5 px-4 md:px-8 lg:px-12 xl:px-16">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left mb-4 text-black">
            Growthware
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-center md:text-left mb-6 text-white">
            Growthware is the fastest Web & App Development company in India
            starting from 2023. We are the leading E-commerce website Designing
            Company in Web Solutions, working hard to assure 100% client
            satisfaction with high-quality work and timely delivery.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <button
              onClick={handleClick}
              className="bg-blue-600 px-6 py-3 shadow-md text-white text-lg font-semibold rounded-lg md:text-xl lg:text-2xl md:mr-4"
            >
              Join Now
            </button>
            <button onClick={handleReadBtn} className="bg-blue-600 px-6 py-3 shadow-md text-white text-lg font-semibold rounded-lg md:text-xl lg:text-2xl">
              Read More
            </button>
          </div>
        </div>
      </div>
      <Service />
    </>
  );
};

export default Body;
