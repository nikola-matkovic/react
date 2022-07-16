import style from './pitanje.module.css'
import pitanja from '../../files/pitanja'
import images from '../../files/images'
let Pitanje = (props) => {
    let {currentQuestion} = props
    return (
        <div id="slika-kontejner" className={style.slikaKontejner}>
            <div id="tekst-iznad-slike" className={style.tekstIznadSlike}>
                PITANJE
            </div>
            <div id="pitanje" className={style.pitanje}>
                <p id="tekst">{pitanja[currentQuestion].pitanje}</p>
                <img src={images[currentQuestion]}  id="slika-pitanja" alt="question"/>
                <div id="linija" style={{width: `${(currentQuestion+1) * (100 / pitanja.length)}%` }} className={`bg-primary ${style.linija}`}></div>
            </div>
            <div id="broj-pitanja" className={style.brojPitanja}><span id="trenutno">{currentQuestion+1}</span><span id="kosa">/</span><span id="ukupno">{pitanja.length}</span></div>
        </div>
    )
}
export default Pitanje