// RandomTextGenerator.js
import { useState, useEffect } from 'react';
import './textGenerator.css'; // Import CSS file for RandomTextGenerator
import textsData from './text.json'; // Import JSON file with texts

function RandomTextGenerator() {
  const [texts, setTexts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility for fade-in/fade-out animation

  useEffect(() => {
    setTexts(textsData.texts);
    const interval = setInterval(() => {
      setIsVisible(false); // Trigger fade-out animation
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % textsData.texts.length
        );
        setIsVisible(true); // Trigger fade-in animation
      }, 500); // Duration of fade-out animation
    }, 15000); // Change text every 15 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="random-text-container">
      {isVisible && <div className="random-text">{texts[currentIndex]}</div>}
    </div>
  );
}

export default RandomTextGenerator;
