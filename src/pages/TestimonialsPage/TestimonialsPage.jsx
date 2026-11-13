import Hero from '../../components/Hero/Hero';
import Newsletter from '../../components/Newsletter/Newsletter';
import { testimonials } from '../../data/testimonials';
import './TestimonialsPage.css';

const CDN = 'https://www.tomhartleyjnr.com/wp-content/uploads';

const TestimonialsPage = () => (
  <main>
    <Hero
      image={`${CDN}/2026/08/newcovertest.jpg`}
      title="Testimonials"
      subtitle="Just some of the comments our clients have said about us."
      fullHeight={false}
    />

    {/* Intro paragraph */}
    <section className="tp-intro">
      <div className="tp-intro__inner">
        <p><strong>Of course, we believe that we are the best at what we do but we also believe that hearing it from our customers speaks far louder than anything we can say for ourselves.</strong></p>
      </div>
    </section>

    {/* Testimonial archive */}
    <section className="tp-archive">
      <div className="tp-archive__inner">
        {testimonials.map((item, idx) => (
          <div key={item.id} className={`tp-block${idx % 2 === 0 ? ' tp-block--even' : ''}`}>
            <div className="tp-block__image">
              <img src={item.avatar} alt={item.name} width="110" height="110" loading="lazy" />
            </div>
            <div className="tp-block__content">
              <div className="tp-block__quote">
                <strong>
                  <span className="tp-block__qmark">&ldquo;</span>
                  {item.quote}
                  <span className="tp-block__qmark">&rdquo;</span>
                </strong>
              </div>
              <div className="tp-block__by">
                <p>
                  {item.name}<br />
                  <span>{item.designation}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Newsletter signup */}
    <Newsletter />

  </main>
);

export default TestimonialsPage;
