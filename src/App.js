import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import BestTime from './components/BestTime';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ExperienceDetail from './pages/ExperienceDetail';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <Experiences />
      <Gallery />
      <BestTime />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
