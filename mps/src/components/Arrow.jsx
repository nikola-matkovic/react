import Arrow from "react-arrow";

function ArrowComponent(props) {
    let { direction, length, headLength, headWidth, id } = props;
    return (
        <div className="arrow" id={id} key={id}>
            <Arrow
                direction={direction}
                shaftWidth={3}
                shaftLength={length}
                headWidth={headWidth}
                headLength={headLength}
                fill="black"
                stroke="black"
                strokeWidth={0}
            />
        </div>
    );
}

export default ArrowComponent;
