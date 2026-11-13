import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import './ExpertAdvice.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const ExpertAdvice = () => (
  <main>
    <Hero
      image={`${CDN}/2019/06/DSC_3763.jpg`}
      title="Expert Advice"
      subtitle="The car market is a complex world in which an expert guiding hand is sometimes highly beneficial."
      fullHeight={false}
    />

    <section className="ea-body">
      <div className="ea-body__inner">
        <p>At Tom Hartley Jnr Ltd we are always here to offer help and advice to anyone who may need it, regardless of whether you are a client or not. The market is highly complex, so poor advice and too little knowledge can have far reaching repercussions. The difference in value between the very best and the poorest examples has never been greater, so don't fall into the trap of buying the wrong car at the wrong price from the wrong individual. As in any market, chancers and opportunists will always be eager to offer bad advice and take large sums of money in return.</p>
        <p>The market has evolved in recent years and it's fair to say that collectors are no longer willing to pay top money for poor cars. As a result, the market for the right cars is stronger than ever. For the past decade the market has remained resilient and has outperformed many other forms of alternative investments. But the market couldn't sustain the levels of price inflation that it experienced between 2010 and 2016, so the last couple of years have seen a necessary period of correction, where growth has slowed and the values of many cars have readjusted to a level that makes the long-term future of the market more secure. This market correction is most prevalent among the more ordinary examples of individual marques and models and those with unremarkable provenance or in average condition – not to mention the cars built in greater volumes where there is always a wide choice for the buyer.</p>
        <p>In short, buying any asset for short term financial gain is always risky, but quality classics will always be a secure place to invest money over time. We advise all clients to buy cars because they passionately want to own them and not for pure investment. Without a doubt, it is the passion and enthusiasm for classic cars which feeds the market most strongly – cars are to be driven and enjoyed – and so long as there are enough people who feel the same as you, demand will remain high and the market will remain robust. However, we advise our clients to buy for the passion and to buy the best examples they can afford. We have always chosen to offer our clients the best 'no excuses' cars that always feature on our inventory and which form the most desirable cars available to the market.</p>
        <p>Even against the backdrop of a readjusted market, the best examples have remained stable and if anything, continued to rise in value. For cars to be truly desirable and to command the best prices, certain conditions have to be met. Old cars need an exemplary history – a fully documented paper trail that accurately charts ownership, maintenance and restoration work. Originality is also highly coveted; cars should be as close as possible to their original factory specifications, and whilst subtle upgrades and performance improvements can be desirable, a car should be a 'matching numbers' example where there is documentary evidence that the chassis, engine and gearbox all left the factory together, thus preserving the essence of a car's true identity. It is these factors that we refer to as 'provenance', and if the car can also boast interesting ownership or competition history, then the value and investment potential will be truly maximised.</p>
        <p>Italian thoroughbreds continue to be most in demand, with Ferrari still considered to be the best 'litmus paper' for how the market is performing. The market for Ferraris is global, and the demand for certain cars is driven by rarity, exclusivity and a wonderful marque heritage. Rare sports-racing Maseratis and Alfa-Romeos are also very much in demand and Aston Martin is a great example of a marque that has seen values rise considerably in recent years, with the classic 'DB' models of the 1960s remaining the marque's peak for road going models. There are certain iconic cars that simply never seem to go out of fashion or demand – both the Mercedes-Benz 300SL Gullwing and the Ferrari 275 GTB/4, are two perfect examples of cars which have an almost endless appeal and which can only be regarded as blue-chip investments for the future. Rare, limited run Porsches also have a huge fan base, which has had a big impact on values in recent years.</p>
      </div>
    </section>

    <section className="about-split">
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
      <div className="about-split__right">
        <div className="about-split__right-inner">
          <h2 className="about-split__testimonials-heading">Testimonials</h2>
          <Testimonials />
        </div>
      </div>
    </section>

    <Newsletter />
  </main>
);

export default ExpertAdvice;
