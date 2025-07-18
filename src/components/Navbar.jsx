import React from "react";
import NavPart2 from "./NavPart2";

const Navbar = () => {
  // Part3: Navbar in react
  return (
    <>
      <h1 className="text-2xl font-bold m-4">Part3: This is Navbar Section</h1>
      <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <h2 className="text-2xl font-bold tracking-wide">Anand</h2>

        <NavPart2 />
      </nav>
    </>
  );
};

export default Navbar;
