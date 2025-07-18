import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
  // Accessing here
  const myAge = useContext(DataContext);
  return (
    <div className="border">
      <h1 className="text-2xl font-bold m-4">
       {myAge.age} This Footer is From Context Api
      </h1>
    </div>
  );
}

export default Footer
