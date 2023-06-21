import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/HomePage'
import ChatPage from '../Pages/ChatPage'
import BoostPage from '../Pages/BoostPage'

// import ShopPage from '../Pages/ShopPage'
// import Payment from '../Pages/'

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
            { path: '/chat', element: <ChatPage /> },
            { path: '/Boost', element: <BoostPage /> },
            // { path: '/shop', element: <ShopPage /> }
            // { path: '/chat', element: <ChatPage /> },
            // { path: '/payment', element: <PaymentPage /> },
        ],
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
