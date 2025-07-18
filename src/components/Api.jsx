import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  // Part6: Api Handling in react

  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
    console.log(data);

    // To call api without using button
    // useEffect(() => {
    //   getData();
    // }, []);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold m-4">Part6: This is Api Section</h1>
      <button
        onClick={getData}
        className="bg-teal-700 rounded text-white font-semibold text-2xl px-6 py-3 mb-1 active:scale-90"
      >
        Click Me
      </button>

      <div className="p-5 bg-gray-950 text-white">Hello</div>
      {data.map(function (elem, idx) {
        return (
          <div
            key={idx}
            className="bg-gray-50 flex items-center justify-between w-full px-7 py-6 rounded mb-3"
          >
            <img className="h-50" src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
