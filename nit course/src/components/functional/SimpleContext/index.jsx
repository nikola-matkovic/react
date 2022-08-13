import React, { useState } from "react";

export const MyContext = React.createContext();

const SimpleContext = (props) => {
  const [text, setText] = useState("This is seen by all components");
  const [counter, setCounter] = useState(0);

  return (
    <MyContext.Provider
      value={{
        text,
        setText,
        counter,
        setCounter,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default SimpleContext;
