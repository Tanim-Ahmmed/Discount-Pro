import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Root from "../Root";
import Brands from "../layouts/Brands";
import Profile from "../layouts/Profile";
import About from "../layouts/About";
import Auth from "../layouts/Auth";
import Login from "../componants/Login";
import Register from "../componants/Register";


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
                element: <Profile></Profile>,
            },
            {
                path:"/about",
                element:<About></About>,
            },
            {
                path:"/auth",
                element:<Auth></Auth>,
                children:[
                  {
                    path:"/auth/login",
                    element:<Login></Login>,
                  },
                  {
                    path:"/auth/register",
                    element:<Register></Register>,
                  }
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