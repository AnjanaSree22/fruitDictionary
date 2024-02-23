
import React, { useState } from 'react';

function Flexbox({ image, fruitname, price, onClick }) {
  const [numberInput, setNumberInput] = useState('');

  const handleAddClick = () => {
    onClick(fruitname,numberInput)
};


  return (
    <div className='parent'>
      <div className='cardWrapper'>
        <img className='image' src={image} alt={fruitname} />
        <div className='details'>
          <p>{fruitname}</p>
          <p className='rate'>{price}</p>
        </div>
        <div className="rateBox">
          <input
            type="number"
            min="1"
            max="100"
            className="rateIncDec"
            value={numberInput}
          onChange={(e)=>setNumberInput(e.target.value)}
          />
          <button className="plusButton" onClick={handleAddClick}>+</button>
        </div>
      </div>
    </div>
    
  );
}

export default Flexbox;
