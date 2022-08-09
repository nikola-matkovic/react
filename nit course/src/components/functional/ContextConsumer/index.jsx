import { useContext } from "react";
import { MyContext } from "../SimpleContext";
const ContextConsumer = (props) => {
    const context = useContext(MyContext);
    return <div>
    <button onClick={()=> context.setCounter((prew) => prew + 1)}>+</button>    
    {context.counter}</div>   
}

export default ContextConsumer;