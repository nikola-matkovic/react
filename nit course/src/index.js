import React from "react";
import ReactDOM from "react-dom/client";
import Quote from "./components/functional/Quote";
import QuoteCard from "./components/functional/GetQuotes/QouteCard";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import GetQuotes from "./components/functional/GetQuotes/GetQuotes";
import RandomCat from "./components/functional/RandomCat/RandomCat";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <RandomCat />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
