import style from './kraj.module.css'

const Kraj = (props) => {
    return (
        <div className={style.kraj}>
            <div id="krajnji-tekst"></div>
            <div id="rezultat">
                <p>Tvoj  rezultat je: <br />
                    <span id="rezultat-broj">5/10</span>
                </p>
            </div>
        </div>
    )
}

export default Kraj;