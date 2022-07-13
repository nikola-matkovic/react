import laura from "../../images/laura.png";

const Info = (props) => { 
    return (
        <>
            <img src={laura} alt="" />
            <h1>Laura Smith</h1>
            <span>Frontend Developer</span>
            <a href="laurasmith.website">laurasmith.website</a>
            <div className="buttons">
                <a href="#">Email</a>
                <a href="#">Linkedin</a>
            </div>
        </>
    )
}
export default Info;