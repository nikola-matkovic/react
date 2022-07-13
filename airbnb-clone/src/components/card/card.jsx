import style from './card.module.css';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import star from '../../images/star.png'

export default function Card(){
    return(
        <div className = {style.card}>
            <div className={style.photo}>
                <span>SOLD OUT</span>
                <img src={img1} alt="" />
            </div>
            <div className="star-line">
                <img className={style.star} src={star} alt="" />
                <span className={style.mark}>5.0</span>
                <span className={style.number}>(6)</span>
                <span className={style.country}>USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <b>From $136</b>
                <span> / Person</span>
            </div>
        </div>
    )
}