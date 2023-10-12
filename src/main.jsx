import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Resorts from './Pages/Resorts/Resorts';
import Hotels from './Pages/Hotels/Hotels';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import Rooms from './Pages/Rooms/Rooms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/resorts',
        element: <Resorts></Resorts>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/hotels',
        element: <Hotels></Hotels>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
