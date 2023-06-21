import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/HomePage'
import ChatPage from '../Pages/ChatPage'


// import ShopPage from '../Pages/ShopPage'
// import BoostPage from '../Pages/BoostPage'
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
            { path: '/', element: <ChatPage /> },
            // { path: '/shop', element: <ShopPage /> }
            // { path: '/chat', element: <ChatPage /> },
            // { path: '/Boost', element: <BoostPage /> },
            // { path: '/payment', element: <PaymentPage /> },
        ],

    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
