//reponsiveness done. need lang i-adjust yung position ng footer kasi nakasagad yung maps

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customGray text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Title Section */}
        <div className="text-white font-bold text-xl">
          Pet-Care <span className="text-green-400">Hub</span>
        </div>

        {/* Divider */}
        <div className="mt-4 mb-6">
          <hr className="border-t border-gray-400" />
        </div>

        {/* Links and Text */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 text-sm">
          <span>© PetCare Hub All Rights Reserved.</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
