import style from './hero.module.css';
import group from '../../images/group.png';
export default function Hero() { 
    return (
        <nav className={style.hero}> 
            <img className={style.group} src={group} alt="" />
            <h2 className={style.title}>Online Experiences</h2>
            <p className={style.text}>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </nav>
    )
}