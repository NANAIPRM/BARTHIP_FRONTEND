import Login from './Modals/Login'
import Boost from './Modals/Boost'
import { Link } from 'react-router-dom'
import Music from './Modals/Music'
import { IiHomeS } from '../icons'
import { IiLogout } from '../icons'
import useAuth from '../hooks/useAuth'
import socket from '../configs/socket'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const { user, logout } = useAuth()
  const handleLogout = () => {
    logout()
    socket.emit('leaveRoom', room)
    navigate('/')
    window.location.reload()
  }
  const location = useLocation()
  const room = location?.state?.room

  const handleDisconnect = () => {
    socket.emit('leaveRoom', room)
    navigate('/')
    window.location.reload()
  }
  return (
    <>
      <button>
        <Link to="/" onClick={handleDisconnect}>
          <IiHomeS className="w-12 fixed top-5 left-5" />
        </Link>
      </button>
      <div className="flex fixed top-5 right-2 z-50 cursor-pointer ">
        <Boost />
        <Music />
        {user ? (
          <div className="w-20" onClick={handleLogout}>
            <IiLogout />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  )
}
