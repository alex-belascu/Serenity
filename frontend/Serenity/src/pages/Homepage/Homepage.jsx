import "./homepage.css";
import React from "react";

import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Button } from "@radix-ui/themes";

const Homepage = () => {
  const [isLoginExpanded, setLoginExpanded] = React.useState(false);
  const [isRegisterExpanded, setRegisterExpanded] = React.useState(false);
  const [isButtonExpanded, setButtonExpanded] = React.useState(true);

  return (
    <div className="homepage-container">
      <div className="container ">
        <div
          className="header-wrapper fade-in"
          onClick={() => {
            setRegisterExpanded(false);
            setLoginExpanded(false);
            setButtonExpanded(true);
          }}
        >
          <div className="header">
            <h1>Serenity</h1>
            <img src="src/assets/logo.png" className="logo" />
          </div>

          <h2 className="description">Relieve Stress By Breathing</h2>
        </div>

        {isButtonExpanded ? (
          <div className="buttons">
            <Button
              color="teal"
              size={"3"}
              onClick={(e) => {
                setRegisterExpanded(!isRegisterExpanded);
                setButtonExpanded(!isButtonExpanded);
                console.log(e.target);
              }}
            >
              Sign Up
            </Button>
            <Button
              color="teal"
              variant="surface"
              size={"3"}
              onClick={() => {
                setLoginExpanded(!isLoginExpanded);
                setButtonExpanded(!isButtonExpanded);
              }}
            >
              Login
            </Button>
          </div>
        ) : null}

        {isRegisterExpanded ? (
          <RegisterForm
            isExpanded={isRegisterExpanded}
            setLoginExpanded={setLoginExpanded}
            setRegisterExpanded={setRegisterExpanded}
          />
        ) : null}
        {isLoginExpanded ? (
          <LoginForm
            isExpanded={isLoginExpanded}
            setLoginExpanded={setLoginExpanded}
            setRegisterExpanded={setRegisterExpanded}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Homepage;
