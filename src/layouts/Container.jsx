import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="relative">
            <div className="fixed top-0 z-50">
                <NavBar />
            </div>
            <div className="py-20">
                <Outlet />
            </div>
            <div className="fixed bottom-0 z-50">
                <Footer />
            </div>
        </div>
    )
}
