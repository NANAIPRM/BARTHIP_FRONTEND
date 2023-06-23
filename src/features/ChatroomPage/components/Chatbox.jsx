import React from 'react'
import { IiChatBox, IiHelp, IiMessageBox, IiReport } from '../../../icons'

function Chatbox() {
  return (
    <div className="mx-auto relative">
      <div className="flex justify-between items-center mx-6 mt-0">
        <div className="flex justify-center my-1"></div>
        <div className="flex items-center">
          <IiReport className="h-9 mr-2" />
          <button className="mr-2">
            <IiHelp className="h-9" />
          </button>
        </div>
      </div>
      <div className="py-2 relative">
        <IiChatBox className="relative w-full " />
        <div className="absolute z-20 top-6 px-10 py-2">
          <div className="overflow-y-scroll h-[428px] ">
            <div className="my-1 px-2">
              <p className="text-sm border rounded-lg shadow-sm bg-gray-200">
                "🤟 เพื่อความปลอดภัยในการใช้งาน
                เราขอแนะนำให้งดส่งข้อมูลส่วนตัวให้กับคนแปลกหน้า
                ทางเว็บขอสงวนสิทธิ์ในการรับผิดชอบใด ๆ
                อันเกิดจากการเปิดเผยข้อมูลส่วนตัว"
              </p>
            </div>
            <div className="my-1 px-2">
              <p className="text-sm border rounded-lg shadow-sm bg-gray-200">
                "👻 หากพบตัวละครที่กลายเป็นผี จะหมายถึงยูสเซอร์ที่ไม่แอคทีฟแล้ว
                สามารถกดปุ่มไล่ผีได้เลย !"
              </p>
            </div>
          </div>
          <div className="h-4 mt-2 px-2">is texting</div>
          <div className="flex mt-5 mr-2 items-center">
            <div className="cursor-pointer flex justify-center items-center w-full py-2 px-2">
              <IiMessageBox className="w-full " />
              <div className="w-full py-6 px-16 absolute flex">
                <input className="w-full" type="text" placeholder="คุยเลย..." />
                <button className="ิ border-2 border-black w-16 rounded-md">
                  ส่ง
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

export default Chatbox
