/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import Indicator from '../../assets/animation.json';
import './lottieAnimation.css';

// eslint-disable-next-line react/prop-types
const LottieAnimation = ({
  isPlaying,
  setIsPlaying,
  selectedExerciseValue,
  durationRounds,
  setDurationRounds,
  selectedExercise,
  setExercise,
}) => {
  const [timer, setTimer] = React.useState(0);
  const lottieRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: false, // Set autoplay to false initially
    animationData: Indicator,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (isPlaying) {
      setIsPlaying(true); // Set isPlaying to true if it's not already true
    }
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    console.log(isPlaying);
    if (isPlaying) {
      console.log(isPlaying);
      const intervalId = setInterval(() => {
        // Code to execute every 1 second
        console.log('Effect triggered!');
        console.log(selectedExercise);
        if (selectedExercise === 'better sleep') {
          console.log(selectedExercise);
          if (timer !== 240) {
            setTimer(timer + 1);
          }
        }

        if (selectedExercise === 'infinite meditation') {
          setTimer(timer + 1);
        }

        if (timer !== 60 * 6) {
          if (selectedExercise === 'relieve stress') {
            setTimer(timer + 1);
          }
        }

        if (selectedExercise === 'better sleep' && timer === 240) {
          console.log(selectedExercise);
          setExercise('completed');
          console.log(selectedExercise);
          setIsPlaying(false);
          setExercise('completed');
          setTimer(0);
        }

        if (selectedExercise === 'relieve stress' && timer === 360) {
          setIsPlaying(false);
          setExercise('completed');
        }
      }, 1000); // 1000 milliseconds = 1 second

      // Cleanup function to clear the interval when component unmounts
      return () => clearInterval(intervalId);
    }
  }, [timer, isPlaying, selectedExercise]); // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    setTimer(0);
  }, [selectedExercise]);

  const handleClick = () => {
    setIsPlaying(!isPlaying); // Toggle the isPlaying state when clicked
  };

  return (
    <div className="lottie-animation" onClick={handleClick}>
      {selectedExercise === 'completed' && (
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>
          You Completed The Exercise Select A New Exercise To Begin
        </h2>
      )}
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>{timer}</h3>
      <Lottie
        ref={lottieRef}
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={400}
        width={400}
        speed={selectedExerciseValue}
        isPaused={!isPlaying} // Pause the animation if isPlaying is false
      />
    </div>
  );
};

export default LottieAnimation;
