import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GymImg from "../assets/gymweb.jpeg";
import AuditImg from "../assets/audit.jpeg";
import BusinessImg from "../assets/business.jpeg";
import CreditImg from "../assets/credit.jpeg";
import InvestmentImg from "../assets/investment.jpeg";
import WealthCareImg from "../assets/wealthcare.jpeg";

const ImageSection = () => {
  const navigate = useNavigate();
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleZoomClick = (imageSrc) => {
    setZoomedImage(imageSrc);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  const clickHandler = () => {
    navigate("/services"); 
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">Work Done</h2>
      <div className="flex flex-wrap">
        {[
          { src: GymImg, alt: "gym" },
          { src: AuditImg, alt: "audit" },
          { src: BusinessImg, alt: "business" },
          { src: CreditImg, alt: "credit" },
          { src: InvestmentImg, alt: "investment" },
          { src: WealthCareImg, alt: "wealthcare" },
        ].map((image, index) => (
          <div key={index} className="w-1/3 p-2 relative overflow-hidden group">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <button
                className="text-white bg-blue-500 px-4 py-2 mx-1 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                onClick={clickHandler}
              >
                Link
              </button>
              <button
                className="text-white bg-blue-500 px-4 py-2 mx-1 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                onClick={() => handleZoomClick(image.src)}
              >
                Zoom
              </button>
            </div>
          </div>
        ))}
      </div>
      {zoomedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <img
            src={zoomedImage}
            alt="Zoomed Image"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={handleCloseZoom}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
