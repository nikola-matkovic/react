import style from './odgovori.module.css'
import pitanja from '../../files/pitanja'

let Odgovori = (props) => {
    let odgovori = pitanja[props.currentQuestion].odgovori;
    let odgovoriJsx = odgovori.map((odgovor, index) => {
        return   <button key={index} onClick={() => handleAnswerOptionClick()} className={`${style.btn} btn-primary`}>{odgovor.tekst}</button>
    })
    const {currentQuestion, setCurrentQuestion} = props
    const  handleAnswerOptionClick = (tacno = false) => {
        setCurrentQuestion(currentQuestion + 1);
    }
    return (
        <div className={style.container}>
            {odgovoriJsx}
        </div>
    )
}

export default Odgovori