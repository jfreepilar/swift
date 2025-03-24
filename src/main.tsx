import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout.tsx'
import { Home } from './pages/Home.tsx';

const router = createBrowserRouter ([
  {
    path: "main",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
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
