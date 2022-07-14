import style from './odgovori.module.css'

let Odgovori = (props) => {
    return (
        <div className={style.container}>
            <button className={`${style.btn} btn-primary`}>Samo za slavu da bi očuvali stare običaje</button>
            <button className={`${style.btn} btn-primary`}>Pomalo, rakija je dobra za imunitet</button>
            <button className={`${style.btn} btn-primary`}>Ništa jače od vode</button>
        </div>
    )
}

export default Odgovori