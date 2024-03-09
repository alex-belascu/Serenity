import React, { useState } from 'react';
import './breathingExercise.css';

const BreathingExercise = () => {
  const [breathingState, setBreathingState] = useState('inhale');

  const handleBreathing = () => {
    if (breathingState === 'inhale') {
      setBreathingState('hold');
      setTimeout(() => setBreathingState('exhale'), 4000); // Change to exhale after 4 seconds
    } else if (breathingState === 'exhale') {
      setBreathingState('inhale');
    }
  };

  return (
    <div className="breathing-container">
      <div
        className={`breathing-circle ${breathingState}`}
        onClick={handleBreathing}
      >
        <div className="breathing-text">{breathingState.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default BreathingExercise;
