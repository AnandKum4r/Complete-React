import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // This header is for react rounter dom
  return (
    <header>
      <div className="py-7 px-10 mt-5 bg-amber-500 text-white flex items-center justify-between shadow-md">
        <h2 className="text-2xl font-bold">Anand <input className="bg-white text-black rounded-2xl" type="text" /></h2>

        {/* a tag use krne par routing ke time page reload hoga esliye ye use nhi krenge Link tag use krenge */}
        {/* <nav className="flex gap-8">
          <a
            className="text-lg font-medium underline "
            href="/"
          >
            Home
          </a>
          <a
            className="text-lg font-medium underline"
            href="/about"
          >
            About
          </a>
          <a
            className="text-lg font-medium underline "
            href="/contact"
          >
            Contact
          </a>
          <a
            className="text-lg font-medium underline "
            href="/product"
          >
            Product
          </a>
        </nav> */}

        <div className="flex gap-8">
          {/* Link tag use krne se page reload nhi hoga */}
          <Link className="text-lg font-medium underline" to={"/"}>
            Home
          </Link>
          <Link className="text-lg font-medium underline" to={"/about"}>
            About
          </Link>
          <Link className="text-lg font-medium underline" to={"/contact"}>
            Contact
          </Link>
          <Link className="text-lg font-medium underline" to={"/product"}>
            Product
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
