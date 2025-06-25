import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout.tsx';
import { Home } from '../pages/Home.tsx';
import { AboutUs } from '../pages/AboutUs.tsx';
import { Deals } from '../pages/Deals.tsx';
import { Login } from '../pages/Login.tsx';
import { AuthLayout } from './AuthLayout.tsx';

export const router = createBrowserRouter([
  {
    path: "/swift",
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about-us", element: <AboutUs /> },
          { path: "deals", element: <Deals /> }
        ]
      },
      {
        path: "login",
        element: <AuthLayout />,
        children: [
          { index: true, element: <Login /> }
        ]
      }
    ]
  }
]);
