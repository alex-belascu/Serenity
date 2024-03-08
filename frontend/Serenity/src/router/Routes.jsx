import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const router = createBrowserRouter([{ path: '', Component: Homepage }]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
