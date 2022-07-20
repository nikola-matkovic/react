import style from './App.module.css'
import {useState} from 'react'

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className={style.container}>
      <div className={style.counter}>
        <div className={style.number}>
          {number}
          <div className={style.plus} onClick={()=> setNumber((prevCount => prevCount + 1))}>-</div>
          <div className={style.minus} onClick={()=> setNumber( (prevCount) => prevCount + 1)}>+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
