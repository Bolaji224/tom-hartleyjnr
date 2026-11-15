import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { tomTalksDetails } from '../../data/tomTalksDetails';
import { videos } from '../TomTalks/TomTalks';
import Newsletter from '../../components/Newsletter/Newsletter';
import './TomTalksDetail.css';

const PlayIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.6)" />
    <polygon points="32,24 60,40 32,56" fill="#fff" />
  </svg>
);

const TomTalksDetail = () => {
  const { slug } = useParams();
  const [playing, setPlaying] = useState(false);

  const detail = tomTalksDetails.find(v => v.slug === slug);
  const meta = videos.find(v => v.slug === slug);

  if (!detail || !detail.youtubeId) {
    return (
      <main className="ttd-not-found">
        <p>Video not found.</p>
        <Link to="/tomtalks">&larr; Back to Tom Talks</Link>
      </main>
    );
  }

  const title = detail.title || meta?.title || '';
  const heroImage = detail.heroImage || meta?.image || '';
  const episode = meta?.episode || null;
  const youtubeId = detail.youtubeId;

  const thumbUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <main>
      {/* Hero */}
      <div
        className="ttd-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Link to="/tomtalks" className="ttd-back-btn">&lt; Tom Talks</Link>
        <div className="ttd-hero__overlay">
          {episode && <p className="ttd-hero__episode">EPISODE {episode}</p>}
          <h1 className="ttd-hero__title">{title}</h1>
        </div>
      </div>

      {/* Video section */}
      <section className="ttd-video-section">
        <div className="ttd-video-wrap">
          {playing ? (
            <div className="ttd-embed-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="ttd-thumb-wrap" onClick={() => setPlaying(true)}>
              <img
                src={thumbUrl}
                alt={title}
                className="ttd-thumb-img"
                onError={e => { e.target.src = heroImage; }}
              />
              <div className="ttd-play-btn" aria-label="Play video">
                <PlayIcon />
              </div>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ttd-yt-link"
                onClick={e => e.stopPropagation()}
              >
                Watch on YouTube ↗
              </a>
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default TomTalksDetail;
