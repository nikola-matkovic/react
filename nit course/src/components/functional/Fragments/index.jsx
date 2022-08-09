import { Fragment } from "react";

const Fragments = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {array.map((element, index) => {
        return (
          <Fragment key={index}>
            <p>Broj {element}</p>
            <p>{element} Broj</p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Fragments;
