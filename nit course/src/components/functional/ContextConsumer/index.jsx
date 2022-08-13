import { useContext } from "react";
import { MyContext } from "../SimpleContext";

const ContextConsumer = (props) => {
  const { counter, setCounter } = useContext(MyContext);

  return (
    <div>
      {/* <button onClick={() => state.setText(props.name)}>Click</button>
      <p>{state.text}</p> */}
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      {props.children}
    </div>
  );
};
export default ContextConsumer;
