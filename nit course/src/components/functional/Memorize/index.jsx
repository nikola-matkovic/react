import React, { useEffect, useState, useCallback, memo, useMemo } from "react";

// const Memorize = (props) => {
//   const [text, setText] = useState(1);

//   const change = useCallback((e) => {
//     setText(e.target.value);
//   }, []);

//   return (
//     <div>
//       <p>{text}</p>
//       <MyInput onChange={change} setText={setText} />
//       <MyInput onChange={change} text={text} />
//       <MyInput onChange={change} />
//       <MyInput onChange={change} />
//       <MyText />
//     </div>
//   );
// };

// const Memorize = (props) => {
//   const [text, setText] = useState(1);

//   const click = useCallback(() => {
//     console.log("nest");
//   }, []);

//   useEffect(() => {
//     click();
//   }, [click]);

//   return (
//     <div>
//       <p onClick={() => setText(text + 1)}>{text}</p>

//       <MyText />
//     </div>
//   );
// };

// const Memorize = (props) => {
//   const [text, setText] = useState(1);

//   const change = (e) => {
//     console.log("first");
//     setText(e.target.innerText);
//   };

//   return (
//     <div>
//       <p onClick={() => setText(text + 1)}>{text}</p>
//       <List onClick={change} />
//     </div>
//   );
// };

const Memorize = (props) => {
  const [text, setText] = useState(1);

  const array = useMemo(() => {
    return [{ id: "sdf" }, { id: "ssdfs" }, { id: "12312" }];
  }, []);

  const computedArray = useMemo(() => {
    return array.filter((item) => {
      console.log("first");
      return item.id.includes("s");
    });
  }, [array]);

  console.log(computedArray);

  return (
    <div>
      <p onClick={() => setText(text + 1)}>{text}</p>
      {array.map((item) => {
        return <p id={item.id}>{item.id}</p>;
      })}
    </div>
  );
};

const MyInput = React.memo((props) => {
  return (
    <div>
      <span>Nesto</span>
      <input type="text" onChange={props.onChange} />
    </div>
  );
});

const MyText = memo(() => {
  return <p>Nesto</p>;
});

const List = React.memo((props) => {
  return [1, 2, 3, 4].map((item) => {
    return (
      <div>
        <span>{item}</span>
        <button onClick={props.onClick}>{item}</button>
      </div>
    );
  });
});

export default Memorize;
