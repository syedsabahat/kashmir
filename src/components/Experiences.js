import React from 'react';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import './Experiences.css';

export default function Experiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="exp-container">
        <div className="exp-header">
          <div>
            <p className="section-label">Curated Moments</p>
            <h2 className="section-title">
              <em>Experiences</em> That<br />Stay Forever
            </h2>
          </div>
          <p className="exp-intro">
            Beyond sightseeing — immersive encounters with Kashmir's landscape,
            craft, and cuisine that become part of your story.
          </p>
        </div>

        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <div className="exp-card" key={exp.id} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="card-icon">{exp.icon}</div>
              <span className="card-tag">{exp.tag}</span>
              <h3 className="card-title">{exp.title}</h3>
              <p className="card-desc">{exp.shortDesc}</p>
              <Link to={`/experience/${exp.id}`} className="card-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
