import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { previouslySoldCars } from '../../data/vehicles';
import './PreviouslySold.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const PreviouslySold = () => {
  return (
    <main>
      <Hero
        image={`${CDN}/2026/09/DSC03376.jpg`}
        title="Previously Sold"
        subtitle="A selection of exceptional cars that have passed through our hands."
        fullHeight={false}
      />

      <section className="sold-section">
        <div className="container">
          <div className="sold-grid">
            {previouslySoldCars.map((car) => (
              <Link key={car.id} to={`/vehicle/${car.slug}`} className="sold-card">
                <div className="sold-card__image-wrap">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="sold-card__image"
                    loading="lazy"
                  />
                  <div className="sold-card__overlay">
                    <span className="sold-card__view">View</span>
                  </div>
                </div>
                <div className="sold-card__body">
                  <h3 className="sold-card__title">{car.title}</h3>
                  {car.chassisNo && (
                    <span className="sold-card__meta">Chassis No. {car.chassisNo}</span>
                  )}
                  <p className="sold-card__description">{car.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PreviouslySold;
