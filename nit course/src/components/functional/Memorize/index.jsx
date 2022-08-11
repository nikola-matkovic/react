import { useEffect, useState } from "react";

const memorize = () => {
    const [text, setText] = useState();
    
    return(
        <div>
            <MyInput onChange={myCallback} />
            <br />
            <MyInput onChange={myCallback} />
            <br />
            <MyInput onChange={myCallback} />

        </div>
    )
}
export default memorize;

const MyInput = (props) => {
    return (
        <>
            <label htmlFor="">My input</label>
            <input type="text" />
        </>
    )
}