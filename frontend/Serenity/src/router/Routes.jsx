import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import AppPage from '../pages/AppPage/AppPage';

const router = createBrowserRouter([
  { path: '', Component: Homepage },
  { path: '/app', Component: AppPage },
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
