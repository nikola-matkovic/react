import { Polyline } from "react-shapes";

const PolylineComponent = (props) => {
    let { alu1, alu2 } = props;
    return (
        <div className="polyline">
            <Polyline
                points="0,0 120,0 150,25 180,0 300,0 240,100 60,100, 0,0"
                fill={{ color: "white" }}
                stroke={{ color: "black" }}
                strokeWidth={2}
            />
            <div className="text1">
                <p>{alu1}</p>
            </div>
            <div className="text2">
                <p>{alu2}</p>
            </div>
        </div>
    );
};

export default PolylineComponent;
