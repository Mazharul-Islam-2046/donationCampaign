import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Donation from './Pages/Donation/Donation.JSX';
import Root from './Pages/Root/Root';
import Statistics from './Pages/Statistics/Statistics';
import Home from './Pages/Home/Home'
import DonationDetailsPage from './Pages/donationDetailsPage/donationDetailsPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      }, 
      {
        path: '/donations',
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/donation/:id',
        element: <DonationDetailsPage></DonationDetailsPage>,
        loader: () => fetch('/data.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
