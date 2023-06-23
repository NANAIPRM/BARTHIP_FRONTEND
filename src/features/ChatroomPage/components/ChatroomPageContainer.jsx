import Button from '../../../components/button'
import { IiLogin, IiFace, IiShopping, IiBoy, IiBeer } from '../../../icons'
import Sponsors from './Sponsors'
import Chatbox from './Chatbox'

export default function ChatroomPage() {
  return (
    <>
      <div className="flex justify-center lg:px-0 ">
        <div className="max-w-7xl w-full mt-7">
          <div className="flex justify-center mb-3 relative">
            <IiLogin className="w-40" />
          </div>
          <div className="flex max-w-5xl flex-col lg:flex-row w-full mx-auto relative">
            <div className="left-4 top-0 flex items-center absolute">
              <p>รหัสโต๊ะ : priv-926e</p>
              <IiFace className="h-5 ml-2" />
            </div>
            <div className=" w-full flex flex-col  px-0 sm:px-10 justify-center  ">
              <div className="mt-8">
                <IiShopping className="w-24" />
              </div>

              <div className="relative ">
                <img
                  src="https://drinksonme.live/counter-page/counter.png"
                  alt="counter"
                  className="relative top-36 "
                />
                <div>
                  <div className="relative w-24 top-14 mx-auto self-end  ">
                    <IiBoy className="w-24" />
                  </div>
                  <div className="relative w-24 -top-8 right-5 mx-auto self-end  ">
                    <IiBeer className="w-[40px] " />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block mb-4 mt-2 text-center">
                <p className="text-sm">
                  👋หากไม่มีการส่งข้อความนานเกิน 5 นาที
                  อาจโดนผู้เล่นคนอื่นเตะออกได้
                </p>
              </div>
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
