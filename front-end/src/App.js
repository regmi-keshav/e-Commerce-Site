import React from "react";
import "./App.css";
import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import SignUp from "./features/auth/components/SignUp";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";
import ProductDetailPage from "./features/pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  // only for testing
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
