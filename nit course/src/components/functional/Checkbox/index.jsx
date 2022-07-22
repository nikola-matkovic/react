import style from './style.module.css';
const Checkbox = (props) => {
    const {text = "Slažem se da prodajem bubreg", color="primary", size={md}} = props;
    let colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    let sizes = ["sm", "md", "lg", "xl", ];
    return (
        <label>{text}</label>
    );
}

export default Checkbox;