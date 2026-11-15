import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { previouslySoldDetails } from '../../data/previouslySoldDetails';
import './PreviouslySold.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const allMakes = [...new Set(
  previouslySoldDetails.map(c => c.title.replace(/^\d{4}\s+/, '').split(' ')[0])
)].sort();

const PreviouslySold = () => {
  const [selectedMake, setSelectedMake] = useState('');

  const filtered = useMemo(() => {
    if (!selectedMake || selectedMake === 'all') return previouslySoldDetails;
    return previouslySoldDetails.filter(c =>
      c.title.toLowerCase().includes(selectedMake.toLowerCase())
    );
  }, [selectedMake]);

  return (
    <main>
      <Hero
        image={`${CDN}/2026/09/DSC03376.jpg`}
        title="Previously Sold"
        fullHeight={false}
      />

      <section className="ps-section">
        <div className="ps-wrapper">

          <div className="ps-filter">
            <div className="ps-filter__select-field">
              <select
                value={selectedMake}
                onChange={e => setSelectedMake(e.target.value)}
                aria-label="Filter by make"
              >
                <option value="">Filter By Make</option>
                <option value="all">View All</option>
                {allMakes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
              <div className="ps-filter__arrow" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <ul className="ps-listing">
            {filtered.map(car => (
              <li key={car.slug} className="ps-car">
                <Link to={`/previously-sold/${car.slug}`}>
                  <div
                    className="ps-thumb"
                    style={{ backgroundImage: `url(${car.image})` }}
                  />
                  <div className="ps-content">
                    <h2 className="ps-title">{car.title}</h2>
                    {car.details && <p className="ps-details">{car.details}</p>}
                    <p className="ps-sold">SOLD</p>
                  </div>
                  <span className="ps-overlay"><strong>Full Details</strong></span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </main>
  );
};

export default PreviouslySold;
