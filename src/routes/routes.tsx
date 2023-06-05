import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Home } from '../presentation/flows/SignedIn/Home';
import { Login } from '../presentation/flows/SignedOff/Login';
import { Register } from '../presentation/flows/SignedOff/Register';
import { About } from '../presentation/flows/SignedIn/About';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export const router = createBrowserRouter(routes);
