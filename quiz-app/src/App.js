import React, {useState} from 'react';
import pitanja from './files/pitanja'
import style from './App.module.css';
import Audio from './components/Audio'

function App() {
  return (
    <div className={style.container}>
      <Audio />
      <Kraj />
      <Pitanje />
      <Odgovori />
    </div>
  );
}

export default App;
