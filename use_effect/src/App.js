import React, {useEffect, useState} from "react"
import WindowTracker from "./windowTracker"
import style from './style.css'

export default function App() {
    const [show, setShow] = useState(true)
    return (
        <div className="container">
            <button onClick={ () => setShow( prev => {
              return !prev;
            })} >
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}