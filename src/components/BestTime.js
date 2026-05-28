import React, { useState } from 'react';
import './BestTime.css';

const seasons = [
  { name:'Spring',  months:'March – May',       icon:'🌸', temp:'10°C – 22°C', mood:'Bloom & Renewal', desc:"The valley erupts in color as cherry blossoms, almond flowers, and tulips bloom in succession. Asia's largest tulip garden in Srinagar peaks in early April. Rivers run full with snowmelt and the air carries the scent of mustard fields.", highlights:['Tulip Festival (Apr)','Cherry blossom trails','Mughal gardens open','Mild trekking weather'], color:'#5c2d6a', accent:'#c084fc', ideal:true },
  { name:'Summer',  months:'June – August',     icon:'☀️', temp:'15°C – 30°C', mood:'Peak Season',     desc:"Kashmir's most popular season. Gulmarg's meadows are emerald green, Dal Lake is alive with shikaras, and the highland treks to Tarsar, Gangabal, and Vishansar are fully accessible. The valley hums with festivals and life.", highlights:['Shikara rides','Trekking season','Pahalgam meadows','Cultural festivals'], color:'#1a5c3a', accent:'#4ade80', ideal:true },
  { name:'Autumn',  months:'September – November',icon:'🍂',temp:'5°C – 20°C',  mood:'Golden Hour',    desc:"Arguably Kashmir's most photogenic season. Ancient chinar trees turn gold and crimson, saffron fields bloom in Pampore, and the light turns the color of honey. Crowds thin, prices drop, and the valley belongs to those who seek beauty.", highlights:['Chinar color change','Saffron harvest (Oct)','Apple orchards','Photography paradise'], color:'#6a3a1a', accent:'#fb923c', ideal:true },
  { name:'Winter',  months:'December – February',icon:'❄️', temp:'-8°C – 5°C', mood:'Snow & Silence',  desc:"A hushed, crystalline world. Gulmarg becomes India's premier ski destination, frozen Dal Lake hosts cricket matches, and the Chillai Kalan cold wave transforms the valley into a fairytale. Not for everyone — perfect for adventurers.", highlights:['Skiing at Gulmarg','Frozen Dal Lake','Snow festivals','Houseboat fireside'], color:'#1a3a5c', accent:'#7dd3fc', ideal:false },
];

export default function BestTime() {
  const [active, setActive] = useState(0);
  const s = seasons[active];
  return (
    <section className="best-time" id="best-time">
      <div className="bt-container">
        <div className="bt-header">
          <p className="section-label">Plan Your Visit</p>
          <h2 className="section-title">Kashmir in Every <em>Season</em></h2>
        </div>
        <div className="bt-layout">
          <div className="bt-selectors">
            {seasons.map((season, i) => (
              <button key={season.name} className={`season-btn ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} style={i === active ? { '--accent': season.accent } : {}}>
                <span className="season-icon">{season.icon}</span>
                <div>
                  <span className="season-name">{season.name}</span>
                  <span className="season-months">{season.months}</span>
                </div>
                {season.ideal && <span className="ideal-badge">Ideal</span>}
              </button>
            ))}
          </div>
          <div className="bt-detail" style={{ '--accent': s.accent, '--bg': s.color }}>
            <div className="bt-detail-bg" />
            <div className="bt-detail-content">
              <div className="bt-top">
                <div>
                  <p className="detail-mood">{s.mood}</p>
                  <h3 className="detail-season">{s.icon} {s.name}</h3>
                  <p className="detail-months">{s.months}</p>
                </div>
                <div className="detail-temp">
                  <span className="temp-num">{s.temp}</span>
                  <span className="temp-label">Average Temperature</span>
                </div>
              </div>
              <p className="detail-desc">{s.desc}</p>
              <div className="detail-highlights">
                <p className="highlights-label">Seasonal Highlights</p>
                <div className="highlights-list">
                  {s.highlights.map(h => (
                    <div key={h} className="highlight-item">
                      <span className="highlight-dot" /><span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
