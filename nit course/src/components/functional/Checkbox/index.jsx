import style from './style.module.css';
const Checkbox = (props) => {
    let {text = "Slažem se da prodajem bubreg", color, size, radius} = props;
    let colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    let sizes = ["xs", "sm", "md", "lg", "xl", ];
    let radiuses = ["xsradius", "smradius", "mdradius", "lgradius", "xlradius"];
    color = colors.includes(color) ? color : "primary";
    size = sizes.includes(size) ? size : "md";
    radius = radiuses.includes(radius) ? radius : "mdradius";
    return (
        <>
            <input type='checkbox' id='check' className={`${style.checkbox} ${style[color]} ${style[size]} ${style[radius]}`}/>
            <label htmlFor='check'>{text}</label>
        </>
    );
}

export default Checkbox;