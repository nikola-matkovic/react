import React, { useState } from "react";

import style from "./textInput.module.css";

const TextInput = (props) => {
  const { defaultValue, label, onChange } = props;
  const [text, setText] = useState(defaultValue);

  const handleChange = (e) => {
    setText(e.target.value);

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={style.container}>
      {label && <p className={style.label}>{label}</p>}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className={style.textInput}
      />
    </div>
  );
};

export default TextInput;
