import React, { useContext } from "react";
import UserContext, { DataContext } from "../context/UserContext";
import Header from "../contextComponents/Header";
import Footer from "../contextComponents/Footer";
import Section from "../contextComponents/Section";

const ContextApi = () => {
  // Part8 : Context Api
  // To Use Context Api app ko wrap krna hai using UserContext in main.jsx

  //useContext is a React Hook that lets you access data from a Context API without passing props manually through every level (called "prop drilling").
  const data = useContext(DataContext);

  return (
    <>
      <h1 className="text-2xl font-bold m-4">
        Part8: This is Context API Section(State Managment)
      </h1>
      {/* Object ko acces krne ke liye . use krenge */}
      <h1>My name is {data.username}</h1>

      <Header />
      <Footer />
      <Section />
    </>
  );
};

export default ContextApi;
