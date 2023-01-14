import { Polyline } from "react-shapes";

const PolylineComponent = () => {
    return (
        <div>
            <Polyline
                points="0,0 50,0 75,20 100,0 150,0 120,60 30,60, 0,0"
                fill={{ color: "white" }}
                stroke={{ color: "black" }}
                strokeWidth={1}
            />
        </div>
    );
};

export default PolylineComponent;
