import React, { memo, useState, useCallback } from "react";
import { useEffect } from "react";

const Memorize = (props) => {
  const [text, setText] = useState(1);

  const click = useCallback( (e) => {
    setText(e.target.value)
    console.log(e.target.innerText);
  }, [text])

  return (
    <div>
      <p>{text}</p>
      <List />
    </div>
  );
};

const MyInput = memo((props) => {
  return <div>
    <span>Nešto</span>
    <input type="text" onChange={props.onChange} />
  </div>;
});  

const MyText = () => {
  return (<p>my text</p>)
}

const List = memo((props) => {
  return [1,2,3, 4].map( item =>  <p>{item}</p>)
})

export default Memorize;
