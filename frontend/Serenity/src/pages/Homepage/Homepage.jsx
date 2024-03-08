import './homepage.css';
import React from 'react';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Homepage = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="homepage-container">
      <div className="container ">
        <div className="header-wrapper fade-in">
          <div className="header">
            <h1>Serenity</h1>
            <img src="src/assets/logo.png" className="logo" />
          </div>

          <h2 className="description">Relieve Stress By Breathing</h2>
        </div>

        <RegisterForm isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>
    </div>
  );
};

export default Homepage;
