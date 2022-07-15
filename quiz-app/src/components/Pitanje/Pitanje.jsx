import style from './pitanje.module.css'
import pitanja from '../../files/pitanja'
import React, { useState, useEffect, useCallback} from "react";
import { useAsync } from "react-async";
let slike = [];

const test = async () => {
    const prva = await import ('./../../files/1.png').then(module => module.default);
    slike.push(prva)
}

let Pitanje = (props) => {
    const {currentQuestion, setCurrentQuestion} = props
    // const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(i => `./${i}.jpg`);
    // images[0] = './files/1.png'
    // images[7] = './files/8.png'
    // images[18] = './files/19.png'
    // images[19] = './files/20.png'
    const { execute, status, value, error } = useAsync(test, false);
    console.log(execute, value, status, error)
    return (
        <div id="slika-kontejner" className={style.slikaKontejner}>
            <div id="tekst-iznad-slike" className={style.tekstIznadSlike}>
                PITANJE
            </div>
            <div id="pitanje" className={style.pitanje}>
                <p id="tekst">{pitanja[currentQuestion].pitanje}</p>
                <img  id="slika-pitanja" alt="question"/>
                <div id="linija" style={{width: `${(currentQuestion+1) * (100 / pitanja.length)}%` }} className={`bg-primary ${style.linija}`}></div>
            </div>
            <div id="broj-pitanja" className={style.brojPitanja}><span id="trenutno">{currentQuestion+1}</span><span id="kosa">/</span><span id="ukupno">{pitanja.length}</span></div>
        </div>
    )
}
export default Pitanje