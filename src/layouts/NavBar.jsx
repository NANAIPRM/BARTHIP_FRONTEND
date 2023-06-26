import Login from './Modals/Login'
import Boost from './Modals/Boost'
import { Link } from 'react-router-dom'
import Music from './Modals/Music'
import { IiHomeS } from '../icons'
import { IiLogout } from '../icons'
import useAuth from '../hooks/useAuth'
import socket from '../configs/socket'

export default function Navbar() {
  const { user, logout } = useAuth()
  const handleLogout = () => {
    logout()
    socket.disconnect()
  }

  const handleDisconnect = () => {
    socket.disconnect()
  }
  return (
    <>
      <button>
        <Link to="/" onClick={handleDisconnect}>
          <IiHomeS className="w-12 fixed top-5 left-5" />
        </Link>
      </button>
      {/* <button className="cursor-pointer flex justify-center items-center p-3 w-32 z-50 fixed top-5 left-20">
                <p className="font-semibold">ออกจากโต๊ะ</p>
            </button> */}

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
