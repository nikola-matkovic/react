import React, { useState } from "react";
const TemperatureConverter = (props) => {
  const [value, setValue] = useState(0);

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  return (
    <div>
      <TemperatureInput type="Celsius"
       value={value}
        setValue={setValue} 
        />
      <br />
      <TemperatureInput
        type="Fahrenheit"
        value={toFahrenheit(value)}
        setValue={(number) => setValue(toCelsius(number))}
      />
    </div>
  );
};

function TemperatureInput(props) {
  const { type = "Celsius", value, setValue } = props;

  return (
    <div>
      <label htmlFor="">{type}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TemperatureConverter;