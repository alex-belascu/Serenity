/* eslint-disable react/prop-types */
import React from 'react';
import { Button, TextField, Card } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

const RegisterForm = ({
  isExpanded,
  setLoginExpanded,
  setRegisterExpanded,
}) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRetype, setPasswordRetype] = React.useState('');
  const [name, setName] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordRetypeChange = (e) => {
    setPasswordRetype(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Password Retype: " + passwordRetype);
    console.log("Passwords match: " + (password === passwordRetype));

    if (password !== passwordRetype) {
      setErrorMsg('Passwords do not match');
    } else if (name === '') {
      setErrorMsg('Please enter a name');
    } else if (email === '') {
      setErrorMsg('Please enter an email');
    } else if (password === '') {
      setErrorMsg('Please enter a password');
    } else {
      register();
      setErrorMsg('');
    }
  };

  const register = async () => {
    if (password === passwordRetype) {
      try {
        const response = await axios.post(
          'http://localhost:8080/users/register',
          {
            email: email,
            name: name,
            password: password,
          },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (response.data.statusCodeValue === 200) {
          setErrorMsg('');
          setRegisterExpanded(false);
          setLoginExpanded(true);
        } else {
          setErrorMsg(response.data.body);
        }
        console.log('Registration successful:', response.data);
        // Optionally, you can perform additional actions after successful registration
      } catch (error) {
        setErrorMsg(error.response.data.message);
        console.error('Registration failed:', error);
      }
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="classic" className="signup-card">
                <form onSubmit={handleSubmit}>
                  <p
                    style={{
                      color: 'red',
                      display: 'flex',
                      minHeight: '1.2rem',
                      fontSize: '.8em',
                    }}
                  >
                    {errorMsg}
                  </p>
                  <div className="name">
                    <TextField.Input
                      type="text"
                      id="name"
                      placeholder="Name"
                      onChange={handleNameChange}
                    />
                  </div>

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

                  <div className="password">
                    <TextField.Input
                      placeholder="Retype Password"
                      type="password"
                      id="retype-password"
                      onChange={handlePasswordRetypeChange}
                    />
                  </div>

                  <p>
                    Already have an account? Login{' '}
                    <span
                      style={{ color: 'teal', cursor: 'pointer' }}
                      onClick={() => {
                        setLoginExpanded(true);
                        setRegisterExpanded(false);
                      }}
                    >
                      here.
                    </span>
                  </p>

                  <Button
                    type="submit"
                    color="teal"
                    size={'3'}
                    style={{ marginTop: '10px' }}
                  >
                    Sign Up
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
            style={{ visibility: 'hidden' }}
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

export default RegisterForm;
