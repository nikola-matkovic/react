import React from "react";
import { useState } from "react";
export const MyContext = React.createContext()

const SimpleContext = (props) => {
    const  [counter, setCounter] = useState(0)
    return <MyContext.Provider value = {{counter, setCounter}}>{[props.children]}</MyContext.Provider>
}
export default SimpleContext;