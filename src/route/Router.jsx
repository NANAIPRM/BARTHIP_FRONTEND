import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/HomePage'
import ChatroomPage from '../Pages/ChatroomPage'
import BoostPage from '../Pages/BoostPage'

import ShopPage from '../Pages/ShopPage'
import PaymentPage from '../Pages/PaymentPage'

import Layout from '../layouts/Container'

const router = createBrowserRouter([
  {
    path: '/login',

    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <Layout />,

    children: [
      { path: '/', element: <HomePage /> },
      { path: '/chat', element: <ChatroomPage /> },
      { path: '/chat/:id', element: <ChatroomPage /> },
      { path: '/Boost', element: <BoostPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/payment', element: <PaymentPage /> },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
