const Location = () => {
    return (
        <section className="location section-padding" id="contact">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Find Us</span>
                    <h2 className="section-title">Visit CafeCraft</h2>
                    <p className="section-description">
                        We&apos;re located in the heart of downtown. Drop by anytime — great coffee awaits!
                    </p>
                </div>

                <div className="location__grid">
                    <div className="location__map" data-aos="fade-right" data-aos-duration="800">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634994893!2d-73.98784368459418!3d40.74844097932838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            title="CafeCraft Location"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="location__details" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <div className="location__detail-group">
                            <h3 className="location__detail-title">
                                <i className="fas fa-map-marker-alt"></i> Address
                            </h3>
                            <p className="location__detail-text">
                                123 Coffee Lane, Downtown District<br />
                                New York, NY 10001
                            </p>
                        </div>

                        <div className="location__detail-group">
                            <h3 className="location__detail-title">
                                <i className="fas fa-phone-alt"></i> Contact
                            </h3>
                            <p className="location__detail-text">
                                Phone: +1 (555) 123-4567<br />
                                Email: hello@cafecraft.com
                            </p>
                        </div>

                        <div className="location__detail-group">
                            <h3 className="location__detail-title">
                                <i className="fas fa-clock"></i> Opening Hours
                            </h3>
                            <div className="location__hours-list">
                                <div className="location__hours-item">
                                    <span>Monday – Friday</span>
                                    <span>7:00 AM – 10:00 PM</span>
                                </div>
                                <div className="location__hours-item">
                                    <span>Saturday</span>
                                    <span>8:00 AM – 11:00 PM</span>
                                </div>
                                <div className="location__hours-item">
                                    <span>Sunday</span>
                                    <span>9:00 AM – 9:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
