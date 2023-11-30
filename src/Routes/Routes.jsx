import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Secrete from "../Components/Secrete";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Book from "../Pages/Dashboard/User/Book/Book";
import Profile from "../Pages/Dashboard/User/Profile/Profile";
import MyParcel from "../Pages/Dashboard/User/MyParcel/MyParcel";
import AllParcel from "../Pages/Dashboard/Admin/AllParcel/AllParcel";
import AllDeliveryMen from "../Pages/Dashboard/Admin/AllDeliveryMen/AllDeliveryMen";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import MyDelivery from "../Pages/Dashboard/DelivaryMen/MyDelivery/MyDelivery";
import Reviews from "../Pages/Dashboard/DelivaryMen/Reviews/Reviews";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/private",
          element: <PrivateRoute><Secrete></Secrete></PrivateRoute>
        }
      ]
    },


    // dashboard routes 
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // user route 
        {
          path: "book",
          element: <Book></Book>
        },
        {
          path: "myparcel",
          element: <MyParcel></MyParcel>
        },
        {
          path: 'profile',
          element: <Profile></Profile>
        },
        // admin route 
        {
          path: "allparcels",
          element: <AllParcel></AllParcel>
        },
        {
          path: 'alldeliverymen',
          element: <AllDeliveryMen></AllDeliveryMen>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },

        // Delivery Men Routes 
        {
          path: 'mydelivery',
          element: <MyDelivery></MyDelivery>
        },
        {
          path: 'reviews',
          element: <Reviews></Reviews>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Registration></Registration>
    }
  ]);