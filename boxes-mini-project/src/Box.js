import { useState } from "react"

const Box = (props) => {
    const  [on, setOn] = useState(props.on)
    const style = {
        backgroundColor : on ? "#222" : "transparent",
    }
    const toggle = () => {
        setOn (
            prevOn => !prevOn
        )
    }
    return (
        <div className="box" style={style} 
            onClick = {toggle}
        >

        </div>
    )
}

export default Box;
