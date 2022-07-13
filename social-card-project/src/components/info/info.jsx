import laura from "../../images/laura.png";
import style from "./info.module.css";
const Info = (props) => { 
    return (
        <div className={style.container}>
            <img src={laura} alt="" />
            <h1 className={style.name}>Laura Smith</h1>
            <span className={style.span}>Frontend Developer</span>
            <a className={style.link} href="laurasmith.website">laurasmith.website</a>
            <div className={style.buttons}>
                <a href="#">Email</a>
                <a href="#">Linkedin</a>
            </div>
        </div>
    )
}
export default Info;