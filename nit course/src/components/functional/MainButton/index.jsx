import style from './style.module.css';
const MainButton = (props) => {
    const {text = "click me", color="primary"} = props;
    return (
        <button className={`  ${style[color]} ${style.btn} `} >
            {text}
        </button>
    );
}

export default MainButton;