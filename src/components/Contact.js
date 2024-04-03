import React from "react";
import TechnologyImg from "../assets/technology.jpg";

const Contact = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-opacity-75"
      style={{
        backgroundImage: `url(${TechnologyImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <div className="bg-blue-300 bg-opacity-75 h-auto md:h-auto flex flex-col justify-center px-6 py-8 md:px-8 md:py-12 rounded-lg">
          <div className="text-xl md:text-2xl font-semibold space-y-2">
            <p>Address: Chandigarh University, Mohali Punjab 140301 India</p>
            <p>Phone: +91XXXXXXXXXX</p>
            <p>Email: dummy@gmail.com</p>
            <p>Working Hours: Monday to Friday (09:00 AM - 9:00 PM)</p>
          </div>
        </div>
        <div className="bg-blue-300 rounded-lg bg-opacity-75 h-auto md:h-auto flex flex-col justify-center px-6 py-8 md:px-8 md:py-12">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-4 w-full bg-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-500 transition duration-300 ease-in-out"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 w-full bg-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-500 transition duration-300 ease-in-out"
            />
            <input
              type="text"
              placeholder="Enter the subject"
              className="p-4 w-full bg-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-500 transition duration-300 ease-in-out"
            />
            <textarea
              placeholder="Enter your message"
              rows="6"
              className="p-4 w-full bg-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-500 transition duration-300 ease-in-out"
            ></textarea>
            <button
              type="submit"
              className="px-10 py-3 rounded-full text-white text-xl bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
