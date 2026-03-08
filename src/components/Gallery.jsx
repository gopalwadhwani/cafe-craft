import galleryData from '../data/galleryData';
import '../styles/gallery.css';

const Gallery = () => {
    const galleryItems = galleryData;

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
