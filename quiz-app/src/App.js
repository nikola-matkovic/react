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
  const [showScore, setShowSchore] = useState(false)
  return (
    <div className={style.container}>
      <Audio currentQuestion={currentQuestion} pitanja = {pitanja} />
      <Kraj score={score} showScore={showScore} duzina={pitanja.length}/>
      <Pitanje currentQuestion={currentQuestion} />
      <Odgovori currentQuestion={currentQuestion} setCurrentQuestion = {setCurrentQuestion} score={score} setScore={setScore} showScore={showScore} setShowSchore={setShowSchore}  />
    </div>
  );
}

export default App;
