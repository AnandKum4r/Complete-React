import React from "react";

const CardPart2 = (user) => {
  // here user is passed as a props

  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-6 max-w-sm mx-auto text-center hover:shadow-lg transition duration-300">
        <div className="flex justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/130299086?v=4"
            alt="Profile"
            className="h-32 w-32 rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-2xl font-bold text-blue-600 mb-2">{user.name}</h1>
        <h2 className="text-gray-500 mb-4">
          {user.city}, {user.age} {user.profession}
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition">
          Add Friend
        </button>
      </div>
    </>
  );
};

export default CardPart2;
