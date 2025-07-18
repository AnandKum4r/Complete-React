import React, { useState } from "react";

const Form = () => {
  // Part2
  // Form Handling in react

  // function for form submit
  const submitHandler = (e) => {
    // It will prevent default behavior of form that page will not reload automatically on submit
    e.preventDefault();
    console.log(username);

    // By doing this input filled will be blank after submit
    setUsername("");
  };

  const [username, setUsername] = useState("");

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Part2: This is Form Section</h1>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          // if value alreday diya rahega to wo chnage nhi hoga
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
