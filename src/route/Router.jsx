import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/HomePage'
import ChatroomPage from '../Pages/ChatroomPage'
import BoostPage from '../Pages/BoostPage'
import { useAuth } from '../contexts/AuthContext'

// import ShopPage from '../Pages/ShopPage'
// import Payment from '../Pages/'

import Layout from '../layouts/Container'



export default function Router() {
    const { user } = useAuth()
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
                { path: '/chat/:id', element:<ChatroomPage /> },
                // { path: '/chat/:id', element: user ? <ChatroomPage /> : <Navigate to='/' /> },
                // { path: '/Boost', element: <BoostPage /> },
                // { path: '/shop', element: <ShopPage /> }
                // { path: '/chat', element: <ChatPage /> },
                // { path: '/payment', element: <PaymentPage /> },
            ],
        },
    ])
    return <RouterProvider router={router} />
}
