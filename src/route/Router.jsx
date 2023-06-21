import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/HomePage'
import ChatPage from '../Pages/ChatPage'
import ChatroomPage from '../features/ChatPage/ChatroomPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',

        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },

    // children: [
    //   { path: "/home", element: <HomePage /> },
    // { path: "/shop", element: <ShopPage /> },
    // { path: "/payment", element: <PaymentPage /> },
    // ],
    {
        path: '/chat',
        element: <ChatroomPage />,
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
