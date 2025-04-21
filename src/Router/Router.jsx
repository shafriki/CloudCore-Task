import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        errorElement: <p>error page</p>,
        children: [
            {
                path: '/',
                element:<Home />,
            },
            {
                path: '/all-products',
                element:<AllProducts />
            }
        ]
    }
])