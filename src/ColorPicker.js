// src/ColorPicker.js

import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      <button onClick={toggleColorList}>Pick a color</button>
      {selectedColor && (
        <div className="selected-color">
          Selected Color: <div className="color" style={{ backgroundColor: selectedColor }}></div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
