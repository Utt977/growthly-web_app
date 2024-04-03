import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-blue-600 py-8 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="text-white font-bold text-3xl mb-6">Growthware</div>
      <div className="text-white font-semibold text-lg space-y-2">
        <p>Address: Chandigarh University, Mohali Chandigarh Punjab Pin: 140301 India</p>
        <p>Phone: +91XXXXXXXXXX</p>
        <p>Email: dummy@gmail.com</p>
        {/* <p>© 2023 growthwarebusiness Pvt.Ltd. All Rights Reserved</p> */}
      </div>
    </div>
  );
};

export default Footer;
