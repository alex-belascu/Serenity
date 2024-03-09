import React from 'react';
import video from '../../assets/video.mp4';
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation';
import RandomTextGenerator from '../../components/TextGenerator/TextGenerator';
import { Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

const ExercisePage = () => {
  const navigate = useNavigate();
  const navigateToApp = () => {
    navigate('/app');
  };

  return (
    <div className="exercise-page">
      <Button
        onClick={navigateToApp}
        style={{
          position: 'absolute',
          left: 20,
          top: 10,
          zIndex: 20,
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
    </div>
  );
};

export default ExercisePage;
