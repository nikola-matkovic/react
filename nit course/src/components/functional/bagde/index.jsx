import style from "./bagde.modul.css";

const bagde1 = (props) => {
    const {name} = props;
    let link = getLink(name);
    function getLink(name) {
        switch (name) {
            case "facebook ":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png";
            case "instagram":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                break;
            case "twitter":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Twitter_bird_logo_2012.svg/2048px-Twitter_bird_logo_2012.svg.png"
            case "youtube":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/YouTube_logo_rgb_dark.png/2048px-YouTube_logo_rgb_dark.png"
            default:
                return "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            }   
        }
    return <div>
        <img src={link} alt="bagde1" className={style.image}/>
    </div>
}
export default bagde1;