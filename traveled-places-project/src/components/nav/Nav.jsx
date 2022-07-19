import icon from '../../images/globus.png';
import style from './style.module.css';

const Nav = () => {
    return ( 
        <nav className={style.nav}>
            <img src={icon} className={style.logo} alt="Globus Logo" />
            <h3>my travel journal</h3>
        </nav>
    );
}

export default Nav;