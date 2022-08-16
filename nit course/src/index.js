import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/team" element={<div>team</div>} />  
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);