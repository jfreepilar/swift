import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout.tsx'
import { Home } from './pages/Home.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { Deals } from './pages/Deals.tsx';

const router = createBrowserRouter ([
  {
    path: "/swift/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs />},
      { path: "deals", element: <Deals />},
      
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </Provider>
)
