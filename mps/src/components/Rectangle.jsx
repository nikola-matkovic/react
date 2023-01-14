const Rectangle = (props) => {
    let { header, small, value, id, className } = props;
    let last = value && value[value.length - 1];
    let allOther = value && value.slice(0, value.length - 1);

    return (
        <div className="rectangle" id={id} key={id}>
            <h1 className="header">{header}</h1>
            <p className="value">
                <span>{allOther}</span>
                <span className={className}>{last}</span>
            </p>
            <p className="small">{small}</p>
        </div>
    );
};

export default Rectangle;
