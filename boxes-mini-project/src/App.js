import { useState } from "react"
import boxes from "./boxes"
import style from './App.css'
import Box from './Box.js'

export default function App() {

    const [squares, setSquares] = useState(boxes)
    const squareElements = squares.map(square => (
      <Box key={square.id} on={square.on} switchFunction = {setSquares}></Box>
    ))

    return (
        <main>
            <h1>Boxes will go here</h1>
            {squareElements}
        </main>
    )
}
