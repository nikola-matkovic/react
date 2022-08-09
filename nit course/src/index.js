import React from "react";
import ReactDOM from "react-dom/client";
import SimpleContext from "./components/functional/SimpleContext";
import ContextConsumer from "./components/functional/ContextConsumer";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <SimpleContext >
    <ContextConsumer> 
      
    </ContextConsumer>
  </SimpleContext>
  // </React.StrictMode>
);
