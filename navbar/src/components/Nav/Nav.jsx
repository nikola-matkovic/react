import img1 from '../../media/text-logo.png'
import img2 from '../../media/search.png'
import img3 from '../../media/home-icon.png'
import img4 from '../../media/dm-icon.png'
import img5 from '../../media/add-icon.png'
import img6 from '../../media/explore-icon.png'
import img7 from '../../media/heart-icon.png'
import img8 from '../../media/profilna.jpg'
import style from './style.css'

const Nav = () => { 
    return (
        <nav>
            <div id="navcont">
                <div id="logo">
                    <img src={img1} alt="Logo" />
                </div>
                <div id="search-cont">
                    <input
                        name="search"
                        id="search"
                        placeholder="Претрага"
                    />
                    <div id="search-icon">
                        <img src={img2} alt="search" />
                    </div>
                    <div id="x">&times;</div>
                </div>
                <div id="icons">
                    <ul>
                        <li><img src={img3} alt="" /></li>
                        <li><img src={img4} alt="" /></li>
                        <li><img src={img5} alt="" /></li>
                        <li><img src={img6} alt="" /></li>
                        <li><img src={img7} alt="" /></li>
                        <li><img src={img8} alt="" /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;