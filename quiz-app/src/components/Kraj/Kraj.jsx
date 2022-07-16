import style from './kraj.module.css'

const Kraj = (props) => {
    const {score, showScore, duzina} = props
    return (
        <div style={{
            transform: showScore ? 'translateY(0)' : 'translateY(-100vh)',
        }} className={style.kraj}>
            <div id="krajnji-tekst"></div>
            <div id="rezultat">
                <p>Tvoj  rezultat je: <br />
                    <span id="rezultat-broj">{score}/{duzina}</span>
                </p>
            </div>
        </div>
    )
}

export default Kraj;