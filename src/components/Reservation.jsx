import { useState } from 'react';
import '../styles/reservation.css';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your reservation for ${formData.guests} guests on ${formData.date} at ${formData.time} has been received. We'll confirm shortly!`);
        setFormData({ name: '', phone: '', date: '', time: '', guests: '2' });
    };

    return (
        <section className="reservation section-padding" id="reservation">
            <div className="container">
                <div className="reservation__wrapper">
                    <div className="reservation__info" data-aos="fade-right" data-aos-duration="800">
                        <span className="reservation__subtitle">Reservations</span>
                        <h2 className="reservation__title">Book Your Perfect Table</h2>
                        <p className="reservation__text">
                            Whether it&apos;s a quiet morning coffee, a business lunch, or an evening
                            gathering with friends — we&apos;ll have a table ready for you.
                        </p>

                        <div className="reservation__features">
                            <div className="reservation__feature">
                                <span className="reservation__feature-icon">
                                    <i className="fas fa-clock"></i>
                                </span>
                                Instant confirmation within minutes
                            </div>
                            <div className="reservation__feature">
                                <span className="reservation__feature-icon">
                                    <i className="fas fa-utensils"></i>
                                </span>
                                Special dietary accommodations available
                            </div>
                            <div className="reservation__feature">
                                <span className="reservation__feature-icon">
                                    <i className="fas fa-gift"></i>
                                </span>
                                Complimentary welcome drink for reservations
                            </div>
                            <div className="reservation__feature">
                                <span className="reservation__feature-icon">
                                    <i className="fas fa-users"></i>
                                </span>
                                Private area for groups of 8 or more
                            </div>
                        </div>
                    </div>

                    <form className="reservation__form" onSubmit={handleSubmit} data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <div className="reservation__form-grid">
                            <div className="reservation__form-group">
                                <label className="reservation__form-label" htmlFor="res-name">Full Name</label>
                                <input
                                    type="text"
                                    id="res-name"
                                    name="name"
                                    className="reservation__form-input"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="reservation__form-group">
                                <label className="reservation__form-label" htmlFor="res-phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="res-phone"
                                    name="phone"
                                    className="reservation__form-input"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="reservation__form-group">
                                <label className="reservation__form-label" htmlFor="res-date">Date</label>
                                <input
                                    type="date"
                                    id="res-date"
                                    name="date"
                                    className="reservation__form-input"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="reservation__form-group">
                                <label className="reservation__form-label" htmlFor="res-time">Time</label>
                                <input
                                    type="time"
                                    id="res-time"
                                    name="time"
                                    className="reservation__form-input"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="reservation__form-group full-width">
                                <label className="reservation__form-label" htmlFor="res-guests">Number of Guests</label>
                                <select
                                    id="res-guests"
                                    name="guests"
                                    className="reservation__form-select"
                                    value={formData.guests}
                                    onChange={handleChange}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="reservation__form-group full-width">
                                <button type="submit" className="btn btn-primary reservation__form-submit">
                                    <i className="far fa-calendar-check"></i> Reserve Now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
