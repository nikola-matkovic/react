import { useState } from "react"
import boxes from "./boxes"
import style from './App.css'
import Box from './Box.js'

export default function App() {
  const toggle = (id) => setSquares (prevSquares => prevSquares.map(square => square.id === id ? {...square, on : !square.on} : square))
  const [squares, setSquares] = useState(boxes)
  const squareElements = squares.map(square => (
    <Box  
      on={square.on} 
      toggle={() => toggle(square.id)} 
      key={square.id} 
      id={square.id} 
    />
  ))
  return (
    <main>
        <h1>Boxes will go here</h1>
        {squareElements}
    </main>
  )
}
