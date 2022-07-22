import React from "react";
import ReactDOM from "react-dom/client";
import Checkbox from "./components/functional/Checkbox/index";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Checkbox text="slažem se"  color="danger" />
  </React.StrictMode>
);
