import React, { useState } from 'react';
import Candies from '../Components/CatalogCat/Candies';
import Jelly from '../Components/CatalogCat/Jelly';
import Bakery from '../Components/CatalogCat/Bakery';
import Confectionery from '../Components/CatalogCat/Confectionery';
import Drinks from '../Components/CatalogCat/Drinks';
import ImportPr from '../Components/CatalogCat/ImportPr';
import OrderSweets from '../Components/CatalogCat/OrderSweets';
// Импортируйте другие компоненты для остальных категорий товаров

import "./Catalog.css";

const CatalogPage = () => {
    const [category, setCategory] = useState('candies'); // Изначально выбрана категория "конфеты"

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div>
            <h1>Каталог товаров</h1>
            <div>
                <button onClick={() => handleCategoryChange('candies')}>Конфеты</button>
                <button onClick={() => handleCategoryChange('jelly')}>Мармелад</button>
                <button onClick={() => handleCategoryChange('bakery')}>Пекарные изделия</button>
                <button onClick={() => handleCategoryChange('confectionery')}>Кондитерские изделия</button>
                <button onClick={() => handleCategoryChange('orderSweets')}>Сладости на заказ</button>
                <button onClick={() => handleCategoryChange('importPr')}>Импортные сладости</button>
                <button onClick={() => handleCategoryChange('drinks')}>Напитки</button>
                {/* Добавьте кнопки для других категорий товаров */}
            </div>

            {category === 'candies' && <Candies />}
            {category === 'jelly' && <Jelly />}
            {category === 'bakery' && <Bakery />}
            {category === 'confectionery' && <Confectionery />}
            {category === 'ordersweets' && <OrderSweets />}
            {category === 'importPr' && <ImportPr />}
            {category === 'drinks' && <Drinks />}
            {/* Добавьте условия для других категорий товаров */}
        </div>
    );
};

export default CatalogPage;
