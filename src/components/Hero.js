import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const parallaxRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current)
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" ref={parallaxRef}>
        <div className="hero-gradient" />
        <div className="hero-pattern" />
      </div>
      <div className="hero-content">
        <p className="hero-label"><span className="label-line" />Discover the Valley of Heaven</p>
        <h1 className="hero-title">Where the<br /><em>Himalayas</em><br />Kiss the Sky</h1>
        <p className="hero-desc">
          Drift through mirror lakes on shikaras, sleep under a canopy of stars,<br className="br-desktop" />
          and lose yourself in meadows where saffron blooms and time slows.
        </p>
        <div className="hero-actions">
          <a href="#destinations" className="btn-primary"><span>Explore Kashmir</span><span className="arrow">→</span></a>
          <button className="btn-ghost"><span className="play-icon">▶</span><span>Watch Film</span></button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">14,000+</span><span className="stat-label">Sq. km of valleys</span></div>
          <div className="stat-sep" />
          <div className="stat"><span className="stat-num">200+</span><span className="stat-label">Alpine lakes</span></div>
          <div className="stat-sep" />
          <div className="stat"><span className="stat-num">5,000m</span><span className="stat-label">Highest peak</span></div>
        </div>
      </div>
      <div className="hero-scroll-hint"><span>Scroll</span><div className="scroll-line" /></div>
      <div className="hero-watermark">Kashmir</div>
    </section>
  );
}
