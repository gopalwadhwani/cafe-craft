import { Link } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__background">
                <img src="/images/hero-bg.png" alt="CafeCraft premium cafe interior" />
            </div>
            <div className="hero__overlay"></div>

            <div className="hero__content" data-aos="fade-up" data-aos-duration="1000">
                <span className="hero__badge">Welcome to CafeCraft</span>
                <h1 className="hero__title">
                    Crafted Coffee,<br />
                    <span>Cozy Moments</span>
                </h1>
                <p className="hero__subtitle">
                    Discover the art of perfectly brewed coffee in a warm, inviting atmosphere.
                    Every cup tells a story of passion, precision, and premium quality.
                </p>
                <div className="hero__buttons">
                    <Link to="/menu" className="btn btn-primary">
                        <i className="fas fa-coffee"></i> View Menu
                    </Link>
                    <Link to="/reservations" className="btn btn-secondary">
                        <i className="far fa-calendar-alt"></i> Reserve Table
                    </Link>
                </div>
            </div>

            <div className="hero__scroll">
                <span>Scroll</span>
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
