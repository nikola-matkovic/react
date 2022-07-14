import style from './pitanje.module.css'
let photo = "img1.png"

let Pitanje = (props) => {
    return (
        <div id="slika-kontejner">
            <div id="tekst-iznad-slike">
                PITANJE
            </div>
            <div id="pitanje">
                <p id="tekst"></p>
                <img src={photo} id="slika-pitanja"/>
                <div id="linija" class="bg-primary"></div>
            </div>
            <div id="broj-pitanja"><span id="trenutno"></span><span id="kosa">/</span><span id="ukupno"></span></div>
        </div>
    )
}

export default Pitanje