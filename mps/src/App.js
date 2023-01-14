import ArrowComponent from "./components/Arrow";
import PolylineComponent from "./components/Polyline";
function App() {
    return (
        <>
            <ArrowComponent
                direction="down"
                length={50}
                headLength={10}
                headWidth={5}
            />
            <PolylineComponent />
        </>
    );
}

export default App;
