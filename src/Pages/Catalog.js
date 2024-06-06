import React, { useState } from 'react';
import './Catalog.css';

const Catalog = () => {
    const [categoryData, setCategoryData] = useState(null);

    const handleCategoryChange = async (category) => {  
        const categoryModule = await import(`../Components/CatalogCat/${category.charAt(0).toUpperCase() + category.slice(1)}.js`);  
        const categoryData = Array.isArray(categoryModule.default) ? categoryModule.default : [categoryModule.default]; // Преобразование в массив, если это не массив
        setCategoryData(categoryData);  
    };

    return (
        <div>
            <h1>Каталог товаров</h1>
            <div>
                <button className="catalog catalog-button" onClick={() => handleCategoryChange('candies')}>
                    Candies
                </button>
                <button className="catalog catalog-button" onClick={() => handleCategoryChange('jelly')}>
                    Jelly
                </button>
                {/* Добавьте другие кнопки для других категорий */}
            </div>
            
            <div className="catalog catalog-container">
                {categoryData && categoryData.map(item => (
                    <div key={item.id} className="catalog catalog-item">
                        <h3>{item.name}</h3>
                        <p className="price">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;


