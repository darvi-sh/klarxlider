import React from 'react';
import Carousel from './components/Carousel';

import './App.css';

function App() {
  const slides = [
    "https://via.placeholder.com/350x150/def",
    "https://via.placeholder.com/350x150/cde",
    "https://via.placeholder.com/350x150/bcd",
    "https://via.placeholder.com/350x150/abc",
    "https://via.placeholder.com/350x150/9ab",
    "https://via.placeholder.com/350x150/89a",
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
