import style from './card.module.css'
const Conditional = (props) => {
    const {text, type = "Info",  subtitle, extra, extraIcon} = props
    const className = `${style.card} ${style[type]}`
    return (
        <div className={ className } >
            <img className={style.icon}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="test" />
            <div>
                <p className={style.text}>{text}</p>
                {subtitle && <p className={style.subtitle}>{subtitle}</p>}
                {extra || extraIcon}
            </div>  
        </div>
    )
}

export default Conditional;