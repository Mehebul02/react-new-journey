import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Roots from "../roots/Roots";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children:[
        {path:'/',
            element:<Home/>
        }
      ]
    },
  ]);

  export default router