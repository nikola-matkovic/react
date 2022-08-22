import { Link } from "react-router-dom";
import style from "./style.module.css";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <Link   to="/"> Home </Link>
            <Link  to="/About"> About </Link>
            <Link  to="/Contacts"> Contacts </Link>
            <Link  to="/Products"> Products </Link>
        </nav> 
    );
}

export default Nav;