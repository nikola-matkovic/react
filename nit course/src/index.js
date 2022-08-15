import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import StateHook from "./components/hooks_learning/StateHook";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <div>
        <StateHook />
      </div>
  </React.StrictMode>
);