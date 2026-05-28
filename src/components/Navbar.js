import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { label: 'Destinations', hash: 'destinations' },
  { label: 'Experiences',  hash: 'experiences'  },
  { label: 'Gallery',      hash: 'gallery'      },
  { label: 'Best Time',    hash: 'best-time'    },
  { label: 'Contact',      hash: 'contact'      },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const navigate   = useNavigate();
  const location   = useLocation();
  const isHome     = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (hash) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <span className="logo-symbol">☽</span>
        <span className="logo-text">Kashmir</span>
      </Link>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <button className="nav-link-btn" onClick={() => handleNavClick(l.hash)}>
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <button className="nav-cta" onClick={() => handleNavClick('contact')}>
        Plan Your Trip
      </button>

      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}