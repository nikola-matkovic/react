import React, {useState} from 'react';
import pitanja from './files/pitanja'
import style from './App.module.css';
import Audio from './components/Audio/Audio'
import Kraj from './components/Kraj/Kraj'
import Pitanje from './components/Pitanje/Pitanje'
import Odgovori from './components/Odgovori/Odgovori'
function App() {
  return (
    <div className={style.container}>
      <Audio />
      <Kraj />
      <Pitanje />
      <Odgovori />
      {console.log(pitanja)}
    </div>
  );
}

export default App;
