import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
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
