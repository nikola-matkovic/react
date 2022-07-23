import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tabs from "./components/functional/Tabs/index"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Tabs  tabNames ={ ["prvi", "drugi","treci"] } 
      tabContents={["ovo je prvi kontent", "ovo je drugi kontent", "ovo je treći kontent"]
    } />
  </React.StrictMode>
);
