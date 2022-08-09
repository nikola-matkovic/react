import React, { useState } from "react";
const TemperatureConverter = (props) => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  console.log(celsius);

  return (
    <div>
      <TemperatureInput type="Celsius" value={celsius} setValue={setCelsius} />
      <button
        onClick={() => {
          const fahrenheitValue = toFahrenheit(celsius);
          setFahrenheit(fahrenheitValue);
        }}
      >
        Convert to fahrenheit
      </button>
      <br />
      <br />
      <TemperatureInput
        type="Fahrenheit"
        value={fahrenheit}
        setValue={setFahrenheit}
      />
      <button
        onClick={() => {
          const celsiusValue = toCelsius(fahrenheit);
          setCelsius(celsiusValue);
        }}
      >
        Convert to Celsius
      </button>
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
