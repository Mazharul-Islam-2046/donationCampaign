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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/data.json')
      }, 
      {
        path: '/donations',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donation/:id',
        element: <DonationDetailsPage></DonationDetailsPage>,
        loader: () => fetch('/public/data.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)