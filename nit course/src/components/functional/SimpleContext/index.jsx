import React from "react";
import { useState } from "react";
export const MyContext = React.createContext()

const SimpleContext = (props) => {
    const  [text, setText] = useState("nešto")
    return <MyContext.Provider value = {{text, setText}}>{[props.children]}</MyContext.Provider>
}
export default SimpleContext;