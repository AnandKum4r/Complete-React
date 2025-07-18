import React from "react";

const Footer = () => {
  // Part4: Footer in react
  return (
    <>
      <h1 className="text-2xl font-bold m-4">Part4: This is Footer Section</h1>
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left side: Brand / Text */}
          <p className="text-sm text-center md:text-left mb-2 md:mb-0">
            © {new Date().getFullYear()} Anand Kumar. All rights reserved.
          </p>

          {/* Right side: Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
