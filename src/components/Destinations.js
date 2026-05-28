import React, { useState } from 'react';
import './Destinations.css';

const destinations = [
  { id:1, name:'Dal Lake',    region:'Srinagar',  tagline:'The Jewel of Kashmir',    desc:'Drift through lotus gardens on hand-carved shikaras as the Zabarwan mountains reflect in the still waters. Home to ornate houseboats that have hosted poets and kings.', highlights:['Shikara rides','Houseboat stays','Floating gardens','Mughal gardens'], gradient:'linear-gradient(135deg,#0d4f4f 0%,#1a6b6b 60%,#0d3d52 100%)', emoji:'🌊', duration:'2–3 days' },
  { id:2, name:'Pahalgam',    region:'Anantnag',  tagline:'Valley of Shepherds',      desc:'Where the Lidder river sings through pine forests and meadows carpeted in wildflowers. The gateway to the Amarnath pilgrimage and Kolahoi glacier.', highlights:['Baisaran meadows','Aru Valley','Betaab Valley','Trout fishing'], gradient:'linear-gradient(135deg,#1a3d2b 0%,#2d6a4f 60%,#1e4d3a 100%)', emoji:'🌿', duration:'3–4 days' },
  { id:3, name:'Gulmarg',     region:'Baramulla', tagline:'Meadow of Flowers',        desc:"Asia's highest gondola whisks you above treelines to snow bowls where the world falls silent. Winter transforms this highland into a powder paradise.", highlights:['Gondola ride','Skiing & snowboarding','Alpather Lake','Golfing at 2,650m'], gradient:'linear-gradient(135deg,#1a2a4a 0%,#2c4a7a 60%,#1e3560 100%)', emoji:'⛰️', duration:'2–3 days' },
  { id:4, name:'Sonamarg',    region:'Ganderbal', tagline:'Meadow of Gold',            desc:'Where glaciers cascade into alpine streams and the sky seems painted a deeper blue. The starting point for treks to Vishansar, Krishansar and Gangabal lakes.', highlights:['Thajiwas Glacier','Vishansar Lake trek','Nilagrad river','Camping'], gradient:'linear-gradient(135deg,#3a2010 0%,#7a4a20 60%,#5a3015 100%)', emoji:'✨', duration:'2–3 days' },
  { id:5, name:'Yusmarg',     region:'Budgam',    tagline:'The Hidden Meadow',         desc:'A secret garden few visitors discover. Rolling grasslands ringed by fir forests and snow peaks — this is Kashmir before the crowds, raw and unspoiled.', highlights:['Nilnag Lake','Doodh Ganga stream','Pony rides','Photography'], gradient:'linear-gradient(135deg,#2a3d1a 0%,#4a6d2a 60%,#354d20 100%)', emoji:'🌸', duration:'1–2 days' },
  { id:6, name:'Doodhpathri', region:'Budgam',    tagline:'Valley of Milk',            desc:'Named for its milky streams, this enchanting highland is a canvas of wildflowers in summer and crystalline snow in winter. Where cowboys still ride at dusk.', highlights:['Milky streams','Wildflower meadows','Sunset views','Herder culture'], gradient:'linear-gradient(135deg,#1a2a3a 0%,#2a4a5a 60%,#1e3848 100%)', emoji:'🥛', duration:'1–2 days' },
];

export default function Destinations() {
  const [active, setActive] = useState(0);
  const dest = destinations[active];

  return (
    <section className="destinations" id="destinations">
      <div className="dest-container">
        <div className="dest-header">
          <p className="section-label">Sacred Places</p>
          <h2 className="section-title">Explore the <em>Valleys</em></h2>
          <p className="dest-intro">Six legendary destinations, each with its own soul and story.</p>
        </div>
        <div className="dest-layout">
          <div className="dest-tabs">
            {destinations.map((d, i) => (
              <button key={d.id} className={`dest-tab ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
                <span className="tab-emoji">{d.emoji}</span>
                <div className="tab-info">
                  <span className="tab-name">{d.name}</span>
                  <span className="tab-region">{d.region}</span>
                </div>
                <span className="tab-arrow">→</span>
              </button>
            ))}
          </div>
          <div className="dest-panel" style={{ background: dest.gradient }}>
            <div className="panel-overlay" />
            <div className="panel-content">
              <span className="panel-duration">⏱ {dest.duration}</span>
              <p className="panel-region">{dest.region} District</p>
              <h3 className="panel-name">{dest.name}</h3>
              <p className="panel-tagline">{dest.tagline}</p>
              <p className="panel-desc">{dest.desc}</p>
              <div className="panel-highlights">
                {dest.highlights.map(h => <span key={h} className="highlight-tag">{h}</span>)}
              </div>
              <a href="#contact" className="btn-primary panel-btn"><span>Plan a Visit</span><span>→</span></a>
            </div>
            <div className="panel-number">0{active + 1}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
