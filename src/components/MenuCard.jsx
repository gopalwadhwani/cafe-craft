const MenuCard = ({ item }) => {
    return (
        <div className="menu-card" data-aos="fade-up">
            <div className="menu-card__image-wrapper">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="menu-card__category">{item.category}</span>
            </div>
            <div className="menu-card__content">
                <h3 className="menu-card__name">{item.name}</h3>
                <p className="menu-card__description">{item.description}</p>
                <div className="menu-card__footer">
                    <span className="menu-card__price">${item.price.toFixed(2)}</span>
                    <button className="menu-card__add-btn" aria-label={`Add ${item.name} to order`}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
