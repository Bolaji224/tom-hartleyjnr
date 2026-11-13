import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import Button from '../../components/Buttons/Button';
import './About.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const About = () => (
  <main>

    {/* HERO */}
    <Hero
      image={`${CDN}/2019/05/THJ-McLaren-PR-03-17-003-1.jpg`}
      title="About Us"
      subtitle="Tom Hartley Jnr has built enviable client loyalty and a world-wide reputation upon his exceptional knowledge, impartial advice and commitment to quality in every aspect of his business."
      fullHeight={false}
    />

    {/* BODY COPY — first three paragraphs */}
    <section className="about-body">
      <div className="about-body__inner">

        <p>Without a doubt, cars instil a passion in many of us that simply can't be replicated in other walks of life. Wonderful cars are a perfectly distilled blend of design, engineering, performance and aesthetics; a great car is quite simply a thing of beauty. At Tom Hartley Jnr we operate at the highest end of the market – supplying only the finest cars and providing total peace of mind to our clients. Quality is the key – we often hold stock across a wide variety of price brackets – but each car will be the best of its kind.</p>

        <p>Part of our obligation to our clients is to help them navigate through a world that is rife with potential difficulties; an environment often dominated by confusing advice and misinformation which can naturally create costly mistakes for anyone, not in receipt of the right knowledge and guidance. The sale and purchase of any exotic car, be it a 1955 Mercedes-Benz 300SL 'Gullwing' or a 2015 Ferrari LaFerrari, can only be made with sophisticated, professional knowledge and understanding – advice that will ensure that your purchase provides a trouble-free experience and which delivers the excitement and satisfaction you deserve from a such a significant and emotional purchase.</p>

        <p>With over 30 years of personal experience dealing at the very top of the market, Tom Hartley Jnr has built enviable client loyalty and a world-wide reputation upon his exceptional knowledge, impartial advice and commitment to quality in every aspect of his business. Operating from a private showroom in the Cotswolds, Tom has a truly global reach and has been responsible for several of the world's most significant private treaty sales of recent times, including several McLaren F1's, a Ferrari 250 GTO, the only unrestored Ex works 250 Testa Rossa plus several very important Grand Prix cars including the only Mercedes-Benz W125 in private ownership and the championship-winning James Hunt McLaren M23 to name but a few.</p>

      </div>
    </section>

    {/* TRIPLE IMAGE GALLERY */}
    <div className="about-triple">
      <div
        className="about-triple__img"
        style={{ backgroundImage: `url(${CDN}/2019/05/Tom-Hartley-Junior.jpg)` }}
        role="img"
        aria-label="Tom Hartley Jnr Queen's Award"
      />
      <div
        className="about-triple__img"
        style={{ backgroundImage: `url(${CDN}/2024/10/NAT5080-2000x1504.jpg)` }}
        role="img"
        aria-label="Classic Ferrari on the road"
      />
      <div
        className="about-triple__img"
        style={{ backgroundImage: `url(${CDN}/2024/10/DSC00335-Enhanced-NR-2000x2000.jpg)` }}
        role="img"
        aria-label="Tom Hartley Jnr showroom"
      />
    </div>

    {/* BODY COPY — remaining paragraphs */}
    <section className="about-body">
      <div className="about-body__inner">

        <p>The incredible cars that form the basis of our business inspire passions in people that are quite unique. Whether it's a hypercar that demonstrates the peak of automotive technical achievement or an iconic sports car that has earned its place in history as being the best or the most beautiful of its generation. The best classic cars can move people with their evocative character and beauty. A classic car can be a friend for life – a new member of the family; an heirloom to be handed down from one generation to another. Like old houses, furniture or fine art, a classic car has a fascinating story to tell – the people it has seen, the places it has been – a classic car is a tapestry into which threads of history have been woven.</p>

        <p>Furthermore, great classic cars are tickets to great new experiences. Have you ever wanted to participate in the Mille Miglia, that great 1000 mile road rally around Italy? How about competing at the Goodwood Revival or the Monaco Historic Grand Prix? Or perhaps it is the idea of simply driving through the countryside with friends or family in a wonderful and rare piece of automotive engineering and design? Well, whatever it is that fuels your passions, a well-bought classic car is the opening to a whole new world. Be it the period charm and elegance of a pre-war car that appeals or the charisma and sophistication of the post-war period – and whether it's a sports car, racing car or grand touring car that tugs at your heartstrings – you can trust us to find the right car for you.</p>

        <p>And to reinforce both the quality of the cars we supply and our outstanding global reach, we are proud to have been awarded the Queen's Award for International Trade in 2018. One of the most coveted and prestigious awards available to a UK based business, the award recognised our hard work in establishing a global presence, with overseas markets extending from the USA to New Zealand. Between 2014 and 2018 our overseas sales grew by 130 per cent; a feat which has positioned the business at the forefront of international trading within the sports and classic car market.</p>

        <p>But of most importance to Tom Hartley Jnr, is that buying fine automobiles should be a fun and passionate process. Cars are for driving; they open up a new world of exhilaration, pride and even friendship within a community of likeminded people who own and enjoy their cars all over the world.</p>

        <p className="about-body__cta-line">
          If you have a car to sell or wish to acquire the car of your dreams, please talk to us first – it may well prove to be the best decision you've ever made.
        </p>

      </div>
    </section>

    {/* CTA BAND — light checker pattern, not dark */}
    <section className="about-cta">
      <div className="about-cta__inner">
        <p className="about-cta__label">LOOKING FOR A SPECIFIC VEHICLE? LET US HELP YOU.</p>
        <h2 className="about-cta__heading">
          Call us 7 days a week on +44 7353 851226 or<br />
          alternatively contact us via email
        </h2>
        <Button variant="dark" to="/contact" size="lg">Contact us now</Button>
      </div>
    </section>

    {/* TWO-COLUMN: CURRENT STOCK IMAGE + TESTIMONIALS */}
    <section className="about-split">
      {/* Left: Current Stock */}
      <Link
        to="/current-stock"
        className="about-split__left"
        style={{ backgroundImage: `url(${CDN}/2024/09/123-2000x1790.jpg)` }}
      >
        <div className="about-split__left-overlay" />
        <div className="about-split__left-inner">
          <div className="about-split__left-top">
            <h2 className="about-split__heading">Current Stock</h2>
            <p className="about-split__subtext">We stock only the finest, hand-selected sports, classic and luxury cars.</p>
          </div>
          <span className="about-split__btn">View our current stock</span>
        </div>
      </Link>

      {/* Right: Testimonials */}
      <div className="about-split__right">
        <div className="about-split__right-inner">
          <h2 className="about-split__testimonials-heading">Testimonials</h2>
          <Testimonials />
        </div>
      </div>
    </section>

  </main>
);

export default About;
