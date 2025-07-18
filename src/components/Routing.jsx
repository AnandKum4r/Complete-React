import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Header from "./Header";

const Routing = () => {
  // Part7
  // React Router DOM: First Install react router dom using terminal
  // type: npm i react-router-dom
  // To use react-router-dom app ko wrap krna hai using BrowserRouter in main.jsx

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">
        Part7: This is Reat Router DOM Section
      </h1>
      <Header />
      <h1>Hi How are you</h1>

      {/* Routes ke anadr jo likha hai wahi change hoga sirf bina page reload huye baaki same rahega jaise input aur h1 */}
      <Routes>
        {/* Home page url will be blank so it will open home by default */}
        <Route path="/" element={<Home />} />
        {/* After setting this path it will open About page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Routing;
