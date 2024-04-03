import React from "react";
import WebAndroid from "./WebAndroid";
import ImageSection from "./ImageSection";
import HelpSection from "./HelpSection";

const Service = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center text-blue-800">
        Our Services
      </h2>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="flex flex-col bg-white m-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
            <p className="text-lg mb-4">
              We have successfully completed 50+ projects, providing top-notch
              web service that empowers businesses to thrive online and beyond.
            </p>
            <button className="bg-blue-600 px-6 py-2 shadow-md text-white text-lg font-semibold rounded-lg">
              Click Here
            </button>
          </div>

          <div className="flex flex-col bg-white m-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">App Development</h2>
            <p className="text-lg mb-4">
              Our app service is dedicated to crafting innovative and
              user-friendly applications, delivering seamless experiences for
              businesses and their customers.
            </p>
            <button className="bg-blue-600 px-6 py-2 shadow-md text-white text-lg font-semibold rounded-lg">
              Click Here
            </button>
          </div>

          <div className="flex flex-col bg-white m-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Online Training & Program
            </h2>
            <p className="text-lg mb-4">
              Our web development training combines theoretical knowledge with
              hands-on project work, ensuring students gain practical experience
              in building real-world websites.
            </p>
            <button className="bg-blue-600 px-6 py-2 shadow-md text-white text-lg font-semibold rounded-lg">
              Click Here
            </button>
          </div>
          <div className="flex flex-col bg-white m-4 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              IT & Non-IT Startups
            </h2>
            <p className="text-lg mb-4">
              We specialize in launching and nurturing IT & Non-IT startups
              through comprehensive service offerings. Our expertise encompasses
              strategic guidance, technical support, and tailored solutions,
              fostering successful business growth and development.
            </p>
            <button className="bg-blue-600 px-6 py-2 shadow-md text-white text-lg font-semibold rounded-lg">
              Click Here
            </button>
          </div>
        </div>
      </div>
      <ImageSection/>
      <WebAndroid />
      <HelpSection/>
    </>
  );
};

export default Service;
