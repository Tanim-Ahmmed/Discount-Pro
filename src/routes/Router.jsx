import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import Root from "../Root";
import Brands from "../layouts/Brands";
import Profile from "../layouts/Profile";
import About from "../layouts/About";
import Auth from "../layouts/Auth";
import Login from "../componants/Login";
import Register from "../componants/Register";
import BrandDetails from "../componants/BrandDetails";
import PrivateRoute from "./PrivateRoute";


const Router =createBrowserRouter([


    {
        path: "/",
        element: <Root></Root>,
        children:[

            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch("/brandsData.json"),
            },
            {
                path:"/brands",
                element: <Brands></Brands>,
                loader: () => fetch("/brandsData.json"),
            },
            {
                path:"/profile",
                element:<PrivateRoute>
                          <Profile></Profile>
                       </PrivateRoute>
            },
            {
                path:"/about",
                element:<About></About>,
            },
            {
              path:"/brands/:id",
              element:  <PrivateRoute>
                            <BrandDetails></BrandDetails>
                       </PrivateRoute>,
              loader: () =>fetch("/brandsData.json"),
            },
            {
                path:"/auth",
                element:<Auth></Auth>,
                children:[
                  {
                    path:"login",
                    element:<Login></Login>,
                  },
                  {
                    path:"register",
                    element:<Register></Register>,
                  },
                  {
                    index: true, 
                    element: <Navigate to="login" replace />,
                  },
                ],
            },
            {
                path: "*",
                element: <h2>error</h2>,
            },
        


        ]
      },
]);

export default Router;