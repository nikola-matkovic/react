import { useState } from "react";

const StateHook = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>This component will re-render it selfs whenever state (count) is changed</p>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>
                {count}
            </button>
        </div> 
    );
}

export default StateHook;