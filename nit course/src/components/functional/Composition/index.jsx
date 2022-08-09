const Composition = (props) => {
  return (
    <div>
      <div style={{ float: "left" }}>{props.left}</div>
      <div style={{ float: "right" }}>{props.right}</div>
    </div>
  );
};

export default Composition;
