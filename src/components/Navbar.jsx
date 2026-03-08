import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container navbar__container">
                <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, 'home')}>
                    <i className="fas fa-mug-hot navbar__logo-icon"></i>
                    CafeCraft
                </a>

                <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
                    <a href="#home" className="navbar__link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                    <a href="#menu" className="navbar__link" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a>
                    <a href="#about" className="navbar__link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                    <a href="#gallery" className="navbar__link" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
                    <a href="#contact" className="navbar__link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                    <a href="#reservation" className="navbar__cta" onClick={(e) => handleNavClick(e, 'reservation')}>
                        Book Table
                    </a>
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
