import React from "react";
import { FaHandshake, FaAmazonPay, FaPhoneAlt } from "react-icons/fa";

const HelpSection = () => {
  return (
    <div className="w-full bg-gray-900 h-4/5 flex flex-col md:flex-row text-white">
      <div className="w-full md:w-1/3 p-4 flex items-center">
        <FaHandshake className="text-4xl md:text-6xl mr-4" />
        <div>
          <h2 className="text-xl md:text-3xl font-semibold">24x7 Help</h2>
          <p>If we fall short of your expectation in any way, let us know.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 flex items-center">
        <FaAmazonPay className="text-4xl md:text-6xl mr-4" />
        <div>
          <h2 className="text-xl md:text-3xl font-semibold">Payment Trust</h2>
          <p>Payment schedule 50% advance then 50% After the completion of work.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 flex items-center">
        <FaPhoneAlt className="text-4xl md:text-6xl mr-4" />
        <div>
          <h2 className="text-xl md:text-3xl font-semibold">24x7 Contact Service</h2>
          <p>24*7 Calling Services Available.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
