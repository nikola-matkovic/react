import { useContext } from "react";
import { MyContext } from "../SimpleContext";
const ContextConsumer = (props) => {
    const context = useContext(MyContext);
    <button onClick={()=> context.setText("jedan")}>podesi</button>
    return <div>{context.text}</div>   
}

export default ContextConsumer;