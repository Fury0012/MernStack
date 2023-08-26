import React, { useState } from 'react';
import './BoxGenerator.css';

function BoxGenerator() {
const [color, setColor] = useState('');
const [boxes, setBoxes] = useState([]);

const addBox = () => {
    if (color.trim() !== '') {
    setBoxes(prevBoxes => [...prevBoxes, color]);
    setColor('');
    }
};

return (
    <div className="box-generator">
    <h2>Box Generator</h2>
    <div className="input-container">
        <label>Color: </label>
        <input
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
        />
        <button onClick={addBox}>Add Box</button>
    </div>
    <div className="boxes">
        {boxes.map((boxColor, index) => (
        <div
            key={index}
            className="box"
            style={{ backgroundColor: boxColor }}
        ></div>
        ))}
    </div>
    </div>
);
}

export default BoxGenerator;
