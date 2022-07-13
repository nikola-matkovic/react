import style from './nav.module.css';
import logo from '../../images/logo.svg';
export default function NavBar() { 
    return (
        <nav className={style.nav}> 
            <img src={logo} alt="" />
        </nav>
    )
}