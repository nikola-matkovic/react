import Arrow from "react-arrow";

function ArrowComponent(props) {
    let { direction, length, headLength, headWidth } = props;
    return (
        <Arrow
            direction={direction}
            shaftWidth={1}
            shaftLength={length}
            headWidth={headWidth}
            headLength={headLength}
            fill="black"
            stroke="black"
            strokeWidth={0}
        />
    );
}

export default ArrowComponent;
