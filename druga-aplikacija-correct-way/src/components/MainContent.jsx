import React from "react"
import ReactLogo from "../images/logo.jsx"
export default function MainContent(){
    return(
      <main>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first relased in 2013</li>
          <li>Was originaly created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintainded by facebook</li>
          <li>powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <ReactLogo className="big-logo" />
      </main>
    )
}