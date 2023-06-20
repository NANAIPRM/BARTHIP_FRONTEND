import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/login",

    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,

    // children: [
    //   { path: "/home", element: <HomePage /> },
    // { path: "/shop", element: <ShopPage /> },
    // { path: "/payment", element: <PaymentPage /> },
    // ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
