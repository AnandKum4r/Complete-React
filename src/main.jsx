import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import ContextApi from "./components/ContextApi.jsx";

//  Always import any pages inside app.jsx, not in main.jsx its not in recommended main.jsx.
// It used only to import app.jsx for faster loading. App.jsx is Best for multi-page apps
// <Form/>

createRoot(document.getElementById("root")).render(
  // To use react-router-dom app ko wrap krna hai using BrowserRouter in main.jsx
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  // To Use Context Api app ko wrap krna hai using UserContext in main.jsx
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>
);
