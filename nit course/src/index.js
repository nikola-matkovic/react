import React from "react";
import ReactDOM from "react-dom/client";

import SearchMock from "./components/functional/SearchMock/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <SearchMock />
  </React.StrictMode>
);
