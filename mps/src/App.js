import ArrowComponent from "./components/Arrow";
import PolylineComponent from "./components/Polyline";
import Rectangle from "./components/Rectangle";
import style from "./style.css";

function App() {
    return (
        <>
            {/* <ArrowComponent
                direction="down"
                length={50}
                headLength={10}
                headWidth={5}
            />
            <PolylineComponent /> */}
            <Rectangle
                header="Multiplican"
                small="Shift left"
                value="000 000 111 111"
                id="mltiplican"
            />
        </>
    );
}

export default App;
