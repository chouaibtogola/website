import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import StructuredData from './components/StructuredData';
import PerformanceMonitor from './components/PerformanceMonitor';
import BacklinkTracker from './components/BacklinkTracker';
import ResponsiveWrapper from './components/ResponsiveWrapper';

function App() {
  return (
    <Router>
      <PerformanceMonitor />
      <BacklinkTracker />
      <StructuredData />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ResponsiveWrapper>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </ResponsiveWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;