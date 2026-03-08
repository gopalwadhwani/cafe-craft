import '../styles/footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__brand-logo">
                            <i className="fas fa-mug-hot"></i> CafeCraft
                        </div>
                        <p className="footer__brand-text">
                            Premium artisanal coffee crafted with passion. Join us for a cup that
                            tells a story of excellence and warmth.
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="footer__social-link" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Pinterest">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer__column-title">Quick Links</h4>
                        <div className="footer__links">
                            <a href="#home" className="footer__link" onClick={(e) => handleClick(e, 'home')}>Home</a>
                            <a href="#menu" className="footer__link" onClick={(e) => handleClick(e, 'menu')}>Our Menu</a>
                            <a href="#about" className="footer__link" onClick={(e) => handleClick(e, 'about')}>About Us</a>
                            <a href="#gallery" className="footer__link" onClick={(e) => handleClick(e, 'gallery')}>Gallery</a>
                            <a href="#reservation" className="footer__link" onClick={(e) => handleClick(e, 'reservation')}>Reservations</a>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="footer__column-title">Support</h4>
                        <div className="footer__links">
                            <a href="#" className="footer__link">FAQ</a>
                            <a href="#" className="footer__link">Privacy Policy</a>
                            <a href="#" className="footer__link">Terms of Service</a>
                            <a href="#" className="footer__link">Careers</a>
                            <a href="#" className="footer__link">Gift Cards</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="footer__column-title">Contact Us</h4>
                        <div className="footer__contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span className="footer__contact-text">123 Coffee Lane, Downtown District, New York, NY 10001</span>
                        </div>
                        <div className="footer__contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <span className="footer__contact-text">+1 (555) 123-4567</span>
                        </div>
                        <div className="footer__contact-item">
                            <i className="fas fa-envelope"></i>
                            <span className="footer__contact-text">hello@cafecraft.com</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <span>© {currentYear} CafeCraft. All rights reserved.</span>
                    <div className="footer__bottom-links">
                        <a href="#" className="footer__bottom-link">Privacy</a>
                        <a href="#" className="footer__bottom-link">Terms</a>
                        <a href="#" className="footer__bottom-link">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
