import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const FounderDetail = () => {
  const twitterURL = "https://twitter.com/example";
  const linkedinURL = "https://www.linkedin.com/in/uttam-kumar-1a9b361b5/";
  const githubURL = "https://github.com/Utt977?tab=repositories";

  const handleTwitterClick = () => {
    window.open(twitterURL, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(linkedinURL, "_blank");
  };

  const handleGithubClick = () => {
    window.open(githubURL, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-blue-300 flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4">
            <span className="text-white text-4xl flex justify-center items-center h-full">
              U
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-2">UTTAM KUMAR</h2>
          <h2 className="text-lg text-gray-700 mb-4">Founder</h2>
          <p className="text-gray-700">
            As the founder of our web development company, our mission is to
            deliver innovative and impactful web solutions that exceed our
            clients’ expectations, driving their online success and growth.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaTwitter
              size={24}
              color="#1DA1F2"
              onClick={handleTwitterClick}
              style={{ cursor: "pointer" }}
            />
            <FaLinkedin
              size={24}
              color="#0077B5"
              onClick={handleLinkedinClick}
              style={{ cursor: "pointer" }}
            />
            <FaGithub
              size={24}
              color="#000000"
              onClick={handleGithubClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDetail;
