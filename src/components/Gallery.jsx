import '../styles/gallery.css';

const Gallery = () => {
    const galleryItems = [
        { src: '/images/gallery-interior.png', caption: 'Our Cozy Interior' },
        { src: '/images/gallery-coffee.png', caption: 'Artisan Coffee' },
        { src: '/images/gallery-pastries.png', caption: 'Fresh Pastries' },
        { src: '/images/gallery-beans.png', caption: 'Premium Beans' },
        { src: '/images/about-barista.png', caption: 'Expert Baristas' },
    ];

    return (
        <section className="gallery section-padding" id="gallery">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Gallery</span>
                    <h2 className="section-title">A Glimpse Into CafeCraft</h2>
                    <p className="section-description">
                        Step inside our world of handcrafted coffee, cozy corners, and unforgettable moments.
                    </p>
                </div>

                <div className="gallery__grid" data-aos="fade-up" data-aos-delay="200">
                    {galleryItems.map((item, index) => (
                        <div className="gallery__item" key={index}>
                            <img src={item.src} alt={item.caption} loading="lazy" />
                            <div className="gallery__item-overlay">
                                <span className="gallery__item-caption">{item.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
