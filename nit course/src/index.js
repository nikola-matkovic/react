import React from "react";
import ReactDOM from "react-dom/client";

import MainButton from "./components/functional/MainButton/index";
import Checkbox from "./components/functional/Checkbox/index";


import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
<<<<<<< HEAD
    <MainButton text="klikni me"  color="danger" />
    <Checkbox text="klikni me"  color="danger" />
=======
    <MainButton text="klikni me"  color="danger" radius="xs" />
>>>>>>> aadbc2fb27283d2722764c6470c7abd88570399c
  </React.StrictMode>
);
