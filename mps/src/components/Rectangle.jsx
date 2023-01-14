const Rectangle = (props) => {
    let { header, small, value, id, blue, redlast, redFirst } = props;

    let last = value && value[value.length - 1];
    let allOther = value && value.slice(0, value.length - 1);

    return (
        <div className={blue ? "rectangle blue" : "rectangle"} id={id} key={id}>
            <h1 className="header">{header}</h1>
            <p className={redFirst ? "value redFirst" : "value"}>
                <span>{allOther}</span>
                <span className={redlast ? "redLast" : ""}>{last}</span>
            </p>
            <p className="small">{small}</p>
        </div>
    );
};

export default Rectangle;
