import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Navigator.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import TestComponent from './routes/TestComponent.tsx';

const router=createBrowserRouter([{
  path:'/',
  element: <Root/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'link1',
      element:<TestComponent/>
    }
  ]
},])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
