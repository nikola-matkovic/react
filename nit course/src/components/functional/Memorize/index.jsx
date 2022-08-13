import React, { useEffect, useState, useCallback } from "react";

const Memorize = (props) => {
  const [text, setText] = useState(1);

  const change = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <p>{text}</p>
      <MyInput></MyInput>
    </div>
  );
};

const MyInput = React.memo((props) => {
  return <div>
    <span>Nešto</span>
    <input type="text" onChange={props.onChange} />
  </div>;
});

const MyText = () => {
  return (<p>my text</p>)
}

export default Memorize;
