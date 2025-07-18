import React, { createContext } from "react";

// Creating context
export const DataContext = createContext();

const UserContext = ({ children }) => {
  // ContextApi.jsx eska children hai to wo yaha aa jayega
  // This is for ContextApi
  // console.log(children);

//   const username = "Anand";

  const userData = {
    username: "Kartik Arya",
    age: 23,
    city: "Delhi",
  };
  return (
    <>
      {/*After paasing like this context provider value can be used anywhere  */}
      <DataContext.Provider value={userData}>{children}</DataContext.Provider>
    </>
  );
};

export default UserContext;
