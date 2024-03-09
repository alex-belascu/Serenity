import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Homepage from '../pages/Homepage/Homepage';
import AppPage from '../pages/AppPage/AppPage';
import '../index.css';
const router = createBrowserRouter([
  { path: '', Component: Homepage },
  { path: '/app', Component: AppPage },
]);

const AnimatedRoutes = () => {
  return (
    <RouterProvider router={router}>
      <Routes>
        <Route
          path="/*"
          element={
            <TransitionGroup>
              <CSSTransition classNames="roomtotop" timeout={300}>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/app" element={<AppPage />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </RouterProvider>
  );
};

export default AnimatedRoutes;
