import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { experiences } from '../data/experiences';
import './ExperienceDetail.css';

export default function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const exp = experiences.find(e => e.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!exp) {
    return (
      <div className="not-found">
        <h2>Experience not found</h2>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className="exp-detail">

      {/* ── HERO ── */}
      <div className="ed-hero" style={{ backgroundImage: `url(${exp.heroImg})` }}>
        <div className="ed-hero-overlay" />
        <div className="ed-hero-content">
          <button className="ed-back" onClick={() => navigate('/')}>← Back to Home</button>
          <h1 className="ed-title">{exp.icon} {exp.title}</h1>
          <p className="ed-short">{exp.shortDesc}</p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="ed-body">
        <div className="ed-container">

          {/* Overview */}
          <section className="ed-section">
            <h2 className="ed-section-title">Overview</h2>
            <div className="ed-divider" />
            {exp.overview.split('\n\n').map((para, i) => (
              <p key={i} className="ed-para">{para}</p>
            ))}
          </section>

          {/* Highlights + Tips */}
          <div className="ed-two-col">
            <section className="ed-section">
              <h2 className="ed-section-title">Highlights</h2>
              <div className="ed-divider" />
              <ul className="ed-list">
                {exp.highlights.map((h, i) => (
                  <li key={i}><span className="list-dot">✦</span><span>{h}</span></li>
                ))}
              </ul>
            </section>

            <section className="ed-section">
              <h2 className="ed-section-title">Travel Tips</h2>
              <div className="ed-divider" />
              <ul className="ed-list tips">
                {exp.tips.map((t, i) => (
                  <li key={i}><span className="list-dot">💡</span><span>{t}</span></li>
                ))}
              </ul>
            </section>
          </div>

          {/* Gallery */}
          <section className="ed-section">
            <h2 className="ed-section-title">Photo Gallery</h2>
            <div className="ed-divider" />
            <div className="ed-gallery">
              {exp.gallery.map((img, i) => (
                <div key={i} className="ed-gallery-item">
                  <img src={img} alt={`${exp.title} ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>

          {/* More Experiences */}
          <section className="ed-section">
            <h2 className="ed-section-title">More Experiences</h2>
            <div className="ed-divider" />
            <div className="ed-more-grid">
              {experiences.filter(e => e.id !== exp.id).slice(0, 3).map(e => (
                <div key={e.id} className="ed-more-card" onClick={() => navigate(`/experience/${e.id}`)}>
                  <img src={e.heroImg} alt={e.title} className="ed-more-img" />
                  <div className="ed-more-overlay" />
                  <div className="ed-more-info">
                    <span className="ed-more-tag">{e.tag}</span>
                    <h4 className="ed-more-title">{e.icon} {e.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="ed-cta-box">
            <div>
              <h3 className="ed-cta-title">Ready to Experience This?</h3>
              <p className="ed-cta-sub">Let our local experts plan the perfect itinerary for you.</p>
            </div>
            <div className="ed-cta-actions">
              <a href="mailto:info@kashmir-tourism.in" className="btn-primary-detail">Book Now →</a>
              <button className="btn-ghost-detail" onClick={() => navigate('/')}>← Back to Home</button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}