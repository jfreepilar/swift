import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </Provider>
)
