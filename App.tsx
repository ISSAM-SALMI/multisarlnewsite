import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { History } from './components/History';
import { DirectorWord } from './components/DirectorWord';
import { CFOService } from './components/CFOService';
import { CFAService } from './components/CFAService';
import { EventService } from './components/EventService';
import { MTService } from './components/MTService';
import { EVService } from './components/EVService';
import { SolarService } from './components/SolarService';
import { MaintenanceService } from './components/MaintenanceService';
import { OfficeService } from './components/OfficeService';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col text-slate-900 dark:text-white bg-white dark:bg-navy-950 transition-colors duration-300">
        {/* Navigation */}
        <Navbar isScrolled={isScrolled} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/histoire" element={<History />} />
          <Route path="/mot-du-directeur" element={<DirectorWord />} />
          <Route path="/services/cfo" element={<CFOService />} />
          <Route path="/services/cfa" element={<CFAService />} />
          <Route path="/services/events" element={<EventService />} />
          <Route path="/services/mt" element={<MTService />} />
          <Route path="/services/ev" element={<EVService />} />
          <Route path="/services/solar" element={<SolarService />} />
          <Route path="/services/offices" element={<OfficeService />} />
          <Route path="/services/maintenance" element={<MaintenanceService />} />
          <Route path="/nous-rejoindre" element={<JoinUs />} />
          <Route path="/nous-rejoindre/:jobId" element={<JoinUs />} />
        </Routes>

        {/* Footer */}
        <Footer />
        
        {/* Floating Action */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}