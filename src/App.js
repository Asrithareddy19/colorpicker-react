// src/App.js

import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'green', 'blue','yellow','pink','skyblue','orange', 'purple','brown','grey'];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
