import qoutes from  './qoutes.json'
import style from './style.module.css';
const Quotes = (props) => {
    return (
        qoutes.map(qoute => {
            return  (<div className={style.card}>
                <p className={style.qoute} > {qoute.content} </p>
                <p className={style.author} > {qoute.author} </p>
                
            </div>
        )
        }
        )
    )
}
export default Quotes;