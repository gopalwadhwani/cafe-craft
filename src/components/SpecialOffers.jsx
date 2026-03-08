const SpecialOffers = () => {
    const offers = [
        {
            icon: '☕',
            title: 'Happy Hour Special',
            text: 'Buy 1 Get 1 Free on all coffee drinks every weekday from 5 PM to 7 PM.',
            badge: '5 PM – 7 PM',
        },
        {
            icon: '🎂',
            title: 'Birthday Treat',
            text: 'Enjoy a complimentary dessert of your choice on your birthday. Just show your ID!',
            badge: 'All Day',
        },
        {
            icon: '🌅',
            title: 'Morning Brew Combo',
            text: 'Any espresso-based drink + croissant for just $6.99. Available before 10 AM.',
            badge: 'Before 10 AM',
        },
    ];

    return (
        <section className="special-offers section-padding" id="offers">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Special Offers</span>
                    <h2 className="section-title">Deals You'll Love</h2>
                    <p className="section-description">
                        Take advantage of our exclusive promotions and make every coffee run even more rewarding.
                    </p>
                </div>

                <div className="offers__grid">
                    {offers.map((offer, index) => (
                        <div
                            className="offer-card"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <span className="offer-card__icon">{offer.icon}</span>
                            <h3 className="offer-card__title">{offer.title}</h3>
                            <p className="offer-card__text">{offer.text}</p>
                            <span className="offer-card__badge">{offer.badge}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
