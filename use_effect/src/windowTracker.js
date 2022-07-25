import React, {useEffect, useState} from "react"
export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect ( () => {
        const watchWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', watchWidth);
        return () => {
            window.removeEventListener('resize', watchWidth)
        }
    }, [])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
