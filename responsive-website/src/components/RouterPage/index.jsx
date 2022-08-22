import {Routes, Route } from "react-router-dom";
import Home from "../Home";

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<Home/>} />
            <Route path="/Products" element={<Home/>} />
            <Route path="/Contacts" element={<Home/>} />
            <Route path="/*" element={<Home/>} />
        </Routes>
    );
}

export default RouterPage;