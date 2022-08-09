import { useContext } from "react";
import { MyContext } from "../SimpleContext";
const ContextConsumer = (props) => {
    const context = useContext(MyContext);
    console.log(context);
    return <div>test</div>   
}

export default ContextConsumer;