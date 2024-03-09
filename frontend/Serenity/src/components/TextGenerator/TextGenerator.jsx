// RandomTextGenerator.js
import { useState, useEffect } from 'react';
import './textGenerator.css'; // Import CSS file for RandomTextGenerator
import textsData from './text.json'; // Import JSON file with texts

function RandomTextGenerator() {
  const [texts, setTexts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTexts(textsData.texts);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textsData.texts.length);
    }, 15000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="random-text-container">
      <div className="random-text">{texts[currentIndex]}</div>
    </div>
  );
}

export default RandomTextGenerator;
