import ArrowComponent from "./components/Arrow";
import PolylineComponent from "./components/Polyline";
import Rectangle from "./components/Rectangle";
import style from "./style.css";

function App() {
    return (
        <>
            <ArrowComponent
                direction="left"
                length={100}
                headLength={25}
                headWidth={10}
                id="arrow1"
            />
            <Rectangle
                header="Multiplican"
                small="Shift left"
                value="000 000 111 111"
                id="mltiplican"
            />
            <PolylineComponent />
            <Rectangle
                header="Product"
                small="White"
                value="000 000 111 111"
                id="product"
            />
            <Rectangle
                header="Multiplier"
                small="Shift right"
                value="000 000"
                id="Multiplier"
            />
            <Rectangle header="Control test" id="control" />
            <ArrowComponent
                direction="down"
                length={70}
                headLength={25}
                headWidth={10}
                id="arrow2"
            />
            <ArrowComponent
                direction="down"
                length={75}
                headLength={25}
                headWidth={10}
                id="arrow3"
            />
            <ArrowComponent
                direction="right"
                length={100}
                headLength={25}
                headWidth={10}
                id="arrow4"
            />
            <ArrowComponent
                direction="left"
                length={260}
                headLength={25}
                headWidth={10}
                id="arrow5"
            />
            <ArrowComponent
                direction="up"
                length={380}
                headLength={0}
                headWidth={10}
                id="arrow6"
            />
            <ArrowComponent
                direction="left"
                length={120}
                headLength={25}
                headWidth={10}
                id="arrow7"
            />
        </>
    );
}

export default App;
