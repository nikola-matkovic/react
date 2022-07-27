import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tabs from "./components/functional/Tabs/index"
import Website from "./components/functional/Website";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);

