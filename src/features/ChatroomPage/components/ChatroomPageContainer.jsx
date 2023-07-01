import Button from '../../../components/button'
import {
  IiFace,
  IiShopping,
  IiBoy,
  IiBeer,
  IiLogo,
  IiBGDark,
  IiBGcafe,
} from '../../../icons'
import Sponsors from './Sponsors'
import Chatbox from './Chatbox'
import { useContext } from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import UserAvatar from '../../../components/UserAvatar'
import { useLocation } from 'react-router-dom'
import socket from '../../../configs/socket'
import { useNavigate } from 'react-router-dom'

export default function ChatroomPage() {
  const { userDrink } = useContext(DrinkContext)
  const navigate = useNavigate()
  const location = useLocation()
  const room = location?.state?.room
  const leaveRoom = async () => {
    await socket.emit('leaveRoom', room)
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 1000)
  }

  return (
    <>
      <div className="flex justify-center lg:px-0 ">
        <div className="max-w-7xl w-full mt-7">
          <div className="flex justify-center mb-3 relative">
            <IiLogo className="w-40" />
          </div>
          <div className="flex max-w-5xl lg:flex-row w-full mx-auto relative">
            <div className="left-4 top-0 flex items-center absolute">
              {room}
              <IiFace className="h-5 toggle" type="checkbox" checked />
              <div className="flex">
                <IiShopping className="w-24" />
              </div>
            </div>

            <div className=" w-full flex flex-col  px-0 sm:px-10 justify-center">
              <div className="relative top-36 ">
                <IiBGcafe className="absolute bottom-32" />
                <div className="mb-56">
                  <UserAvatar drink={userDrink} />
                </div>
              </div>

              <div className="hidden lg:block mb-4 mt-8 text-center">
                <br />
                <p className="text-sm">
                  👋หากไม่มีการส่งข้อความนานเกิน 5 นาที
                  อาจโดนผู้เล่นคนอื่นเตะออกได้
                </p>
              </div>
              <br />
              <button
                className=" border-2 border-black w-full rounded-md bg-red-400 text-white"
                onClick={() => leaveRoom()}
              >
                ออกจากห้อง
              </button>
            </div>
            <Chatbox />
          </div>
          <div className="flex flex-col items-center mt-3">
            <p className="text-sm mb-1">หากระบบก่งก๊ง กดปุ่ม Sync เล้ย</p>
            <div className="w-40">
              <Button text="Sync" />
            </div>
          </div>
        </div>
      </div>
      <Sponsors />
      {/* </div> */}
    </>
  )
}
