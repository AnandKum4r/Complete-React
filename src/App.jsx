import React from "react";
import "./App.css";
import Basics from "./Basics";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Api from "./components/Api";
import Routing from "./components/Routing";
import ContextApi from "./components/ContextApi";

const App = () => {
  return (
    // Always import components in app.jsx not in main.jsx
    // These components can be used multiple times
    // Components ke andar bhi components bana skte hai like navbar
    <>
      <Basics />
      <Form />
      <Navbar />
      <Footer />
      <Card />
      <Api />
      <Routing />
      <ContextApi />
    </>
  );
};

export default App;
