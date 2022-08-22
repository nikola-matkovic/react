import { Link } from "react-router-dom";
import style from "./nav.module.css";

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link className={style.navItem} to="/">
        Home
      </Link>
      <Link className={style.navItem} to="/team">
        Team
      </Link>
      <Link className={style.navItem} to="/contacts">
        Contacts
      </Link>
      <Link className={style.navItem} to="/about">
        About
      </Link>
    </div>
  );
};

export default Nav;
