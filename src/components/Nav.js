import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './nav.css'; // updated file name

import img1 from './imagesheader/Welcome.webp';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cottagesDropdown, setCottagesDropdown] = useState(false);
  const navigate = useNavigate();

  const cottageTypes = [
    { name: 'Safari Cottage', route: '/cottages/safari' },
    { name: 'Mushroom Cottage', route: '/cottages/mushroomcottage' },
    { name: 'Singlex Cottage', route: '/cottages/singlex' },
    { name: 'Duplex Cottage', route: '/cottages/duplex' },
    { name: 'Tree House Cottage', route: '/cottages/treehouse' },
    { name: 'Home Stay Cottage', route: '/cottages/homestay' },
    { name: 'Row Cottage', route: '/cottages/row' },
    { name: 'Mud Safari Cottage', route: '/cottages/mudsafari' },
    { name: 'Mud Mushroom Cottage', route: '/cottages/mudmushroom' },
    { name: 'Floating Mushroom Cottage', route: '/cottages/floating' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setCottagesDropdown(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
    setCottagesDropdown(false);
    switch (link) {
      case 'About Us':
        navigate('/about');
        break;
      case 'Home':
        navigate('/');
        break;
      case 'Cottages':
        navigate('/cottages');
        break;
      case 'Tourism':
        navigate('/tourism');
        break;
      case 'FAQ':
        navigate('/faq');
        break;
      case 'Contact Us':
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  const handleCottagesClick = (e) => {
    e.stopPropagation();
    setCottagesDropdown(!cottagesDropdown);
    setActiveLink('Cottages');
  };

  const handleCottageTypeClick = (cottage) => {
    navigate(cottage.route);
    setCottagesDropdown(false);
    setMenuOpen(false);
  };

  return (
    <header className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="main-navbar-logo">
        <img src={img1} alt="green heritage" />
      </div>

      <div
        className={`main-navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div><div></div><div></div>
      </div>

      <nav className={`main-navbar-links ${menuOpen ? 'open' : ''}`}>
        {['Home', 'About Us'].map((item) => (
          <Link
            key={item}
            to={item === 'Home' ? '/' : '/about'}
            className={`main-navbar-link ${activeLink === item ? 'active' : ''}`}
            onClick={() => handleLinkClick(item)}
          >
            {item}
          </Link>
        ))}

        {/* Cottages Dropdown */}
        <div className="main-navbar-dropdown-container" onClick={(e) => e.stopPropagation()}>
          <button
            className={`main-navbar-link dropdown-toggle ${activeLink === 'Cottages' ? 'active' : ''}`}
            onClick={handleCottagesClick}
            style={{ fontWeight: 'bold' }}
          >
            Cottages
            <span className={`dropdown-arrow ${cottagesDropdown ? 'open' : ''}`}>▼</span>
          </button>

          {cottagesDropdown && (
            <div className="main-navbar-dropdown-menu">
              {cottageTypes.map((cottage) => (
                <button
                  key={cottage.name}
                  className="dropdown-item"
                  onClick={() => handleCottageTypeClick(cottage)}
                >
                  {cottage.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {['Tourism', 'FAQ', 'Contact Us'].map((item) => (
          <Link
            key={item}
            to={
              item === 'Tourism' ? '/tourism' :
              item === 'FAQ' ? '/faq' :
              '/contact'
            }
            className={`main-navbar-link ${activeLink === item ? 'active' : ''}`}
            onClick={() => handleLinkClick(item)}
          >
            {item}
          </Link>
        ))}

        <a href="/ownacottage">
          <button className="main-navbar-own-btn">Own a cottage</button>
        </a>
      </nav>
    </header>
  );
};

export default Navigation;
