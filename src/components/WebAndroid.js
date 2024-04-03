import React from "react";
import MobileImg from "../assets/mobileDevelopment.png";
import WebImg from "../assets/webDevelopment.png";

const WebAndroid = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-0 md:space-x-8">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full md:max-w-xs lg:max-w-md">
          <img className="w-full max-h-36 md:max-h-full" src={MobileImg} alt="mobileImg" /> 
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="flex flex-col">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mobile App and Web App Responsive</h2>
          <p className="text-lg lg:text-xl">
            Growthware was built to be an out-of-the box responsive website solution,
            perfectly designed to work on any screen size. It doesn’t stop at
            responsive, Phlox is fine-tuned to act appropriately in many
            different viewing environments.
          </p>
        </div>
        <img className="mt-4 w-full md:max-w-md lg:max-w-lg" src={WebImg} alt="webImg" />
      </div>
    </div>
  );
};

export default WebAndroid;
