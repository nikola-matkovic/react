const Rectangle = (props) => {
    let { header, small, value, id } = props;

    return (
        <div className="rectangle" id={id} key={id}>
            <h1 class="header">{header}</h1>
            <p class="value">{value}</p>
            <p class="small">{small}</p>
        </div>
    );
};

export default Rectangle;
