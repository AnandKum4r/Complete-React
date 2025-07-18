import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext';

const Header = () => {
    // Accesing here : this can be access anywhere using useContext
    const myname = useContext(DataContext)
  return (
    <div className="border">
      <h1 className="text-2xl font-bold m-4">
        This Header is from Context Api {myname.username}
      </h1>
    </div>
  );
}

export default Header
