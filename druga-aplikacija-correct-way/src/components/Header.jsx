import React from "react"
import reactLogo from "../images/logo.svg"

export default function Header(){
    return (
      <header>
        <div className="left">
          <img src={reactLogo} alt="" />
          <span>ReactFacts</span>  
        </div>
        <div className="right">React Course - Project 1</div>
      </header>
    )
}