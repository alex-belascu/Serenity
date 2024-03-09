import React from 'react';
import video from '../../assets/video.mp4';
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation';
import RandomTextGenerator from '../../components/TextGenerator/TextGenerator';
import { Button } from '@radix-ui/themes';

function ExercisePage() {
  return (
    <div className="exercise-page">
      <Button
        style={{
          position: 'absolute',
          left: 20,
          top: 10,
        }}
        color="teal"
      >
        GO BACK
      </Button>
      <video
        style={{ width: '100%', objectFit: 'cover', overflow: 'hidden' }}
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="exercise-content">
        <RandomTextGenerator />
        <LottieAnimation />
      </div>

      <div className="navigatebtn">
        <Button>Go Back</Button>
      </div>
    </div>
  );
}

export default ExercisePage;
