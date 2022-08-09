import React, { useState } from "react";

const SimpleForm = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setInputs({ ...inputs, [e.target.id]: e.target.checked });
    } else setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <label htmlFor="">Name:</label>
      <input
        type="text"
        value={inputs.name}
        onChange={handleChange}
        id="name"
      />
      <label htmlFor="">Surname</label>
      <input
        type="text"
        value={inputs.surname}
        onChange={handleChange}
        id="surname"
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        value={inputs.password}
        onChange={handleChange}
        id="password"
      />
      <label htmlFor="">I agree:</label>
      <input
        type="checkbox"
        checked={inputs.agree}
        onChange={handleChange}
        id="agree"
      />
      <input type="submit" />
    </form>
  );
};
export default SimpleForm;
