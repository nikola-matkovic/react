import { useRef } from "react";

const Ref = () => {
  const myRef = useRef();

  return (
    <div>
      <input ref={myRef} type="text" />
      <button
        onClick={() => {
          console.log(myRef.current, myRef.current.value);
        }}
      >
        focus input
      </button>
    </div>
  );
};

export default Ref;
