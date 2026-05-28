import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-cta-strip">
        <div className="cta-content">
          <div>
            <h2 className="cta-title">Your Kashmir Journey<br /><em>Begins Here</em></h2>
            <p className="cta-subtitle">Let our local experts craft your perfect Kashmir itinerary.</p>
          </div>
          <div className="cta-actions">
            <a href="mailto:info@kashmir-tourism.in" className="btn-primary"><span>Get a Free Quote</span><span>→</span></a>
            <a href="tel:+911234567890" className="cta-phone">📞 +91 94200 00000</a>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo"><span className="logo-symbol">☽</span><span>Kashmir Tourism</span></div>
            <p className="footer-tagline">Crafting unforgettable journeys through the paradise of the Himalayas since 1998.</p>
            <div className="footer-socials">
              {['Instagram','Facebook','YouTube','Twitter'].map(s => (
                <a key={s} href="#!" className="social-link">{s[0]}</a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Destinations</h4>
            <ul>{['Dal Lake & Srinagar','Pahalgam','Gulmarg','Sonamarg','Yusmarg','Doodhpathri'].map(d => <li key={d}><a href="#destinations">{d}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Experiences</h4>
            <ul>{['Shikara Rides','Trekking','Skiing','Houseboat Stays','Cultural Tours','Photography Tours'].map(e => <li key={e}><a href="#experiences">{e}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Travel Info</h4>
            <ul>{['Best Time to Visit','How to Reach','Local Cuisine','Permits & Safety','Accommodation','FAQs'].map(i => <li key={i}><a href="#best-time">{i}</a></li>)}</ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <div>
            <h4 className="newsletter-title">Stay Inspired</h4>
            <p className="newsletter-desc">Seasonal stories, travel tips & exclusive offers from Kashmir.</p>
          </div>
          {submitted ? (
            <p className="newsletter-success">✓ Thank you! You're on the list.</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          )}
        </div>

        <div className="footer-bottom">
          <p>© 2024 Kashmir Tourism. All rights reserved. Made with ❤ in the Valley.</p>
          <div className="footer-legal">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Use</a>
            <a href="#!">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
