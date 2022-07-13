import React, { useEffect, useState } from "react";
const RandomColor = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [size, setSize] = useState(100);

  const random = () => {
    const redLocal = Math.round(Math.random() * 255);
    const blueLocal = Math.round(Math.random() * 255);
    const greenLocal = Math.round(Math.random() * 255);

    setRed(redLocal);
    setGreen(greenLocal);
    setBlue(blueLocal);

    setSize(Math.round(Math.random() * 500 + 100));
  };

  useEffect(() => {
    setInterval(random, 1000);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: size,
          height: size,
        }}
      ></div>
    </div>
  );
};
export default RandomColor;
