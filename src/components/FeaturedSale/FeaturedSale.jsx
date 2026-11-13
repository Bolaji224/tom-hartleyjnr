import { Link } from 'react-router-dom';
import './FeaturedSale.css';

const FeaturedSale = ({
  image,
  imageAlt,
  label = 'Featured Recent Sale',
  title,
  subtitle,
  linkTo,
}) => {
  return (
    <section
      className="featured-sale"
      style={{ backgroundImage: `url(${image})` }}
      aria-label={imageAlt || title}
    >
      <div className="featured-sale__inner">
        <div className="featured-sale__content">
          <h2 className="featured-sale__label">{label}</h2>
          <p className="featured-sale__title">{title}</p>
          {subtitle && <p className="featured-sale__subtitle">{subtitle}</p>}
          {linkTo && (
            <p className="featured-sale__more">
              <Link to={linkTo} className="featured-sale__link">
                <span className="featured-sale__arrow">&#9658;</span> Read more
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSale;
