import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle, variant = 'default' }) => {
  const { title, description, price, image, slug } = vehicle;

  return (
    <Link to={`/vehicle/${slug}`} className={`vehicle-card vehicle-card--${variant}`}>
      <div className="vehicle-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="vehicle-card__image"
          loading="lazy"
        />
        <div className="vehicle-card__overlay" aria-hidden="true">
          <span className="vehicle-card__overlay-btn">Full Details</span>
        </div>
      </div>
      <div className="vehicle-card__body">
        <h3 className="vehicle-card__title">{title}</h3>
        <p className="vehicle-card__description">{description}</p>
        <span className="vehicle-card__price">{price}</span>
      </div>
    </Link>
  );
};

export default VehicleCard;
