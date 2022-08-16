import { useState } from "react";
import style from "./nav.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className={style.nav}>
            <Link to="/">Home</Link>
        </nav> 
    );
}

export default Nav;