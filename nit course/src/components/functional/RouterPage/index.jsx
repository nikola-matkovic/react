import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contacts";
import About from "./About";
import Team from "./Team";
const RouterPage = () => {
    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team/>} />  
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<div>404</div>} />
        </Routes> 
    );
}

export default RouterPage;