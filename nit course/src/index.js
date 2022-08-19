import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EffectHook from "./components/hooks_learning/EffectHook";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <EffectHook />
  </React.StrictMode>
);