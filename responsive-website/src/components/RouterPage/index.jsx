import {Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About"
import PageNotFound from "../PageNotFound"
import Contact from '../Contacts'
import Products from '../Products'

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Contacts" element={<Contact/>} />
            <Route path="/*" element={<PageNotFound/>} />
        </Routes>
    );
}

export default RouterPage;