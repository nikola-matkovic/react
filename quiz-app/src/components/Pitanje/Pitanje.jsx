import style from './pitanje.module.css'
import photo from '../../files/1.png'

let Pitanje = (props) => {
    return (
        <div id="slika-kontejner" className={style.slikaKontejner}>
            <div id="tekst-iznad-slike" className={style.tekstIznadSlike}>
                PITANJE
            </div>
            <div id="pitanje" className={style.pitanje}>
                <p id="tekst">test</p>
                <img src={photo} id="slika-pitanja" alt="image"/>
                <div id="linija" className={`bg-primary ${style.linija}`}></div>
            </div>
            <div id="broj-pitanja" className={style.brojPitanja}><span id="trenutno"></span><span id="kosa">/</span><span id="ukupno"></span></div>
        </div>
    )
}

export default Pitanje