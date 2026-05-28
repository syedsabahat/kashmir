import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  { quote:"Waking up on a houseboat on Dal Lake as the mist lifted off the mountains — that image is tattooed on my soul. Kashmir doesn't just visit you, it inhabits you.", author:"Priya Mehta",       origin:"Mumbai, India",    trip:"Spring Shikara Journey",      initial:"P" },
  { quote:"I've skied in the Alps, in Hokkaido, in Colorado. Gulmarg's powder after a fresh snowfall rivals any of them — with the added magic of the Himalayas all around you.", author:"Thomas Andersson",  origin:"Stockholm, Sweden", trip:"Winter Ski Adventure",         initial:"T" },
  { quote:"The Wazwan dinner our host prepared was a ceremony, not a meal. Thirty dishes, each one a revelation. I've been recreating rogan josh in my kitchen ever since.", author:"Fatima Al-Hassan",  origin:"Dubai, UAE",        trip:"Cultural Immersion Tour",      initial:"F" },
  { quote:"The trek to Tarsar Lake took us through meadows so beautiful we kept stopping just to sit in silence. Our guide Imtiyaz taught us to see the valley as locals do.", author:"James Whitfield",   origin:"London, UK",        trip:"Himalayan Trek Expedition",    initial:"J" },
  { quote:"I came in October for the chinar trees. I stayed for the saffron fields, the apple orchards, and the warmth of every person I met. Autumn Kashmir is pure gold.", author:"Yuki Tanaka",      origin:"Tokyo, Japan",      trip:"Autumn Photography Tour",      initial:"Y" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => go((active + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, [active]);

  const go = (idx) => {
    setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); }, 300);
  };

  const t = testimonials[active];
  return (
    <section className="testimonials">
      <div className="test-container">
        <div className="test-header">
          <p className="section-label">Traveller Voices</p>
          <h2 className="section-title">Stories from the <em>Valley</em></h2>
        </div>
        <div className="test-layout">
          <div className={`test-main ${animating ? 'fade-out' : 'fade-in'}`}>
            <div className="quote-mark">"</div>
            <blockquote className="test-quote">{t.quote}</blockquote>
            <div className="test-author">
              <div className="author-avatar">{t.initial}</div>
              <div>
                <p className="author-name">{t.author}</p>
                <p className="author-meta">{t.origin} · {t.trip}</p>
              </div>
            </div>
          </div>
          <div className="test-sidebar">
            {testimonials.map((item, i) => (
              <button key={i} className={`test-dot-btn ${i === active ? 'active' : ''}`} onClick={() => go(i)}>
                <div className="dot-avatar">{item.initial}</div>
                <div className="dot-info">
                  <span className="dot-name">{item.author}</span>
                  <span className="dot-origin">{item.origin}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="test-progress">
          {testimonials.map((_, i) => (
            <button key={i} className={`progress-pip ${i === active ? 'active' : ''}`} onClick={() => go(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
