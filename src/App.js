import React from 'react';
import Carousel from './components/Carousel';

import './App.css';

function App() {
  const slides = [
    "https://via.placeholder.com/350x150/def",
    "https://via.placeholder.com/350x150/fed",
    "https://via.placeholder.com/350x150/dfe",
    "https://via.placeholder.com/350x150/fde",
    "https://via.placeholder.com/350x150/edf",
    "https://via.placeholder.com/350x150/efd",
  ];

  return (
    <div className="app">
      <Carousel
        slides={ slides }
      />
    </div>
  );
}

export default App;
