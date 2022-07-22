import style from './style.module.css';
const MainButton = (props) => {
    const {text = "click me", color="primary", radius="xs", size="xlsize"} = props;
    return (
        <button className={`  ${style[color]} ${style.btn} ${style[size]} ${style[radius]}`} >
            {text}
        </button>
    );
}

export default MainButton;