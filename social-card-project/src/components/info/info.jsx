import laura from "../../images/laura.png";
import style from "./info.module.css";
import linkedin from "../../images/linkedin.png";
import email from "../../images/mail.png";

const Info = (props) => { 
    return (
        <div className={style.container}>
            <img src={laura} alt="" />
            <h1 className={style.name}>Laura Smith</h1>
            <span className={style.span}>Frontend Developer</span>
            <a className={style.link} href="#">laurasmith.website</a>
            <div className={style.buttons}>
                <a href="#">
                    <img src={email} alt="" />
                    <span>Email</span>
                </a>
                <a href="#">
                    <img src={linkedin} alt="" />
                    <span>Linkedin</span>
                </a>
            </div>
        </div>
    )
}
export default Info;