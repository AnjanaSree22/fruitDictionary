
import React, { useState } from 'react';
import Flexbox from './flex-box-calculation.js';
import appleImg from './assets/appleimg.jpg';
import bananaImg from './assets/bananaImg.jpg';
import datesImg from './assets/datesImg.jpg';
import grapesImg from './assets/grapesImg.jpg';
import './App.css';

function Main() {
    const [searchText, setSearchText] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [calories, setCalories] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const fruits = [
        { name: 'Apple', img: appleImg, rate: 81 },
        { name: 'Banana', img: bananaImg, rate: 159 },
        { name: 'Dates', img: datesImg, rate: 228 },
        { name: 'Grapes', img: grapesImg, rate: 200 }
    ];

    const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(searchText.toLowerCase()));

    const handleItemClick = (fruitname, quantity) => {
        const selectedFruit = fruits.find(fruit => fruit.name === fruitname);
        const fruitCalories = selectedFruit.rate * parseInt(quantity, 10);
        const newItem = {
            name: fruitname,
            quantity: quantity,
            calories: fruitCalories
        };
        setSelectedItems(prevItems => [...prevItems, newItem]);
        setCalories(prevCalories => prevCalories + fruitCalories);
        setTotalCalories(prevTotalCalories => prevTotalCalories + fruitCalories);
    };

    const handleRemoveItem = (index) => {
        const removedItem = selectedItems[index];
        setSelectedItems(prevItems => prevItems.filter((item, i) => i !== index));
        setCalories(prevCalories => prevCalories - removedItem.calories);
        setTotalCalories(prevTotalCalories => prevTotalCalories - removedItem.calories);
    };

    return (
        <div className='body'>
            <div className='searchElement'>
            <p className='searchName'>Search</p>
            <input
                type='text'
                placeholder='Find a food'
              
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            </div>

            <div className='whole'>
                <div className='container'>
                    {filteredFruits.map((data, index) =>
                        <Flexbox
                            key={index}
                            fruitname={data.name}
                            image={data.img}
                            price={data.rate}
                            onClick={handleItemClick}
                        />
                    )}
                </div>
                <div className='calc'>
                    <p>Today's food {totalCalories} cal</p>
                    <div className='appendDetails'>
                    {selectedItems.map((item, index) => (
                        <div className='all' key={index}>
                            {item.quantity} {item.name} = {item.calories}
                            <div className='Btn'>
                            <button onClick={() => handleRemoveItem(index)} className='cancelBtn'>×</button>
                            </div>

                            
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Main;
