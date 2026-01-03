import React from 'react';
import './Hero.scss';

const Hero = ({ videoUrl, posterUrl, imageUrls = [], children, overlayOpacity = 0.45 }) => {
  return (
    <section className="hero">
      {videoUrl ? (
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="hero__fallback"
          style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : 'none' }}
        />
      )}

      <div className="hero__overlay" style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} />

      <div className="hero__content">
        {children}
      </div>

      {imageUrls.length > 0 && (
        <div className="hero__gallery">
          {imageUrls.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noreferrer">
              <img src={src} alt={`hero-img-${i}`} loading="lazy" onError={(e)=>{e.target.onerror=null;e.target.src='/images/placeholder-airline.svg'}} />
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
