import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import './CurrentStock.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const cars = [
  { make: 'Ferrari',       title: '2023 FERRARI DAYTONA SP3',                       details: "A stunning spec, VAT Qualifying example that's covered just 298 km from new",                                   price: '£POA',       sold: false, slug: 'ferrari-daytona-sp3',              image: `${CDN}/2026/10/Ferrari-Daytona-SP3-009--768x576.jpg` },
  { make: 'Ferrari',       title: '2015 FERRARI LaFerrari',                          details: 'Presented in exceptional condition throughout and benefits from an extended manufactures warranty until 2028',   price: '£POA',       sold: false, slug: 'ferrari-laferrari',                image: `${CDN}/2026/11/GN83864-1-scaled-e1793900337262-768x504.jpg` },
  { make: 'Ferrari',       title: '1965 FERRARI 275 GTB Alloy',                      details: 'Finished in its very attractive original colour combination & Ferrari Classiche Certified',                      price: '£POA',       sold: false, slug: 'ferrari-275-gtb-long-nose-alloy',  image: `${CDN}/2024/02/Ferrari-275GTB-046-768x576.jpg` },
  { make: 'Lamborghini',   title: '1967 LAMBORGHINI Miura P400',                     details: "Fresh from a world-class restoration and star of the 1968 French film 'La leçon particulière'",               price: '£POA',       sold: false, slug: 'lamborghini-miura-p400',           image: `${CDN}/2025/04/Lamborghini-Miura-010-3-768x576.jpg` },
  { make: 'Ferrari',       title: '1973 FERRARI 365 GTB/4 DAYTONA',                  details: "An exceptional example that's believed to have covered just over 22,000 miles from new",                       price: '',           sold: true,  slug: 'ferrari-365-gtb-4-daytona-8',     image: `${CDN}/2026/07/Ferrari-365-GTB-4-040--768x576.jpg` },
  { make: 'Ferrari',       title: '1972 FERRARI 365 GTB/4 DAYTONA',                  details: 'Presented in its original colours and benefits from over five decades with just two owners',                    price: '£595,000',   sold: false, slug: 'ferrari-365-gtb-4-daytona-9',     image: `${CDN}/2026/10/Ferrari-Daytona-365GTB-015--768x576.jpg` },
  { make: 'Ferrari',       title: '1973 FERRARI 365 GTB/4 DAYTONA',                  details: "Ferrari 'Red Book' Classiche certified and believed to have covered just 17,480 miles from new",               price: '£550,000',   sold: false, slug: 'ferrari-365-gtb-4-daytona-10',    image: `${CDN}/2026/10/DSC03649-768x512.jpg` },
  { make: 'Ferrari',       title: '1974 FERRARI DINO 246 GTS',                       details: 'Unrestored & benefits from just 8,300 miles & 3 owners from new',                                              price: '£POA',       sold: false, slug: 'ferrari-dino-246-gts-8',          image: `${CDN}/2024/10/Ferrari-Dino-GT-036-768x576.jpg` },
  { make: 'Ferrari',       title: '1958 FERRARI 250 GT Ellena',                      details: '1 of only 50 examples ever produced & single ownership for the last 25 years',                                 price: '£595,000',   sold: false, slug: 'ferrari-250-gt-ellena',           image: `${CDN}/2023/02/Ferrari-250-Gran-Turismo-007--768x576.jpg` },
  { make: 'Lancia',        title: '1962 LANCIA Flaminia Sport Zagato 2.5 3C',        details: 'Delivered new in Grigio and exceptionally well restored throughout',                                            price: '£345,000',   sold: false, slug: 'lancia-flaminia-sport-zagato',     image: `${CDN}/2026/08/DSC01518-768x512.jpg` },
  { make: 'Porsche',       title: '1955 PORSCHE 356 Pre-A Super Speedster',          details: 'Recently restored & presented in excellent condition throughout',                                               price: '£POA',       sold: false, slug: 'porsche-356-pre-a-speedster',     image: `${CDN}/2022/12/Porsche-356-Speedster-033--768x576.jpg` },
  { make: 'Lister',        title: '2020 LISTER Knobbly Continuation',                details: "Car number 9 of only 10 'road spec' examples ever produced",                                                    price: '£299,500',   sold: false, slug: 'lister-knobbly-continuation',     image: `${CDN}/2023/12/Lister-Knobbley-011--768x576.jpg` },
  { make: 'Aston Martin',  title: '1955 ASTON MARTIN DB2/4',                         details: "A fantastic example of one of the most underrated models from Aston Martin's golden era",                      price: '£195,000',   sold: false, slug: 'aston-martin-db2-4',             image: `${CDN}/2026/08/Aston-Martin-DB2-4-010--768x576.jpg` },
  { make: 'Jaguar',        title: '1962 JAGUAR E-Type Series 1 3.8 FHC',             details: 'One of just 11 RHD Series 1 3.8 fixed-head coupés produced in cream with a dark blue interior',              price: '£165,000',   sold: false, slug: 'jaguar-e-type-series-1-3-8-fhc',  image: `${CDN}/2026/08/Jaguar-E-Type-Coupe-005--768x576.jpg` },
  { make: 'Porsche',       title: '2020 PORSCHE 935',                                details: "One of only 77 examples ever built, Porsche's tribute to the iconic 935 Moby Dick race car",                   price: '£1,075,000', sold: false, slug: 'porsche-935',                      image: `${CDN}/2025/12/Porsche-935-029-768x576.jpg` },
  { make: 'Porsche',       title: '2022 PORSCHE 718 Cayman GT4 RS Clubsport',        details: "A single owner example that's covered just 311 km from new",                                                   price: '£150,000',   sold: false, slug: 'porsche-718-cayman-gt4-rs-clubsport', image: `${CDN}/2026/10/Porsche-GT4RS-Club-Sport-004--768x576.jpg` },
  { make: 'Ferrari',       title: '2019 FERRARI 488 Pista Spider',                   details: 'Boasting an extensive specification and only 292 miles from new',                                              price: '£695,000',   sold: false, slug: 'ferrari-488-pista-spider',         image: `${CDN}/2026/10/DSC07374-768x512.jpg` },
  { make: 'Ferrari',       title: '2020 FERRARI 812 GTS',                            details: 'A highly desirable, naturally aspirated V12 Ferrari with just 498 miles on the clock',                        price: '£535,000',   sold: false, slug: 'ferrari-812-gts-4',               image: `${CDN}/2026/10/DSC06465-2-768x512.jpg` },
  { make: 'Ferrari',       title: '2017 FERRARI F12berlinetta 70th Anniversary',     details: 'One of only 70 examples worldwide and benefits from a one-off Tailor Made specification',                      price: '£495,000',   sold: false, slug: 'ferrari-f12berlinetta-70th-anniversary', image: `${CDN}/2026/10/DSC05318-768x512.jpg` },
  { make: 'Porsche',       title: '2008 PORSCHE 911 GT2 (997)',                      details: 'An exceptional single owner example that benefits from incredible maintenance history',                         price: '£375,000',   sold: false, slug: 'porsche-911-gt2-997-2',           image: `${CDN}/2026/09/Porsche-GT2-004--768x576.jpg` },
  { make: 'Porsche',       title: '2026 PORSCHE 911 GT3 Touring (992.2)',            details: 'A huge spec manual example that benefits from many factory options including magnesium wheels',                 price: '£175,000',   sold: false, slug: 'porsche-911-gt3-touring-992-2-3', image: `${CDN}/2026/11/DSC01162-768x512.jpg` },
  { make: 'Porsche',       title: '2024 PORSCHE 911 GT3 (992)',                      details: 'A highly desirable Paint to Sample with an outstanding specification',                                          price: '£175,000',   sold: false, slug: 'porsche-911-gt3-992-4',           image: `${CDN}/2026/07/DSC02033-3-768x512.jpg` },
  { make: 'Rolls-Royce',   title: '2023 ROLLS-ROYCE Spectre',                        details: 'A single owner example, with a host of factory options',                                                       price: '£POA',       sold: false, slug: 'rolls-royce-spectre',             image: `${CDN}/2026/05/THJ-SPECTRE-DEF-35-768x512.jpg` },
  { make: 'Rolls-Royce',   title: '2018 ROLLS-ROYCE Dawn Black Badge',               details: 'A desirable Black Badge model in an exquisite colour combination',                                             price: '£POA',       sold: false, slug: 'rolls-royce-dawn-black-badge',    image: `${CDN}/2026/06/THJ-DAWN-DEF-48-e1786959451225-768x490.jpg` },
  { make: 'Bentley',       title: '2025 BENTLEY Continental GT Speed V8 Hybrid',     details: 'Just 2,976 miles from new, boasting a huge specification and a significant saving from list price',            price: '£219,500',   sold: false, slug: 'bentley-continental-gt-speed-v8-hybrid', image: `${CDN}/2026/09/Bentley-Speed-014--768x576.jpg` },
  { make: 'Lamborghini',   title: '2022 LAMBORGHINI Urus Graphite Capsule',          details: 'A highly desirable Graphite Capsule Edition, finished in striking Matt Grigio Keres paintwork',               price: '£187,500',   sold: false, slug: 'lamborghini-urus-3',              image: `${CDN}/2025/07/DSC01891-768x512.jpg` },
  { make: 'Ferrari',       title: '2003 FERRARI 360 Spider',                         details: 'A gated manual example, accompanied by its Ferrari Classiche Red Book certification',                          price: '£134,500',   sold: false, slug: 'ferrari-360-spider-3',            image: `${CDN}/2026/11/Ferrari-360-Spider-008--768x576.jpg` },
  { make: 'Mercedes-Benz', title: '2024 MERCEDES-BENZ G 450 D AMG LINE PREMIUM PLUS', details: 'A UK supplied example that benefits from an exquisite colour combination',                                   price: '£134,500',   sold: false, slug: 'mercedes-benz-g-450-d',           image: `${CDN}/2026/10/Mercedes-G-Wagon-016--768x576.jpg` },
  { make: 'Land Rover',    title: '2015 LAND ROVER Defender 110 Landmark',           details: 'A single owner Landmark Edition with just 6,571 miles from new',                                               price: '£72,500',    sold: false, slug: 'land-rover-defender-110-10',      image: `${CDN}/2026/05/Landrover-Defender-020--768x576.jpg` },
  { make: 'Aston Martin',  title: '2004 ASTON MARTIN Vanquish S',                    details: "An exceptional single owner from new example that's covered just 16,351 miles from new",                       price: '£89,500',    sold: false, slug: 'aston-martin-vanquish-s-4',       image: `${CDN}/2024/11/Aston-Martin-Vanquish-S-022--768x576.jpg` },
  { make: 'Benz',          title: '1886 Benz Patent-Motorwagen',                     details: "A tribute to Karl Benz's Patent Motorwagen",                                                                   price: '£50,000',    sold: false, slug: 'benz-patent-motorwagen',          image: `${CDN}/2021/11/DSC02293-768x512.jpg` },
];

const allMakes = [...new Set(cars.map(c => c.make))].sort();

const CurrentStock = () => {
  const [selectedMake, setSelectedMake] = useState('');

  const filtered = useMemo(() => {
    if (!selectedMake || selectedMake === 'all') return cars;
    return cars.filter(c => c.make === selectedMake);
  }, [selectedMake]);

  return (
    <main>
      <Hero
        image={`${CDN}/2026/11/Ferrari-Daytona-SP3-023--e1794406407901.jpg`}
        title="Current Stock"
        fullHeight={true}
      />

      <section className="cs-section">
        <div className="cs-wrapper">

          <div className="cs-filter">
            <div className="cs-filter__select-field">
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
              <div className="cs-filter__arrow" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <ul className="cs-listing">
            {filtered.map(car => (
              <li key={car.slug} className="cs-car">
                <Link to={`/vehicle/${car.slug}`}>
                  <div
                    className="cs-thumb"
                    style={{ backgroundImage: `url(${car.image})` }}
                  />
                  <div className="cs-content">
                    <h2 className="cs-title">{car.title}</h2>
                    <p className="cs-details">{car.details}</p>
                    {car.sold
                      ? <p className="cs-sold">SOLD</p>
                      : <p className="cs-price">{car.price}</p>
                    }
                  </div>
                  <span className="cs-overlay"><strong>Full Details</strong></span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </main>
  );
};

export default CurrentStock;
