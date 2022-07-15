import React, {useState} from 'react';
import pitanja from './files/pitanja'
import style from './App.module.css';
import Audio from './components/Audio/Audio'
import Kraj from './components/Kraj/Kraj'
import Pitanje from './components/Pitanje/Pitanje'
import Odgovori from './components/Odgovori/Odgovori'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div className={style.container}>
      <Audio />
      <Kraj />
      <Pitanje currentQuestion={currentQuestion} setCurrentQuestion = {setCurrentQuestion} />
      <Odgovori currentQuestion={currentQuestion} setCurrentQuestion = {setCurrentQuestion} score={score} setScore={setScore} />
    </div>
  );
}

export default App;
