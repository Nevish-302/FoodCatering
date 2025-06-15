import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Home as HomeIcon, Info, Image, Star, Calendar, Mail, Menu as MenuIcon, X, MapPin, Phone, Mail as MailIcon } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Review from './pages/Review';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import './App.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/review', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-12 pb-6 mt-12 relative border-t-4 border-[var(--color-accent)]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Logo and background */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="mb-4">
            <img src="/logo-footer.png" alt="Khomchaa Logo" className="h-16" onError={e => e.target.style.display='none'} />
            <div className="text-2xl font-bold tracking-widest mt-2 text-[var(--color-secondary)]">KHOMCHAA</div>
            <div className="text-[var(--color-accent)] text-xs tracking-widest">THE CHAAT CULTURE</div>
          </div>
        </div>
        {/* Reach Us */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-2 border-b-2 border-[var(--color-accent)] inline-block pb-1">Reach Us</h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-accent)] mt-1" />
              <span className="font-semibold text-[var(--color-secondary)]">Address:</span>
              <span className="text-[var(--color-secondary)]">24/5 Shakti Nagar Main Road, Delhi</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-accent)] mt-1" />
              <span className="font-semibold text-[var(--color-secondary)]">Works:</span>
              <span className="text-[var(--color-secondary)]">Street 7, Prahlad Vihar, Sector -25, Rohini, Delhi - 110007</span>
            </div>
          </div>
        </div>
        {/* Contact Us */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 border-b-2 border-[var(--color-accent)] inline-block pb-1">Contact Us</h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[var(--color-accent)]" />
              <span className="font-semibold text-[var(--color-secondary)]">Phone:</span>
              <span className="text-[var(--color-secondary)]">+91 9911555166 / 9810130502</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5 text-[var(--color-accent)]" />
              <span className="font-semibold text-[var(--color-secondary)]">Email:</span>
              <span className="text-[var(--color-secondary)]">info@khomchaa.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright and site by */}
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-accent)] pt-6 bg-[var(--color-accent)] bg-opacity-80">
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-secondary)] font-bold">&copy; 2025 - KHOMCHAA</span>
          <span className="ml-2 text-[var(--color-secondary)]">All Rights Reserved</span>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="text-[var(--color-secondary)]">Site By</span>
          <span className="font-bold text-[var(--color-secondary)]">matrix</span>
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[var(--color-background)] bg-opacity-80 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand/Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white tracking-wide select-none">
          <span className="inline-block w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-2">
            {/* Optional: Add a minimal icon here */}
          </span>
          Food Catering
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-lg font-medium transition-colors duration-200 text-gray-200 hover:text-white ${
                    isActive
                      ? 'text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[var(--color-primary)] after:rounded-full after:content-[""]'
                      : ''
                  }`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-10 focus:outline-none text-gray-200"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col md:hidden transition-all duration-300">
          <div className="flex justify-end p-4">
            <button
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 focus:outline-none text-gray-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-8 mt-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-2xl font-semibold px-4 py-2 rounded transition-colors duration-200 text-gray-200 hover:text-white ${
                      isActive ? 'text-white underline underline-offset-8 decoration-[var(--color-primary)]' : ''
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[var(--color-background)] min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <main className="container mx-auto px-4 py-8 min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/review" element={<Review />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <button className="fixed bottom-4 right-4 bg-[var(--color-secondary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--color-primary)]">
          Contact Us
        </button>
      </div>
    </Router>
  );
}

export default App;
