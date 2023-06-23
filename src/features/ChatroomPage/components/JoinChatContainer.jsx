import React from 'react'
import Random from '../../../layouts/Modals/Random'
import { Link } from 'react-router-dom'
import { IiBG, IiMessageBox } from '../../../icons'

function JoinChatContainer() {
  return (
    <div className="bg-yellow-300  mx-auto relative rounded-md">
      <div className="flex justify-center mt-0 lg:mt-4">
        <p className="text-xl">72 Users are Online</p>
      </div>
      <div className=" justify-center mt-0 lg:mt-4">
        {/* <img
            className="-z-1 absolute w-[550px] top-4"
            src="src/assets/iChatBox.svg"
            alt="chatbox"
            /> */}
        <div className="px-8 py-2">
          <p className="mt-3 text-xl px-4">อยากทำอะไร</p>
          <IiBG />

          {/* <Button text="แรนด้อมไปคุยกับเพื่อนใหม่" /> */}
          <Random />
          {/* <Button text="สร้างห้องใหม่คุยกับเพื่อน" /> */}
          <Link to="/chat">
            <div className="cursor-pointer flex justify-center items-center ">
              <IiMessageBox className="w-[369px]" />
              <div className="w-full py-2 px-16 absolute text-lg flex justify-center">
                สร้างห้องใหม่คุยกับเพื่อน
              </div>
            </div>
          </Link>

          <div className="flex justify-center">
            <p className="font-semibold">หรือ</p>
          </div>
          <div className="flex mt-5">
            <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4">
              <IiMessageBox className="w-full " />
              <div className="w-full py-6 px-16 absolute flex">
                <input
                  type="text"
                  placeholder="ใส่รหัสโต๊ะ..."
                  className="w-full"
                />
                <button className=" border-2 border-black w-16 rounded-md">
                  จอย
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-[400px] mx-auto mb-8">
        <div className="text-center text-sm mx-auto">
          <p>*มือถืออาจมีข้อจำกัดทาง Browser แนะนำให้เล่นในคอม</p>
          <p>แจ้งปัญหาหรือตามหาเพื่อนที่หายไปได้ที่</p>
        </div>
      </div>
    </div>
  )
}

export default JoinChatContainer
