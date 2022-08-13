import React, { useEffect, useState, useCallback } from "react";

const Memorize = (props) => {
  const [text, setText] = useState(1);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const MyInput = React.memo((props) => {
  return <div></div>;
});

export default Memorize;
