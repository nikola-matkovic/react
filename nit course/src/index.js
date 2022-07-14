import React from "react";
import ReactDOM from "react-dom/client";
// import Counter from "./components/class/Counter";
// import CounterF from "./components/functional/CounterF";
// import RandomColor from "./components/functional/RandomColor";
// import Conditional from "./components/functional/conditional";
// import Bagde from "./components/functional/bagde";
// import List from './components/functional/List/List'
import Quotes from "./components/functional/Quotes"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Conditional text="Ovo je neki tekst" />
    <Conditional text="Ovo je neki tekst"  type="warning" subtitle="subtitle"/ extraIcon = "test">
    <Conditional text="Ovo je neki tekst"  type="danger" /> */}
    <Quotes />
  </React.StrictMode>
);
