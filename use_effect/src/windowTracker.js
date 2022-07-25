import React, {useEffect, useState} from "react"
export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect ( () => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
