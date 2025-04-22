import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <p>404 | Page Not Found</p>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-products',
        element: <AllProducts />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
    ],
  },
]);
