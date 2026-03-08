import '../styles/about.css';

const About = () => {
    const stats = [
        { number: '10+', label: 'Years Experience' },
        { number: '50+', label: 'Coffee Varieties' },
        { number: '5000+', label: 'Happy Customers' },
    ];

    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="about__grid">
                    <div className="about__image-wrapper" data-aos="fade-right" data-aos-duration="800">
                        <img src="/images/about-barista.png" alt="CafeCraft skilled barista" />
                        <div className="about__image-badge">Est. 2014</div>
                    </div>

                    <div className="about__content" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <span className="about__subtitle">Our Story</span>
                        <h2 className="about__title">A Passion for Exceptional Coffee</h2>
                        <p className="about__text">
                            Born from a love of artisanal coffee and warm community gathering,
                            CafeCraft has been serving the finest single-origin beans since 2014.
                            Our master baristas hand-craft every cup to perfection, ensuring a
                            consistent, premium experience that keeps our guests coming back.
                        </p>
                        <p className="about__text">
                            We source our beans directly from sustainable farms across Colombia,
                            Ethiopia, and Guatemala, roasting them in small batches to bring out
                            the unique character of each origin.
                        </p>

                        <div className="about__stats">
                            {stats.map((stat, index) => (
                                <div
                                    className="about__stat"
                                    key={index}
                                    data-aos="zoom-in"
                                    data-aos-delay={300 + index * 100}
                                >
                                    <span className="about__stat-number">{stat.number}</span>
                                    <span className="about__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
