import style from './footer.module.css';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import github from '../../images/github.png';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img className={style.git} src={github} alt="" />
        </footer>
    )
}