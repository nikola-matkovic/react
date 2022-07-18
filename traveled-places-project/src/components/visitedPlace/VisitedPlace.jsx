import style from './style.module.css';
import mapIcon from '../../images/map-icon.png';
const VisitedPlace = (props) => {
    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;
    return ( 
        <div className={style.VisitedPlaceContainer}>
            <div className={style.image}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={style.info}>
                <div className={style.location}>
                    <img src={mapIcon} alt="map-icon" />
                    <span className={style.city}>{location}</span>
                    <a href={googleMapsUrl} target="_blank" className={style.mapLink}>View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <div>
                    <span className={style.date}>
                        <span className={style.from}>{startDate}</span>
                        {endDate && <span className={style.to}>{endDate}</span>}
                    </span>
                </div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default VisitedPlace;