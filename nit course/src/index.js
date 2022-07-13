import React from "react";
import ReactDOM from "react-dom/client";
// import Counter from "./components/class/Counter";
// import CounterF from "./components/functional/CounterF";
// import RandomColor from "./components/functional/RandomColor";
// import Conditional from "./components/functional/conditional";
import Bagde from "./components/functional/bagde";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Conditional text="Ovo je neki tekst" />
    <Conditional text="Ovo je neki tekst"  type="warning" subtitle="subtitle"/ extraIcon = "test">
    <Conditional text="Ovo je neki tekst"  type="danger" /> */}
    <Bagde name="instagram"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
