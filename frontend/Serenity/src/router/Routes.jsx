import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import AppPage from '../pages/AppPage/AppPage';
import ExercisePage from '../pages/ExercisePage/ExercisePage';
const router = createBrowserRouter([
  { path: '', Component: Homepage },
  { path: '/app', Component: AppPage },
  { path: '/exercise', Component: ExercisePage },
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
