import { useCallback } from "react";
import {  useState } from "react";

const Memorize = () => {
    const [text, setText] = useState(0)
    return(
        <div>
            <p>{text}</p>
            <input
            type="text" 
            value={text}
            onChange={(e)=> setText(e.target.value)
            }
            />
        </div>
    )
}

const filter


export default Memorize;
