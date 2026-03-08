import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollTo from '../hooks/useScrollTo';
import '../styles/navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const scrollTo = useScrollTo();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        setMenuOpen(false);
        if (isHome) {
            scrollTo(e, targetId);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container navbar__container">
                <Link to="/" className="navbar__logo">
                    <i className="fas fa-mug-hot navbar__logo-icon"></i>
                    CafeCraft
                </Link>

                <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
                    {isHome ? (
                        <>
                            <a href="#home" className="navbar__link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                            <a href="#menu" className="navbar__link" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a>
                            <a href="#about" className="navbar__link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                            <a href="#gallery" className="navbar__link" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
                            <a href="#contact" className="navbar__link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                            <a href="#reservation" className="navbar__cta" onClick={(e) => handleNavClick(e, 'reservation')}>
                                Book Table
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="navbar__link">Home</Link>
                            <Link to="/menu" className="navbar__link">Menu</Link>
                            <Link to="/about" className="navbar__link">About</Link>
                            <Link to="/#gallery" className="navbar__link">Gallery</Link>
                            <Link to="/#contact" className="navbar__link">Contact</Link>
                            <Link to="/reservations" className="navbar__cta">Book Table</Link>
                        </>
                    )}
                </div>

                <button
                    className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="navbar__toggle-bar"></span>
                    <span className="navbar__toggle-bar"></span>
                    <span className="navbar__toggle-bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
