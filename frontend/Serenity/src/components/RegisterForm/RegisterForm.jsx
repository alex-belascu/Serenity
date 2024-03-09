/* eslint-disable react/prop-types */
import React from 'react';
import { Button, TextField, Card } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';

const RegisterForm = ({ isExpanded, setIsExpanded }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleExpand = (e) => {
    if (!e.target.matches('input')) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div className="card" onClick={toggleExpand}>
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
                  <div className="name">
                    <TextField.Input
                      type="text"
                      id="name"
                      placeholder="Name"
                      onChange={handleEmailChange}
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
                      onChange={handlePasswordChange}
                    />
                  </div>

                  <p>
                    Already have an account? Login{' '}
                    <span style={{ color: 'blue', cursor: 'pointer' }}>
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
          >
            <Button color="teal" size={'3'} onClick={toggleExpand}>
              Sign Up
            </Button>
            <Button color="teal" variant="surface" size={'3'}>
              Login
            </Button>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            className="btn-wrapper fade-in"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button color="teal" size={'3'} onClick={toggleExpand}>
              Sign Up
            </Button>
            <Button color="teal" variant="surface" size={'3'}>
              Login
            </Button>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default RegisterForm;
