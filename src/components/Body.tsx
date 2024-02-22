import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Product from "./Product";

const appRouter = createBrowserRouter([
  {
        path: "/",
      element:<Home/>
    },
    {
        path: "/cart",
        element:<Cart/>
    },
    {
        path: "/product/:id",
        element:<Product/>
    }
]);

const Body = () => {
    return <div>
      
        <RouterProvider router={appRouter}/>
  </div>;
};
export default Body;
