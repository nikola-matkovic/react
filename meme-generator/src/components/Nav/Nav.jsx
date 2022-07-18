import style from './style.module.css'
import logo from '../../images/troll-face.png'

const nav = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.left}>
                <img src={logo} alt="meme logo" />
                <h1>Meme Generator</h1>
            </div>
            <div className={style.right}>
                React Courese - Project 3
            </div>
        </nav>
    )

}

export default nav;