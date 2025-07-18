import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Section = () => {
  // Accessing here
  const myCity = useContext(DataContext);
  return (
    <div className="border">
      <h1 className="text-2xl font-bold m-4">
        This Section is From Context Api
      </h1>
      <h1>{myCity.city}</h1>
    </div>
  );
};

export default Section;
