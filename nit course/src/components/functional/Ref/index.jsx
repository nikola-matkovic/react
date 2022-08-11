import { useRef } from "react";

const Ref = () => {
    const myRef = useRef(null)
    return (
        <div>
            <input ref={myRef} type="text" />
            <button onClick={()=> {
                console.log(myRef.current.value);
            }}>Focus input</button>
        </div>
    )
}

export default Ref;