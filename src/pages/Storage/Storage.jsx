import { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import './Storage.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';
const ICONS = `${CDN}/2026/03`;

const services = [
  {
    icon: `${ICONS}/Group-10.png`,
    title: 'DISCREET, CONTROLLED SECURITY',
    intro: 'Your vehicle\'s safety is our highest priority. Our facility features:',
    items: [
      'Zoned water-mist fire suppression system',
      '24/7 monitored surveillance with high-definition cameras & motion sensors',
      'Police-monitored alarm system',
      'High-security bollards plus an automated gated entry system',
      'Strict access control protocols allowing entry for only authorised individuals',
    ],
  },
  {
    icon: `${ICONS}/Group-21.png`,
    title: 'PREPARATION & PRESERVATION',
    intro: 'Vehicles are actively maintained whilst in our care:',
    items: [
      'Regular inspections',
      'Expert \'white-glove\' handling',
      'Dedicated soft breathable indoor car cover',
      'Trickle-charged battery management',
      'Annual MOT & service reminders',
    ],
  },
  {
    icon: `${ICONS}/Group-20.png`,
    title: 'PRIVATE CLIENT CONCIERGE',
    intro: 'Our dedicated team is on hand to manage every aspect of ownership, including:',
    items: [
      'Enclosed national & international transportation',
      'Maintenance, repairs, detailing & paint-protection film (PPF) arrangements',
      'HMRC approved customs bonded storage',
      'Provenance documentation & historical archive curation',
      'Tailored road-running programme',
      'Tailored event support, including entry logistics & on-the-day assistance',
      'UK & overseas registration services',
      'Professional photography using our on-site photo studio',
    ],
  },
  {
    icon: `${ICONS}/Group-18.png`,
    title: 'DISCREET PRIVATE ACCESS',
    intro: 'Enjoy unmatched hospitality & discretion:',
    items: [
      'Exclusive use of the adjacent Tom Hartley Jnr showroom lounge for drop-off & collection appointments',
      'Access by private appointment, ensuring discretion & personalised service',
      'Private rooms for visiting clients, designed for comfort & convenience',
      'Dedicated concierge service to assist with any requirements during your visit',
      'Complimentary refreshments & bespoke amenities tailored to your visit',
      'Seamless collection & delivery coordination, including optional transport or helipad arrangements',
    ],
  },
  {
    icon: `${ICONS}/Group-19.png`,
    title: 'CAREFULLY REGULATED ENVIRONMENT',
    intro: 'To ensure your car remains in peak condition:',
    items: [
      'An internal climate designed to maintain controlled conditions throughout the year (temperature range 13–18°C, relative humidity 45–55%)',
    ],
  },
  {
    icon: `${ICONS}/Group-17.png`,
    title: 'YEAR-ROUND ACCESS',
    intro: 'Year-round access, with concierge care just a request away:',
    items: [
      'Open 365 days a year',
      'Concierge support always available upon request',
    ],
  },
];

const travelItems = [
  {
    icon: `${ICONS}/Group-26.png`,
    label: 'By Rail',
    content: (
      <p>
        Banbury Station – 15 minutes<br />
        Kingham Railway Station – 20 minutes<br />
        Moreton-in-Marsh Station – 20 minutes<br />
        Bicester Village Railway station – 35 minutes
      </p>
    ),
  },
  {
    icon: `${ICONS}/Group-25.png`,
    label: 'By Car',
    content: (
      <>
        <p>
          <strong>Motorway Connections</strong><br />
          M40 (J10 &amp; J11) – 25 minutes<br />
          M1 (J16) – 40 minutes<br />
          M25 (J16) – 50 minutes
        </p>
        <p>
          <strong>Key Destinations</strong><br />
          Soho Farmhouse – 15 minutes<br />
          Daylesford – 15 minutes<br />
          Silverstone Circuit – 40 minutes<br />
          Oxford – 45 minutes<br />
          Cheltenham – 50 minutes<br />
          Mayfair, London – 1 hour 30 minutes<br />
          Ascot – 1 hour 30 minutes<br />
          Cambridge – 1 hour 45 minutes
        </p>
      </>
    ),
  },
  {
    icon: `${ICONS}/Group-24.png`,
    label: 'By Helicopter',
    content: (
      <p>
        On-site helipad available<br />
        Coordinates: 52.01104689446369, -1.4920662813742749
      </p>
    ),
  },
  {
    icon: `${ICONS}/Group-23.png`,
    label: 'By Plane',
    content: (
      <p>
        Enstone Airfield – 15 minutes<br />
        Oxford Airport (private aviation) – 30 minutes<br />
        Birmingham International Airport – 1 hour<br />
        London Heathrow Airport – 1 hour 15 minutes<br />
        Concierge transfers available on request<br />
        Secure enclosed transport or personal handover anywhere in the UK or abroad
      </p>
    ),
  },
];

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="#A98963" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Storage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main>
      <Hero
        image={`${CDN}/2026/01/THJ-Car-Barn-Private-Mezzanine.jpg`}
        title="Storage Facility"
        subtitle="Uncompromising Care. Exceptional Service."
        fullHeight={false}
      />

      {/* Intro text */}
      <section className="st-body">
        <div className="st-body__inner">
          <p><strong>BEYOND THE SALE. THE ART OF OWNERSHIP. CARE THAT CONTINUES.</strong></p>
          <p>Renowned throughout the global collector car world, Tom Hartley Jnr is a name synonymous with trust, expertise, and exceptional automobiles. For decades, Tom Hartley Jnr has been the destination of choice for discerning collectors, built on a foundation of integrity, impartial advice, and an unwavering commitment to quality. This reputation has cultivated a loyal international clientele, drawn not only to the calibre of our cars but to the personalised service and discretion that define every relationship.</p>
          <p>Building on this legacy, we are proud to introduce an exciting new chapter: a state-of-the-art car storage facility located at our new headquarters in the heart of the Cotswolds. Designed to extend the Tom Hartley Jnr experience beyond acquisition, this new concept embraces a lifestyle of heritage, excellence, and prestige – offering collectors a truly full-circle ownership journey.</p>
          <p>Just a short walk from our new showroom, the facility includes a helipad and excellent transport links to London, the Midlands and the North. It has been meticulously designed to deliver security, care and discretion of the highest standard.</p>
          <p>Whether you need short, medium, or long-term storage, your vehicle will be maintained in pristine condition, always ready to perform. We are more than a place to store your car, this is a private, appointment-only experience where legacy and luxury go hand in hand. As we look to the future, our mission is clear: to elevate the collector car journey and redefine excellence at every turn.</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="st-grid">
        <div className="st-grid__inner">
          {services.map((s) => (
            <div key={s.title} className="st-service">
              <div className="st-service__header">
                <div className="st-service__icon">
                  <img src={s.icon} alt="" />
                </div>
                <h3 className="st-service__title">{s.title}</h3>
              </div>
              <div className="st-service__body">
                <p><strong>{s.intro}</strong></p>
                <ul>
                  {s.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Find Us */}
      <div className="st-findus">
        <div className="st-findus__left">
          <div className="st-findus__left-inner">
            <h3 className="st-findus__heading">How to find us</h3>
            <p className="st-findus__sub">Located in the heart of the Cotswolds, widely regarded as the UK's car capital, our facility offers exceptional accessibility by road, rail &amp; air.</p>

            <div className="st-travel">
              {travelItems.map((item, i) => (
                <div
                  key={i}
                  className={`st-travel__item${openIndex === i ? ' st-travel__item--open' : ''}`}
                >
                  <button className="st-travel__header" onClick={() => toggle(i)}>
                    <div className="st-travel__icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <p className="st-travel__label">{item.label}</p>
                    <span className="st-travel__chevron"><ChevronIcon /></span>
                  </button>
                  <div className="st-travel__body">
                    <div className="st-travel__body-inner">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="st-findus__address">Tom Hartley Jnr Storage Ltd, Hook Norton, Oxfordshire, OX15 5DD</p>
          </div>
        </div>
        <div className="st-findus__right">
          <iframe
            title="Storage facility location"
            src="https://maps.google.com/maps?q=52.010509,-1.492116&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Contact CTA */}
      <section
        className="st-cta"
        style={{ backgroundImage: `url(${CDN}/2026/03/THJ-Car-Barn-Ground-Floor-1.png)` }}
      >
        <div className="st-cta__overlay" />
        <div className="st-cta__inner">
          <h2 className="st-cta__title">We're here to help</h2>
          <p className="st-cta__text">Get in touch to discover more about our<br />state-of-the-art storage facility</p>
          <a
            href="mailto:storage@tomhartleyjnr.com?subject=Register%20Your%20Interest!"
            className="st-cta__btn"
          >
            Register Your Interest
          </a>
        </div>
      </section>
    </main>
  );
};

export default Storage;
