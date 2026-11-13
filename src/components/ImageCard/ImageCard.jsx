import Button from '../Buttons/Button';
import './ImageCard.css';

const ImageCard = ({ image, imageAlt, title, description, ctaLabel, ctaLink, align = 'left' }) => {
  return (
    <div className={`image-card image-card--${align}`}>
      <div className="image-card__image-wrap">
        <img src={image} alt={imageAlt || title} className="image-card__image" loading="lazy" />
      </div>
      <div className="image-card__content">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
        {ctaLabel && ctaLink && (
          <Button variant="outline" to={ctaLink} size="md">
            {ctaLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
