import style from './pitanje.module.css'
import { useState } from 'react';
import pitanja from '../../files/pitanja'

import React from 'react';
function importAll(r) {
	let images = [];
    r.keys().forEach((item) => { 
        images.push(r(item)); });
	return images;
}
const r = require.context('../../files', false, /\.(png|jpe?g|svg)$/);
const images = importAll(r);

let Pitanje = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    return (
        <div id="slika-kontejner" className={style.slikaKontejner}>
            <div id="tekst-iznad-slike" className={style.tekstIznadSlike}>
                PITANJE
            </div>
            <div id="pitanje" className={style.pitanje}>
                <p id="tekst">{pitanja[currentQuestion].pitanje}</p>
                <img src={images[currentQuestion]} id="slika-pitanja" alt="question"/>
                <div id="linija" style={{width: `${(currentQuestion+1) * (100 / pitanja.length)}%` }} className={`bg-primary ${style.linija}`}></div>
            </div>
            <div id="broj-pitanja" className={style.brojPitanja}><span id="trenutno">{currentQuestion+1}</span><span id="kosa">/</span><span id="ukupno">{pitanja.length}</span></div>
        </div>
    )
}
export default Pitanje