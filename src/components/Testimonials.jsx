import testimonialsData from '../data/testimonialsData';
import '../styles/testimonials.css';

const Testimonials = () => {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <i
                key={i}
                className={`fas fa-star testimonial-card__star ${i >= rating ? 'empty' : ''}`}
            ></i>
        ));
    };

    return (
        <section className="testimonials section-padding" id="testimonials">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">What Our Guests Say</h2>
                    <p className="section-description">
                        Don't just take our word for it — hear from our wonderful community of coffee lovers.
                    </p>
                </div>

                <div className="testimonials__grid">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            className="testimonial-card"
                            key={testimonial.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <span className="testimonial-card__quote-icon">"</span>
                            <div className="testimonial-card__stars">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="testimonial-card__text">{testimonial.text}</p>
                            <div className="testimonial-card__author">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="testimonial-card__avatar"
                                    loading="lazy"
                                />
                                <div className="testimonial-card__info">
                                    <span className="testimonial-card__name">{testimonial.name}</span>
                                    <span className="testimonial-card__role">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
