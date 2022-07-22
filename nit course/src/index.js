import React from "react";
import ReactDOM from "react-dom/client";

import MainButton from "./components/functional/MainButton/index";


import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <MainButton text="klikni me"  color="danger" radius="xs" />
  </React.StrictMode>
);
