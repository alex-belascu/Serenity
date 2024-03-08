import './homepage.css';
import { Button } from '@radix-ui/themes';

const Homepage = () => {
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

        <div className="btn-wrapper fade-in">
          <Button color="teal" size={'3'}>
            Sign Up
          </Button>
          <Button color="teal" variant="surface" size={'3'}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
