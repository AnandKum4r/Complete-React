import React, { useState } from "react";

const Basics = () => {
  // Part1:  Basics of react

  // creating varibles in jsx
  let user = "Anand";
  const age = 24;
  // in react we do not create variable as above

  //instead we use useState() to create variables like below
  const [A, setA] = useState(10);
  // here A is a readable element and its value is 10.
  // and setA is a writeable element means we can change value of A with help of setA

  // now create function to change setNum value
  const changeA = () => {
    setA(20);
  };

  // Changing username: it will require useState() hooks in react to change
  // Pahle humlog DOM se krte the javascript me
  let changeUser = () => {
    user = "Aryan";
  };

  // Hooks - are special type of function used for state management
  // State Management means changing its state like 0 to 1

  // Creating counter app
  const [num, setNum] = useState(0);

  return (
    // App.jsx me jo bhi paas hoga main.jsx me jayega phir main.jsx se root me qki root main me hai
    // App.jsx to Main.jsx to Index.html
    // Parent is index.html then its child is Main.jsx then its subChild is app.jsx
    // Main.jsx parent hai mtlb jo bhi import main me hoga wo automaticllay app.jsx me v hoga
    // lekin agar sirf app.jsx me import krte ho to main me apply nhi hoga

    // fragments <></> are empty tag, in necessary to write
    // A Fragment lets you wrap multiple elements without adding extra HTML(div) to the DOM.

    <>
      {/* use curly{} to acces variable in JSX */}
      <h1 className="text-2xl font-bold m-4">
        Part1: This is React Basics Section
      </h1>
      <h1 className="text-3xl font-bold text-center text-amber-700">
        Username is {user}, Age {age}
      </h1>

      <h2>Value of a is {A}</h2>

      <h3>Number is {num}</h3>

      {/* Function Calling is JSX */}
      <button
        onClick={changeUser}
        className="bg-blue-500 text-white px-4 py-2 m-1 rounded"
      >
        Change user
      </button>
      <button
        onClick={changeA}
        className="bg-blue-500 text-white px-4 py-2 m-1 rounded"
      >
        changeA
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 m-1 rounded"
        onClick={() => {
          setNum(num + 10);
        }}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-5 rounded"
        onClick={() => {
          setNum(num - 10);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Basics;
