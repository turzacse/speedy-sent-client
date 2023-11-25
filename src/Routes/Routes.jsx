import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Secrete from "../Components/Secrete";
import PrivateRoute from "./PrivateRoute";


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
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Registration></Registration>
    }
  ]);