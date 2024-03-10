import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import AppPage from '../pages/AppPage/AppPage';
import ExercisePage from '../pages/ExercisePage/ExercisePage';
import { useAuthCheck } from './useAuthCheck';

const router = createBrowserRouter([
  { path: '', Component: Homepage },
  { path: '/app', Component: AppPage },
  { path: '/exercise', Component: ExercisePage },
]);

const Routes = () => {
  const authcheck = useAuthCheck();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
