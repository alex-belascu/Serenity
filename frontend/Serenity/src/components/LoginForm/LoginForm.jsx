/* eslint-disable react/prop-types */
import React from "react";
import { Button, TextField, Card } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";

const LoginForm = ({ isExpanded, setLoginExpanded, setRegisterExpanded }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    console.log("Password:", password);
    if (email === "" || password === "") {
      setErrorMsg("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="card">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="card-content"
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="classic" className="signup-card">
                <form onSubmit={handleSubmit}>
                  <p
                    style={{
                      color: "red",
                      display: "flex",
                      minHeight: "1.2rem",
                      fontSize: ".8em",
                    }}
                  >
                    {errorMsg}
                  </p>
                  <div className="email">
                    <TextField.Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleEmailChange}
                    />
                  </div>

                  <div className="password">
                    <TextField.Input
                      placeholder="Password"
                      type="password"
                      id="password"
                      onChange={handlePasswordChange}
                    />
                  </div>

                  <p>
                    Don't have an account? Register{" "}
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        setLoginExpanded(false);
                        setRegisterExpanded(true);
                      }}
                    >
                      here.
                    </span>
                  </p>

                  <Button
                    type="submit"
                    color="teal"
                    size={"3"}
                    style={{ marginTop: "10px" }}
                  >
                  Login
                  </Button>
                </form>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isExpanded ? (
        <AnimatePresence>
          <motion.div
            className="btn-wrapper fade-in"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ visibility: "hidden" }}
          ></motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            className="btn-wrapper fade-in"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default LoginForm;
