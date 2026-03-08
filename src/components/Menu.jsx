import { useState } from 'react';
import menuData from '../data/menuData';
import MenuCard from './MenuCard';
import '../styles/menu.css';

const categories = ['All', 'Coffee', 'Tea', 'Desserts', 'Snacks'];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    return (
        <section className="menu section-padding" id="menu">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">Our Menu</span>
                    <h2 className="section-title">Explore Our Crafted Selection</h2>
                    <p className="section-description">
                        From bold espressos to delicate teas and artisanal pastries — each item
                        is crafted with care and the finest ingredients.
                    </p>
                </div>

                <div className="menu__filters" data-aos="fade-up" data-aos-delay="100">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`menu__filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="menu__grid">
                    {filteredItems.map((item, index) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
