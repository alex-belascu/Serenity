import React from 'react';
import Lottie from 'react-lottie';
import Indicator from '../../assets/animation.json';
import './lottieAnimation.css';
const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: Indicator,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lottie-animation">
      <Lottie options={defaultOptions} height={400} width={400} speed={0.5} />
    </div>
  );
};

export default LottieAnimation;
