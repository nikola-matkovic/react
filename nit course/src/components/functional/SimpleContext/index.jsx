import React from "react";

export const MyContext = React.createContext()

const SimpleContext = (props) => {
    return <MyContext.Provider value = {{text: "nešto"}}>{[props.children]}</MyContext.Provider>
}
export default SimpleContext;