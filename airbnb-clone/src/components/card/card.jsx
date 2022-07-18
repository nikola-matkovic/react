import style from './card.module.css';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import star from '../../images/star.png'

export default function Card(props){
    const images = [img1, img2, img3]
    const {image, mark, number, country, title, price, status} = props;
    return(
        <div className = {style.card}>
            <div className={style.photo}>
                {status && <span>{status}</span> }
                <img src={images[image]} alt="" />
            </div>
            <div className={style.starLine}>
                <img className={style.star} src={star} alt="" />
                <span className={style.mark}>{mark}</span>
                <span className={style.number}>({number})</span>
                <span className={style.country}>{country}</span>
            </div>
            <p>{title}</p>
            <b>From ${price}</b>
            <span> / Person</span>
        </div>
    )
}